// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function LandingPage() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col items-center justify-center text-white p-6"
//     >
//       <h1 className="text-6xl font-bold mb-6 text-center">
//         Professional IQ Tester
//       </h1>
//       <p className="text-xl mb-10 text-center max-w-lg">
//         Evaluate your cognitive abilities with our comprehensive, scientifically
//         designed IQ assessment.
//       </p>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         className="bg-indigo-600 text-white font-semibold py-4 px-8 rounded-full shadow-xl hover:bg-indigo-700 transition"
//       >
//         <Link href="/quiz">Begin Assessment</Link>
//       </motion.button>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Force client-side rendering
export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Brain icon/image */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <div className="relative">
              <motion.div
                className="w-32 h-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.54 0 3-.35 4.29-.99.36-.18.64-.46.82-.82C18.35 19 19 17.54 19 16c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .74.2 1.43.55 2.02-.15.32-.35.6-.6.82C9.65 17.65 8.54 17 8 16c-.54-1-.46-2.16.08-3.08.32-.55.78-1.01 1.34-1.34C10.34 10.66 11.13 10 12 10c2.21 0 4-1.79 4-4s-1.79-4-4-4z" />
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="15" cy="16" r="2" />
                </svg>
              </motion.div>
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              IQ Tester
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-blue-100/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Assess your cognitive abilities with a 20-question IQ test covering
            <span className="text-white font-medium">
              {" "}
              numerical, verbal, spatial, logical, and abstract reasoning
            </span>
            . Receive a standardized IQ score (mean 100, SD 15), percentile
            rank, and detailed performance breakdown by cognitive domain.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/quiz">
              <motion.button
                className="group relative px-12 py-6 text-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 rounded-full border border-white/20 backdrop-blur-sm shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  Begin Assessment
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </span>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
