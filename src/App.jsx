import { motion } from "framer-motion";
import profile_pic from "./assets/kev-profile.jpg"

export default function KevinAnguloResume() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Tailwind CSS", "D3.js", "Chart.js","shadcn/ui"],
    backend: ["Node.js", "Python", "PHP", "Django", "REST APIs", "WordPress", "API Integrations"],
    cloud: ["AWS", "EC2", "Elastic Beanstalk", "RDS", "S3", "Vercel", "GitHub Actions"],
    ai: ["OpenAI APIs", "RAG Systems", "AI Chatbots", "Vector Databases", "AI Search"],
    database: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
    cms: ["WordPress", "HubSpot", "Shopify", "WooCommerce", "Webflow", "Headless CMS"],
  };

  const projects = [
    {
      title: "Real-Time Odds & Market Monitoring Platform",
      description:
        "Architected and deployed a real-time market monitoring ecosystem using AWS, Django APIs, React, WordPress, and subscription-based SaaS workflows.",
      tech: "React • Django • AWS • WordPress • WooCommerce • Python",
    },
    {
      title: "AI-assistant for a Book Searching Platform",
      description:
        "Created AI-powered conversational recommendation experiences integrated with Zoho CRM synchronization and advanced product discovery.",
      tech: "AI Integrations • WordPress • Zoho CRM • Custom APIs",
    },
    {
      title: "F Prime Capital Fintech Index",
      description:
        "Built advanced fintech analytics dashboards integrating GitHub APIs, CSV data pipelines, regression calculations, and interactive D3.js visualizations.",
      tech: "React • D3.js • GitHub API • JavaScript • WordPress",
      link: "https://fintechindex.fprimecapital.com/",
    },
    {
      title: "Insurance Broker Portal & Benefits Platform",
      description:
        "Developed enterprise payroll and benefits analysis tools with dynamic calculations, PDF generation, and hybrid SPA architecture.",
      tech: "React • REST APIs • WordPress • jQuery",
      link: "https://www.safeharborsavings.com/",
    },    
    {
      title: "Amigo Social Recommendation Platform",
      description:
        "Designed a headless WordPress social recommendation application using React and API-driven architecture.",
      tech: "Headless WordPress • React • REST APIs",
      link: "https://www.amigo.app/",
    },
    {
      title: "Global Compensation Survey Platform",
      description:
        "Built interactive compensation analytics dashboards with real-time charting and advanced filtering systems.",
      tech: "React • Chart.js • JavaScript • WordPress",
      link: "https://compsurvey.vcplatform.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2 text-cyan-300 text-sm">
              Available for Technical Leadership & Architecture Roles
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Kevin
                <span className="block text-cyan-400">Angulo</span>
              </h1>

              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-200">
                  Solutions Architect
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                  Building scalable cloud-based platforms, AI-powered products,
                  enterprise applications, and modern digital ecosystems for
                  over 25 years.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-300">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                📍 Boston, MA
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                ✉️ kevinangulo@gmail.com
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                📱 857-275-9445
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="Resume_Updated_April_2022.pdf"
                target="_blank"
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-6 py-3 rounded-2xl transition-all duration-300"
              >
                Resume
              </a>

              <a
                href="https://github.com/kangulo"
                target="_blank"
                className="bg-white/5 border border-white/10 hover:border-cyan-400/40 px-6 py-3 rounded-2xl transition-all duration-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kevinangulo/?locale=en-US"
                target="_blank"
                className="bg-white/5 border border-white/10 hover:border-cyan-400/40 px-6 py-3 rounded-2xl transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile_pic}
                alt="Kevin Angulo"
                className="relative w-[320px] h-[420px] object-cover rounded-[2rem] border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="mt-24 grid lg:grid-cols-3 gap-10">
          <div>
            <div className="sticky top-10">
              <h3 className="text-3xl font-bold mb-4">About</h3>
              <div className="w-20 h-1 bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm">
              <p className="text-lg text-slate-300 leading-relaxed">
                Solutions Architect with deep
                expertise across frontend engineering, backend systems, cloud
                infrastructure, AI integrations, and product-focused digital
                experiences. Experienced leading multidisciplinary teams,
                managing enterprise deployments, architecting scalable
                ecosystems, and collaborating directly with stakeholders and
                clients.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-900/40 rounded-2xl p-6 border border-white/5">
                  <div className="text-4xl font-black text-cyan-400">25+</div>
                  <div className="text-slate-400 mt-2">Years Experience</div>
                </div>

                <div className="bg-slate-900/40 rounded-2xl p-6 border border-white/5">
                  <div className="text-4xl font-black text-cyan-400">DevOps</div>
                  <div className="text-slate-400 mt-2">Cloud Architecture & Deployments, AWS, Vercel</div>
                </div>

                <div className="bg-slate-900/40 rounded-2xl p-6 border border-white/5">
                  <div className="text-4xl font-black text-cyan-400">AI</div>
                  <div className="text-slate-400 mt-2">RAG Systems & OpenAI Integrations</div>
                </div>

                <div className="bg-slate-900/40 rounded-2xl p-6 border border-white/5">
                  <div className="text-4xl font-black text-cyan-400">Lead</div>
                  <div className="text-slate-400 mt-2">Technical Leadership & Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-bold">Technical Expertise</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8"
              >
                <h4 className="text-xl font-semibold uppercase mb-6 text-cyan-300">
                  {category}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="bg-slate-900/60 border border-white/10 px-4 py-2 rounded-xl text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-bold">Professional Experience</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-400/20 rounded-[2rem] p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <h4 className="text-3xl font-bold">GoingClear Interactive</h4>
                  <p className="text-cyan-300 text-lg mt-2">
                    Lead Web Developer / Technical Lead
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-slate-300">
                  2017 — Present
                </div>
              </div>

              <div className="mt-8 grid lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Leading development initiatives across enterprise websites,
                    SaaS platforms, eCommerce systems, AI-powered applications,
                    Progressive Web Apps, and cloud-based ecosystems.
                  </p>
                </div>

                <div>
                  <ul className="space-y-4 text-slate-300">
                    <li>• Architected headless CMS and hybrid SPA platforms</li>
                    <li>• Managed AWS deployments and cloud infrastructure</li>
                    <li>• Built AI-powered recommendation and chatbot systems</li>
                    <li>• Led client-facing technical strategy and delivery</li>
                    <li>• Coordinated multidisciplinary engineering workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-bold">Featured Projects</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/30 rounded-[2rem] p-8 transition-all duration-300"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h4>

                    <p className="text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="text-cyan-300 text-sm mb-4">
                      {project.tech}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-white hover:text-cyan-300 transition-colors duration-300"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 pb-10">
          <div className="bg-gradient-to-r from-cyan-500/10 to-slate-900 border border-white/10 rounded-[2rem] p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Let’s Build Something Exceptional
            </h3>

            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
              Open to leadership opportunities involving modern web platforms,
              cloud architecture, AI-enhanced products, and scalable digital
              ecosystems.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="mailto:kevinangulo@gmail.com"
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-6 py-3 rounded-2xl transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
