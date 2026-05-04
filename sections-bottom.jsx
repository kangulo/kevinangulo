/* Page sections: Rates, FAQ, Contact, Support, Footer */

function Rates() {
  return (
    <section className="section container" id="rates">
      <div className="reveal">
        <div className="section-eyebrow">05 // Working together</div>
        <h2 className="section-title">Honest rates. Three simple ways.</h2>
        <p className="section-sub">No hidden fees, no long sales cycle. Pick the shape that fits your project.</p>
      </div>
      <div className="rates-grid">
        {window.SITE_DATA.rates.map((r, i) => (
          <div className={`rate-card reveal ${r.featured ? "featured" : ""}`} key={i} style={{ transitionDelay: `${i * 80}ms` }}>
            {r.featured && <div className="rate-badge">Most popular</div>}
            <div className="rate-name">{r.name}</div>
            <div className="rate-sub">{r.sub}</div>
            <div className="rate-price">
              <span className="num">{r.price}</span>
              <span className="unit">{r.unit}</span>
            </div>
            <ul className="rate-features">
              {r.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <a href="#contact" className={`btn rate-cta ${r.featured ? "btn-primary" : "btn-secondary"}`}>
              {r.cta} <Icon.Arrow />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section container" id="faq">
      <div className="reveal">
        <div className="section-eyebrow">06 // Questions</div>
        <h2 className="section-title">Everything you'd ask on the first call.</h2>
        <p className="section-sub">If your question isn't here, the form below is the fastest way to reach me.</p>
      </div>
      <div className="faq-list">
        {window.SITE_DATA.faqs.map((f, i) => (
          <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{f.q}</span>
              <span className="faq-toggle"><Icon.Plus /></span>
            </button>
            <div className="faq-a" style={{ maxHeight: open === i ? "400px" : "0" }}>
              <div className="faq-a-inner">{f.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ showToast }) {
  const d = window.SITE_DATA;
  const [form, setForm] = React.useState({
    name: "", email: "", company: "", project: "Project build", budget: "$6k – $15k", message: "",
  });
  const [sent, setSent] = React.useState(false);
  const projectTypes = ["Project build", "Retainer", "Audit", "Hourly work", "Other"];
  const budgets = ["<$6k", "$6k – $15k", "$15k – $40k", "$40k+", "Not sure yet"];
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    showToast("Message sent! I'll reply within 24 hours.");
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", company: "", project: "Project build", budget: "$6k – $15k", message: "" }); }, 3500);
  };
  return (
    <section className="section container" id="contact">
      <div className="reveal">
        <div className="section-eyebrow">07 // Let's talk</div>
        <h2 className="section-title">Tell me about your project.</h2>
        <p className="section-sub">A short brief is enough. I'll reply within 24 hours, usually with a few clarifying questions and a rough sense of fit.</p>
      </div>
      <div className="contact-grid">
        <form className="contact-form reveal" onSubmit={onSubmit}>
          <div className="form-row two">
            <div className="field">
              <label>Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label>Company / project (optional)</label>
              <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Inc." />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label>What are you hiring for?</label>
              <div className="chips">
                {projectTypes.map((p) => (
                  <button type="button" key={p} className={`chip ${form.project === p ? "active" : ""}`} onClick={() => setForm({ ...form, project: p })}>{p}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label>Budget range</label>
              <div className="chips">
                {budgets.map((b) => (
                  <button type="button" key={b} className={`chip ${form.budget === b ? "active" : ""}`} onClick={() => setForm({ ...form, budget: b })}>{b}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label>The project, in a paragraph</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you building, where it stands today, and what you need from me." required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary form-submit" disabled={sent}>
            {sent ? <><Icon.Check /> Sent!</> : <>Send message <Icon.Arrow /></>}
          </button>
        </form>

        <div className="contact-aside reveal">
          <div className="aside-card">
            <div className="aside-eyebrow">Direct lines</div>
            <div className="aside-title">Prefer a faster channel?</div>
            <p className="aside-desc">For urgent work or quick questions, WhatsApp or email is usually the fastest way to reach me.</p>
            <a href={`https://wa.me/${d.whatsapp}`} target="_blank" rel="noopener" className="contact-link">
              <span className="label">WhatsApp</span>
              <Icon.WhatsApp />
              <span>+1 857.275.9445</span>
            </a>
            <a href={`tel:${d.phone}`} className="contact-link">
              <span className="label">Phone</span>
              <Icon.Phone />
              <span>{d.phone}</span>
            </a>
            <a href={`mailto:${d.email}`} className="contact-link">
              <span className="label">Email</span>
              <Icon.Mail />
              <span>{d.email}</span>
            </a>
            <a href={d.linkedin} target="_blank" rel="noopener" className="contact-link">
              <span className="label">LinkedIn</span>
              <Icon.LinkedIn />
              <span>/in/kevinangulo</span>
            </a>
          </div>

          <div className="support-card">
            <div className="aside-eyebrow">Support my work</div>
            <div className="support-title">Not hiring, but want to help?</div>
            <p className="support-desc">Tips support my open-source contributions and keep this site ad-free. Every bit means a lot — thank you.</p>
            <a href={d.paypal} target="_blank" rel="noopener" className="paypal-btn">
              <Icon.PayPal /> Tip via PayPal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const d = window.SITE_DATA;
  return (
    <footer className="footer container">
      <div className="footer-inner">
        <div>
          <div className="footer-big">
            Let's build <span className="accent">something real.</span>
          </div>
        </div>
        <div className="footer-meta">
          <div>© {new Date().getFullYear()} Kevin Angulo · All rights reserved</div>
          <div>{d.site} · Built by hand in Revere, MA</div>
          <div>Spanish · English · Portuguese</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Rates, FAQ, Contact, Footer });
