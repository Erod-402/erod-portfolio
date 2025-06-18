"use client"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import Link from "next/link"

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#141414] flex items-center justify-center p-8`}>
      <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Left Content - 50% */}
        <div className="w-full md:w-1/2 flex-shrink-0 flex flex-col justify-between h-[80vh]">
          <div className="max-w-xl space-y-6 font-body">
            {/* Name and Title */}
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-semibold text-foreground">Eddy Rodriguez</p>
              <p className="text-base md:text-lg text-muted-foreground">Product Manager & Strategic Partnerships</p>
            </div>

            {/* Headline - Space Grotesk */}
            <h1 className="text-4xl md:text-5xl font-heading font-semibold leading-tight text-foreground">
              Building at the edge of finance, AI, and global culture.
            </h1>

            {/* Paragraph - Inter */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I blend strategy with execution to deliver real-world results — across digital banking, payments, and AI.
            </p>

            {/* CTAs */}
            <div className="space-y-4 pt-4">
              <Link href="/about" className="text-white font-medium text-base inline-block relative group">
                Curious about my journey?{" "}
                <span className="ml-1 border-b border-white transition-all duration-300 group-hover:border-b-2">
                  About Me
                </span>
              </Link>

              <div>
                <Link href="/work" className="text-white font-medium text-base inline-block relative group">
                  Want to see what I've built?{" "}
                  <span className="ml-1 border-b border-white transition-all duration-300 group-hover:border-b-2">
                    View My Work
                  </span>
                </Link>
              </div>

              <div>
                <Link href="/contact" className="text-white font-medium text-base inline-block relative group">
                  Let's collaborate{" "}
                  <span className="ml-1 border-b border-white transition-all duration-300 group-hover:border-b-2">
                    Get in Touch
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - 50% - Unchanged */}
        <div className="w-full md:w-1/2 h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </div>
    </div>
  )
}
