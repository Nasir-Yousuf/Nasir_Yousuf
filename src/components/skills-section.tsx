"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Code, Bot, Palette, Megaphone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Development",
    icon: <Code className="h-5 w-5 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git", "HTML5", "CSS3"],
  },
  {
    title: "AI & Engineering",
    icon: <Bot className="h-5 w-5 text-primary" />,
    skills: ["Prompt Engineering", "LLMs", "AI Agents", "Python", "RAG", "Data Analysis"],
  },
  {
    title: "Creative",
    icon: <Palette className="h-5 w-5 text-primary" />,
    skills: ["Video Editing", "Premiere Pro", "UI/UX Design", "Figma", "Storytelling", "Content Creation"],
  },
  {
    title: "Marketing",
    icon: <Megaphone className="h-5 w-5 text-primary" />,
    skills: ["Digital Marketing", "Content Strategy", "SEO", "Social Media Management", "Copywriting"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit that allows me to build robust applications, leverage AI for problem-solving, and present ideas creatively.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-background hover:bg-primary hover:text-primary-foreground transition-colors font-normal py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
