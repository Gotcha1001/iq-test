'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Brain, Download, BarChart3 } from 'lucide-react';
import jsPDF from 'jspdf';
import { questions } from '../data/questions';

// Simulated normative data (mean and SD for raw scores and time)
const NORMATIVE_DATA = {
    meanScore: 20,
    sdScore: 5,
    meanTime: 30 * 60, // 30 minutes in seconds
    sdTime: 5 * 60, // 5 minutes in seconds
};

// Percentile lookup table (simplified, based on normal distribution)
const PERCENTILE_TABLE = {
    '-2.0': 2.3, '-1.5': 6.7, '-1.0': 15.9, '-0.5': 30.9, '0.0': 50,
    '0.5': 69.1, '1.0': 84.1, '1.5': 93.3, '2.0': 97.7, '2.5': 99.4,
};

// IQ Calculation
const calculateIQ = (score, timeTaken, totalQuestions) => {
    const maxScore = questions.reduce((sum, q) => sum + q.points, 0);
    const rawScore = score;
    // Calculate z-score for raw score
    const zScore = (rawScore - NORMATIVE_DATA.meanScore) / NORMATIVE_DATA.sdScore;
    // Calculate time penalty (0.5% per minute over 35 minutes, capped at 10%)
    const totalTime = timeTaken.reduce((sum, t) => sum + t, 0);
    const timePenalty = Math.min(0.1, Math.max(0, (totalTime - 35 * 60) / (60 * 0.5 * 100)));
    const adjustedScore = rawScore * (1 - timePenalty);
    // Convert adjusted score to IQ (mean = 100, SD = 15)
    const iq = Math.round(100 + (adjustedScore - NORMATIVE_DATA.meanScore) / NORMATIVE_DATA.sdScore * 15);
    // Calculate percentile
    const zKey = Math.round(zScore * 2) / 2; // Round to nearest 0.5
    const percentile = PERCENTILE_TABLE[zKey.toFixed(1)] || 50;
    return { iq, percentile };
};

// Performance categories
const getPerformanceCategory = (iq) => {
    if (iq >= 130) return { label: 'Superior', color: 'text-purple-400', description: 'Top 2% of population' };
    if (iq >= 120) return { label: 'Very High', color: 'text-blue-400', description: 'Top 9% of population' };
    if (iq >= 110) return { label: 'High Average', color: 'text-green-400', description: 'Top 25% of population' };
    if (iq >= 90) return { label: 'Average', color: 'text-yellow-400', description: '50% of population' };
    if (iq >= 80) return { label: 'Low Average', color: 'text-orange-400', description: 'Bottom 25%' };
    return { label: 'Below Average', color: 'text-red-400', description: 'Bottom 10%' };
};

// Calculate sub-scores by question type
const calculateTypeScores = (score, timeTaken, answeredQuestions) => {
    const types = ['numerical', 'verbal', 'spatial', 'logical', 'abstract'];
    const typeScores = {};

    types.forEach((type) => {
        const typeQuestions = answeredQuestions.filter((q) => q.type === type);
        if (typeQuestions.length === 0) {
            // Handle case where no questions of this type exist
            typeScores[type] = {
                correct: 0,
                total: 0,
                percentage: 0,
                percentile: 50, // Default percentile if no data
            };
            return;
        }

        const typeMaxScore = typeQuestions.reduce((sum, q) => sum + (q.points || 1), 0);
        const typeScore = answeredQuestions.reduce((sum, q, i) => {
            if (q.type !== type) return sum;
            if (
                i >= timeTaken.length ||
                q.selectedOptionIndex == null ||
                q.selectedOptionIndex < 0 ||
                !q.options ||
                !q.correct
            ) {
                return sum; // Skip invalid entries
            }
            return q.correct === q.options[q.selectedOptionIndex]
                ? sum + (q.points || 1)
                : sum;
        }, 0);

        const percentage = typeMaxScore > 0 ? Math.round((typeScore / typeMaxScore) * 100) : 0;
        const zScore = typeMaxScore > 0
            ? (typeScore - (typeMaxScore * NORMATIVE_DATA.meanScore / 40)) / (typeMaxScore * NORMATIVE_DATA.sdScore / 40)
            : 0;
        const zKey = Math.round(zScore * 2) / 2;
        const percentile = PERCENTILE_TABLE[zKey.toFixed(1)] || 50;

        typeScores[type] = {
            correct: typeScore,
            total: typeMaxScore,
            percentage,
            percentile,
        };
    });

    return typeScores;
};

