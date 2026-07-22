"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const skillCategories = [
  {
    name: "Frontend Development",
    color: "from-blue-500 to-cyan-400",
    textColor: "text-blue-300",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-900/20",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 84 },
      { name: "JavaScript", level: 89 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 67 },
    ],
  },
  {
    name: "Backend Development",
    color: "from-green-500 to-emerald-400",
    textColor: "text-green-300",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-900/20",
    skills: [
      { name: "Python", level: 84 },
      { name: "FastAPI", level: 78 },
      { name: "REST APIs", level: 88 },
      { name: "API Integration", level: 82 },
    ],
  },
  {
    name: "Databases",
    color: "from-purple-500 to-violet-400",
    textColor: "text-purple-300",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-900/20",
    skills: [
      { name: "MongoDB", level: 78 },
      { name: "Supabase", level: 82 },
    ],
  },
  {
    name: "Tools & Platforms",
    color: "from-orange-500 to-amber-400",
    textColor: "text-orange-300",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-900/20",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 92 },
      { name: "Vercel", level: 77 },
      { name: "Retool", level: 67 },
      { name: "VS Code", level: 85 },
      { name: "Cursor", level: 62 },
      { name: "Claude", level: 57 },
    ],
  },
  {
    name: "Payments & Integrations",
    color: "from-red-500 to-rose-400",
    textColor: "text-red-300",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-900/20",
    skills: [
      { name: "Stripe", level: 82 },
      { name: "Email Workflows", level: 77 },
    ],
  },
  {
    name: "Development Practices",
    color: "from-teal-500 to-cyan-400",
    textColor: "text-teal-300",
    borderColor: "border-teal-500/30",
    bgColor: "bg-teal-900/20",
    skills: [
      { name: "Feature Development", level: 87 },
      { name: "Debugging & Maintenance", level: 85 },
      { name: "Full-Stack Development", level: 89 },
      { name: "Agile/Scrum Collaboration", level: 82 },
    ],
  },
];

export default function SkillsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950" />

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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Skills
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive expertise across the entire development stack, from frontend interfaces to backend systems and deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className={cn(
                  "p-8 rounded-2xl glass border transition-all duration-300 hover:scale-105",
                  category.borderColor,
                  category.bgColor
                )}
              >
                <h3
                  className={cn(
                    "text-2xl font-bold mb-6",
                    category.textColor
                  )}
                >
                  {category.name}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className={cn("text-sm font-bold", category.textColor)}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + skillIndex * 0.1 }}
                          className={cn(
                            "h-full rounded-full transition-all duration-1000",
                            `bg-gradient-to-r ${category.color}`
                          )}
                        />
                      </div>
                    </div>
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
