/* Site content — single source of truth */

const SITE_DATA = {
  name: "Kevin Angulo",
  role: "Senior Full-Stack Developer · AI-Augmented",
  tagline: "25 years of engineering, now amplified by AI.",
  location: "Revere, MA · USA",
  email: "kevinangulo@gmail.com",
  phone: "+1 857.275.9445",
  whatsapp: "18572759445",
  paypal: "https://paypal.me/kevinangulo",
  linkedin: "https://www.linkedin.com/in/kevinangulo/",
  github: "https://github.com/kangulo",
  site: "kevinangulo.com",

  stats: [
    { num: "25+", label: "Years Engineering" },
    { num: "3×", label: "Faster w/ AI Pairing" },
    { num: "100+", label: "Projects Shipped" },
    { num: "2022", label: "Adopted AI Daily" },
  ],

  skills: [
    {
      icon: "AI",
      title: "AI-Augmented Dev",
      years: "Daily driver since 2022",
      tags: ["Claude Code", "Cursor", "GitHub Copilot", "ChatGPT", "v0", "Windsurf", "Prompt Engineering", "Context Engineering", "AI Code Review", "LLM Evaluation"],
    },
    {
      icon: "LLM",
      title: "LLM Integration",
      years: "3+ years",
      tags: ["OpenAI API", "Anthropic API", "Gemini", "RAG", "Vector DBs", "Pinecone", "pgvector", "LangChain", "Vercel AI SDK", "Streaming UIs", "Function Calling"],
    },
    {
      icon: "FE",
      title: "Frontend",
      years: "20+ years",
      tags: ["React", "Next.js", "Vue", "Angular", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind", "SASS", "shadcn/ui"],
    },
    {
      icon: "BE",
      title: "Backend",
      years: "25+ years",
      tags: ["PHP", "Laravel", "Python", "FastAPI", "Node.js", "Java", "C#", "REST APIs", "GraphQL", "Serverless"],
    },
    {
      icon: "DB",
      title: "Databases",
      years: "25+ years",
      tags: ["PostgreSQL", "MySQL", "MongoDB", "MS SQL Server", "Oracle", "Firebase", "Redis", "supabase"],
    },
    {
      icon: "OP",
      title: "DevOps & Cloud",
      years: "20+ years",
      tags: ["Git", "Docker", "Linux", "AWS", "Vercel", "CI/CD", "Nginx", "DigitalOcean"],
    },
    {
      icon: "MO",
      title: "Mobile & PWA",
      years: "8+ years",
      tags: ["Ionic", "React Native","Flutter", "PWA"],
    },
    {
      icon: "CM",
      title: "CMS & eCommerce",
      years: "15+ years",
      tags: ["WordPress", "WooCommerce", "Shopify", "Headless CMS", "Webflow","HubSpot"],
    },
  ],

  services: [
    {
      num: "01",
      title: "AI-Native Web Apps",
      desc: "Products with LLMs baked in from day one — chat interfaces, RAG search, AI copilots, agentic flows.",
      points: ["OpenAI / Anthropic integration", "Vector search & RAG", "Streaming UIs & tool calling"],
    },
    {
      num: "02",
      title: "Web Apps & SaaS",
      desc: "End-to-end dashboards, portals, and custom software — shipped 2–3× faster with AI-assisted delivery.",
      points: ["Auth, roles & billing", "Realtime features", "Admin dashboards"],
    },
    {
      num: "03",
      title: "Legacy + AI Modernization",
      desc: "Untangle old PHP, jQuery, or Angular codebases — and layer AI features on top where they pay off.",
      points: ["Safe incremental rewrites", "AI-assisted refactors", "API extraction"],
    },
    {
      num: "04",
      title: "eCommerce & PWAs",
      desc: "Custom stores and installable apps focused on conversion, performance, and maintainability.",
      points: ["WooCommerce & Shopify", "Headless setups", "Offline-first PWAs"],
    },
    {
      num: "05",
      title: "Technical Leadership",
      desc: "Embedded lead-dev role: architecture, code review, AI-workflow adoption, and mentoring your team.",
      points: ["Architecture & planning", "AI tooling rollout", "Hiring support"],
    },
    {
      num: "06",
      title: "Audits & AI Readiness",
      desc: "Diagnose what's slow, fragile, or insecure — plus a plan for where AI genuinely helps (and where it doesn't).",
      points: ["Core Web Vitals", "Security review", "AI opportunity mapping"],
    },
  ],

  aiWorkflow: [
    {
      num: "01",
      title: "Context-first engineering",
      desc: "I treat prompts like interfaces — versioned, tested, and wired to real project context. Claude Code, Cursor, and custom agents sit on top of a codebase that's documented for humans and models alike.",
    },
    {
      num: "02",
      title: "Reviewed, not rubber-stamped",
      desc: "AI writes the first draft; 25 years of engineering judgment reviews every line. You get the speed of AI without the sloppy bugs — I know what to question because I've written it by hand for decades.",
    },
    {
      num: "03",
      title: "LLM features that ship",
      desc: "RAG pipelines, streaming chat, function-calling agents, eval harnesses. I've moved past demos into production — including cost, latency, and quality measurement from day one.",
    },
    {
      num: "04",
      title: "Teaching the team",
      desc: "I bring AI workflows to the teams I lead. Prompt libraries, agent guidelines, safe code-generation policies, and realistic expectations about where AI helps and where it drags.",
    },
  ],

  experience: [
    {
      years: "2017 — Present",
      role: "Lead Web Developer",
      company: "GoingClear Interactive · Boston, MA",
      desc: "Lead development across all company projects — websites, eCommerce, web apps, PWAs, mobile. Introduced AI-assisted workflows (Claude Code, Cursor, Copilot) across the team, cutting delivery times significantly while maintaining code quality through structured review.",
      stack: ["PHP", "Laravel", "Vue", "React", "Claude Code", "Cursor", "WordPress"],
    },
    {
      years: "2004 — 2016",
      role: "Web Application Developer",
      company: "PDVSA (Petróleos de Venezuela) · Venezuela",
      desc: "Built web applications for the Exploration & Production division of one of the world's largest oil companies. Worked across PHP, JSP, and Java stacks with frameworks like YUI, ExtJS, AngularJS — plus CMS integrations and early mobile development with Ionic.",
      stack: ["PHP", "Java", "JSP", "ExtJS", "AngularJS", "Oracle"],
    },
    {
      years: "2001 — 2004",
      role: "Automation Project Manager",
      company: "Traki Distribuidora · Venezuela",
      desc: "Led the automation project for 54 Traki stores across Venezuela — datacenter setup, POS configuration, VPN networks, and custom systems for inventory, accounting, and bill payments.",
      stack: ["VB", "SQL Server", "POS", "Networking"],
    },
    {
      years: "1999 — 2001",
      role: "IT Support Specialist",
      company: "3D Vision · Venezuela",
      desc: "Hardware replacement, networking, and custom application development in Microsoft Visual Basic. First professional coding role.",
      stack: ["Visual Basic", "Networking", "Hardware"],
    },
  ],

  projects: [
    { title: "AI-Assisted Client Delivery", meta: "Lead dev on 100+ sites, now with Claude Code in the loop for every project.", tags: ["Claude Code", "Vue", "PHP"] },
    { title: "LLM Integration Work", meta: "RAG chat, document search, and agentic features across client products.", tags: ["OpenAI", "RAG", "pgvector"] },
    { title: "PDVSA E&P Platform", meta: "Internal platform for oil exploration & production workflows.", tags: ["Java", "ExtJS", "Oracle"] },
    { title: "Traki POS Rollout", meta: "Automation of 54 retail locations across Venezuela.", tags: ["VB", "SQL Server"] },
    { title: "PHP Object Generator", meta: "Open-source contributor — ORM code generator.", tags: ["PHP", "Open Source"] },
    { title: "kevinangulo.com", meta: "This site. Designed and coded with AI pair programming.", tags: ["React", "Claude", "Next.js"] },
  ],

  rates: [
    {
      name: "Hourly",
      sub: "Best for audits, small features, and AI pairing sessions.",
      price: "$95",
      unit: "/ hour",
      features: [
        "Weekly invoicing",
        "No minimum commitment",
        "AI pair programming",
        "Async code review",
      ],
      cta: "Book hourly",
    },
    {
      name: "Project",
      sub: "Most popular — fixed scope, fixed price, AI-accelerated delivery.",
      price: "$6k+",
      unit: "/ project",
      features: [
        "Discovery & scoping call",
        "Fixed price quote",
        "AI-augmented delivery",
        "2 rounds of revisions",
        "Post-launch support",
      ],
      cta: "Start a project",
      featured: true,
    },
    {
      name: "Retainer",
      sub: "Dedicated capacity each month — part-time lead dev + AI champion.",
      price: "$8k",
      unit: "/ month",
      features: [
        "~40 hrs/month reserved",
        "Slack + weekly sync",
        "AI workflow coaching",
        "Architecture reviews",
        "Priority response",
      ],
      cta: "Reserve retainer",
    },
  ],

  faqs: [
    {
      q: "Are you available for new projects right now?",
      a: "Yes — I'm currently accepting one or two new contract projects. The best way to check timing is to send a short brief through the form below; I usually reply within 24 hours.",
    },
    {
      q: "What's your typical engagement size?",
      a: "Project work usually starts around $6k for a well-scoped build and goes up from there. Retainers are $8k/month for part-time capacity. For quick audits or small changes, hourly at $95 is the simplest path.",
    },
    {
      q: "Can you lead a team, or do you prefer to build solo?",
      a: "Both. I've led development teams at GoingClear for nearly a decade — code review, architecture, hiring support, standups — and I still write production code daily. I can slot in as a sole builder or as a tech lead embedded in your team.",
    },
    {
      q: "Which AI tools do you rely on most?",
      a: "Claude Code and Cursor for coding, Claude and ChatGPT for planning and writing, v0 for UI exploration, GitHub Copilot as a background autocomplete. For integrations: OpenAI, Anthropic, and Gemini APIs, plus the Vercel AI SDK for streaming UIs.",
    },
    {
      q: "Do you work remotely, or on-site in Boston?",
      a: "Both. Most of my engagements are fully remote. For Boston-area clients, I'm happy to come on-site for kickoffs, key meetings, or occasional pairing.",
    },
    {
      q: "What does your process look like?",
      a: "Short discovery call → written scope & quote → kickoff → weekly demos on Fridays → staging handoff → production launch. For retainers it's lighter: weekly sync, shared Linear/Jira, async Slack.",
    },
    {
      q: "Can you lead a team and bring them up on AI workflows?",
      a: "Yes — I've been doing exactly this at GoingClear. Rolling out Claude Code and Cursor to a team takes more than buying seats: it needs prompt libraries, review norms, and a clear sense of what AI should and shouldn't touch. I've built that playbook.",
    },
    {
      q: "Do you sign NDAs?",
      a: "Absolutely. Send yours over or use mine — either works. I take client confidentiality seriously, including around any training data or AI usage policies your company has.",
    },
  ],
};

window.SITE_DATA = SITE_DATA;
