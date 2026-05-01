import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Individual.css";

/* ── Icons (inline SVG, zero dependency) ── */
const Icon = ({ name }) => {
  const icons = {
    student: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
      </svg>
    ),
    professional: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    freelancer: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M3.05 11a9 9 0 0 1 17.9 0" />
      </svg>
    ),
    entrepreneur: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    network: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    mentor: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    cert: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    career: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
    events: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    community: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    quote: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.51.886-3.995 3.049-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.51.886-3.995 3.049-3.995 5.849h4v10h-9.983z" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  };
  return <span className="individual-page__icon-svg">{icons[name]}</span>;
};

/* ── useInView hook for scroll animations ── */
function useInView(threshold = 0.15) {
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

/* ── Animated counter ── */
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ── Data ── */
const WHO_CAN_JOIN = [
  { icon: "student", title: "Students", desc: "Gain early access to industry networks, mentors, and career launchpads while still in academia." },
  { icon: "professional", title: "Working Professionals", desc: "Sharpen skills, earn credentials, and connect with senior leaders across your industry." },
  { icon: "freelancer", title: "Freelancers", desc: "Build credibility, discover clients, and tap into a community that understands your journey." },
  { icon: "entrepreneur", title: "Entrepreneurs", desc: "Leverage collective expertise, find collaborators, and accelerate your venture's growth." },
];

const BENEFITS = [
  { icon: "network", title: "Networking Opportunities", desc: "Connect with 50K+ professionals across sectors, disciplines, and geographies." },
  { icon: "mentor", title: "Industry Mentorship", desc: "Get paired with 300+ vetted mentors who've navigated the path you're on." },
  { icon: "cert", title: "Certifications", desc: "Earn recognised credentials that signal expertise and open doors in your field." },
  { icon: "career", title: "Career Growth Support", desc: "Resume reviews, mock interviews, and placement assistance — all in one place." },
  { icon: "events", title: "Events & Webinars", desc: "Attend 100+ curated events annually — in-person and virtual, local and global." },
  { icon: "community", title: "Exclusive Community", desc: "Access private forums, knowledge bases, and peer circles unavailable elsewhere." },
];

const STEPS = [
  { num: "01", title: "Register", desc: "Fill in your profile in under 5 minutes. No paperwork, no hassle." },
  { num: "02", title: "Get Verified", desc: "Our team reviews your application within 48 hours and confirms your membership." },
  { num: "03", title: "Access Benefits", desc: "Unlock your dashboard — mentors, events, certifications, and more." },
  { num: "04", title: "Grow Your Network", desc: "Start connecting, collaborating, and contributing to a thriving community." },
];

const STATS = [
  { value: 50000, suffix: "+", label: "Members" },
  { value: 100, suffix: "+", label: "Events Annually" },
  { value: 300, suffix: "+", label: "Expert Mentors" },
  { value: 90, suffix: "%", label: "Satisfaction Rate" },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Product Manager, Bengaluru",
    avatar: "PS",
    text: "Joining transformed my career trajectory. Within three months I had a mentor, a new certification, and two job offers I wouldn't have found otherwise.",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Freelance Designer, Mumbai",
    avatar: "AM",
    text: "The community is unlike anything else I've been part of — genuinely supportive, incredibly knowledgeable, and always growing.",
    stars: 5,
  },
  {
    name: "Neha Kapoor",
    role: "Startup Founder, Delhi",
    avatar: "NK",
    text: "The mentorship programme alone is worth tenfold the membership fee. My mentor's guidance helped me close our seed round.",
    stars: 5,
  },
];

