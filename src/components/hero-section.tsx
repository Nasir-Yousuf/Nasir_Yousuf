"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Download, ArrowRight, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const titles = [
  "Frontend Developer",
  "AI Explorer",
  "Creative Technologist",
  "Video Editor",
  "Problem Solver"
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
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center pt-24 md:pt-16 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
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
                className="text-primary"
                variants={{ hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              >
                Nasir
              </motion.span>
            </motion.h1>
            <div className="h-10 sm:h-12 flex items-center overflow-hidden text-2xl md:text-4xl font-semibold text-muted-foreground">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I build modern web applications, create engaging digital content, and explore how AI can solve real-world problems. I enjoy combining technology, storytelling, and creativity to build products people love using.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full" })}>
                Contact Me
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4 text-primary" /> Bangladesh
            </div>
            <div className="flex items-center gap-4 border-l border-border pl-6">
              <Link href="https://github.com/Nasir-Yousuf/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/nasir-yousuf200511/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:nasiryousuf200511@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
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
          className="relative lg:ml-auto w-full max-w-md xl:max-w-lg"
        >
          {/* Decorative Background & Animated Circles */}
          <motion.div 
            className="absolute inset-0 -z-10 translate-x-4 translate-y-6"
            animate={{ 
              rotate: [3, 6, 3],
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          >
            <div className="w-full h-full border-2 border-primary/20 bg-primary/10 rounded-[2rem] relative">
              {/* Top right circle */}
              <motion.div 
                className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full shadow-lg shadow-primary/40"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              
              {/* Bottom left circle */}
              <motion.div 
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary/80 rounded-full shadow-lg shadow-primary/30"
                animate={{ scale: [1, 1.2, 1], y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              />

              {/* Middle left floating circle */}
              <motion.div 
                className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/60 rounded-full shadow-md shadow-primary/20"
                animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted border border-border shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src="/profile.jpg"
              alt="Nasir's Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Current Focus Card Floating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ 
              opacity: { duration: 0.5, delay: 0.5 },
              y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 } 
            }}
            className="absolute -bottom-12 left-4 right-4 sm:-bottom-10 sm:right-auto sm:-left-10 lg:-left-20 max-w-none sm:max-w-[300px] w-auto sm:w-full z-10"
          >
            <Card className="shadow-xl bg-background/95 backdrop-blur border-primary/20">
              <CardContent className="p-4 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Current Focus</p>
                <motion.ul 
                  className="space-y-2 text-sm text-muted-foreground"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15, delayChildren: 0.7 }
                    }
                  }}
                >
                  <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-start">
                    <span className="mr-2">🚀</span> Building modern web applications with React & Next.js
                  </motion.li>
                  <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-start">
                    <span className="mr-2">🤖</span> Learning AI Engineering & Python
                  </motion.li>
                  <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-start">
                    <span className="mr-2">🎬</span> Creating professional video content
                  </motion.li>
                  <motion.li variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex items-start">
                    <span className="mr-2">📚</span> Bachelor's in English Literature
                  </motion.li>
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
