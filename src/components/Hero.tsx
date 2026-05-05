"use client";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center pt-24 pb-16"
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl mx-4 lg:mx-12 mt-4 opacity-40">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-cinematic-aerial-shot-of-mountains-and-trees-3236-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-[64px] sm:text-[80px] lg:text-[96px] font-bold leading-[0.95] tracking-tight mb-6">
            I EDIT VIDEOS<br />
            <span className="text-text-muted">THAT PEOPLE</span><br />
            DON&apos;T SKIP.
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg lg:text-xl text-text-muted max-w-xl mb-10 text-balance"
          >
            Cinematic storytelling, sharp pacing, and dynamic motion design to maximize retention.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <a 
              href="#projects" 
              className="group flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              View Work
            </a>
            <button className="group flex items-center justify-center gap-4 text-foreground font-medium hover:text-accent transition-colors">
              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-accent transition-colors">
                <FaPlay className="w-3 h-3 ml-1" />
              </span>
              Watch Reel
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
