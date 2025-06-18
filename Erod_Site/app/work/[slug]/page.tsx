"use client"

import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { leagueSpartan } from "../../fonts"
import { projects } from "../../project-portfolio"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug)
  const project = projects[projectIndex]

  if (!project) {
    notFound()
  }

  const nextProject = projects[(projectIndex + 1) % projects.length]

  // Helper function to render text with bold parts
  const renderWithBold = (text: string) => {
    if (project.slug === "openbank") {
      // For OpenBank project, bold specific parts
      if (text.startsWith("Product Strategy:")) {
        return (
          <>
            <strong>Product Strategy:</strong> {text.substring("Product Strategy:".length)}
          </>
        )
      } else if (text.startsWith("Payments Infrastructure:")) {
        return (
          <>
            <strong>Payments Infrastructure:</strong> {text.substring("Payments Infrastructure:".length)}
          </>
        )
      } else if (text.startsWith("Core Banking System RFP:")) {
        return (
          <>
            <strong>Core Banking System RFP:</strong> {text.substring("Core Banking System RFP:".length)}
          </>
        )
      } else if (text.startsWith("Embedded Finance Design:")) {
        return (
          <>
            <strong>Embedded Finance Design:</strong> {text.substring("Embedded Finance Design:".length)}
          </>
        )
      } else if (text.startsWith("$2B in deposits")) {
        return (
          <>
            <strong>$2B in deposits</strong> {text.substring("$2B in deposits".length)}
          </>
        )
      } else if (text.startsWith("Avoided regulatory delays")) {
        return (
          <>
            <strong>Avoided regulatory delays</strong> {text.substring("Avoided regulatory delays".length)}
          </>
        )
      } else if (text.startsWith("Modernized payment experience")) {
        return (
          <>
            <strong>Modernized payment experience,</strong> integrating third party vendors and enabling customer choice
            on transaction speed and cost.
          </>
        )
      } else if (text.startsWith("Influenced core tech decisions")) {
        return (
          <>
            <strong>Influenced core tech decisions</strong> {text.substring("Influenced core tech decisions".length)}
          </>
        )
      } else if (text.startsWith("Created high-yield incentive loops")) {
        return (
          <>
            <strong>Created high-yield incentive loops</strong>{" "}
            {text.substring("Created high-yield incentive loops".length)}
          </>
        )
      } else if (text.startsWith("Decision Paralysis on Charter:")) {
        return (
          <>
            <strong>Decision Paralysis on Charter:</strong> {text.substring("Decision Paralysis on Charter:".length)}
          </>
        )
      } else if (text.startsWith("Legacy Core Infrastructure:")) {
        return (
          <>
            <strong>Legacy Core Infrastructure:</strong> {text.substring("Legacy Core Infrastructure:".length)}
          </>
        )
      } else if (text.startsWith("Compressed Timeline:")) {
        return (
          <>
            <strong>Compressed Timeline:</strong> {text.substring("Compressed Timeline:".length)}
          </>
        )
      } else if (text.startsWith("Launch speed comes from constraint")) {
        return (
          <>
            <strong>Launch speed comes from constraint, not chaos.</strong>{" "}
            {text.substring("Launch speed comes from constraint, not chaos.".length)}
          </>
        )
      } else if (text.startsWith("Legacy systems can slow you down")) {
        return (
          <>
            <strong>Legacy systems can slow you down, but smart architecture buys time.</strong>{" "}
            {text.substring("Legacy systems can slow you down, but smart architecture buys time.".length)}
          </>
        )
      } else if (text.includes('"global bank" strategy')) {
        return (
          <>
            <strong>A "global bank" strategy rarely works without local intuition.</strong>{" "}
            {text.substring('A "global bank" strategy rarely works without local intuition.'.length)}
          </>
        )
      }
    } else if (project.slug === "apple-subscription") {
      // For Apple Subscription project, handle bold parts
      if (text.startsWith("Led the product strategy")) {
        return (
          <>
            <strong>Led the product strategy</strong> and financial modeling workstreams for the launch.
          </>
        )
      } else if (text.startsWith("Served as the primary liaison")) {
        return (
          <>
            <strong>Served as the primary liaison</strong> between Santander's internal teams and Apple's product and
            finance leads.
          </>
        )
      } else if (text.startsWith("Designed the subscription logic")) {
        return (
          <>
            <strong>Designed the subscription logic</strong>, credit modeling flows, and upgrade pathways within the
            banking infrastructure.
          </>
        )
      } else if (text.startsWith("Managed internal executive alignment")) {
        return (
          <>
            <strong>Managed internal executive alignment</strong> and feasibility assessments across risk, compliance,
            and credit functions.
          </>
        )
      } else if (text.startsWith("Developed a modular subscription model")) {
        return (
          <>
            <strong>Developed a modular subscription model</strong> with 40% higher adoption than legacy financing
            programs.
          </>
        )
      } else if (text.startsWith("Built a compliant, scalable architecture")) {
        return (
          <>
            <strong>Built a compliant, scalable architecture</strong> that could flex across multiple markets and
            regulations.
          </>
        )
      } else if (text.startsWith("Streamlined onboarding UX")) {
        return (
          <>
            <strong>Streamlined onboarding UX</strong> that reduced customer acquisition costs by 25%.
          </>
        )
      } else if (text.startsWith("Delivered a working MVP")) {
        return (
          <>
            <strong>Delivered a working MVP</strong> within 60 days and secured internal and partner greenlights.
          </>
        )
      } else if (text.startsWith("Reconciling Apple's fast innovation cadence")) {
        return (
          <>
            <strong>Reconciling Apple's fast innovation cadence</strong> with banking's risk-and-control mindset.
          </>
        )
      } else if (text.startsWith("Navigating European regulatory fragmentation")) {
        return (
          <>
            <strong>Navigating European regulatory fragmentation</strong>, especially between Germany and Spain.
          </>
        )
      } else if (text.startsWith("Designing a consistent customer experience")) {
        return (
          <>
            <strong>Designing a consistent customer experience</strong> across different financial backends and credit
            logic.
          </>
        )
      } else if (text.startsWith("Cross-industry collaboration needs bilingual product leadership")) {
        return (
          <>
            <strong>Cross-industry collaboration needs bilingual product leadership</strong> — people who speak both
            fintech and platform fluently.
          </>
        )
      } else if (text.startsWith("Speed without alignment breaks trust")) {
        return (
          <>
            <strong>Speed without alignment breaks trust.</strong> Fast-moving projects must still anchor in shared
            ground rules.
          </>
        )
      } else if (text.startsWith("The best credit products are invisible")) {
        return (
          <>
            <strong>The best credit products are invisible.</strong> Customers don't care about models — they care about
            flexibility and ease.
          </>
        )
      }
    } else if (project.slug === "cross-border") {
      // For Cross-Border project, handle bold parts
      if (text.startsWith("Led the strategic vendor evaluation")) {
        return (
          <>
            <strong>Led the strategic vendor evaluation</strong> across Remitly, Wise, and Santander's internal payment
            rails.
          </>
        )
      } else if (text.startsWith("Designed hybrid integration paths")) {
        return (
          <>
            <strong>Designed hybrid integration paths</strong> that mapped regulatory, tech, and operational
            constraints.
          </>
        )
      } else if (text.startsWith("Created the cross-border business case")) {
        return (
          <>
            <strong>Created the cross-border business case</strong> with projected volume, revenue, and cost model
            breakdowns.
          </>
        )
      } else if (text.startsWith("Advocated for using fintech APIs")) {
        return (
          <>
            <strong>Advocated for using fintech APIs</strong> to accelerate time to market while maintaining full
            compliance.
          </>
        )
      } else if (text.startsWith("Reduced transfer times")) {
        return (
          <>
            <strong>Reduced transfer times</strong> from 3 days to under 30 minutes using fintech-integrated flows.
          </>
        )
      } else if (text.startsWith("Lowered cost per transaction by 40%")) {
        return (
          <>
            <strong>Lowered cost per transaction by 40%</strong>, outperforming traditional SWIFT models.
          </>
        )
      } else if (text.startsWith("Increased cross-border volume by 65%")) {
        return (
          <>
            <strong>Increased cross-border volume by 65%</strong> within six months of launching the upgraded flows.
          </>
        )
      } else if (text.startsWith("Built the foundation for future corridor expansion")) {
        return (
          <>
            <strong>Built the foundation for future corridor expansion</strong>, including Central and South America.
          </>
        )
      } else if (text.startsWith("Integrating real-time APIs")) {
        return (
          <>
            <strong>Integrating real-time APIs</strong> from fintech partners into legacy banking architecture.
          </>
        )
      } else if (text.startsWith("Ensuring compliance with AML and KYC standards")) {
        return (
          <>
            <strong>Ensuring compliance with AML and KYC standards</strong> across two regulatory environments.
          </>
        )
      } else if (text.startsWith("Navigating internal resistance")) {
        return (
          <>
            <strong>Navigating internal resistance</strong> to partnering with fintechs on core money movement
            functionality.
          </>
        )
      } else if (text.startsWith("Fintechs win on velocity")) {
        return (
          <>
            <strong>Fintechs win on velocity.</strong> Their APIs, tools, and roadmap cadence are built to move fast —
            and they expect the same from their partners.
          </>
        )
      } else if (text.startsWith("Partnerships require clear ownership models")) {
        return (
          <>
            <strong>Partnerships require clear ownership models.</strong> Without alignment on who runs compliance, ops,
            and support, speed becomes chaos.
          </>
        )
      } else if (text.startsWith("Cross-border money is cultural")) {
        return (
          <>
            <strong>Cross-border money is cultural.</strong> Success depends not just on rails, but on knowing what
            senders and receivers value most.
          </>
        )
      }
    } else if (project.slug === "boringbrew") {
      // For Boring Brew project, handle bold parts
      if (text.startsWith("Founded the concept")) {
        return (
          <>
            <strong>Founded the concept</strong> and developed the tokenomics model tied to real-world coffee products.
          </>
        )
      } else if (text.startsWith("Led product development")) {
        return (
          <>
            <strong>Led product development</strong> from initial roast sourcing to fulfillment operations.
          </>
        )
      } else if (text.startsWith("Built and grew the community")) {
        return (
          <>
            <strong>Built and grew the community</strong> from scratch across Twitter, Discord, and Web3 platforms.
          </>
        )
      } else if (text.startsWith("Designed revenue-sharing mechanics")) {
        return (
          <>
            <strong>Designed revenue-sharing mechanics</strong> that aligned physical product sales with NFT ownership
            tiers.
          </>
        )
      } else if (text.startsWith("Scaled to 10,000+ community members")) {
        return (
          <>
            <strong>Scaled to 10,000+ community members</strong> with zero paid advertising.
          </>
        )
      } else if (text.startsWith("Reached $150,000 MRR")) {
        return (
          <>
            <strong>Reached $150,000 MRR</strong> (monthly recurring revenue) within six months of launch.
          </>
        )
      } else if (text.startsWith("Executed a successful acquisition")) {
        return (
          <>
            <strong>Executed a successful acquisition</strong> by a publicly traded company within 12 months.
          </>
        )
      } else if (text.startsWith("Created a blueprint")) {
        return (
          <>
            <strong>Created a blueprint</strong> for Web3 consumer brand building that balanced hype with fundamentals.
          </>
        )
      } else if (text.startsWith("Educating non-crypto consumers")) {
        return (
          <>
            <strong>Educating non-crypto consumers</strong> on NFT ownership without overwhelming jargon.
          </>
        )
      } else if (text.startsWith("Managing inventory and fulfillment")) {
        return (
          <>
            <strong>Managing inventory and fulfillment</strong> at scale with fluctuating Web3-driven demand spikes.
          </>
        )
      } else if (text.startsWith("Sustaining long-term value creation")) {
        return (
          <>
            <strong>Sustaining long-term value creation</strong> when crypto markets turned volatile.
          </>
        )
      } else if (text.startsWith("Community beats advertising")) {
        return (
          <>
            <strong>Community beats advertising.</strong> When users own part of the brand story, loyalty compounds
            organically.
          </>
        )
      } else if (text.startsWith("Physical products create real utility")) {
        return (
          <>
            <strong>Physical products create real utility.</strong> Tangible anchors drive credibility for digital-first
            brands.
          </>
        )
      } else if (text.startsWith("Web3 rewards transparency and speed")) {
        return (
          <>
            <strong>Web3 rewards transparency and speed.</strong> The faster and more authentically you move, the deeper
            the community trust.
          </>
        )
      }
    } else if (project.slug === "roostify") {
      // For Roostify project, handle bold parts
      if (text.startsWith("Led the Roostify partnership strategy")) {
        return (
          <>
            <strong>Led the Roostify partnership strategy</strong>, working across lending, credit risk, and compliance
            teams.
          </>
        )
      } else if (text.startsWith("Redesigned the mortgage application journey")) {
        return (
          <>
            <strong>Redesigned the mortgage application journey</strong> to embed AI verification and smart workflows.
          </>
        )
      } else if (text.startsWith("Built the change management plan")) {
        return (
          <>
            <strong>Built the change management plan</strong> to drive adoption across front-line and back-office teams.
          </>
        )
      } else if (text.startsWith("Established success metrics")) {
        return (
          <>
            <strong>Established success metrics</strong> tied to approval time reduction, manual work elimination, and
            NPS lift.
          </>
        )
      } else if (text.startsWith("Reduced mortgage approval times by 40%")) {
        return (
          <>
            <strong>Reduced mortgage approval times by 40%</strong>, from application to conditional approval.
          </>
        )
      } else if (text.startsWith("Decreased manual document processing by 60%")) {
        return (
          <>
            <strong>Decreased manual document processing by 60%</strong>, freeing up underwriters for higher-value work.
          </>
        )
      } else if (text.startsWith("Improved customer satisfaction scores by 35%")) {
        return (
          <>
            <strong>Improved customer satisfaction scores by 35%</strong>, measured via NPS and internal surveys.
          </>
        )
      } else if (text.startsWith("Created a reusable AI integration playbook")) {
        return (
          <>
            <strong>Created a reusable AI integration playbook</strong> for expansion into other lending products.
          </>
        )
      } else if (text.startsWith("Overcoming skepticism")) {
        return (
          <>
            <strong>Overcoming skepticism</strong> about AI reliability and decision-making accuracy in regulated
            workflows.
          </>
        )
      } else if (text.startsWith("Integrating with legacy mortgage servicing systems")) {
        return (
          <>
            <strong>Integrating with legacy mortgage servicing systems</strong> that were not API-friendly.
          </>
        )
      } else if (text.startsWith("Managing change fatigue")) {
        return (
          <>
            <strong>Managing change fatigue</strong> across teams used to manual processes and waterfall project cycles.
          </>
        )
      } else if (text.startsWith("AI succeeds when it enhances")) {
        return (
          <>
            <strong>AI succeeds when it enhances, not replaces, human judgment.</strong> Underwriters embraced
            automation once it made their jobs easier, not obsolete.
          </>
        )
      } else if (text.startsWith("Legacy systems are rarely the bottleneck")) {
        return (
          <>
            <strong>Legacy systems are rarely the bottleneck.</strong> Culture and process inertia are often bigger
            barriers than technology.
          </>
        )
      } else if (text.startsWith("Partnerships work best when internal teams")) {
        return (
          <>
            <strong>Partnerships work best when internal teams co-own the solution.</strong> Change is faster when
            people feel they helped design it.
          </>
        )
      }
    } else if (project.slug === "core-migration") {
      // For Core Migration project, handle bold parts
      if (text.startsWith("Led the gap analysis")) {
        return (
          <>
            <strong>Led the gap analysis</strong> across core banking, payments, and accounting systems.
          </>
        )
      } else if (text.startsWith("Designed and delivered internal middleware tools")) {
        return (
          <>
            <strong>Designed and delivered internal middleware tools</strong> that enabled real-time reconciliation and
            cross-system communication.
          </>
        )
      } else if (text.startsWith("Coordinated technical teams")) {
        return (
          <>
            <strong>Coordinated technical teams</strong> across Boston, Madrid, and Mexico to ensure smooth migration
            execution.
          </>
        )
      } else if (text.startsWith("Supported exception handling workflows")) {
        return (
          <>
            <strong>Supported exception handling workflows</strong> by creating fallback paths for non-standard
            transactions.
          </>
        )
      } else if (text.startsWith("Enabled real-time transaction monitoring")) {
        return (
          <>
            <strong>Enabled real-time transaction monitoring</strong> across legacy and new core platforms.
          </>
        )
      } else if (text.startsWith("Reduced expected downtime by 60%")) {
        return (
          <>
            <strong>Reduced expected downtime by 60%</strong> through phased bridging tools and fallback systems.
          </>
        )
      } else if (text.startsWith("Migrated over 3 million accounts")) {
        return (
          <>
            <strong>Migrated over 3 million accounts</strong> with minimal customer impact.
          </>
        )
      } else if (text.startsWith("Established reusable integration patterns")) {
        return (
          <>
            <strong>Established reusable integration patterns</strong> that were later adopted in other Santander
            regions.
          </>
        )
      } else if (text.startsWith("Maintaining operational continuity")) {
        return (
          <>
            <strong>Maintaining operational continuity</strong> while migrating core systems in phases.
          </>
        )
      } else if (text.startsWith("Reconciling different data models")) {
        return (
          <>
            <strong>Reconciling different data models</strong> and transaction formats between Sovereign and Santander.
          </>
        )
      } else if (text.startsWith("Aligning global and local teams")) {
        return (
          <>
            <strong>Aligning global and local teams</strong> across different time zones, languages, and tech stacks.
          </>
        )
      } else if (text.startsWith("Successful migrations prioritize stability over speed")) {
        return (
          <>
            <strong>Successful migrations prioritize stability over speed.</strong> Customers never care about the tech
            stack — they care about reliability.
          </>
        )
      } else if (text.startsWith("Bridges buy time")) {
        return (
          <>
            <strong>Bridges buy time.</strong> Smart middleware creates breathing room for orderly system replacement.
          </>
        )
      } else if (text.startsWith("Internal communications are as critical")) {
        return (
          <>
            <strong>Internal communications are as critical as technical execution.</strong> Transformation only works
            when everyone moves together.
          </>
        )
      }
    } else if (project.slug === "aquaklare") {
      // For AquaKlare project, handle bold parts
      if (text.startsWith("Founded the brand")) {
        return (
          <>
            <strong>Founded the brand</strong> and led strategy across product development, operations, and digital.
          </>
        )
      } else if (text.startsWith("Built the education-first marketing strategy")) {
        return (
          <>
            <strong>Built the education-first marketing strategy</strong>, using content to demystify contaminants and
            certifications.
          </>
        )
      } else if (text.startsWith("Launched and scaled TikTok presence")) {
        return (
          <>
            <strong>Launched and scaled TikTok presence</strong>, driving organic traffic and building a community
            around wellness and transparency.
          </>
        )
      } else if (text.startsWith("Led the expansion into international markets")) {
        return (
          <>
            <strong>Led the expansion into international markets</strong>, focusing on regions with high water quality
            concerns.
          </>
        )
      } else if (text.startsWith("Grew to $1M+ in annual revenue")) {
        return (
          <>
            <strong>Grew to $1M+ in annual revenue</strong> within 18 months of launch.
          </>
        )
      } else if (text.startsWith("Built an audience of 250,000+ followers")) {
        return (
          <>
            <strong>Built an audience of 250,000+ followers</strong> across TikTok and Instagram through educational
            storytelling.
          </>
        )
      } else if (text.startsWith("Achieved 65% customer retention")) {
        return (
          <>
            <strong>Achieved 65% customer retention</strong> via direct-to-consumer subscription model.
          </>
        )
      } else if (text.startsWith("Expanded into 3 international markets")) {
        return (
          <>
            <strong>Expanded into 3 international markets</strong> with high-margin, data-backed entry points.
          </>
        )
      } else if (text.startsWith("Standing out in a crowded, low-trust market")) {
        return (
          <>
            <strong>Standing out in a crowded, low-trust market</strong> dominated by cheap copycats and SEO traps.
          </>
        )
      } else if (text.startsWith("Educating customers without overwhelming them")) {
        return (
          <>
            <strong>Educating customers without overwhelming them</strong>, especially on technical filtration topics.
          </>
        )
      } else if (text.startsWith("Scaling logistics and fulfillment")) {
        return (
          <>
            <strong>Scaling logistics and fulfillment</strong> while maintaining transparency and high service
            standards.
          </>
        )
      } else if (text.startsWith("Trust scales when it's earned through education")) {
        return (
          <>
            <strong>Trust scales when it's earned through education, not just branding.</strong> People want to know
            what's in their water — and why it matters.
          </>
        )
      } else if (text.startsWith("TikTok is a wellness platform now")) {
        return (
          <>
            <strong>TikTok is a wellness platform now.</strong> The most effective content is authentic, visual, and
            weirdly personal.
          </>
        )
      } else if (text.startsWith("Great packaging and CX beat price wars")) {
        return (
          <>
            <strong>Great packaging and CX beat price wars.</strong> When your product shows up and just works, loyalty
            follows.
          </>
        )
      }
    }
    return text
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white px-6 md:px-16 py-20 font-body">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Back Link */}
        <div>
          <Link href="/work" className="text-sm text-muted-foreground hover:text-white transition">
            ← Back to Work
          </Link>
        </div>

        {/* Title and Teaser */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold leading-tight text-foreground">
            {project.title}
          </h1>
          <p className={`${leagueSpartan.className} uppercase text-white text-xl leading-tight`}>{project.teaser}</p>
        </div>

        {/* Banner Image */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg?height=800&width=1200&query=project image"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.categories.map((tag, index) => (
            <span
              key={index}
              className="text-xs uppercase tracking-wide bg-white/10 text-muted-foreground rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Content */}
        <section className="space-y-10 pt-10">
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            {project.overview.map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          {/* My Role */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">My Role</h2>

            {/* First sentence as a paragraph */}
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4">{project.role[0]}</p>

            {/* Remaining lines as bullet points */}
            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-muted-foreground">
              {project.role.slice(1).map((item, idx) => (
                <li key={idx}>{renderWithBold(item)}</li>
              ))}
            </ul>
          </div>

          {/* Key Contributions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Key Contributions and Wins</h2>
            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-muted-foreground [list-style-position:outside]">
              {project.contributions.map((item, idx) => (
                <li key={idx} className="pl-0">
                  {renderWithBold(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges and Solutions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Challenges and Solutions</h2>
            <ul className="list-disc pl-8 space-y-4 text-base md:text-lg text-muted-foreground [list-style-position:outside]">
              {project.challenges.map((item, idx) => (
                <li key={idx} className="pl-0">
                  {renderWithBold(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">What I Learned</h2>
            <ul className="list-disc pl-8 space-y-4 text-base md:text-lg text-muted-foreground [list-style-position:outside]">
              {project.lessons.map((item, idx) => (
                <li key={idx} className="pl-0">
                  {renderWithBold(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Conclusion</h2>
            {project.conclusion.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Next Project Navigation */}
        <div className="pt-20 border-t border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-6">Next Project</h2>
          <Link href={`/work/${nextProject.slug}`} className="block group">
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden mb-4">
              <Image
                src={nextProject.image || "/placeholder.svg?height=500&width=1000&query=project image"}
                alt={nextProject.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                {nextProject.title}
              </h3>
              <p className="text-base text-muted-foreground">{nextProject.teaser}</p>
            </div>
          </Link>
        </div>

        {/* Final CTA */}
        <div className="pt-20 border-t border-white/10 text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            Like what you see? Let's build something that moves the needle.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-[#141414] font-semibold rounded-full hover:bg-muted transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}
