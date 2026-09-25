"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ArrowRight, Mail, Sparkles, Code2, Film, Brain, Bot, Cpu } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const titles = [
  "Next.js Developer",
  "AI & LLM Explorer",
  "AI Application Builder",
  "Creative Technologist",
  "Video & Media Creator"
]

export function HeroSection() {
  const [titleIndex, setTitleIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center pt-24 md:pt-16 pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight flex flex-wrap"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                }
              }}
            >
              {"Hi, I'm ".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={{ hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
                  style={{ whiteSpace: 'pre' }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span 
                className="text-primary ml-1"
                variants={{ hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              >
                Nasir
              </motion.span>
            </motion.h1>

            <div className="h-10 sm:h-12 flex items-center overflow-hidden text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block text-foreground/90"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              I build modern Next.js applications, explore cutting-edge AI systems, and create engaging digital media. I enjoy combining artificial intelligence, clean web architecture, and creativity to build practical solutions that make an impact.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full shadow-lg shadow-primary/20" })}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="#contact" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full border-border/80 hover:bg-muted" })}>
                Contact Me
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center text-sm font-medium text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4 text-primary" /> Bangladesh
            </div>
            <div className="flex items-center gap-3 border-l border-border pl-6">
              <Link href="https://github.com/Nasir-Yousuf/" target="_blank" aria-label="GitHub Profile" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/nasir-yousuf200511/" target="_blank" aria-label="LinkedIn Profile" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:nasiryousuf200511@gmail.com" aria-label="Send Email" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Visuals & Focus Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center items-center py-4"
        >
          {/* Constrained Photo Wrapper with Balanced Dimensions */}
          <div className="relative w-full max-w-[310px] sm:max-w-[340px] md:max-w-[360px]">
            
            {/* Ambient Glow behind photo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent rounded-[2.5rem] blur-2xl -z-10" />

            {/* Decorative background frame */}
            <motion.div 
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl border border-primary/30 bg-primary/5"
              animate={{ 
                rotate: [1, 2.5, 1],
                scale: [1, 1.02, 1],
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            {/* Profile Photo Card */}
            <motion.div 
              className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <Image
                src="/profile.jpg"
                alt="Nasir's Profile Photo"
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: [0, -4, 0] }}
              transition={{
                opacity: { duration: 0.4, delay: 0.4 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="absolute -top-3 -right-3 z-10"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-primary/30 shadow-lg text-xs font-semibold text-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>AI & Next.js</span>
              </div>
            </motion.div>

            {/* Compact Current Focus Card Floating Symmetrically */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: [0, 6, 0] }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.5 },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 } 
              }}
              className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 right-2 sm:right-auto sm:w-[280px] z-10"
            >
              <Card className="shadow-xl bg-background/90 backdrop-blur-md border-border/80 hover:border-primary/40 transition-colors">
                <CardContent className="p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Current Focus
                    </p>
                    <span className="text-[10px] text-muted-foreground font-mono">2026</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Bot className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="truncate">AI Agents & LLM Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Code2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="truncate">Next.js & Fullstack Web</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="truncate">Python, PyTorch & AI Models</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
