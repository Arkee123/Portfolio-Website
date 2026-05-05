"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaUserAstronaut } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-[1200px] mx-auto px-6 lg:px-8 bg-secondary/30 rounded-3xl my-12 border border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-[32px] sm:text-[40px] font-bold mb-4">EXPERIENCE</h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-12"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border text-accent">
              <FaBriefcase size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">In-House Video Editor</h3>
              <p className="text-text-muted">Creative Agency • 1 Year</p>
            </div>
          </div>
          <ul className="space-y-4 text-text-muted mt-6">
            <li className="flex gap-3">
              <span className="text-accent mt-1">▹</span>
              <p>Spearheaded video post-production for over 30+ client campaigns including social ads, corporate documentaries, and brand reveals.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1">▹</span>
              <p>Designed custom motion graphics and templates that increased team editing efficiency by 20%.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1">▹</span>
              <p>Collaborated directly with creative directors and sound designers to ensure narrative pacing and premium quality.</p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border text-accent">
              <FaUserAstronaut size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Freelance Editor</h3>
              <p className="text-text-muted">Independent • 5 Months</p>
            </div>
          </div>
          <ul className="space-y-4 text-text-muted mt-6">
            <li className="flex gap-3">
              <span className="text-accent mt-1">▹</span>
              <p>Edited high-retention short-form content (TikToks, Reels, Shorts) for creators, amassing over 2M+ combined views.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1">▹</span>
              <p>Managed end-to-end post workflow: from A-roll culling and multi-cam syncing to advanced color grading and sound mixing.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-accent mt-1">▹</span>
              <p>Worked closely with clients to understand their personal brand tone and deliver iterations rapidly.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
