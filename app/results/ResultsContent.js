"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Download, BarChart3 } from "lucide-react";
import jsPDF from "jspdf";
import { questions } from "../data/questions";
import { useMemo } from "react";

// Force client-side rendering
export const dynamic = "force-dynamic";

const NORMATIVE_DATA = {
  meanScore: 40,
  sdScore: 10,
  meanTime: 30 * 60,
  sdTime: 5 * 60,
};

const PERCENTILE_TABLE = {
  "-2.0": 2.3,
  "-1.5": 6.7,
  "-1.0": 15.9,
  "-0.5": 30.9,
  "0.0": 50,
  0.5: 69.1,
  "1.0": 84.1,
  1.5: 93.3,
  "2.0": 97.7,
  2.5: 99.4,
};

const calculateIQ = (score, timeTaken, totalQuestions) => {
  const maxScore = 80;
  const rawScore = score;
  const zScore = (rawScore - NORMATIVE_DATA.meanScore) / NORMATIVE_DATA.sdScore;
  const totalTime = timeTaken.reduce((sum, t) => sum + t, 0);
  const timePenalty = Math.min(
    0.1,
    Math.max(0, (totalTime - 35 * 60) / (60 * 0.5 * 100))
  );
  const adjustedScore = rawScore * (1 - timePenalty);
  const iq = Math.round(
    100 +
      ((adjustedScore - NORMATIVE_DATA.meanScore) / NORMATIVE_DATA.sdScore) * 15
  );
  const zKey = Math.round(zScore * 2) / 2;
  const percentile = PERCENTILE_TABLE[zKey.toFixed(1)] || 50;
  return { iq, percentile };
};

const getPerformanceCategory = (iq) => {
  if (iq >= 130)
    return {
      label: "Superior",
      color: "text-purple-500",
      description: "Top 2% of population",
    };
  if (iq >= 120)
    return {
      label: "Very High",
      color: "text-blue-500",
      description: "Top 9% of population",
    };
  if (iq >= 110)
    return {
      label: "High Average",
      color: "text-green-400",
      description: "Top 25% of population",
    };
  if (iq >= 90)
    return {
      label: "Average",
      color: "text-yellow-400",
      description: "50% of population",
    };
  if (iq >= 80)
    return {
      label: "Low Average",
      color: "text-orange-400",
      description: "Bottom 25%",
    };
  return {
    label: "Below Average",
    color: "text-red-500",
    description: "Bottom 10%",
  };
};

