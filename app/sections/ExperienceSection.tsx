"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "CREATIVE DIRECTOR",
    company: "Microinformatics",
    location: "Remote",
    duration: "Nov 2025 - June 2026",
    achievements: [
      "Led creative direction and digital communication strategy for organizational initiatives",
      "Developed visual and content strategies aligned with project and audience objectives",
      "Coordinated remotely with teams and stakeholders to execute creative deliverables",
      "Managed creative workflows from concept development through final delivery",
      "Contributed to strategic communication, branding, and audience engagement initiatives",
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "Excillium",
    location: "Lahore, Pakistan",
    duration: "June 2025 - Dec 2025",
    achievements: [
      "Worked as part of a software development team on MARI, a platform designed to connect brands with crafters",
      "Independently built the platform's administrative portal using Retool",
      "Worked with Supabase for application data and backend functionality",
      "Worked with TypeScript in the application development process",
      "Integrated Stripe payment functionality",
      "Implemented email-based updates and notification workflows",
      "Debugged, maintained, and improved existing application code",
      "Implemented new features from scratch within an existing application architecture",
      "Worked with Vercel during development and deployment workflows",
    ],
  },
  {
    title: "JUNIOR SOFTWARE ENGINEER",
    company: "IT Dukes",
    location: "Lahore, Pakistan",
    duration: "Mar 2025 - June 2025",
    achievements: [
      "Independently developed a task management application",
      "Developed the company's website using modern frontend technologies",
      "Built responsive user interfaces using React.js, Next.js, Tailwind CSS, and Bootstrap",
      "Worked with REST APIs and MongoDB",
      "Implemented application features from scratch and maintained the codebase throughout development",
      "Used Git and GitHub for development workflow and version control",
    ],
  },
  {
    title: "FREELANCE CONTENT WRITER & ACADEMIC RESEARCHER",
    company: "Remote — Pakistan",
    location: "Remote",
    duration: "Nov 2021 - June 2023",
    achievements: [
      "Delivered remote freelance writing services focused on academic content, research-based writing, blog posts, and long-form digital content",
      "Conducted online research and synthesized complex information into clear, structured, and audience-appropriate written content",
      "Prepared and edited academic documents, research-based materials, articles, and blog content according to client requirements",
      "Worked independently with remote clients, managing assignments, deadlines, revisions, and final delivery",
      "Adapted writing style, structure, tone, and content depth to meet different project requirements and target audiences",
      "Maintained attention to detail in proofreading, editing, formatting, grammar, and content quality",
      "Communicated with clients remotely to clarify requirements, incorporate feedback, and deliver completed work",
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
