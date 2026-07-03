"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Lightbulb, Target, Wrench } from "lucide-react"
import { Github } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

const projects = [
  {
    title: "Blood Donation Platform",
    description: "A centralized platform to connect blood donors with recipients quickly and efficiently.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    github: "https://github.com/Nasir-Yousuf/Blood-Donation-App",
    demo: "https://blood-donation-app-1ecj-nasiryousufs-projects.vercel.app/",
    image: "/blood-donation-app.png",
    problem: "Finding specific blood types during emergencies is often chaotic and delayed due to decentralized information.",
    solution: "Developed a real-time matching system with geographical routing to instantly connect nearby donors with hospitals.",
    lessons: "Learned how to architect scalable real-time databases and handle sensitive user data securely.",
  },
  {
    title: "Forest at Home",
    description: "A modern, interactive e-commerce web application for buying indoor plants, featuring a visually immersive, nature-inspired experience.",
    tech: ["React (Vite)", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB"],
    github: "",
    demo: "https://forest-at-home.onrender.com/",
    image: "/forest-at-home.png",
    problem: "Needed an online store that goes beyond standard e-commerce to create a living digital environment where users feel like they are exploring a growing forest.",
    solution: "Building a MERN stack application with a nature-inspired UI, animated homepage, interactive plant catalog, and administrative content management.",
    lessons: "Improving frontend architecture, integrating smooth Framer Motion animations, learning full-stack development. (Admin Demo: demo@admin.com / admin123)",
  },
  {
    title: "Premium Portfolio Website",
    description: "A personal portfolio designed to showcase skills, projects, and a passion for technology.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    github: "https://github.com",
    demo: "https://demo.com",
    problem: "Needed a digital presence that stands out to recruiters across both software engineering and creative fields.",
    solution: "Built a highly interactive, Apple-inspired minimalist design with seamless dark mode and smooth animations.",
    lessons: "Deepened my understanding of accessible UI components and complex Framer Motion orchestration.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, highlighting problem-solving skills and technical execution.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image or Placeholder */}
                  <div className="relative h-full min-h-[250px] lg:min-h-full aspect-video lg:aspect-auto bg-muted/50 border-r border-border/50 group overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                        <div className="relative z-10 text-center p-8">
                          <div className="w-20 h-20 mx-auto bg-background rounded-2xl shadow-sm flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">🖼️</span>
                          </div>
                          <p className="text-sm font-medium text-muted-foreground">Screenshot for {project.title}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.github && (
                            <Link href={project.github} target="_blank" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full hover:text-primary" })}>
                              <Github className="h-5 w-5" />
                              <span className="sr-only">GitHub</span>
                            </Link>
                          )}
                          <Link href={project.demo} target="_blank" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full hover:text-primary" })}>
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">Live Demo</span>
                          </Link>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        <div>
                          <h4 className="text-sm font-semibold flex items-center gap-2 mb-2 text-foreground">
                            <Target className="h-4 w-4 text-destructive" /> Problem
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold flex items-center gap-2 mb-2 text-foreground">
                            <Lightbulb className="h-4 w-4 text-primary" /> Solution
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold flex items-center gap-2 mb-2 text-foreground">
                            <Wrench className="h-4 w-4 text-orange-500" /> Lessons Learned
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.lessons}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
