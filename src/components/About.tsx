"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-[1200px] mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4">ABOUT ME</h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-12"></div>
          
          <div className="space-y-8 text-lg sm:text-xl text-text-muted leading-relaxed">
            <p>
              Hi, I&apos;m <strong className="text-foreground">Aryan shelke</strong>, a video editor driven by a simple philosophy: <strong className="text-foreground">every frame must earn its place.</strong>
            </p>
            <p>
              With a background spanning high-stakes agency environments and fast-paced freelance culture, I&apos;ve learned that editing isn&apos;t just about cutting clips together—it&apos;s about psychological pacing, anticipating audience behavior, and crafting a narrative that holds attention from the hook to the call-to-action.
            </p>
            <p>
              Whether I&apos;m building a cinematic brand documentary or a punchy 15-second TikTok ad, I bring a problem-solving mindset and a relentless focus on <strong className="text-foreground">performance and impact.</strong>
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-border/50 relative z-10">
            <img 
              src="/Videos/3d739e_afc82bd24720431db6c78d792b2d9b50~mv2.jpg" 
              alt="Aryan shelke" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-accent/20 blur-3xl -z-10 rounded-full translate-x-4 translate-y-4"></div>
        </motion.div>
      </div>
    </section>
  );
}