/* ── Main Component ── */
export default function Individual() {
  const [heroRef, heroVisible] = useInView(0.1);
  const [whoRef, whoVisible] = useInView(0.1);
  const [benefitsRef, benefitsVisible] = useInView(0.1);
  const [stepsRef, stepsVisible] = useInView(0.1);
  const [statsRef, statsVisible] = useInView(0.2);
  const [testiRef, testiVisible] = useInView(0.1);
  const [ctaRef, ctaVisible] = useInView(0.2);

  return (
    <div className="individual-page">

      {/* ── HERO ── */}
      <section className={`individual-page__hero ${heroVisible ? "is-visible" : ""}`} ref={heroRef}>
        <div className="individual-page__hero-bg" aria-hidden="true">
          <div className="individual-page__hero-blob individual-page__hero-blob--1" />
          <div className="individual-page__hero-blob individual-page__hero-blob--2" />
          <div className="individual-page__hero-grid" />
        </div>
        <div className="individual-page__container individual-page__hero-inner">
          <div className="individual-page__hero-badge">Membership Programme</div>
          <h1 className="individual-page__hero-title">
            Individual &amp; <br />
            <span className="individual-page__hero-title--accent">Associate Members</span>
          </h1>
          <p className="individual-page__hero-subtitle">
            Empowering professionals to grow, connect, and lead
          </p>
          <p className="individual-page__hero-desc">
            Whether you're a student charting your first steps, a professional scaling new heights, or an entrepreneur building the future — this is your ecosystem. Join a movement that invests in <em>you</em>.
          </p>
          <div className="individual-page__hero-actions">
            {/* <Link to="/join" className="individual-page__btn individual-page__btn--primary">
              Join Now
            </Link> */}
            <a href="#benefits" className="individual-page__btn individual-page__btn--outline">
              Explore Benefits
            </a>
          </div>
          <div className="individual-page__hero-proof">
            <div className="individual-page__hero-avatars">
              {["A","B","C","D"].map((l, i) => (
                <div key={i} className="individual-page__hero-avatar" style={{ "--i": i }}>{l}</div>
              ))}
            </div>
            <span className="individual-page__hero-proof-text">
              Trusted by <strong>50,000+</strong> members worldwide
            </span>
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ── */}
      <section className={`individual-page__who ${whoVisible ? "is-visible" : ""}`} ref={whoRef}>
        <div className="individual-page__container">
          <div className="individual-page__section-header">
            <span className="individual-page__section-tag">Open to All</span>
            <h2 className="individual-page__section-title">Who Can Join?</h2>
            <p className="individual-page__section-sub">Our membership welcomes every stage of the professional journey.</p>
          </div>
          <div className="individual-page__who-grid">
            {WHO_CAN_JOIN.map((item, i) => (
              <div key={item.title} className="individual-page__who-card" style={{ "--delay": `${i * 0.1}s` }}>
                <div className="individual-page__who-card-icon">
                  <Icon name={item.icon} />
                </div>
                <h3 className="individual-page__who-card-title">{item.title}</h3>
                <p className="individual-page__who-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ── */}
      <section id="benefits" className={`individual-page__benefits ${benefitsVisible ? "is-visible" : ""}`} ref={benefitsRef}>
        <div className="individual-page__benefits-bg" aria-hidden="true" />
        <div className="individual-page__container">
          <div className="individual-page__section-header">
            <span className="individual-page__section-tag">Why Join</span>
            <h2 className="individual-page__section-title">Key Benefits</h2>
            <p className="individual-page__section-sub">Six pillars designed to accelerate every dimension of your professional life.</p>
          </div>
          <div className="individual-page__benefits-grid">
            {BENEFITS.map((item, i) => (
              <div key={item.title} className="individual-page__benefit-card" style={{ "--delay": `${i * 0.08}s` }}>
                <div className="individual-page__benefit-card-icon">
                  <Icon name={item.icon} />
                </div>
                <h3 className="individual-page__benefit-card-title">{item.title}</h3>
                <p className="individual-page__benefit-card-desc">{item.desc}</p>
                <div className="individual-page__benefit-card-hover-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`individual-page__how ${stepsVisible ? "is-visible" : ""}`} ref={stepsRef}>
        <div className="individual-page__container">
          <div className="individual-page__section-header">
            <span className="individual-page__section-tag">Simple Process</span>
            <h2 className="individual-page__section-title">How It Works</h2>
            <p className="individual-page__section-sub">From sign-up to fully active member in four effortless steps.</p>
          </div>
          <div className="individual-page__steps">
            {STEPS.map((step, i) => (
              <React.Fragment key={step.num}>
                <div className="individual-page__step" style={{ "--delay": `${i * 0.12}s` }}>
                  <div className="individual-page__step-num">{step.num}</div>
                  <div className="individual-page__step-content">
                    <h3 className="individual-page__step-title">{step.title}</h3>
                    <p className="individual-page__step-desc">{step.desc}</p>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="individual-page__step-arrow" aria-hidden="true">
                    <svg viewBox="0 0 40 16" fill="none">
                      <path d="M0 8h36M28 2l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={`individual-page__stats ${statsVisible ? "is-visible" : ""}`} ref={statsRef}>
        <div className="individual-page__stats-bg" aria-hidden="true" />
        <div className="individual-page__container">
          <div className="individual-page__section-header individual-page__section-header--light">
            <span className="individual-page__section-tag individual-page__section-tag--light">Impact</span>
            <h2 className="individual-page__section-title individual-page__section-title--light">Member Impact at a Glance</h2>
          </div>
          <div className="individual-page__stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="individual-page__stat-card">
                <div className="individual-page__stat-value">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="individual-page__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`individual-page__testimonials ${testiVisible ? "is-visible" : ""}`} ref={testiRef}>
        <div className="individual-page__container">
          <div className="individual-page__section-header">
            <span className="individual-page__section-tag">Success Stories</span>
            <h2 className="individual-page__section-title">What Members Say</h2>
            <p className="individual-page__section-sub">Real stories from real professionals who made the move.</p>
          </div>
          <div className="individual-page__testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="individual-page__testi-card" style={{ "--delay": `${i * 0.12}s` }}>
                <div className="individual-page__testi-quote-icon"><Icon name="quote" /></div>
                <p className="individual-page__testi-text">{t.text}</p>
                <div className="individual-page__testi-stars">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <span key={si} className="individual-page__testi-star"><Icon name="star" /></span>
                  ))}
                </div>
                <div className="individual-page__testi-author">
                  <div className="individual-page__testi-avatar">{t.avatar}</div>
                  <div>
                    <div className="individual-page__testi-name">{t.name}</div>
                    <div className="individual-page__testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`individual-page__cta ${ctaVisible ? "is-visible" : ""}`} ref={ctaRef}>
        <div className="individual-page__cta-bg" aria-hidden="true">
          <div className="individual-page__cta-blob individual-page__cta-blob--1" />
          <div className="individual-page__cta-blob individual-page__cta-blob--2" />
        </div>
        <div className="individual-page__container individual-page__cta-inner">
          <div className="individual-page__cta-check-list">
            {["Cancel anytime", "Instant access"].map((item) => (
              <span key={item} className="individual-page__cta-check">
                <Icon name="check" /> {item}
              </span>
            ))}
          </div>
          <h2 className="individual-page__cta-title">Become an Individual Member Today</h2>
          <p className="individual-page__cta-desc">
            Your next opportunity, mentor, or breakthrough collaboration is one membership away.
          </p>
          <div className="individual-page__cta-actions">
            <Link to="/apply" className="individual-page__btn individual-page__btn--white">
              Get Started 
            </Link>
            <Link to="/contact" className="individual-page__btn individual-page__btn--ghost">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}