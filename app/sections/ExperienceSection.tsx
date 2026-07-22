"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "CREATIVE DIRECTOR",
    company: "Microinformatics",
    location: "Remote",
    duration: "Nov 2025 - June 2026",
    achievements: [
      "Led creative direction and branding strategies for digital communication and promotional initiatives",
      "Developed visual communication strategies aligned with organizational goals",
      "Collaborated remotely with teams and stakeholders to execute creative projects",
      "Directed content strategy, campaigns, and digital presence",
      "Managed creative workflows from concept through delivery",
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "Excillium",
    location: "Lahore, Pakistan",
    duration: "June 2025 - Dec 2025",
    achievements: [
      "Built the complete administrative portal for MARI using Retool independently",
      "Integrated Stripe payments and email notification workflows",
      "Developed features and improved production code with TypeScript",
      "Worked with Supabase for backend functionality and data management",
      "Used Vercel for development and deployment workflows",
    ],
  },
  {
    title: "JUNIOR SOFTWARE ENGINEER",
    company: "IT Dukes",
    location: "Lahore, Pakistan",
    duration: "Mar 2025 - June 2025",
    achievements: [
      "Developed responsive interfaces with React.js, Next.js, Tailwind CSS, and Bootstrap",
      "Built REST APIs and managed data with MongoDB",
      "Implemented task management features from scratch",
      "Managed version control workflows using Git and GitHub",
    ],
  },
  {
    title: "FREELANCE CONTENT WRITER & ACADEMIC RESEARCHER",
    company: "Remote — Pakistan",
    location: "Remote",
    duration: "Dec 2021 - July 2023",
    achievements: [
      "Delivered academic writing, research papers, blog posts, and long-form digital content for remote clients",
      "Conducted online research and synthesized complex information into clear written content",
      "Edited and proofread academic documents with strong attention to detail",
      "Managed assignments, deadlines, revisions, and delivery independently",
    ],
  },
];

export default function ExperienceSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 bg-gray-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-stone-900/30 to-gray-950" />

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
              Professional
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}Experience
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-yellow-600" />

                <div className="p-4 md:p-5 pl-5 md:pl-6">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs text-amber-400 font-medium">{exp.duration}</span>
                    <span className="text-xs text-stone-600">•</span>
                    <span className="text-xs text-stone-400">{exp.location}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white">{exp.title}</h3>
                  <h4 className="text-sm text-amber-300 mb-2">{exp.company}</h4>

                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-sm text-stone-300">
                        <span className="text-amber-400 mr-2 mt-0.5 flex-shrink-0">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
