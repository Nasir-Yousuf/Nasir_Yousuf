"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BookOpen, Quote, Sparkles, GraduationCap, Code } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const growing = [
  {
    icon: "💻",
    title: "Modern Web Development",
    description: "Building scalable web applications with React and Next.js.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description: "Exploring LLMs, AI tools, and practical AI workflows.",
  },
  {
    icon: "🎬",
    title: "Visual Storytelling",
    description:
      "Improving video editing, motion design, and content creation.",
  },
  {
    icon: "🧠",
    title: "Communication & Strategy",
    description: "Learning storytelling, psychology, and decision-making.",
  },
];

const reading = [
  {
    title: "Atomic Habits",
    description:
      "Building better systems for long-term growth and consistency.",
  },
  {
    title: "The Laws of Human Nature",
    description:
      "Understanding human behavior, decision-making, and communication.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Intro Card (Spans 2 columns on lg) */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="h-full border-primary/10 bg-background/60 backdrop-blur-md hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
              <CardContent className="p-8 md:p-10 space-y-6 text-lg text-muted-foreground leading-relaxed flex flex-col justify-center h-full">
                <div className="inline-flex items-center space-x-2 text-primary mb-2">
                  <Code className="h-6 w-6" />
                  <span className="font-semibold text-xl tracking-tight">
                    The Journey
                  </span>
                </div>
                <p className="text-foreground/90">
                  I’m a Web Developer and Video Editor who enjoys combining
                  technology, creativity, and storytelling to build meaningful
                  digital experiences. My background spans web development, AI,
                  video production, digital marketing, and English literature,
                  allowing me to approach problems from both technical and
                  creative perspectives.
                </p>
                <p>
                  I’m naturally curious about how things work, from React’s
                  rendering process to how large language models generate text.
                  Whether I’m developing a web application, editing a
                  commercial, or exploring new AI tools, I enjoy turning ideas
                  into practical solutions that people find useful.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reading Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border-primary/10 bg-background/60 backdrop-blur-md hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" /> Currently
                  Reading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-5">
                  {reading.map((book) => (
                    <li
                      key={book.title}
                      className="flex flex-col space-y-1 group"
                    >
                      <div className="flex items-start">
                        <span className="mr-2 text-primary transition-transform group-hover:scale-125 group-hover:text-primary/80">
                          •
                        </span>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {book.title}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground ml-3.5 pl-2 border-l-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                        {book.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full border-primary/10 bg-background/60 backdrop-blur-md hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 h-full flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center space-x-2 text-primary mb-4">
                  <GraduationCap className="h-6 w-6" />
                  <span className="font-semibold text-lg tracking-tight">
                    Philosophy
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I believe the best professionals are lifelong learners. That’s
                  why I’m constantly expanding my skills, experimenting with new
                  technologies, and challenging myself to grow across different
                  disciplines while always focusing on creating real value.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Growing In Card (Spans 2 columns on lg) */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="h-full border-primary/10 bg-background/60 backdrop-blur-md hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" /> Currently
                  Growing In
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {growing.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col space-y-2 group p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300 border border-transparent hover:border-primary/10"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          {item.icon}
                        </span>
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quote Card (Full Width) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-r from-background via-primary/5 to-background hover:border-primary/40 transition-all duration-500 group shadow-md hover:shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <CardContent className="p-10 md:p-14 flex items-center justify-center relative z-10">
                <Quote className="absolute top-6 left-6 md:top-10 md:left-10 h-10 w-10 text-primary/20 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2" />
                <p className="text-2xl md:text-3xl font-medium text-foreground italic text-center max-w-3xl leading-snug">
                  "The ability to learn is more valuable than any single skill."
                </p>
                <Quote className="absolute bottom-6 right-6 md:bottom-10 md:right-10 h-10 w-10 text-primary/20 rotate-180 transition-transform duration-500 group-hover:translate-y-2 group-hover:translate-x-2" />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