// Generate PDF report
const generatePDFReport = (iq, performance, totalQuestions, correctAnswers, totalTime, typeScores) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Professional IQ Assessment Report', 20, 20);
    doc.setFontSize(12);
    doc.text(`Test Date: ${new Date().toLocaleDateString()}`, 20, 30);
    doc.text(`Test Duration: ${Math.round(totalTime / 60)} minutes`, 20, 40);
    doc.setFontSize(14);
    doc.text('Overall Performance', 20, 50);
    doc.setFontSize(12);
    doc.text(`IQ Score: ${iq.iq}`, 20, 60);
    doc.text(`Percentile: ${iq.percentile}%`, 20, 70);
    doc.text(`Performance Level: ${performance.label}`, 20, 80);
    doc.text(`Population Ranking: ${performance.description}`, 20, 90);
    doc.setFontSize(14);
    doc.text('Detailed Breakdown', 20, 100);
    doc.setFontSize(12);
    doc.text(`Questions Answered: ${totalQuestions}`, 20, 110);
    doc.text(`Correct Answers: ${correctAnswers}`, 20, 120);
    doc.text(`Accuracy Rate: ${Math.round((correctAnswers / totalQuestions) * 100)}%`, 20, 130);
    doc.setFontSize(14);
    doc.text('Cognitive Domain Scores', 20, 140);
    let y = 150;
    Object.entries(typeScores).forEach(([type, score]) => {
        doc.text(
            `${type.charAt(0).toUpperCase() + type.slice(1)}: ${score.correct}/${score.total} (${score.percentage}%, ${score.percentile}%ile)`,
            20,
            y
        );
        y += 10;
    });
    doc.text('Note: Results should be interpreted by qualified professionals.', 20, y + 10);
    doc.save(`IQ_Assessment_Report_${new Date().toISOString().split('T')[0]}.pdf`);
};

export default function ResultsPage() {
    const searchParams = useSearchParams();
    const score = parseInt(searchParams.get('score')) || 0;
    const timeTaken = (searchParams.get('time') || '').split(',').map(Number);
    const answeredQuestions = JSON.parse(searchParams.get('answeredQuestions') || '[]');
    const totalQuestions = 20; // Fixed to match QuizPage.jsx
    const { iq, percentile } = calculateIQ(score, timeTaken, totalQuestions);
    const performance = getPerformanceCategory(iq);
    const typeScores = calculateTypeScores(score, timeTaken, answeredQuestions);
    const correctAnswers = answeredQuestions.filter((q, i) =>
        q.selectedOptionIndex >= 0 && q.correct === q.options[q.selectedOptionIndex]
    ).length;
    const totalTime = timeTaken.reduce((sum, t) => sum + t, 0);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-6"
        >
            <div className="max-w-4xl mx-auto text-white">
                <div className="text-center mb-8">
                    <Brain className="mx-auto mb-4 h-16 w-16 text-cyan-400" />
                    <h1 className="text-4xl font-bold mb-2">Assessment Complete</h1>
                    <p className="text-gray-300">Your cognitive ability evaluation results</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* IQ Score Card */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">IQ Score</h2>
                        <div className={`text-6xl font-bold mb-2 ${performance.color}`}>{iq}</div>
                        <div className="text-lg text-purple-300 mb-2">{performance.label}</div>
                        <div className="text-sm text-gray-400">{performance.description} ({percentile}%ile)</div>
                    </div>
                    {/* Performance Summary */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Performance Summary</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span>Questions Answered:</span>
                                <span className="font-semibold">{totalQuestions}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Correct Answers:</span>
                                <span className="font-semibold text-green-400">{correctAnswers}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Accuracy Rate:</span>
                                <span className="font-semibold">{Math.round((correctAnswers / totalQuestions) * 100)}%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Time Taken:</span>
                                <span className="font-semibold">{Math.round(totalTime / 60)} minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Domain Breakdown */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Cognitive Domain Analysis</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(typeScores).map(([type, score]) => (
                            <div key={type} className="bg-white/5 rounded-lg p-4">
                                <h3 className="text-lg font-medium mb-2 capitalize text-purple-300">{type}</h3>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-400">Score:</span>
                                    <span className="font-semibold">
                                        {score.total > 0 ? `${score.correct}/${score.total}` : 'N/A'}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-400">Percentile:</span>
                                    <span className="font-semibold">{score.percentile}%</span>
                                </div>
                                <div className="bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                                        style={{ width: `${score.percentage}%` }}
                                    />
                                </div>
                                <div className="text-sm text-gray-400 mt-1">{score.percentage}%</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => generatePDFReport({ iq, percentile }, performance, totalQuestions, correctAnswers, totalTime, typeScores)}
                        className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                    >
                        <Download className="h-5 w-5" />
                        <span>Download Report</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                    >
                        <Link href="/" className="flex items-center space-x-2">
                            <BarChart3 className="h-5 w-5" />
                            <span>Retake Assessment</span>
                        </Link>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}