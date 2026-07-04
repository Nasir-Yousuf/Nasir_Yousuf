import * as React from "react"
import Link from "next/link"
import { Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/icons"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="#home" className="text-xl font-bold tracking-tight">
            Nasir Yousuf<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
            Building modern web applications and exploring AI to solve real-world problems.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://github.com/Nasir-Yousuf/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-background border hover:border-primary hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nasir-yousuf200511/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-background border hover:border-primary hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:nasiryousuf200511@gmail.com"
            className="p-2 rounded-full bg-background border hover:border-primary hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Nasir. All rights reserved.
      </div>
    </footer>
  )
}
