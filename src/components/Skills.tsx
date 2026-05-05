"use client";

import { motion } from "framer-motion";
import { SiDavinciresolve } from "react-icons/si";
import { FaVideo, FaFilm } from "react-icons/fa";

const skills = [
  "Pacing & Storytelling",
  "Advanced Color Grading",
  "Sound Design & Mixing",
  "Social Media Optimization",
  "Motion Graphics & Keyframing",
  "Multi-cam Editing",
];

const tools = [
  { name: "Premiere Pro", icon: <FaVideo size={32} className="text-[#9999FF]" /> },
  { name: "After Effects", icon: <FaFilm size={32} className="text-[#D8A1FF]" /> },
  { name: "DaVinci Resolve", icon: <SiDavinciresolve size={32} className="text-[#555555]" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-[1200px] mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4">SOFTWARE</h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-10"></div>
          
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-secondary rounded-2xl border border-border gap-4"
              >
                {tool.icon}
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4">SKILLS</h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-10"></div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 rounded-full bg-secondary border border-border text-text-muted font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
