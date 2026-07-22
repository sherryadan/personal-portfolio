"use client";

import { motion } from "framer-motion";

export default function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gray-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-amber-950/10 to-gray-950" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              About
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}Me
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8 border border-amber-500/30"
          >
            <p className="text-stone-300 leading-relaxed mb-6">
              I am a Full-Stack Software Engineer from Pakistan with professional experience building and improving modern web applications and product features. My work spans React, Next.js, TypeScript, Python, FastAPI, REST APIs, databases, payment integrations, and AI-powered applications.
            </p>
            <p className="text-stone-300 leading-relaxed">
              Alongside software engineering, I have developed strong leadership, communication, and organizational skills through university society leadership, creative direction, and remote freelance work. I am currently pursuing a Master&apos;s degree in Computer Science and actively seeking opportunities to contribute to ambitious remote teams and technology products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
