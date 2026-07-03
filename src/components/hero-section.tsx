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
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center pt-16 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Nasir</span>
            </h1>
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
            <Link href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Button variant="outline" size="lg" className="rounded-full">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
            <Link href="#contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full" })}>
              Contact Me
            </Link>
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
          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-6">
            <div className="w-full h-full bg-primary/20 rounded-[2rem] transform rotate-3" />
          </div>
          
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted border border-border shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Nasir's Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Current Focus Card Floating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-10 -left-10 lg:-left-20 max-w-[300px] w-full"
          >
            <Card className="shadow-xl bg-background/95 backdrop-blur border-primary/20">
              <CardContent className="p-4 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Current Focus</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">🚀</span> Building modern web applications with React & Next.js
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🤖</span> Learning AI Engineering & Python
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🎬</span> Creating professional video content
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📚</span> Bachelor's in English Literature
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
