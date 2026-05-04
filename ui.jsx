/* Small UI primitives: icons, reveal-on-scroll, etc. */

const Icon = {
  Arrow: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  ArrowDown: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>,
  Mail: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>,
  Phone: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  WhatsApp: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.23 1.35.19 1.86.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01c-1.68 0-3.33-.45-4.77-1.3l-.34-.2-3.55.93.95-3.46-.22-.35a9.44 9.44 0 0 1-1.45-5.03c0-5.22 4.26-9.47 9.49-9.47 2.53 0 4.91.99 6.7 2.78a9.43 9.43 0 0 1 2.78 6.7c0 5.22-4.26 9.47-9.48 9.47zm8.06-17.54A11.4 11.4 0 0 0 12.04 1C5.73 1 .6 6.13.6 12.43c0 2.02.53 3.99 1.53 5.73L.5 24l5.99-1.57a11.4 11.4 0 0 0 5.45 1.39h.01c6.31 0 11.44-5.13 11.44-11.44 0-3.05-1.19-5.93-3.34-8.08z"/></svg>,
  Github: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.1.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.29 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.69.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>,
  LinkedIn: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67V9.67h2.67v8.67zM7 8.47a1.55 1.55 0 1 1 .01-3.1 1.55 1.55 0 0 1-.01 3.1zm11.34 9.87h-2.67v-4.22c0-1.01-.02-2.3-1.4-2.3-1.4 0-1.62 1.09-1.62 2.23v4.29H10V9.67h2.55v1.2h.04c.36-.67 1.22-1.4 2.5-1.4 2.67 0 3.16 1.76 3.16 4.04v4.83z"/></svg>,
  Sun: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>,
  Moon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>,
  Plus: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>,
  PayPal: () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.07 7.5c.2 1.37-.02 2.77-.66 4.06-1.14 2.3-3.5 3.25-6.32 3.25h-.44a.78.78 0 0 0-.77.66l-.84 5.33-.02.14a.55.55 0 0 1-.55.47H7.96a.47.47 0 0 1-.46-.54l.04-.25 1.1-6.97L8.7 13l.05-.3a.78.78 0 0 1 .77-.66h.97c3.22 0 5.74-1.3 6.47-5.09.02-.1.04-.2.06-.3.64.13 1.2.32 1.68.58.52.27.94.62 1.27 1.06.3.41.44.86.56 1.37l-.46-.16zM16.87 5.68c-.13-.83-.52-1.48-1.16-1.95C15 3.2 13.95 3 12.7 3H7.4a.78.78 0 0 0-.77.66L4.55 17a.47.47 0 0 0 .46.54h3.3l.83-5.28V12.4a.78.78 0 0 1 .77-.66h.97c2.82 0 5.19-.95 6.32-3.25a5.1 5.1 0 0 0 .55-1.82c.06-.4.06-.73.03-1l-.11.01z"/></svg>,
};

function useReveal() {
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });
    const observe = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    };
    observe();
    // Re-observe after a tick in case more .reveal elements mount
    const t1 = setTimeout(observe, 100);
    const t2 = setTimeout(observe, 500);
    // Fallback: reveal anything already in viewport after 1s
    const t3 = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      });
    }, 1000);
    return () => { io.disconnect(); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);
}

function MouseBlob() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let raf;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; if (ref.current) ref.current.classList.add("active"); };
    const tick = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="cursor-blob" />;
}

function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-bar" style={{ width: `${p}%` }} />;
}

function Toast({ msg, onDone }) {
  React.useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => onDone(), 3000);
    return () => clearTimeout(t);
  }, [msg]);
  return <div className={`toast ${msg ? "show" : ""}`}>{msg && <><Icon.Check /> {msg}</>}</div>;
}

function CountUp({ target, duration = 1800, suffix = "" }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const raf = (t) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// Tilt effect for cursor-tracking cards
function useCardGlow() {
  React.useEffect(() => {
    const handler = (e) => {
      const card = e.target.closest(".skill-card, .id-card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);
}

Object.assign(window, { Icon, useReveal, MouseBlob, ScrollProgress, Toast, CountUp, useCardGlow });
