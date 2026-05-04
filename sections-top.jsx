/* Page sections: Nav, Hero, Skills, Services, Experience, Projects */

function Nav({ theme, setTheme }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">KA</span>
          <span>Kevin Angulo</span>
        </a>
        <div className="nav-links">
          <a href="#skills" className="nav-link-hide">Skills</a>
          <a href="#services" className="nav-link-hide">Services</a>
          <a href="#experience" className="nav-link-hide">Experience</a>
          <a href="#rates" className="nav-link-hide">Rates</a>
          <a href="#faq" className="nav-link-hide">FAQ</a>
          <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? <Icon.Sun /> : <Icon.Moon />}
          </button>
          <a href="#contact" className="nav-cta">Hire me <Icon.Arrow /></a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const d = window.SITE_DATA;
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div className="reveal">
          <div className="hero-status">
            <span className="status-dot"></span>
            Available for contract work · Starting May 2026
          </div>
          <div className="hero-years">
            <span className="years-num"><CountUp target={25} /></span>
            <span className="years-plus">+</span>
            <span className="years-label">Years shipping<br/>production code</span>
          </div>
          <h1 className="hero-title">
            I'm Kevin — a <span className="accent">senior full-stack developer</span> who's been building web & desktop apps since the late 1990s.
          </h1>
          <p className="hero-desc">
            PHP, JavaScript, Python, React, Vue, Laravel, SQL — and a lot of things that came before them. I lead a team at a Boston agency by day, and I take on select contract work for founders, agencies, and enterprises who need a senior hand they can trust.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Start a project <Icon.Arrow /></a>
            <a href={`https://wa.me/${d.whatsapp}`} target="_blank" rel="noopener" className="btn btn-whatsapp"><Icon.WhatsApp /> WhatsApp</a>
            <a href="#experience" className="btn btn-secondary">See experience <Icon.ArrowDown /></a>
          </div>
          <div className="hero-meta">
            {d.stats.map((s, i) => (
              <div className="meta-item" key={i}>
                <div className="meta-num">{s.num}</div>
                <div className="meta-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <IdCard />
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function IdCard() {
  const d = window.SITE_DATA;
  return (
    <div className="id-card">
      <div className="id-top">
        <span className="id-logo">KA // ID.001</span>
        <span className="id-dot"></span>
      </div>
      <div className="avatar-row">
        <div className="avatar"><img src="kev-profile.jpg" alt="Kevin Angulo" /></div>
        <div className="avatar-info">
          <div className="av-name">Kevin Angulo</div>
          <div className="av-role">Senior Full-Stack Developer</div>
        </div>
      </div>
      <div className="id-specs">
        <div>
          <div className="spec-label">Based in</div>
          <div className="spec-value">{d.location}</div>
        </div>
        <div>
          <div className="spec-label">Timezone</div>
          <div className="spec-value mono">UTC −5 (EST)</div>
        </div>
        <div>
          <div className="spec-label">Languages</div>
          <div className="spec-value">EN · ES · PT</div>
        </div>
        <div>
          <div className="spec-label">Since</div>
          <div className="spec-value mono">1999</div>
        </div>
      </div>
      <div className="id-socials">
        <a href={d.github} target="_blank" rel="noopener" className="social-btn"><Icon.Github /> GitHub</a>
        <a href={d.linkedin} target="_blank" rel="noopener" className="social-btn"><Icon.LinkedIn /> LinkedIn</a>
        <a href={`mailto:${d.email}`} className="social-btn"><Icon.Mail /> Email</a>
      </div>
    </div>
  );
}

function Marquee() {
  const words = ["PHP", "Python", "React", "Vue", "Laravel", "Node", "TypeScript", "PostgreSQL", "MongoDB", "Ionic", "WordPress", "AWS"];
  const row = [...words, ...words];
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {row.map((w, i) => <span key={i}>{w}</span>)}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="reveal">
        <div className="section-eyebrow">01 // Capabilities</div>
        <h2 className="section-title">A stack deep enough to ship anything on the web.</h2>
        <p className="section-sub">25 years means I've worked with most things, loved some, and learned what holds up. Here's where I'm strongest today.</p>
      </div>
      <div className="skills-grid">
        {window.SITE_DATA.skills.map((s, i) => (
          <div className="skill-card reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-title">{s.title}</div>
            <div className="skill-years">{s.years}</div>
            <div className="tag-cloud">
              {s.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section container services-section" id="services">
      <div className="reveal">
        <div className="section-eyebrow">02 // What I build</div>
        <h2 className="section-title">Six things I'm hired for, over and over.</h2>
        <p className="section-sub">If your project looks like one of these, we can probably skip the sales call and get to scoping.</p>
      </div>
      <div className="services-grid">
        {window.SITE_DATA.services.map((s, i) => (
          <div className="service-card reveal" key={i} style={{ transitionDelay: `${i * 50}ms` }}>
            <div className="service-num">{s.num}</div>
            <div className="service-title">{s.title}</div>
            <p className="service-desc">{s.desc}</p>
            <ul className="service-points">
              {s.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="reveal">
        <div className="section-eyebrow">03 // Career</div>
        <h2 className="section-title">Four roles. One long through-line.</h2>
        <p className="section-sub">From my first IT support job in 1999 to leading development at a Boston agency today.</p>
      </div>
      <div className="timeline">
        {window.SITE_DATA.experience.map((e, i) => (
          <div className="tl-item reveal" key={i}>
            <div className="tl-dot"></div>
            <div className="tl-years">{e.years}</div>
            <div className="tl-role">{e.role}</div>
            <div className="tl-company">{e.company}</div>
            <p className="tl-desc">{e.desc}</p>
            <div className="tl-stack">
              {e.stack.map((s, j) => <span className="tag" key={j}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="reveal">
        <div className="section-eyebrow">04 // Selected work</div>
        <h2 className="section-title">A few projects worth mentioning.</h2>
        <p className="section-sub">Most of my best work has been under NDA, but here's a representative slice.</p>
      </div>
      <div className="projects-grid">
        {window.SITE_DATA.projects.map((p, i) => (
          <div className="project-card reveal" key={i} style={{ transitionDelay: `${i * 40}ms` }}>
            <div className="project-thumb">placeholder · {p.tags[0]}</div>
            <div className="project-title">{p.title}</div>
            <div className="project-meta">{p.meta}</div>
            <div className="project-tags">
              {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Skills, Services, Experience, Projects });
