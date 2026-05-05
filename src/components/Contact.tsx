"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 max-w-[1200px] mx-auto px-6 lg:px-8 border-t border-border mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-[48px] sm:text-[64px] font-bold leading-tight mb-6">
            LET&apos;S WORK <br />
            <span className="text-text-muted">TOGETHER.</span>
          </h2>
          <p className="text-lg text-text-muted mb-8">
            Ready to elevate your content? Drop me a message and let&apos;s discuss how we can make your next project impossible to ignore.
          </p>
          <a
            href="mailto:aryanshelke476@gmail.com"
            className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
          >
            aryanshelke476@gmail.com
          </a>
        </motion.div>
      </div>
      
      <div className="mt-32 flex flex-col sm:flex-row justify-between items-center text-text-muted text-sm border-t border-border/50 pt-8">
        <p>© {new Date().getFullYear()} Aryan shelke. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed for impact.</p>
      </div>
    </section>
  );
}
