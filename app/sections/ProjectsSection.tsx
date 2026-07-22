"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "MARI — Brand-Crafter Collaboration Platform",
    role: "Software Engineer | Team Project",
    description:
      "A platform designed to connect brands with crafters and facilitate collaboration between both sides.",
    contributions: [
      "Independently built the complete administrative portal using Retool",
      "Integrated Stripe payment functionality",
      "Worked with Supabase for data and backend functionality",
      "Implemented email-based updates and notifications",
      "Contributed to new feature development within a collaborative software team",
    ],
    technologies: ["TypeScript", "Supabase", "Retool", "Stripe", "Vercel"],
    gradient: "from-amber-600 to-yellow-700",
  },
  {
    title: "Task Manager Application",
    role: "Independent Developer",
    description:
      "Built a full-stack task management application designed to help users organize, manage, and track tasks through a web-based interface.",
    contributions: [],
    technologies: ["React.js", "Next.js", "REST APIs", "MongoDB", "JavaScript/TypeScript"],
    gradient: "from-yellow-600 to-amber-500",
  },
  {
    title: "AI-Powered Desktop Assistant",
    role: "Developer",
    description:
      "An AI-powered desktop assistant developed as a software project exploring intelligent interaction and automation capabilities.",
    contributions: [],
    technologies: ["Python", "AI/ML"],
    gradient: "from-orange-600 to-amber-600",
  },
  {
    title: "IT Dukes Company Website",
    role: "Independent Developer",
    description:
      "Independently developed the official company website for IT Dukes using modern frontend technologies and responsive web development practices.",
    contributions: [],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    gradient: "from-stone-600 to-zinc-600",
  },
];

export default function ProjectsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gray-950 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-amber-950/10 to-gray-950" />
      <div className="absolute top-40 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-yellow-600/20 rounded-full blur-3xl animate-pulse-slow" />

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
              Featured
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                {" "}Projects
              </span>
            </h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">
              A showcase of my best work, from collaborative platforms to independent applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative glass rounded-2xl p-8 border border-stone-800 hover:border-amber-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-stone-400">{project.role}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-stone-400 mb-4">{project.description}</p>

                {project.contributions.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-amber-300 mb-2">Key Contributions:</h4>
                    <ul className="space-y-1">
                      {project.contributions.slice(0, 3).map((contribution, contributionIndex) => (
                        <li key={contributionIndex} className="flex items-start text-sm text-stone-300">
                          <svg className="w-3 h-3 text-amber-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-amber-300 bg-amber-900/30 rounded-full border border-amber-500/30"
                    >
                      {tech}
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
