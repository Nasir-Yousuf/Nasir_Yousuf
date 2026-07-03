"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const timeline = [
  {
    year: "2021",
    title: "Creative Foundations",
    focus: "Building creative communication skills",
    highlightsLabel: "Worked With",
    highlights: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Social Media Marketing"],
    learned: "Visual storytelling, content strategy, editing for different audiences, and creating engaging digital experiences.",
  },
  {
    year: "2022",
    title: "Web Development Foundations",
    focus: "Learning to build for the web",
    highlightsLabel: "Learned",
    highlights: ["HTML", "CSS", "JavaScript", "Git & GitHub"],
    learned: "How modern websites are built, responsive design principles, and writing clean, maintainable code.",
  },
  {
    year: "2023",
    title: "Modern Frontend Development",
    focus: "Building real-world web applications",
    highlightsLabel: "Technologies & Projects",
    highlights: ["React", "Redux", "React Router", "Firebase", "Blood Donation Platform", "Other React projects"],
    learned: "Component architecture, state management, authentication, and developing production-ready user interfaces.",
  },
  {
    year: "2024",
    title: "Professional Growth",
    focus: "Turning skills into real-world impact",
    highlightsLabel: "Experience",
    highlights: ["Content Head at Social Tamai", "Founder of PixelMidea", "Professional Video Editor", "Client Website Development"],
    learned: "Leadership, client communication, project management, creative direction, and delivering work in professional environments.",
  },
  {
    year: "2025",
    title: "AI & Modern Software Development",
    focus: "Preparing for the next generation of software",
    highlightsLabel: "Learning & Courses",
    highlights: ["Next.js", "Python", "AI APIs", "Large Language Models (LLMs)", "Intro to Generative AI — Google", "Career Essentials in Generative AI — Microsoft"],
    learned: "How AI systems work, practical applications of generative AI, and integrating AI into modern software development.",
  },
  {
    year: "2026",
    title: "Communication & Strategic Thinking",
    focus: "Becoming a better communicator, storyteller, and strategic thinker",
    highlightsLabel: "Completed Courses",
    highlights: ["Steve Martin Teaches Comedy (MasterClass)", "Aaron Sorkin Teaches Screenwriting (MasterClass)", "Everything I Know About Comedy — Kunal Kamra", "Game Theory — Professor Xueqin Jiang"],
    learned: "Storytelling and narrative structure, dialogue and audience engagement, comedy writing and stagecraft, strategic thinking and decision-making.",
  },
]

export function TimelineSection() {
  return (
    <section id="learning" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Journey</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A continuous evolution of skills, driven by curiosity and the desire to build better solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-start justify-between md:odd:flex-row-reverse group is-active mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute md:relative left-5 md:left-auto md:order-1 flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shrink-0 -translate-x-1/2 md:translate-x-0 shadow z-10">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              
              {/* Content Card */}
              <div className="w-full pl-12 md:pl-0 md:w-[calc(50%-2.5rem)]">
                <div className="p-6 md:p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-sm font-bold text-primary tracking-wider">{item.year}</span>
                    <h3 className="font-bold text-xl md:text-2xl text-foreground leading-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium italic mt-1">
                      Focus: {item.focus}
                    </p>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <strong className="text-foreground text-sm block mb-3">{item.highlightsLabel}:</strong>
                      <ul className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium border border-border/50">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                      <strong className="text-foreground text-sm block mb-2">What I learned:</strong>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.learned}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
