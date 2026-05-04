/* Site content — single source of truth */

const SITE_DATA = {
  name: "Kevin Angulo",
  role: "Senior Full-Stack Developer",
  tagline: "Shipping production web apps since 2000.",
  location: "Revere, MA · USA",
  email: "kevinangulo@gmail.com",
  phone: "+1 857.275.9445",
  whatsapp: "18572759445",
  paypal: "https://paypal.me/kevinangulo",
  linkedin: "https://www.linkedin.com/in/kevinangulo/",
  github: "https://github.com/kangulo",
  site: "kevinangulo.com",

  stats: [
    { num: "25+", label: "Years Building" },
    { num: "100+", label: "Projects Shipped" },
    { num: "12", label: "Years @ PDVSA" },
    { num: "9", label: "Years @ GoingClear" },
  ],

  skills: [
    {
      icon: "FE",
      title: "Frontend",
      years: "20+ years",
      tags: ["React", "Vue", "Angular", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "SASS", "Tailwind", "Bootstrap", "jQuery"],
    },
    {
      icon: "BE",
      title: "Backend",
      years: "25+ years",
      tags: ["PHP", "Python", "Node.js", "Java", "C#", "REST APIs", "GraphQL", "Laravel"],
    },
    {
      icon: "DB",
      title: "Databases",
      years: "25+ years",
      tags: ["MySQL", "PostgreSQL", "MongoDB", "MS SQL Server", "Oracle", "Firebase", "Redis"],
    },
    {
      icon: "MO",
      title: "Mobile & PWA",
      years: "8+ years",
      tags: ["Ionic", "React Native", "PWA", "Capacitor"],
    },
    {
      icon: "CM",
      title: "CMS & eCommerce",
      years: "15+ years",
      tags: ["WordPress", "Joomla", "WooCommerce", "Shopify", "Headless CMS"],
    },
    {
      icon: "OP",
      title: "DevOps & Tools",
      years: "20+ years",
      tags: ["Git", "Linux", "Docker", "CI/CD", "AWS", "DigitalOcean", "Nginx"],
    },
  ],

  services: [
    {
      num: "01",
      title: "Web Apps & SaaS",
      desc: "End-to-end builds for dashboards, portals, and custom software — from schema to ship.",
      points: ["Auth, roles & billing", "Realtime features", "Admin dashboards"],
    },
    {
      num: "02",
      title: "eCommerce Stores",
      desc: "Custom stores with a focus on conversion, performance, and maintainability.",
      points: ["WooCommerce & Shopify", "Headless setups", "Payments & shipping"],
    },
    {
      num: "03",
      title: "Progressive Web Apps",
      desc: "Installable, offline-capable apps that feel native without the app-store tax.",
      points: ["Offline-first data", "Push notifications", "iOS & Android"],
    },
    {
      num: "04",
      title: "Legacy Modernization",
      desc: "Untangling old PHP, jQuery, or Angular codebases into maintainable modern stacks.",
      points: ["Safe incremental rewrites", "Database migrations", "API extraction"],
    },
    {
      num: "05",
      title: "Technical Leadership",
      desc: "Embedded lead-dev role: code review, architecture decisions, and mentoring your team.",
      points: ["Architecture & planning", "PR reviews", "Hiring support"],
    },
    {
      num: "06",
      title: "Performance & Audits",
      desc: "Diagnose what's slow, fragile, or insecure — and a concrete plan to fix it.",
      points: ["Core Web Vitals", "Security review", "DB query tuning"],
    },
  ],

  experience: [
    {
      years: "2017 — Present",
      role: "Lead Web Developer",
      company: "GoingClear Interactive · Boston, MA",
      desc: "Responsible for software development across all company projects — websites, eCommerce sites, web apps, PWAs, and mobile apps. I coordinate and oversee the work of other developers, ensuring adherence to quality standards and shipping timelines.",
      stack: ["PHP", "WordPress", "Vue", "React", "Ionic", "MySQL"],
    },
    {
      years: "2004 — 2016",
      role: "Web Application Developer",
      company: "PDVSA (Petróleos de Venezuela) · Venezuela",
      desc: "Built web applications for the Exploration & Production division of one of the world's largest oil companies. Worked across PHP, JSP, and Java stacks with frameworks like YUI, ExtJS, AngularJS, plus CMS integrations and early mobile development with Ionic.",
      stack: ["PHP", "Java", "JSP", "ExtJS", "AngularJS", "Oracle"],
    },
    {
      years: "2001 — 2004",
      role: "Automation Project Manager",
      company: "Traki Distribuidora · Venezuela",
      desc: "Led the automation project for 54 Traki stores across Venezuela — datacenter setup, POS configuration, VPN networks, and custom systems for inventory, accounting, and bill payments.",
      stack: ["VB", "SQL Server", "POS Systems", "Networking"],
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
    { title: "GoingClear Projects", meta: "Lead dev on 100+ client sites across industries.", tags: ["PHP", "Vue", "WordPress"] },
    { title: "PDVSA E&P Platform", meta: "Internal platform for oil exploration & production workflows.", tags: ["Java", "ExtJS", "Oracle"] },
    { title: "Traki POS Rollout", meta: "Automation of 54 retail locations across Venezuela.", tags: ["VB", "SQL Server"] },
    { title: "PHP Object Generator", meta: "Open-source contributor — ORM code generator.", tags: ["PHP", "Open Source"] },
    { title: "POG + ExtJS", meta: "Open-source project bridging POG with the ExtJS frontend.", tags: ["PHP", "ExtJS"] },
    { title: "kevinangulo.com", meta: "This site. Built from scratch, hand-tuned.", tags: ["React", "CSS"] },
  ],

  rates: [
    {
      name: "Hourly",
      sub: "Best for audits, small features, and ongoing support.",
      price: "$95",
      unit: "/ hour",
      features: [
        "Weekly invoicing",
        "No minimum commitment",
        "Pair programming available",
        "Async code review",
      ],
      cta: "Book hourly",
    },
    {
      name: "Project",
      sub: "Most popular — fixed scope, fixed price, fixed timeline.",
      price: "$6k+",
      unit: "/ project",
      features: [
        "Discovery & scoping call",
        "Fixed price quote",
        "2 rounds of revisions",
        "Post-launch support",
      ],
      cta: "Start a project",
      featured: true,
    },
    {
      name: "Retainer",
      sub: "Dedicated capacity each month — part-time lead dev.",
      price: "$8k",
      unit: "/ month",
      features: [
        "~40 hrs/month reserved",
        "Slack + weekly sync",
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
      q: "Do you work remotely, or on-site in Boston?",
      a: "Both. I've been working remotely for years and most of my engagements are fully remote. For Boston-area clients, I'm happy to come on-site for kickoffs, key meetings, or occasional pairing.",
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
      q: "Which tech stacks do you prefer?",
      a: "I'm genuinely stack-agnostic after 25 years, but I'm fastest and most opinionated in PHP/Laravel, Vue/React, and Node. For databases: PostgreSQL or MySQL. For mobile: Ionic or React Native. I'll happily use whatever fits your existing codebase.",
    },
    {
      q: "Do you sign NDAs?",
      a: "Absolutely. Send yours over or use mine — either works. I take client confidentiality seriously.",
    },
    {
      q: "What does your process look like?",
      a: "Short discovery call → written scope & quote → kickoff → weekly demos on Fridays → staging handoff → production launch. For retainers it's lighter: weekly sync, shared Linear/Jira, async Slack.",
    },
    {
      q: "Can I support your work without hiring you?",
      a: "Yes, and thank you! There's a PayPal tip jar further down the page. Even a small tip means a lot — it helps me keep contributing to open source and writing freely.",
    },
  ],
};

window.SITE_DATA = SITE_DATA;
