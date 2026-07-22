"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-gray-950 to-yellow-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-600/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-amber-900/30 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium border border-amber-500/30">
                Available for Remote Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hello, I Am
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                  ADAN
                </span>
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-stone-300 mb-6"
            >
              Full-Stack Software Engineer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-stone-400 max-w-xl mb-8 leading-relaxed"
            >
              Full-Stack Software Engineer with 3+ years of professional experience building modern web applications using React.js, Next.js, TypeScript, Python, FastAPI, and modern deployment tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 hover:from-amber-500 hover:to-yellow-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
              >
                View My Projects
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
              <a
                href="mailto:adanmohammad800@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white rounded-full font-semibold border border-stone-700 hover:border-amber-500/50 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex justify-center lg:justify-start gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">3+</div>
                <div className="text-sm text-stone-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">10+</div>
                <div className="text-sm text-stone-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-300">100%</div>
                <div className="text-sm text-stone-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-full blur-2xl animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-amber-600/30 shadow-2xl shadow-amber-500/20">
                <Image
                  src="/my-picture.png"
                  alt="Muhammad Adan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
