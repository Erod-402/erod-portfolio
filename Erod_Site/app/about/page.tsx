"use client"

import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-[#141414] text-white px-6 md:px-16 py-20 font-body">
      <div className="max-w-3xl mx-auto space-y-16">
        {/* Back to Home Link */}
        <div>
          <Link href="/" className="text-sm text-muted-foreground hover:text-white transition">
            ← Back to Home
          </Link>
        </div>

        {/* Page Heading with Profile Image */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold leading-tight text-foreground">About Me</h1>

          {/* Profile Image - Smaller and positioned to the right */}
          <div className="relative w-24 h-24 rounded-xl overflow-hidden self-start md:self-center">
            <Image src="/images/eddy-profile.png" alt="Eddy Rodriguez" fill className="object-cover" priority />
          </div>
        </div>

        {/* About Content */}
        <section className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p className="text-white font-medium uppercase tracking-wide">
            I'M EDDY RODRIGUEZ. A FINTECH OPERATOR, ENTREPRENEUR, AND FATHER WHO BUILDS WITH VISION AND VELOCITY.
          </p>
          <p>
            From mining Bitcoin in Venezuela to launching a digital bank in the U.S. that scaled to $2B in deposits—
            I've spent my life chasing what's next. I've built and sold brands in e-commerce, pioneered Web3 experiments
            before the hype, and now I'm helping shape how AI, finance, and culture collide.
          </p>
          <p>
            But beneath it all, I'm a father first. Every product I build, every bet I place, every mile I travel— 32
            countries and counting—is about one thing: legacy. I want to raise a son who sees what's possible when you
            stay curious, take risks, and build with heart.
          </p>
        </section>

        {/* How I Work */}
        <section className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground uppercase tracking-wide">How I Work</h2>
          <p className="text-white font-medium uppercase tracking-wide">
            I DON'T BELIEVE IN PLAYBOOKS. I BELIEVE IN PROTOTYPES.
          </p>
          <p>My approach blends:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Strategic clarity</li>
            <li>Fast feedback loops</li>
            <li>A relentless obsession with execution</li>
          </ul>
          <p>I build what I want to use. I test it early. I talk to users. Then I move—fast.</p>
        </section>

        {/* What I Bring */}
        <section className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground uppercase tracking-wide">What I Bring</h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Strategic product thinking across fintech, AI, e-commerce, and Web3</li>
            <li>Experience launching both 0-to-1 ventures and scaling legacy systems</li>
            <li>Visionary leadership grounded in reality</li>
            <li>Deep user research chops + growth intuition</li>
            <li>Cross-functional execution at speed</li>
            <li>Global mindset with operational grit</li>
          </ul>
          <p className="pt-4 font-medium text-white">
            Want to build something that bends the curve forward?{" "}
            <Link href="/contact" className="underline hover:opacity-80 transition">
              Let's talk
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
