"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Agriculture, Faisalabad, Pakistan",
    status: "Currently Enrolled",
    icon: "MSc",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of Agriculture, Faisalabad, Pakistan",
    duration: "2020 - 2024",
    cgpa: "3.59 / 4.00",
    icon: "BSc",
  },
];

const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "Coursera",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Coursera",
  },
];

const leadership = [
  {
    role: "President - The Computing Society",
    institution: "University of Agriculture, Faisalabad",
    description:
      "Led student-focused technical initiatives and activities, coordinated teams, and collaborated with university departments and external organizations.",
    duration: "2 Years",
  },
];

const awards = [
  {
    title: "Prime Minister's Laptop Scheme",
    year: "2023",
    description: "Recipient of the prestigious national merit scholarship program",
  },
];

export default function EducationSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

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
              Education &
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Achievements
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Academic background, certifications, leadership experience, and awards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.degree} className="glass rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                        {edu.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                        <p className="text-sm text-purple-300">{edu.institution}</p>
                      </div>
                    </div>
                    {edu.status && (
                      <span className="inline-block px-3 py-1 text-xs font-medium text-green-300 bg-green-900/30 rounded-full border border-green-500/30">
                        {edu.status}
                      </span>
                    )}
                    {edu.duration && (
                      <span className="inline-block px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full ml-2">
                        {edu.duration}
                      </span>
                    )}
                    {edu.cgpa && (
                      <div className="mt-3">
                        <span className="text-sm text-gray-400">CGPA: </span>
                        <span className="text-sm font-semibold text-purple-300">{edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certifications & Awards
              </h3>
              <div className="glass rounded-2xl p-6 border border-purple-500/30 mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-4">Certifications</h4>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-900/50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium">{cert.title}</p>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-purple-500/30 mb-6">
                <h4 className="text-lg font-semibold text-purple-300 mb-4">Awards</h4>
                {awards.map((award) => (
                  <div key={award.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-900/50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{award.title}</p>
                      <p className="text-sm text-gray-400">{award.year} - {award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-purple-500/30 max-w-4xl mx-auto mt-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Leadership
            </h3>
            {leadership.map((lead) => (
              <div key={lead.role}>
                <h4 className="text-lg font-semibold text-purple-300">{lead.role}</h4>
                <p className="text-sm text-gray-400 mb-2">{lead.institution} | {lead.duration}</p>
                <p className="text-gray-300">{lead.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
