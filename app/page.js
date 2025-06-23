"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col items-center justify-center text-white p-6"
    >
      <h1 className="text-6xl font-bold mb-6 text-center">
        Professional IQ Tester
      </h1>
      <p className="text-xl mb-10 text-center max-w-lg">
        Evaluate your cognitive abilities with our comprehensive, scientifically
        designed IQ assessment.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-indigo-600 text-white font-semibold py-4 px-8 rounded-full shadow-xl hover:bg-indigo-700 transition"
      >
        <Link href="/quiz">Begin Assessment</Link>
      </motion.button>
    </motion.div>
  );
}
