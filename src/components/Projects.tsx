"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "D&G Reel",
    category: "Fashion / Reel",
    result: "Dynamic Cuts • Premium Grading",
    videoSrc: "/Videos/D&G reel.mp4",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    title: "Harshwardhan Kapoor",
    category: "GRWM / Celebrity",
    result: "Social Media • High Retention",
    videoSrc: "/Videos/Harshwardhan Kapoor_GRWM.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 3,
    title: "Supra Edit",
    category: "Automotive",
    result: "High Energy • Speed Ramping",
    videoSrc: "/Videos/Supra Edit.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    title: "Spotify Animation",
    category: "Motion Graphics",
    result: "Fluid Animation • Keyframing",
    videoSrc: "/Videos/Spotify Animation.mp4",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: 5,
    title: "Palak Tiwari",
    category: "GRWM / Celebrity",
    result: "Lifestyle • Smooth Transitions",
    videoSrc: "/Videos/Palak Tiwari GRWM.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 6,
    title: "Pheonix Ad",
    category: "Commercial",
    result: "Brand Identity • Promo",
    videoSrc: "/Videos/Pheonix Ad.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 7,
    title: "Kissan Animation",
    category: "Motion Graphics",
    result: "Product Promo • Playful",
    videoSrc: "/Videos/Kissan animation.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 8,
    title: "Naar Reel",
    category: "Social Media",
    result: "Vertical Video • Fast Paced",
    videoSrc: "/Videos/Naar Reel edit.mp4",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: 9,
    title: "Patron Edit",
    category: "Creative Edit",
    result: "Stylized • Visual Effects",
    videoSrc: "/Videos/Patron_edit.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 10,
    title: "LM 01",
    category: "Video Edit",
    result: "Professional Cut",
    videoSrc: "/Videos/LM_01.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 11,
    title: "LM 02",
    category: "Video Edit",
    result: "Professional Cut",
    videoSrc: "/Videos/LM_02.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 12,
    title: "MHI Bytes",
    category: "Corporate / Highlight",
    result: "Clean Flow • Professional",
    videoSrc: "/Videos/MHI_bytes.mp4",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: 13,
    title: "LM 03",
    category: "Video Edit",
    result: "Professional Cut",
    videoSrc: "/Videos/LM_03.mp4",
    colSpan: "col-span-1",
  },
  {
    id: 14,
    title: "LM 04",
    category: "Video Edit",
    result: "Professional Cut",
    videoSrc: "/Videos/LM_04.mp4",
    colSpan: "col-span-1 md:col-span-2",
  },
];

const ProjectCard = ({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-secondary cursor-pointer ${project.colSpan}`}
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={project.videoSrc}
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[360px] md:min-h-[420px]">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-accent font-medium text-sm mb-2">{project.category}</p>
          <h3 className="text-3xl font-bold mb-3 text-foreground">{project.title}</h3>
          <p className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.result}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 max-w-[1200px] mx-auto px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-[32px] sm:text-[40px] font-bold mb-4">SELECTED WORK</h2>
        <div className="h-1 w-20 bg-accent rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setActiveVideo(project.videoSrc)} />
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-foreground/70 hover:text-foreground bg-secondary/80 rounded-full p-4 transition-colors z-50 border border-border"
              onClick={() => setActiveVideo(null)}
            >
              <FaTimes size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border bg-black relative"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-full object-contain outline-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
