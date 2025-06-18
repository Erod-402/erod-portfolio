"use client"

import type React from "react"

import { poppins, leagueSpartan } from "../fonts"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real implementation, you would send the form data to a server
    // For example, using fetch or a form handling service
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Here you would typically send an email to eddy@immutable.consulting
      console.log("Sending email to eddy@immutable.consulting", formData)

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`min-h-screen bg-[#141414] flex items-center justify-center p-8`}>
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-white hover:text-white/80 transition-colors mb-8 inline-block">
          ← Back to home
        </Link>

        <h1 className={`${poppins.className} text-5xl font-bold text-white tracking-tight mb-8`}>Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`text-white space-y-6`}>
            <p className={`${leagueSpartan.className} uppercase text-white text-xl leading-tight`}>
              I'M ALWAYS OPEN TO DISCUSSING NEW PROJECTS, OPPORTUNITIES, OR PARTNERSHIPS. WHETHER YOU HAVE A QUESTION OR
              JUST WANT TO SAY HI, I'LL TRY MY BEST TO GET BACK TO YOU!
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-white" />
                <a href="mailto:eddy@immutable.consulting" className="text-base hover:text-white transition-colors">
                  eddy@immutable.consulting
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h3 className={`${poppins.className} text-white text-xl mb-4`}>Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/eddy-rodriguez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/erod_eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                  aria-label="Twitter/X Profile"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <h3 className={`${poppins.className} text-xl text-white mb-4`}>Message Sent!</h3>
                <p className="text-white text-base mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-transparent text-white border border-white hover:bg-white/5 text-base"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-base">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-base">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-base">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-transparent text-white border border-white hover:bg-white/5 text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
