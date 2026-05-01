import { useEffect, useRef, useState, useCallback } from "react";
import "./Industry.css";

import React from "react";
import { Link } from "react-router-dom";
// ── Data ─────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: "🎯",
    title: "Access to Talent Pool",
    desc: "Tap into a curated pipeline of verified graduates across engineering, management, and vocational streams — pre-screened and industry-oriented.",
  },
  {
    icon: "🏫",
    title: "Campus Hiring Support",
    desc: "We coordinate end-to-end campus recruitment: scheduling, pre-placement talks, aptitude drives, and final placement coordination.",
  },
  {
    icon: "📣",
    title: "Brand Visibility",
    desc: "Gain prominent exposure across 500+ member institutions through branding rights, co-branded events, newsletters, and digital spotlights.",
  },
  {
    icon: "🔬",
    title: "Research Collaboration",
    desc: "Partner on funded R&D projects, innovation challenges, and sponsored research programmes with top academic institutions.",
  },
  {
    icon: "🌱",
    title: "CSR & Skill Development",
    desc: "Fulfil CSR obligations meaningfully by co-designing and funding skill development programmes aligned with national priorities.",
  },
  {
    icon: "🏛️",
    title: "Government & Policy Connect",
    desc: "Engage directly with policy roundtables, NSDC initiatives, and government skilling missions through FII's institutional access.",
  },
];

const HOW_STEPS = [
  {
    icon: "📝",
    title: "Join",
    desc: "Submit your partnership application. Our team verifies eligibility and onboards you within 72 hours.",
  },
  {
    icon: "🤝",
    title: "Collaborate",
    desc: "Get matched with institutions aligned to your sector, hiring needs, and CSR focus areas.",
  },
  {
    icon: "🚀",
    title: "Engage",
    desc: "Participate in summits, webinars, live projects, and co-branded skill development drives.",
  },
  {
    icon: "🏆",
    title: "Hire",
    desc: "Access pre-screened, industry-ready candidates and close your hiring targets with confidence.",
  },
];

const STATS = [
  { number: 200, suffix: "+", label: "Companies" },
  { number: 50,  suffix: "K+", label: "Students Placed" },
  { number: 500, suffix: "+", label: "Hiring Drives" },
  { number: 92,  suffix: "%", label: "Partner Retention" },
];

const WHY_ITEMS = [
  {
    icon: "🎓",
    title: "Pre-Vetted Graduate Network",
    desc: "Every student in our network passes standardised skill assessments aligned to industry benchmarks.",
  },
  {
    icon: "⚡",
    title: "Faster Hiring Cycles",
    desc: "Our coordinated placement infrastructure cuts average time-to-hire by 60% versus independent campus drives.",
  },
  {
    icon: "📊",
    title: "Data-Driven Matching",
    desc: "Smart matching algorithms pair your JDs with the right institutions based on programme, geography, and skill profile.",
  },
  {
    icon: "🌐",
    title: "Pan-India Reach",
    desc: "One partnership gives you access across 28 states — Tier 1, Tier 2, and Tier 3 cities included.",
  },
];

const TRUST_LOGOS = ["NASSCOM", "CII", "FICCI", "NSDC", "AICTE", "Skill India"];

// ── Hooks ─────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".ip-fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ip-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Sub-components ────────────────────────────────────────────

function AnimatedCounter({ target, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current = Math.min(current + increment, target);
            setValue(Math.round(current));
            if (current >= target) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span className="ip-stat__number" ref={ref}>
      {value}
      <span>{suffix}</span>
    </span>
  );
}

function HeroDiagram() {
  return (
    <svg
      viewBox="0 0 460 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ip-hero__diagram"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="230" cy="200" r="175" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="230" cy="200" r="120" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 6" />
      <circle cx="230" cy="200" r="65"  stroke="rgba(201,146,42,0.25)" strokeWidth="1.5" />

      {/* Center node */}
      <circle cx="230" cy="200" r="40" fill="rgba(201,146,42,0.15)" stroke="rgba(201,146,42,0.5)" strokeWidth="1.5" />
      <text x="230" y="196" textAnchor="middle" fontSize="20" dominantBaseline="middle">🏛️</text>
      <text x="230" y="214" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.6)" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="1">FII</text>

      {/* Satellite nodes */}
      {[
        { cx: 230, cy: 50,  icon: "🎓", label: "Academia" },
        { cx: 390, cy: 140, icon: "🏭", label: "Industry" },
        { cx: 390, cy: 260, icon: "📊", label: "Data"     },
        { cx: 230, cy: 350, icon: "🚀", label: "Careers"  },
        { cx: 70,  cy: 260, icon: "🔬", label: "Research" },
        { cx: 70,  cy: 140, icon: "🌐", label: "Policy"   },
      ].map(({ cx, cy, icon, label }) => (
        <g key={label}>
          <line
            x1="230" y1="200" x2={cx} y2={cy}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle cx={cx} cy={cy} r="28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x={cx} y={cy} textAnchor="middle" fontSize="15" dominantBaseline="middle">{icon}</text>
          <text x={cx} y={cy + 40} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.35)" fontFamily="Outfit,sans-serif">{label}</text>
        </g>
      ))}

      {/* Glow pulses */}
      <circle cx="230" cy="200" r="65" fill="none" stroke="rgba(201,146,42,0.12)" strokeWidth="20">
        <animate attributeName="r" values="65;80;65" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// ── Main Component ────────────────────────────────────────────

