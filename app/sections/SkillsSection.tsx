"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const skillCategories = [
  {
    name: "Frontend",
    color: "from-amber-500 to-yellow-400",
    textColor: "text-amber-300",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-900/20",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Backend",
    color: "from-yellow-600 to-amber-500",
    textColor: "text-yellow-300",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-900/20",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    name: "Databases & Backend Platforms",
    color: "from-yellow-500 to-amber-400",
    textColor: "text-yellow-300",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-900/20",
    skills: [
      "MongoDB",
      "Supabase",
    ],
  },
  {
    name: "Payments & Integrations",
    color: "from-amber-600 to-orange-500",
    textColor: "text-amber-300",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-900/20",
    skills: [
      "Stripe",
      "Email Notification Workflows",
    ],
  },
  {
    name: "Tools & Platforms",
    color: "from-orange-500 to-amber-400",
    textColor: "text-orange-300",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-900/20",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Retool",
      "Visual Studio Code",
      "Cursor",
      "Claude",
    ],
  },
];

export default function SkillsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gray-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-amber-950/10 to-gray-950" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}Skills
              </span>
            </h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">
              Technologies and tools I use to build modern web applications and products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className={cn(
                  "p-6 rounded-2xl glass border transition-all duration-300 hover:scale-105",
                  category.borderColor,
                  category.bgColor
                )}
              >
                <h3
                  className={cn(
                    "text-lg font-bold mb-4",
                    category.textColor
                  )}
                >
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-full border",
                        category.textColor,
                        category.borderColor,
                        category.bgColor
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
