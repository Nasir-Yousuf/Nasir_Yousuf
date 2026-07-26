"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Orb 1: Primary color, top-left drifting right */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] mix-blend-screen"
        animate={{
          x: ["0%", "20%", "0%"],
          y: ["0%", "10%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Orb 2: Purple-ish, bottom-right drifting left */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[120px] mix-blend-screen"
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["0%", "-10%", "0%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Orb 3: Cyan, center moving around */}
      <motion.div
        className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/5 blur-[80px] mix-blend-screen"
        animate={{
          x: ["0%", "30%", "-10%", "0%"],
          y: ["0%", "-20%", "20%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Floating Stars */}
      <motion.div
        className="absolute top-[20%] left-[15%] text-primary/40"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3], rotate: [0, 90, 180] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[30%] right-[20%] text-indigo-500/30"
        animate={{ scale: [1, 2, 1], opacity: [0.2, 0.6, 0.2], rotate: [0, -90, -180] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[10%] text-cyan-500/40"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.9, 0.4], y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="w-2 h-2 rounded-full bg-currentColor shadow-[0_0_10px_currentColor]" />
      </motion.div>
    </div>
  );
}