export default function Industry() {
  useScrollReveal();

  return (
    <div className="industry-page">

      {/* ── 1. HERO ── */}
      <section className="ip-hero">
        <div className="ip-container">
          <div className="ip-hero__inner">

            <div className="ip-hero__content">
              <div className="ip-hero__eyebrow">FII Industry Partnership</div>

              <h1 className="ip-hero__title">
                Industry<br /><em>Members</em>
              </h1>

              <p className="ip-hero__headline">
                Partner with top institutions to build future-ready talent.
              </p>

              <p className="ip-hero__desc">
                FII bridges the gap between academia and industry — giving your organisation
                direct access to a national talent pipeline, co-branded hiring infrastructure,
                and research collaboration at scale.
              </p>

              <div className="ip-hero__btns">
                {/* <a href="#cta" className="ip-btn-primary">
                  Join as Industry Partner →
                </a> */}
                <Link to="/contact" className="ip-btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="ip-hero__visual">
              <HeroDiagram />
            </div>
          </div>

          <div className="ip-hero__trust">
            <span className="ip-hero__trust-label">Trusted by</span>
            <div className="ip-hero__trust-logos">
              {TRUST_LOGOS.map((name) => (
                <span className="ip-hero__trust-logo" key={name}>{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="ip-statsbar">
        <div className="ip-container">
          <div className="ip-statsbar__inner">
            {STATS.map((s) => (
              <div className="ip-stat" key={s.label}>
                <AnimatedCounter target={s.number} suffix={s.suffix} />
                <span className="ip-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. PARTNERSHIP BENEFITS ── */}
      <section className="ip-benefits ip-section" id="benefits">
        <div className="ip-container">

          <div className="ip-benefits__header">
            <div>
              <div className="ip-eyebrow ip-fade-up">Partnership Benefits</div>
              <h2 className="ip-title ip-fade-up ip-fade-up--d1">
                What you gain as<br />an Industry Member
              </h2>
            </div>
            <div className="ip-benefits__header-right ip-fade-up ip-fade-up--d2">
              <p className="ip-subtitle">
                A comprehensive suite of privileges designed to accelerate your talent
                acquisition, brand building, and CSR goals — all under one partnership.
              </p>
            </div>
          </div>

          <div className="ip-benefits__grid">
            {BENEFITS.map((b, i) => (
              <div
                className={`ip-benefit-card ip-fade-up ip-fade-up--d${(i % 3) + 1}`}
                key={b.title}
              >
                <span className="ip-benefit-card__num">0{i + 1}</span>
                <div className="ip-benefit-card__icon">{b.icon}</div>
                <h3 className="ip-benefit-card__title">{b.title}</h3>
                <p className="ip-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="ip-how ip-section" id="how-it-works">
        <div className="ip-container">

          <div className="ip-how__header">
            <div className="ip-eyebrow ip-fade-up" style={{ justifyContent: "center", color: "var(--gold-light)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ display: "block", width: 28, height: 1.5, background: "var(--gold-light)", flexShrink: 0 }}></span>
                How It Works
              </span>
            </div>
            <h2 className="ip-title ip-title--light ip-fade-up ip-fade-up--d1" style={{ textAlign: "center" }}>
              Four steps to partnership
            </h2>
          </div>

          <div className="ip-how__steps">
            {HOW_STEPS.map((step, i) => (
              <div
                className={`ip-step ip-fade-up ip-fade-up--d${i + 1}`}
                key={step.title}
              >
                <div className="ip-step__circle">
                  <span style={{ fontSize: 30 }}>{step.icon}</span>
                  <span className="ip-step__num">{i + 1}</span>
                </div>
                <h3 className="ip-step__title">{step.title}</h3>
                <p className="ip-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. WHY PARTNER WITH US ── */}
      <section className="ip-why ip-section" id="why">
        <div className="ip-container">
          <div className="ip-why__inner">

            {/* Visual card */}
            <div className="ip-why__visual ip-fade-up">
              <div className="ip-why__visual-card">
                <span className="ip-why__big-num">92</span>
                <span className="ip-why__big-label">% Partner Retention Rate</span>
                <p className="ip-why__visual-text">
                  Over 9 in 10 Industry Members renew their FII partnership year-on-year — a
                  testament to the measurable ROI our ecosystem consistently delivers.
                </p>
                <div className="ip-why__badge">⭐ India's Trusted Bridge</div>
              </div>
            </div>

            {/* List */}
            <div className="ip-fade-up ip-fade-up--d2">
              <div className="ip-eyebrow">Why Partner</div>
              <h2 className="ip-title">
                The FII advantage,<br />by the numbers
              </h2>

              <ul className="ip-why__list">
                {WHY_ITEMS.map((item) => (
                  <li className="ip-why__item" key={item.title}>
                    <div className="ip-why__item-icon">{item.icon}</div>
                    <div>
                      <div className="ip-why__item-title">{item.title}</div>
                      <div className="ip-why__item-desc">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. CTA SECTION ── */}
      <section className="ip-cta" id="cta">
        <div className="ip-container">
          <span className="ip-cta__kicker ip-fade-up">Ready to Partner?</span>
          <h2 className="ip-cta__title ip-fade-up ip-fade-up--d1">
            Become an <em>Industry Partner</em><br />Today
          </h2>
          <p className="ip-cta__sub ip-fade-up ip-fade-up--d2">
            Join 200+ companies already leveraging FII's national talent network.
            Onboarding takes less than 72 hours.
          </p>

          <div className="ip-cta__btns ip-fade-up ip-fade-up--d3">
            {/* <a href="#apply" className="">
              Apply for Membership 
            </a> */}
            <Link to="/apply" className="ip-btn-primary">
                Apply for Membership →
              </Link>{" "}
            <Link to="/contact" className="ip-btn-secondary">
              📞 Talk to an Advisor
            </Link>
          </div>

          <p className="ip-cta__note ip-fade-up ip-fade-up--d4">
            No lock-in. Cancel anytime. Trusted by NASSCOM, CII, and FICCI members.
          </p>
        </div>
      </section>

    </div>
  );
}