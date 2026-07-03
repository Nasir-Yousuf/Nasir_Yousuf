"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BookOpen, Code2, Quote } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const learning = [
  "Next.js",
  "Python",
  "AI Engineering",
  "LLMs",
  "System Design",
]

const reading = [
  "Atomic Habits",
  "Clean Code",
  "Designing Data-Intensive Applications",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a multidisciplinary learner combining software engineering, AI, storytelling, marketing, and video production. My journey isn't just about writing code; it's about understanding how different domains connect to create holistic, impactful solutions.
            </p>
            <p>
              Whether I'm developing a full-stack Next.js application, exploring the latest capabilities of Large Language Models, or crafting a compelling video narrative, my core driver is a deep curiosity to learn and build things that matter.
            </p>
            
            <div className="pt-8">
              <div className="relative p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                <p className="relative z-10 text-xl font-medium text-foreground italic text-center">
                  "The ability to learn is more valuable than any single skill."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="border-primary/10 bg-background/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Code2 className="mr-2 h-5 w-5 text-primary" /> Currently Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {learning.map((item) => (
                    <Badge key={item} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-foreground">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 bg-background/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" /> Currently Reading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {reading.map((book) => (
                    <li key={book} className="flex items-start text-sm text-muted-foreground">
                      <span className="mr-2 text-primary">•</span>
                      {book}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
