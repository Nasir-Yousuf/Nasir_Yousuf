"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Card className="border-border/50 bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

          <CardContent className="p-8 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Let's build something together.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Whether you have a project in mind, want to discuss AI
                integration, or just want to say hi, my inbox is always open.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="mailto:nasiryousuf200511@gmail.com"
                  className={buttonVariants({
                    size: "lg",
                    className: "rounded-full h-14 px-8 text-base",
                  })}
                >
                  <Mail className="mr-2 h-5 w-5" /> Say Hello{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-border/40 flex items-center justify-center gap-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Or connect with me on
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/Nasir-Yousuf/"
                    target="_blank"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nasir-yousuf200511/"
                    target="_blank"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
