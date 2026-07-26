"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Briefcase, Trophy, Award, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Content Head",
    company: "Social Tamai",
    period: "2023 - Present",
    description: "Leading content strategy, managing creative teams, and overseeing video production to drive brand engagement.",
  },
  {
    title: "Founder",
    company: "PixelMidea",
    period: "2021 - 2023",
    description: "Founded a creative agency focused on high-quality digital assets, UI/UX design, and marketing campaigns.",
  },
]

const achievements = [
  {
    title: "Google AI Certificate",
    category: "Certification",
    icon: <Award className="h-5 w-5 text-primary" />,
  },
  {
    title: "Andrew Ng AI for Everyone",
    category: "Course Completion",
    icon: <Star className="h-5 w-5 text-primary" />,
  },
  {
    title: "Adobe Creative Cloud Experience",
    category: "Expertise",
    icon: <Star className="h-5 w-5 text-primary" />,
  },
  {
    title: "First Place Chess Competition",
    category: "Award",
    description: "Awarded 1st place in an inter-college chess tournament.",
    icon: <Trophy className="h-5 w-5 text-primary" />,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" /> Experience
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full mt-4" />
            </motion.div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border-border/50 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-4">{exp.company}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Trophy className="h-8 w-8 text-primary" /> Achievements
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full mt-4" />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-colors bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="p-4 rounded-full bg-primary/10">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.category}</p>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
