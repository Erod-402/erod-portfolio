// Update the projects array to include Boring Brew and Roostify projects
export const projects = [
  {
    slug: "openbank",
    title: "OpenBank US – Launching a Digital Bank",
    teaser:
      "Captured $2B in deposits. Built a modern banking platform on legacy infrastructure. Lessons in speed, scale, and strategic trade-offs.",
    image: "/openbank-banner-updated.png", // Updated to use the new banner image
    categories: ["Product Strategy", "Payments", "Embedded Finance", "Digital Innovation"],
    overview: [
      "OpenBank US was one of the most ambitious digital banking launches in the U.S. market.",
      "Within five months, we surpassed $2B in deposits by building a product that blended high-yield savings, embedded lending, and smart payment choices — all wrapped in a modern digital experience.",
      "This wasn't just a launch. It was a blueprint for how to move fast inside a legacy institution.",
    ],
    role: [
      "As part of the three-person C-level strategy team, I led key product, partnership, and payment workstreams:",
      "Product Strategy: Defined the MVP experience, led the banking charter evaluation, and shaped the go-to-market roadmap.",
      "Payments Infrastructure: Took on the Head of Payments Transformation role to build a unified, configurable payment experience with ACH, digital wires, and authentication layers.",
      "Core Banking System RFP: Ran the core banking system selection process, evaluating legacy vs. cloud-native solutions and advising on long-term scalability trade-offs.",
      "Embedded Finance Design: Structured the link between savings and Santander's auto lending unit, enabling OpenBank to become a smart deposit funnel.",
    ],
    contributions: [
      "$2B in deposits captured in five months, doubling early growth targets.",
      "Avoided regulatory delays by advocating for use of Santander's existing charter, accelerating launch readiness.",
      "Modernized payment experience, integrating third party vendors and enabling customer choice on transaction speed and cost.",
      "Influenced core tech decisions, pushing for cloud migration to enable future innovation.",
      "Created high-yield incentive loops, driving adoption of savings products tied to future lending capability.",
    ],
    challenges: [
      "Decision Paralysis on Charter: Resolved internal debates on whether to apply for a new charter or use existing licensing. I aligned stakeholders by outlining the operational and risk benefits of a shortcut using Santander's framework.",
      "Legacy Core Infrastructure: Santander's core was not cloud-native. I ran the RFP and influenced a compromise: launch fast on legacy, while investing in parallel cloud modernization.",
      "Compressed Timeline: We made hard trade-offs on feature scope to meet launch deadlines. For example, instead of building a U.S.-native payments stack from scratch, we localized Santander EU modules and layered U.S.-compliant controls.",
    ],
    lessons: [
      "Launch speed comes from constraint, not chaos. Clarity on what to cut is just as important as what to build.",
      "Legacy systems can slow you down, but smart architecture buys time. The real challenge is balancing long-term tech debt with short-term market capture.",
      'A "global bank" strategy rarely works without local intuition. U.S. customers needed a more tailored, personalized banking flow than what worked in Spain or Germany.',
    ],
    conclusion:
      "OpenBank US proved that with the right strategic alignment and execution muscle, a legacy institution can launch a high-growth digital bank in months, not years.\n\nIt was a masterclass in trade-offs: Speed vs. completeness. Flexibility vs. control. Global brand vs. local product.\n\nThe $2B in deposits was only the beginning. This project cemented how I approach every 0-to-1 challenge today, by starting fast, simplifying complexity, and building with urgency and intention.",
  },
  {
    slug: "apple-subscription",
    title: "Apple Subscription Model – Financing Reinvented",
    teaser:
      "Designed a flexible financing model for Apple devices. Balanced Big Tech urgency with banking compliance. Built the foundation for a rollout across Europe.",
    image: "/apple-subscription-finance.png",
    categories: ["Product Strategy", "Lending", "Partnership", "Digital Innovation"],
    overview: [
      "The Apple Subscription Model was a groundbreaking initiative to reimagine how consumers purchase and upgrade their technology.",
      "Working at the intersection of banking and tech, we created a flexible financing solution that aligned with Apple's brand while meeting complex regulatory requirements across European markets.",
      "It wasn't just about building a lending product — it was about architecting an entirely new consumer experience around trust, automation, and lifecycle value.",
    ],
    role: [
      "As part of a three-person Digital Strategy team reporting to the Head of Consumer Banking, I led key product & partnerships enablement workstreams:",
      "Led the product strategy and financial modeling workstreams for the launch.",
      "Served as the primary liaison between Santander's internal teams and Apple's product and finance leads.",
      "Designed the subscription logic, credit modeling flows, and upgrade pathways within the banking infrastructure.",
      "Managed internal executive alignment and feasibility assessments across risk, compliance, and credit functions.",
    ],
    contributions: [
      "Developed a modular subscription model with 40% higher adoption than legacy financing programs.",
      "Built a compliant, scalable architecture that could flex across multiple markets and regulations.",
      "Streamlined onboarding UX that reduced customer acquisition costs by 25%.",
      "Delivered a working MVP within 60 days and secured internal and partner greenlights.",
    ],
    challenges: [
      "Reconciling Apple's fast innovation cadence with banking's risk-and-control mindset.",
      "Navigating European regulatory fragmentation, especially between Germany and Spain.",
      "Designing a consistent customer experience across different financial backends and credit logic.",
    ],
    lessons: [
      "Cross-industry collaboration needs bilingual product leadership — people who speak both fintech and platform fluently.",
      "Speed without alignment breaks trust. Fast-moving projects must still anchor in shared ground rules.",
      "The best credit products are invisible. Customers don't care about models — they care about flexibility and ease.",
    ],
    conclusion:
      "This project showed me what's possible when customer obsession meets regulatory rigor. While the U.S. rollout was paused, the blueprint enabled European launches under the Zinia brand. It remains one of the best examples of how to fuse Big Tech ambition with banking-grade execution — and how to lead when every stakeholder speaks a different language.",
  },
  {
    slug: "cross-border",
    title: "Cross-Border Payments Strategy – Evaluating Fintech Partnerships",
    teaser:
      "Assessed Remitly, Wise, and internal rails for U.S. to Mexico flows. Designed integration paths for instant and compliant transfers. Learned firsthand how fintechs move faster and smarter.",
    image: "/cross-border-payments.png",
    categories: ["Payments", "Embedded Finance", "Partnership", "Cross-Border Strategy"],
    overview: [
      "Cross-border payments are more than just remittances — they're a reflection of how well a bank can serve global citizens in a real-time world.",
      "I was brought in to design and lead a cross-border payments transformation strategy that started with the high-volume U.S.–Mexico corridor and evolved into a global initiative supporting multicurrency virtual accounts, faster settlements, and smart fintech integrations.",
    ],
    role: [
      "As Head of Payments Transformation, I led the development and rollout of the bank's cross-border and multicurrency strategy:",
      "Defined the strategic roadmap for enabling global citizen capabilities — including faster remittances, multicurrency wallets, and improved FX handling.",
      "Conducted vendor evaluations across Wise, Remitly, and internal Santander rails to assess tradeoffs in cost, speed, compliance, and tech fit.",
      "Designed hybrid infrastructure paths combining fintech APIs and internal systems — balancing regulatory, operational, and technical considerations.",
      "Developed the business case across key corridors, with financial modeling for volume, margin impact, and operational costs.",
      "Scoped a virtual account model for multicurrency hold and conversion, tied to cross-border flows.",
    ],
    contributions: [
      "Cut transfer time from 3 days to under 30 minutes in U.S.–Mexico by integrating fintech partners.",
      "Reduced cost per transaction by 40%, surpassing SWIFT-based models and improving net margin.",
      "Drove 65% growth in cross-border volume within six months of launch.",
      "Established a scalable foundation to expand into Central/South America, Europe, and Asia-Pacific corridors.",
    ],
    challenges: [
      "Legacy system limitations — overcame by implementing API connectors and modular integration layers.",
      "Dual-jurisdiction compliance — mapped AML/KYC obligations across borders and assigned operational ownership.",
      "Internal resistance to fintech partnerships — addressed through joint risk frameworks and clear governance.",
    ],
    lessons: [
      "Fintech partnerships require speed, clarity, and shared accountability — and thrive when integration paths are well-defined.",
      "Virtual account infrastructure is essential for modern cross-border offerings, but success requires deep coordination with treasury and risk.",
      "Cross-border flows are culturally specific — what works in U.S.–Mexico doesn't always apply to Brazil, Colombia, or Spain.",
    ],
    conclusion:
      "This initiative redefined how the bank thinks about cross-border money movement. We proved that with the right partnerships and architecture, traditional institutions can compete on speed, flexibility, and customer experience. The result: a future-ready platform to serve globally connected individuals and businesses — and a new blueprint for cross-border innovation.",
  },
  {
    slug: "boringbrew",
    title: "Boring Brew – Building a Web3 Coffee Brand",
    teaser:
      "Merged NFTs with specialty coffee into a new ownership model. Scaled 100 percent organically, no ad spend. Led to a public company acquisition within 12 months.",
    image: "/boringbrew-web3-coffee.png",
    categories: ["Web3", "E-Commerce", "Blockchain", "Brand Strategy"],
    overview: [
      "Boring Brew was an experiment in reimagining brand ownership — blending digital assets with physical products in a way that created real-world loyalty and utility.",
      "We built a direct-to-consumer coffee company where NFT holders had access to exclusive products, profit sharing models, and early governance rights.",
      "It wasn't a speculative mint. It was a case study in how community, ownership, and tangible value can converge to build sustainable consumer brands.",
    ],
    role: [
      "As a founder and CEO, I led product development and go-to-market strategy:",
      "Founded the concept and developed the tokenomics model tied to real-world coffee products.",
      "Led product development from initial roast sourcing to fulfillment operations.",
      "Built and grew the community from scratch across Twitter, Discord, and Web3 platforms.",
      "Designed revenue-sharing mechanics that aligned physical product sales with NFT ownership tiers.",
    ],
    contributions: [
      "Scaled to 10,000+ community members with zero paid advertising.",
      "Reached $150,000 MRR (monthly recurring revenue) within six months of launch.",
      "Executed a successful acquisition by a publicly traded company within 12 months.",
      "Created a blueprint for Web3 consumer brand building that balanced hype with fundamentals.",
    ],
    challenges: [
      "Educating non-crypto consumers on NFT ownership without overwhelming jargon.",
      "Managing inventory and fulfillment at scale with fluctuating Web3-driven demand spikes.",
      "Sustaining long-term value creation when crypto markets turned volatile.",
    ],
    lessons: [
      "Community beats advertising. When users own part of the brand story, loyalty compounds organically.",
      "Physical products create real utility. Tangible anchors drive credibility for digital-first brands.",
      "Web3 rewards transparency and speed. The faster and more authentically you move, the deeper the community trust.",
    ],
    conclusion:
      "Boring Brew proved that community ownership models can work — but only when they are anchored in real-world products, real revenue, and real storytelling. It taught me how to operate at the messy intersection of culture, commerce, and technology — and how to scale a new brand from 0 to acquisition without a traditional playbook.",
  },
  {
    slug: "roostify",
    title: "Roostify Partnership – Smarter Mortgage Lending",
    teaser:
      "Integrated AI workflows to cut mortgage approvals by 40 percent. Built bridges between old processes and new tech. Proved how smart partnerships can drive real transformation.",
    image: "/roostify-mortgage-ai.png",
    categories: ["AI", "Lending", "Embedded Finance", "Digital Innovation"],
    overview: [
      "Mortgage lending has long been one of the slowest, most paper-heavy processes in banking — frustrating customers and limiting growth.",
      "Through a strategic partnership with Roostify, we integrated AI-powered workflows to dramatically accelerate approvals, automate document handling, and unlock a new standard of efficiency.",
      "This was more than a tech integration. It was a cultural shift inside the organization — showing that speed, automation, and better customer experience could coexist without increasing risk.",
    ],
    role: [
      "As part of a three-person Digital Strategy team reporting to the Head of Consumer Banking, I led key product & partnerships enablement workstreams:",
      "Led the Roostify partnership strategy, working across lending, credit risk, and compliance teams.",
      "Redesigned the mortgage application journey to embed AI verification and smart workflows.",
      "Built the change management plan to drive adoption across front-line and back-office teams.",
      "Established success metrics tied to approval time reduction, manual work elimination, and NPS lift.",
    ],
    contributions: [
      "Reduced mortgage approval times by 40%, from application to conditional approval.",
      "Decreased manual document processing by 60%, freeing up underwriters for higher-value work.",
      "Improved customer satisfaction scores by 35%, measured via NPS and internal surveys.",
      "Created a reusable AI integration playbook for expansion into other lending products.",
    ],
    challenges: [
      "Overcoming skepticism about AI reliability and decision-making accuracy in regulated workflows.",
      "Integrating with legacy mortgage servicing systems that were not API-friendly.",
      "Managing change fatigue across teams used to manual processes and waterfall project cycles.",
    ],
    lessons: [
      "AI succeeds when it enhances, not replaces, human judgment. Underwriters embraced automation once it made their jobs easier, not obsolete.",
      "Legacy systems are rarely the bottleneck. Culture and process inertia are often bigger barriers than technology.",
      "Partnerships work best when internal teams co-own the solution. Change is faster when people feel they helped design it.",
    ],
    conclusion:
      "The Roostify partnership proved that digital transformation in lending is possible — but only if you align technology, process, and people. It taught me that real operational lift happens when you redesign incentives and experiences together — not just bolt new tech onto old workflows.",
  },
  {
    slug: "core-migration",
    title: "Santander x Sovereign – Bridging Systems During Core Transformation",
    teaser:
      "Closed system gaps during a major core migration. Designed internal tools that enabled cross-system communication. Learned how real banking transformations happen from the inside.",
    image: "/core-migration-santander.png",
    categories: ["Core Banking", "Payments", "Accounting", "Systems Integration"],
    overview: [
      "During Santander's acquisition and integration of Sovereign Bank, the goal was clear but complex: migrate millions of accounts onto a unified core without disrupting daily banking operations.",
      "Legacy systems, custom processes, and data inconsistencies made this an enormous technical and operational challenge.",
      "Rather than attempt a one-shot migration, we built bridges — designing tools that allowed critical systems to communicate even as the cores were gradually replaced underneath.",
    ],
    role: [
      "As part of the T&O transformation team, I led product, payments, and accounts workstreams:",
      "Led the gap analysis across core banking, payments, and accounting systems.",
      "Designed and delivered internal middleware tools that enabled real-time reconciliation and cross-system communication.",
      "Coordinated technical teams across Boston, Madrid, and Mexico to ensure smooth migration execution.",
      "Supported exception handling workflows by creating fallback paths for non-standard transactions.",
    ],
    contributions: [
      "Enabled real-time transaction monitoring across legacy and new core platforms.",
      "Reduced expected downtime by 60% through phased bridging tools and fallback systems.",
      "Migrated over 3 million accounts with minimal customer impact.",
      "Established reusable integration patterns that were later adopted in other Santander regions.",
    ],
    challenges: [
      "Maintaining operational continuity while migrating core systems in phases.",
      "Reconciling different data models and transaction formats between Sovereign and Santander.",
      "Aligning global and local teams across different time zones, languages, and tech stacks.",
    ],
    lessons: [
      "Successful migrations prioritize stability over speed. Customers never care about the tech stack — they care about reliability.",
      "Bridges buy time. Smart middleware creates breathing room for orderly system replacement.",
      "Internal communications are as critical as technical execution. Transformation only works when everyone moves together.",
    ],
    conclusion:
      "The Santander x Sovereign core transformation taught me that real-world banking modernization is messy, incremental, and deeply human. It's not just about data — it's about designing resilient systems, managing expectations, and solving for continuity first. These lessons shaped how I lead complex transformations ever since.",
  },
  {
    slug: "aquaklare",
    title: "AquaKlare – Building a Health-Driven E-Commerce Brand",
    teaser:
      "Launched a high-trust water filter brand in crowded markets. Shifted strategy to TikTok and international growth. Proved that transparency, speed, and storytelling win.",
    image: "/aquaklare-water-filtration.png",
    categories: ["E-Commerce", "Health and Wellness", "Growth Strategy", "Brand Strategy"],
    overview: [
      "AquaKlare was born from a personal insight — families wanted safer water but didn't know who to trust. The water filter market was saturated with exaggerated claims, vague specs, and misleading certifications.",
      "So we built something better. A direct-to-consumer brand focused on education, transparency, and trust — designed to help consumers make informed decisions without needing a chemistry degree.",
      "It wasn't just a Shopify site. It was a full-stack brand built from the ground up, combining product sourcing, packaging, content strategy, and growth into one lean operation.",
    ],
    role: [
      "As a founder and CEO, I led product development and go-to-market strategy:",
      "Founded the brand and led strategy across product development, operations, and digital.",
      "Built the education-first marketing strategy, using content to demystify contaminants and certifications.",
      "Launched and scaled TikTok presence, driving organic traffic and building a community around wellness and transparency.",
      "Led the expansion into international markets, focusing on regions with high water quality concerns.",
    ],
    contributions: [
      "Grew to $1M+ in annual revenue within 18 months of launch.",
      "Built an audience of 250,000+ followers across TikTok and Instagram through educational storytelling.",
      "Achieved 65% customer retention via direct-to-consumer subscription model.",
      "Expanded into 3 international markets with high-margin, data-backed entry points.",
    ],
    challenges: [
      "Standing out in a crowded, low-trust market dominated by cheap copycats and SEO traps.",
      "Educating customers without overwhelming them, especially on technical filtration topics.",
      "Scaling logistics and fulfillment while maintaining transparency and high service standards.",
    ],
    lessons: [
      "Trust scales when it's earned through education, not just branding. People want to know what's in their water — and why it matters.",
      "TikTok is a wellness platform now. The most effective content is authentic, visual, and weirdly personal.",
      "Great packaging and CX beat price wars. When your product shows up and just works, loyalty follows.",
    ],
    conclusion:
      "AquaKlare proved that you can build trust at scale — even in a market full of noise — if you lead with clarity and honesty. It reminded me that great DTC brands aren't just about conversion rates, they're about solving real problems with real products and a voice people believe in.",
  },
]

export type Project = (typeof projects)[0]
