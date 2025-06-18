"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projects } from "../project-portfolio"

export default function Work() {
  return (
    <div className="min-h-screen bg-[#141414] text-white px-6 md:px-16 py-20 font-body">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Back to Home Link */}
        <div>
          <Link href="/" className="text-sm text-muted-foreground hover:text-white transition">
            ← Back to Home
          </Link>
        </div>

        {/* Page Heading */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold leading-tight text-foreground">My Work</h1>
        </div>

        {/* Intro Content */}
        <section className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p className="text-white font-medium uppercase tracking-wide">
            A CURATED MIX OF BETS, BUILDS, AND PIVOTS ACROSS FINTECH, E-COMMERCE, AND EMERGING TECH
          </p>
          <p>
            These aren't just projects. They are real-world tests of speed, strategy, and storytelling. From launching a
            digital bank in record time to scaling a Web3 coffee brand with zero ad spend, each one pushed me to solve
            complex problems fast and with heart.
          </p>
          <p>Every slide, every pitch, every product shipped shaped how I lead, and how I build today.</p>
        </section>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              href={`/work/${project.slug}`}
              key={project.slug}
              className="group block bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg?height=640&width=800&query=project image"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
                </div>

                <p className="text-base text-muted-foreground">{project.teaser}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.categories.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs uppercase tracking-wide bg-white/10 text-muted-foreground rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
