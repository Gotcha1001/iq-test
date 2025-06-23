'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { Clock } from 'lucide-react';
import { questions } from '../data/questions';

// Shuffle array function
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[i], shuffled[j]];
    }
    return shuffled;
};

export default function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [score, setScore] = useState(0);
    const [timeTaken, setTimeTaken] = useState([]);
    const [questionStartTime, setQuestionStartTime] = useState(Date.now());
    const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes
    const [testStarted, setTestStarted] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [testCompleted, setTestCompleted] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const difficulty = searchParams.get('difficulty') || 'all';

    // Initialize test
    useEffect(() => {
        let filteredQuestions = questions;
        if (difficulty !== 'all') {
            const pointsMap = { easy: 1, medium: 2, hard: 3 };
            filteredQuestions = questions.filter((q) => q.points === pointsMap[difficulty]);
        }
        const types = ['numerical', 'verbal', 'spatial', 'logical', 'abstract'];
        let selectedQuestions = [];
        types.forEach((type) => {
            const typeQuestions = filteredQuestions.filter((q) => q.type === type);
            if (typeQuestions.length > 0) {
                const shuffledTypeQuestions = shuffleArray(typeQuestions).slice(0, 4); // 4 questions per type
                selectedQuestions = [...selectedQuestions, ...shuffledTypeQuestions];
            }
        });
        // Fill remaining slots if needed
        if (selectedQuestions.length < 20) {
            const remaining = shuffleArray(filteredQuestions)
                .filter((q) => !selectedQuestions.includes(q))
                .slice(0, 20 - selectedQuestions.length);
            selectedQuestions = [...selectedQuestions, ...remaining];
        }
        setShuffledQuestions(selectedQuestions.slice(0, 20));
        setTestStarted(true);
        setQuestionStartTime(Date.now());
    }, [difficulty]);

    // Timer effect
    useEffect(() => {
        let interval;
        if (testStarted && timeRemaining > 0 && !testCompleted) {
            interval = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        handleTimeUp();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [testStarted, timeRemaining, testCompleted]);

    // Prevent navigation away and browser back/forward
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (!testCompleted) {
                e.preventDefault();
                e.returnValue = 'Leaving will end your test. Are you sure?';
            }
        };
        const handlePopState = (e) => {
            if (!testCompleted) {
                e.preventDefault();
                window.history.pushState(null, '', window.location.href);
                alert('Navigation is disabled during the test to ensure fairness.');
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('popstate', handlePopState);
        };
    }, [testCompleted]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleTimeUp = () => {
        setTestCompleted(true);
        router.push(`/results?score=${score}&time=${timeTaken.join(',')}&answeredQuestions=${encodeURIComponent(JSON.stringify(answeredQuestions))}`);
    };

    const handleAnswer = () => {
        const isLastQuestion = currentQuestionIndex + 1 === shuffledQuestions.length;
        const confirmSubmit = isLastQuestion
            ? window.confirm('This is the last question. Are you sure you want to submit your assessment?')
            : true;

        if (!confirmSubmit) return;

        const timeForQuestion = (Date.now() - questionStartTime) / 1000;
        let newScore = score;
        const currentQuestion = shuffledQuestions[currentQuestionIndex];

        // Update answered questions (even if no answer selected)
        const newAnsweredQuestions = [
            ...answeredQuestions,
            {
                id: currentQuestion.id,
                type: currentQuestion.type,
                correct: currentQuestion.correct,
                options: currentQuestion.options,
                selectedOptionIndex: selectedOptionIndex != null ? selectedOptionIndex : -1,
                points: currentQuestion.points || 1,
            },
        ];
        setAnsweredQuestions(newAnsweredQuestions);

        // Update score only if an answer was selected and correct
        if (selectedAnswer && selectedAnswer === currentQuestion.correct) {
            newScore += currentQuestion.points || 1;
            setScore(newScore);
        }

        // Update time taken
        const newTimeTaken = [...timeTaken, timeForQuestion];
        setTimeTaken(newTimeTaken);

        // Check if this is the last question
        if (isLastQuestion) {
            setTestCompleted(true);
            router.push(
                `/results?score=${newScore}&time=${newTimeTaken.join(',')}&answeredQuestions=${encodeURIComponent(JSON.stringify(newAnsweredQuestions))}`
            );
        } else {
            // Move to next question
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setSelectedOptionIndex(null);
            setQuestionStartTime(Date.now());
        }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e, option, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedAnswer(option);
            setSelectedOptionIndex(index);
        }
    };

    if (shuffledQuestions.length === 0) {
        return <div className="min-h-screen bg-indigo-950 flex items-center justify-center text-white">Loading...</div>;
    }

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 p-6"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 text-white">
                    <div className="flex items-center space-x-4">
                        <span className="text-xl font-semibold">IQ Assessment</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-orange-400" />
                            <span className={`font-mono text-lg ${timeRemaining < 300 ? 'text-red-400' : 'text-white'}`}>
                                {formatTime(timeRemaining)}
                            </span>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-400">Question</div>
                            <div className="font-semibold">{currentQuestionIndex + 1} of {shuffledQuestions.length}</div>
                        </div>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                {/* Question Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-purple-600/50 rounded-full text-sm text-purple-200 capitalize">
                                {currentQuestion.type} Reasoning
                            </span>
                            <span className="text-sm text-gray-400">
                                Difficulty: {'★'.repeat(currentQuestion.points)}{'☆'.repeat(3 - currentQuestion.points)}
                            </span>
                        </div>
                        <h2 className="text-2xl text-white font-medium leading-relaxed">{currentQuestion.text}</h2>
                    </div>
                    {/* Answer Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedAnswer(option);
                                    setSelectedOptionIndex(index);
                                }}
                                onKeyDown={(e) => handleKeyDown(e, option, index)}
                                className={`p-4 rounded-xl text-left transition-all duration-200 border-2 ${selectedAnswer === option
                                        ? 'bg-cyan-600/30 border-cyan-400 text-white shadow-lg'
                                        : 'bg-white/5 border-transparent text-gray-300 hover:bg-white/10 hover:border-white/20'
                                    } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                                tabIndex={0}
                                aria-label={`Option ${String.fromCharCode(65 + index)}: ${option}`}
                            >
                                <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                            </button>
                        ))}
                    </div>
                    {/* Next Button */}
                    <div className="flex justify-end">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleAnswer}
                            disabled={!selectedAnswer}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 ${selectedAnswer
                                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg'
                                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                            tabIndex={0}
                            aria-label={currentQuestionIndex + 1 === shuffledQuestions.length ? 'Complete Assessment' : 'Next Question'}
                        >
                            {currentQuestionIndex + 1 === shuffledQuestions.length ? 'Complete Assessment' : 'Next Question'}
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}