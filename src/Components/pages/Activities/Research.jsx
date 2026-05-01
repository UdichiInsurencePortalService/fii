import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Research.css";

/* ─────────────────────────────────────────
   Inline SVG Icon Sprite
───────────────────────────────────────── */
const Icon = ({ name, className = "" }) => {
  const paths = {
    ai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
        <path d="M9 14s1 1 3 1 3-1 3-1"/>
      </svg>
    ),
    energy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    manufacturing: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <circle cx="12" cy="14" r="3"/>
        <line x1="12" y1="11" x2="12" y2="8"/>
      </svg>
    ),
    health: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    fintech: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    climate: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    lab: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v11l3.5 6.5A1 1 0 0 1 17.6 22H6.4a1 1 0 0 1-.9-1.5L9 14V3z"/>
        <line x1="9" y1="3" x2="15" y2="3"/>
        <path d="M6.5 18.5h11"/>
      </svg>
    ),
    startup: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
    industry: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
      </svg>
    ),
    hackathon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
        <line x1="19" y1="12" x2="5" y2="12"/>
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    beaker: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 3h15"/>
        <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/>
        <path d="M6 14h12"/>
      </svg>
    ),
    prototype: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    deploy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </svg>
    ),
    external: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    ),
  };
  return (
    <span className={`rp-icon ${className}`}>
      {paths[name] || null}
    </span>
  );
};