const calculateTypeScores = (score, timeTaken, answeredQuestions) => {
  const types = ["numerical", "verbal", "spatial", "logical", "abstract"];
  const typeScores = {};
  types.forEach((type) => {
    const typeQuestions = answeredQuestions.filter((q) => q.type === type);
    if (typeQuestions.length === 0) {
      typeScores[type] = {
        correct: 0,
        total: 0,
        percentage: 0,
        percentile: 50,
      };
      return;
    }
    const typeMaxScore = typeQuestions.reduce(
      (sum, q) => sum + (q.points || 1),
      0
    );
    const typeScore = answeredQuestions.reduce((sum, q, i) => {
      if (q.type !== type) return sum;
      if (
        i >= timeTaken.length ||
        q.selectedOptionIndex == null ||
        q.selectedOptionIndex < 0
      ) {
        return sum;
      }
      const question = questions.find((ques) => ques.id === q.id);
      if (!question || !question.options) return sum;
      return question.correct === question.options[q.selectedOptionIndex]
        ? sum + (q.points || 1)
        : sum;
    }, 0);
    const percentage =
      typeMaxScore > 0 ? Math.round((typeScore / typeMaxScore) * 100) : 0;
    const zScore =
      typeMaxScore > 0
        ? (typeScore - (typeMaxScore * NORMATIVE_DATA.meanScore) / 80) /
          ((typeMaxScore * NORMATIVE_DATA.sdScore) / 20)
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

const renderOptionForPDF = (option) => {
  if (typeof option === "object" && option?.svg) {
    if (option.svg.includes("circle")) return "Circle (Black)";
    if (option.svg.includes("rect")) return "Rectangle (Blue)";
    return "Unknown Shape";
  }
  return option;
};

const generatePDFReport = (
  iq,
  performance,
  totalQuestions,
  correctAnswers,
  totalTime,
  typeScores,
  answeredQuestions
) => {
  try {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Professional IQ Assessment Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Test Date: ${new Date().toLocaleDateString()}`, 20, 30);
    doc.text(`Test Duration: ${Math.round(totalTime / 60)} minutes`, 20, 40);
    doc.setFontSize(14);
    doc.text("Overall Performance", 20, 50);
    doc.setFontSize(12);
    doc.text(`IQ Score: ${iq.iq}`, 20, 60);
    doc.text(`Percentile: ${iq.percentile}%`, 20, 70);
    doc.text(`Performance Level: ${performance.label}`, 20, 80);
    doc.text(`Population Ranking: ${performance.description}`, 20, 90);
    doc.setFontSize(14);
    doc.text("Detailed Breakdown", 20, 100);
    doc.setFontSize(12);
    doc.text(`Questions Answered: ${totalQuestions}`, 20, 110);
    doc.text(`Correct Answers: ${correctAnswers}`, 20, 120);
    doc.text(
      `Accuracy Rate: ${Math.round((correctAnswers / totalQuestions) * 100)}%`,
      20,
      130
    );
    doc.setFontSize(14);
    doc.text("Cognitive Domain Scores", 20, 140);
    let y = 150;
    Object.entries(typeScores).forEach(([type, score]) => {
      doc.text(
        `${type.charAt(0).toUpperCase() + type.slice(1)}: ${score.correct}/${
          score.total
        } (${score.percentage}%, ${score.percentile}%ile)`,
        20,
        y
      );
      y += 10;
    });
    doc.setFontSize(12);
    y += 10;
    doc.text("Incorrect Answers:", 20, y);
    y += 10;
    answeredQuestions.forEach((q, i) => {
      const question = questions.find((ques) => ques.id === q.id);
      if (
        q.selectedOptionIndex >= 0 &&
        question &&
        question.correct !== question.options?.[q.selectedOptionIndex]
      ) {
        const questionText = question.text || "Question not found";
        const wrappedText = doc.splitTextToSize(
          `Q${i + 1}: ${questionText}`,
          160
        );
        doc.text(wrappedText, 20, y);
        y += wrappedText.length * 7;
        const selectedAnswer =
          question.options?.[q.selectedOptionIndex] || "None";
        doc.text(`Your Answer: ${renderOptionForPDF(selectedAnswer)}`, 20, y);
        y += 10;
        doc.text(
          `Correct Answer: ${renderOptionForPDF(question.correct)}`,
          20,
          y
        );
        y += 10;
      }
    });
    doc.text(
      "Note: Results should be interpreted by qualified professionals.",
      20,
      y + 10
    );
    doc.save(
      `IQ_Assessment_Report_${new Date().toISOString().split("T")[0]}.pdf`
    );
  } catch (e) {
    console.error("Error generating PDF:", e);
    alert("Failed to generate PDF report. Please try again.");
  }
};

export default function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const score = parseInt(searchParams?.get("score") || "0") || 0;
  const timeTaken = (searchParams?.get("time") || "")
    .split(",")
    .map(Number)
    .filter((t) => !isNaN(t));
  let answeredQuestions = [];
  try {
    const questionsParam = searchParams?.get("answeredQuestions");
    if (questionsParam) {
      answeredQuestions = JSON.parse(decodeURIComponent(questionsParam));
    }
  } catch (e) {
    console.error("Error parsing answeredQuestions:", e);
  }

  const totalQuestions = 20;
  const validTimeTaken =
    timeTaken.length > 0
      ? timeTaken.slice(0, totalQuestions)
      : Array(totalQuestions).fill(0);
  const validAnsweredQuestions = answeredQuestions.slice(0, totalQuestions);

  // Calculate typeScores before any early returns
  const typeScores = useMemo(
    () => calculateTypeScores(score, validTimeTaken, validAnsweredQuestions),
    [score, validTimeTaken, validAnsweredQuestions]
  );

  // Validate data after hooks
  if (isNaN(score) || !answeredQuestions.length) {
    console.warn("Invalid results data:", {
      score,
      timeTakenLength: timeTaken.length,
      answeredQuestionsLength: answeredQuestions.length,
    });
    return (
      <div className="min-h-screen bg-indigo-950 flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-red-400">
            Incomplete results data. Please retake the assessment.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block bg-indigo-600 px-4 py-2 rounded"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const { iq, percentile } = calculateIQ(score, validTimeTaken, totalQuestions);
  const performance = getPerformanceCategory(iq);
  const correctAnswers = validAnsweredQuestions.filter((q, i) => {
    const question = questions.find((ques) => ques.id === q.id);
    return (
      q.selectedOptionIndex >= 0 &&
      question?.options?.[q.selectedOptionIndex] === question?.correct
    );
  }).length;
  const totalTime = validTimeTaken.reduce((sum, t) => sum + t, 0);

  const handleRetakeAssessment = () => {
    console.log("Retake Assessment clicked, navigating to: /");
    router.push("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4 sm:p-6"
      role="main"
    >
      <div className="max-w-4xl mx-auto text-white">
        <div className="text-center mb-6">
          <Brain
            className="mx-auto mb-4 h-16 w-16 text-cyan-400"
            aria-hidden="true"
          />
          <h1 className="text-3xl font-bold mb-2">Assessment Complete</h1>
          <p className="text-gray-200">
            Your cognitive ability evaluation results
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Note: Results should be interpreted by qualified professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">
              IQ Score
            </h2>
            <div className={`text-5xl font-bold mb-2 ${performance.color}`}>
              {iq}
            </div>
            <div className="text-lg text-purple-200 mb-2">
              {performance.label}
            </div>
            <div className="text-sm text-gray-200">
              {performance.description} ({percentile}%ile)
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">
              Performance Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Questions Answered:</span>
                <span className="font-semibold">{totalQuestions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Correct Answers:</span>
                <span className="font-semibold text-green-400">
                  {correctAnswers}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Accuracy Rate:</span>
                <span className="font-semibold">
                  {Math.round((correctAnswers / totalQuestions) * 100)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Total Time Taken:</span>
                <span className="font-semibold">
                  {Math.round(totalTime / 60)} minutes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">
            Cognitive Domain Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(typeScores).map(([type, score]) => (
              <div key={type} className="bg-white/5 rounded-lg p-3">
                <h3 className="text-lg font-medium mb-1 capitalize text-purple-200">
                  {type}
                </h3>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Score:</span>
                  <span className="font-medium">
                    {score.total > 0
                      ? `${score.correct}/${score.total}`
                      : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Percentile:</span>
                  <span className="font-semibold">{score.percentile}%</span>
                </div>
                <div
                  className="bg-gray-700 rounded-full h-2"
                  role="progressbar"
                  aria-valuenow={score.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`Cognitive domain ${type} score ${score.percentage}%`}
                >
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                    style={{ width: `${score.percentage}%` }}
                  />
                </div>
                <div className="text-sm text-gray-200 mt-1">
                  {score.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              generatePDFReport(
                { iq, percentile },
                performance,
                totalQuestions,
                correctAnswers,
                totalTime,
                typeScores,
                validAnsweredQuestions
              )
            }
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-colors"
            role="button"
            aria-label="Download Report"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            <span>Download Report</span>
          </motion.button>
          <Link href="/" onClick={handleRetakeAssessment}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-colors"
              role="button"
              aria-label="Retake Assessment"
            >
              <BarChart3 className="h-5 w-5" aria-hidden="true" />
              <span>Retake Assessment</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
