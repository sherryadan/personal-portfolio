"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "SOFTWARE ENGINEER",
    company: "Excillium",
    location: "Lahore, Pakistan",
    duration: "June 2025 - December 2025",
    description:
      "Worked as part of a software development team on MARI, a platform designed to connect brands with crafters and facilitate collaboration between both sides.",
    achievements: [
      "Independently designed and built the complete administrative portal for MARI using Retool",
      "Worked with Supabase for application data and backend functionality",
      "Developed and improved application features using modern web technologies, including TypeScript",
      "Integrated Stripe payment functionality into the application",
      "Implemented email-based updates and notification workflows",
      "Debugged, maintained, and improved existing production code",
      "Implemented new features from scratch while working within an existing application architecture",
      "Used Vercel during the application's development and deployment workflow",
    ],
    logo: "EX",
  },
  {
    title: "JUNIOR SOFTWARE ENGINEER",
    company: "IT Dukes",
    location: "Lahore, Pakistan",
    duration: "March 2025 - June 2025",
    description:
      "Independently developed a task management application with functionality designed to organize and manage user tasks.",
    achievements: [
      "Developed the company's website using modern frontend technologies",
      "Built responsive user interfaces using React.js, Next.js, Tailwind CSS, and Bootstrap",
      "Worked with REST APIs and MongoDB for application functionality and data management",
      "Implemented application features from scratch and maintained the codebase throughout development",
      "Managed development workflows using Git and GitHub",
    ],
    logo: "ID",
  },
];

export default function ExperienceSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Experience
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional journey, showcasing the roles and companies I've contributed to with my technical expertise.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-950 z-10" />
                <div
                  className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                >
                  <div className="glass rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-400 font-medium">{exp.duration}</span>
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                        {exp.logo}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-purple-300 mb-2">{exp.company}</h4>
                    <p className="text-sm text-gray-400 mb-4">{exp.location}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <svg
                            className="w-4 h-4 text-purple-400 mt-1 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