/* ─────────────────────────────────────────
   useInView – scroll-triggered visibility
───────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────
   Animated Counter
───────────────────────────────────────── */
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let frame = 0;
    const total = 80;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (frame >= total) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [visible, end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const DOMAINS = [
  { icon: "ai",            label: "Artificial Intelligence & Data Science",  desc: "Advancing machine learning, NLP, and predictive analytics for real-world impact." },
  { icon: "energy",        label: "Renewable Energy",                         desc: "Pioneering solar, wind, and storage innovations to power a sustainable future." },
  { icon: "manufacturing", label: "Smart Manufacturing",                      desc: "Industry 4.0 systems integrating IoT, robotics, and intelligent automation." },
  { icon: "health",        label: "Healthcare Innovation",                    desc: "From diagnostics to drug discovery — redefining what's possible in medicine." },
  { icon: "fintech",       label: "FinTech & Digital Economy",                desc: "Blockchain, open banking, and digital finance ecosystems of tomorrow." },
  { icon: "climate",       label: "Sustainability & Climate Tech",            desc: "Research-driven solutions addressing the most urgent environmental challenges." },
];

const PROGRAMS = [
  { icon: "lab",       title: "Innovation Labs",          desc: "State-of-the-art facilities for hands-on experimentation, prototyping, and cross-disciplinary breakthroughs.", tag: "Flagship" },
  { icon: "startup",   title: "Startup Incubation",       desc: "End-to-end support for research-based startups — from ideation through seed funding and market entry.", tag: "Active" },
  { icon: "industry",  title: "Industry-Funded Projects", desc: "Deep-dive collaborations with corporations co-funding targeted applied research and IP development.", tag: "Open" },
  { icon: "hackathon", title: "Hackathons & Challenges",  desc: "Structured innovation sprints that attract diverse talent and generate deployable solutions fast.", tag: "Quarterly" },
];

const COLLAB_STEPS = [
  { icon: "search",    num: "01", title: "Identify Problem",     desc: "Define real-world challenges through structured discovery sessions with industry partners." },
  { icon: "beaker",    num: "02", title: "Research",             desc: "Dedicated teams apply rigorous scientific methods, literature analysis, and experiments." },
  { icon: "prototype", num: "03", title: "Prototype",            desc: "Build working models, run simulations, and iterate rapidly with continuous feedback loops." },
  { icon: "deploy",    num: "04", title: "Industry Deployment",  desc: "Validated solutions are transferred, licensed, or commercialised with measurable outcomes." },
];

const STATS = [
  { value: 150, suffix: "+", label: "Research Projects" },
  { value: 50,  suffix: "+", label: "Industry Collaborations" },
  { value: 20,  suffix: "+", label: "Patents Filed" },
  { value: 1000,suffix: "+", label: "Students Engaged" },
];

const PROJECTS = [
  {
    tag: "Artificial Intelligence",
    title: "Predictive Crop Yield Modelling",
    desc: "An end-to-end AI pipeline combining satellite imagery with soil sensor data to forecast yields 90 days ahead, improving food supply planning across 5 states.",
    meta: "12 Researchers · 18 months",
    accent: "#10b981",
  },
  {
    tag: "Healthcare Innovation",
    title: "Low-Cost Portable ECG Device",
    desc: "A solar-powered, IoT-enabled cardiac monitor designed for last-mile healthcare delivery, currently in pilot across 40 rural clinics.",
    meta: "8 Researchers · 24 months",
    accent: "#f59e0b",
  },
  {
    tag: "Climate Tech",
    title: "Urban Heat Island Mitigation",
    desc: "Simulation-driven study proposing green-roof mandates and reflective surface coatings reducing peak urban temperatures by up to 3°C.",
    meta: "10 Researchers · 14 months",
    accent: "#06b6d4",
  },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function Research() {
  const [heroRef, heroVisible]       = useInView(0.05);
  const [domainsRef, domainsVisible] = useInView(0.08);
  const [programsRef, progVisible]   = useInView(0.08);
  const [collabRef, collabVisible]   = useInView(0.1);
  const [statsRef, statsVisible]     = useInView(0.2);
  const [projRef, projVisible]       = useInView(0.08);
  const [ctaRef, ctaVisible]         = useInView(0.15);

  return (
    <div className="research-page">

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section
        className={`research-page__hero${heroVisible ? " is-visible" : ""}`}
        ref={heroRef}
      >
        {/* Decorative background layers */}
        <div className="research-page__hero-bg" aria-hidden="true">
          <div className="research-page__hero-orb research-page__hero-orb--a" />
          <div className="research-page__hero-orb research-page__hero-orb--b" />
          <div className="research-page__hero-orb research-page__hero-orb--c" />
          <div className="research-page__hero-grid" />
          <div className="research-page__hero-scanline" />
        </div>

        <div className="research-page__container research-page__hero-content">
          <div className="research-page__hero-eyebrow">
            <span className="research-page__hero-dot" />
            Research &amp; Innovation Centre
          </div>
          <h1 className="research-page__hero-title">
            Research &amp; <br />
            <span className="research-page__hero-title-highlight">Innovation</span>
          </h1>
          <p className="research-page__hero-subtitle">
            Driving innovation through collaboration and cutting-edge research
          </p>
          <p className="research-page__hero-desc">
            We bridge the gap between academia, industry, and emerging technology ecosystems —
            translating rigorous research into real-world solutions that define the next decade.
          </p>
          <div className="research-page__hero-actions">
            <a href="#domains" className="research-page__btn research-page__btn--primary">
              Explore Research
            </a>
            <Link to="/contact" className="research-page__btn research-page__btn--ghost">
              Collaborate With Us
              <Icon name="arrow" />
            </Link>
          </div>

          {/* floating pill tags */}
          <div className="research-page__hero-tags" aria-hidden="true">
            {["AI & ML", "Climate Tech", "FinTech", "BioMed", "IoT", "Robotics"].map((t) => (
              <span key={t} className="research-page__hero-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          RESEARCH DOMAINS
      ══════════════════════════════════ */}
      <section
        id="domains"
        className={`research-page__domains${domainsVisible ? " is-visible" : ""}`}
        ref={domainsRef}
      >
        <div className="research-page__container">
          <div className="research-page__section-head">
            <span className="research-page__section-kicker">Focus Areas</span>
            <h2 className="research-page__section-title">Research Domains</h2>
            <p className="research-page__section-sub">
              Six high-impact domains where interdisciplinary teams are advancing the frontiers of knowledge.
            </p>
          </div>
          <div className="research-page__domains-grid">
            {DOMAINS.map((d, i) => (
              <div
                key={d.label}
                className="research-page__domain-card"
                style={{ "--card-delay": `${i * 0.07}s` }}
              >
                <div className="research-page__domain-card-glow" />
                <div className="research-page__domain-icon-wrap">
                  <Icon name={d.icon} />
                </div>
                <h3 className="research-page__domain-title">{d.label}</h3>
                <p className="research-page__domain-desc">{d.desc}</p>
                <span className="research-page__domain-arrow">
                  <Icon name="arrow" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          INNOVATION PROGRAMS
      ══════════════════════════════════ */}
      <section
        className={`research-page__programs${progVisible ? " is-visible" : ""}`}
        ref={programsRef}
      >
        <div className="research-page__programs-bg" aria-hidden="true" />
        <div className="research-page__container">
          {/* <div className="research-page__section-head research-page__section-head--light">
            <span className="research-page__section-kicker research-page__section-kicker--light">Initiatives</span>
            <h2 className="research-page__section-title research-page__section-title--light">Innovation Programs</h2>
            <p className="research-page__section-sub research-page__section-sub--light">
              Structured pathways turning bold ideas into deployable innovations.
            </p>
          </div> */}
          <div className="research-page__programs-grid">
            {PROGRAMS.map((p, i) => (
              <div
                key={p.title}
                className="research-page__program-card"
                style={{ "--card-delay": `${i * 0.09}s` }}
              >
                <div className="research-page__program-top">
                  <div className="research-page__program-icon">
                    <Icon name={p.icon} />
                  </div>
                  <span className="research-page__program-tag">{p.tag}</span>
                </div>
                <h3 className="research-page__program-title">{p.title}</h3>
                <p className="research-page__program-desc">{p.desc}</p>
                <div className="research-page__program-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          COLLABORATION MODEL
      ══════════════════════════════════ */}
      <section
        className={`research-page__collab${collabVisible ? " is-visible" : ""}`}
        ref={collabRef}
      >
        <div className="research-page__container">
          <div className="research-page__section-head">
            <span className="research-page__section-kicker">How We Work</span>
            <h2 className="research-page__section-title">Collaboration Model</h2>
            <p className="research-page__section-sub">
              A proven four-stage framework that takes problems from discovery to deployment.
            </p>
          </div>
          <div className="research-page__collab-flow">
            {COLLAB_STEPS.map((step, i) => (
              <React.Fragment key={step.num}>
                <div
                  className="research-page__collab-step"
                  style={{ "--card-delay": `${i * 0.1}s` }}
                >
                  <div className="research-page__collab-step-num">{step.num}</div>
                  <div className="research-page__collab-step-icon">
                    <Icon name={step.icon} />
                  </div>
                  <h3 className="research-page__collab-step-title">{step.title}</h3>
                  <p className="research-page__collab-step-desc">{step.desc}</p>
                </div>
                {i < COLLAB_STEPS.length - 1 && (
                  <div className="research-page__collab-connector" aria-hidden="true">
                    <span className="research-page__collab-connector-line" />
                    <Icon name="arrow" className="research-page__collab-connector-arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          IMPACT / STATS
      ══════════════════════════════════ */}
      {/* <section
        className={`research-page__impact${statsVisible ? " is-visible" : ""}`}
        ref={statsRef}
      >
        <div className="research-page__impact-bg" aria-hidden="true">
          <div className="research-page__impact-ring research-page__impact-ring--a" />
          <div className="research-page__impact-ring research-page__impact-ring--b" />
        </div>
        <div className="research-page__container">
          <div className="research-page__section-head research-page__section-head--light">
            <span className="research-page__section-kicker research-page__section-kicker--light">By the Numbers</span>
            <h2 className="research-page__section-title research-page__section-title--light">Impact &amp; Achievements</h2>
          </div>
          <div className="research-page__stats-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className="research-page__stat" style={{ "--card-delay": `${i * 0.1}s` }}>
                <div className="research-page__stat-value">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="research-page__stat-label">{s.label}</div>
                <div className="research-page__stat-bar" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════
          FEATURED PROJECTS
      ══════════════════════════════════ */}
      <section
        className={`research-page__projects${projVisible ? " is-visible" : ""}`}
        ref={projRef}
      >
        <div className="research-page__container">
          <div className="research-page__section-head">
            <span className="research-page__section-kicker">Spotlight</span>
            <h2 className="research-page__section-title">Featured Projects</h2>
            <p className="research-page__section-sub">
              A selection of high-impact research currently shaping industries and communities.
            </p>
          </div>
          <div className="research-page__projects-grid">
            {PROJECTS.map((p, i) => (
              <div
                key={p.title}
                className="research-page__project-card"
                style={{ "--card-delay": `${i * 0.1}s`, "--accent": p.accent }}
              >
                <div className="research-page__project-accent-bar" />
                <span className="research-page__project-tag">{p.tag}</span>
                <h3 className="research-page__project-title">{p.title}</h3>
                <p className="research-page__project-desc">{p.desc}</p>
                <div className="research-page__project-footer">
                  <span className="research-page__project-meta">{p.meta}</span>
                  <button className="research-page__project-link" type="button" aria-label="View project">
                    <Icon name="external" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section
        className={`research-page__cta${ctaVisible ? " is-visible" : ""}`}
        ref={ctaRef}
      >
        <div className="research-page__cta-bg" aria-hidden="true">
          <div className="research-page__cta-orb research-page__cta-orb--a" />
          <div className="research-page__cta-orb research-page__cta-orb--b" />
          <div className="research-page__cta-grid" />
        </div>
        <div className="research-page__container research-page__cta-inner">
          <div className="research-page__cta-badge">Open for Collaboration</div>
          <h2 className="research-page__cta-title">
            Partner With Us<br />
            <span className="research-page__cta-title-accent">for Innovation</span>
          </h2>
          <p className="research-page__cta-desc">
            Whether you're a corporation, a government body, or an academic institution —
            our research ecosystem is built to co-create solutions that matter.
          </p>
          <div className="research-page__cta-actions">
            {/* <Link to="/collaborate" className="research-page__btn research-page__btn--cta-primary">
              Start Collaboration
            </Link> */}
            <Link to="/contact" className="research-page__btn research-page__btn--cta-ghost">
              Contact the Team
            </Link>
          </div>
          <ul className="research-page__cta-features">
            {["Dedicated research liaison", "Flexible IP arrangements", "Joint publication pathways"].map((f) => (
              <li key={f} className="research-page__cta-feature">
                <span className="research-page__cta-feature-dot" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}