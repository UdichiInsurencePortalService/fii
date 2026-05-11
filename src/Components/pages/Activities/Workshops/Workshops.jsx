import { useState } from "react";
import "./Workshops.css";

import React from "react";

const industryWorkshops = [
  {
    id: 1,
    title: "Industry 4.0 – Building the Future Today",
    city: "Kolkata",
    date: "20th June 2026 (Friday)",
    time: "9:30 AM – 5:00 PM",
    venue: "The Lalit Great Eastern Kolkata",
    agenda: [
      "Industry 4.0 Opportunities & Challenges",
      "Smart Manufacturing & Automation",
      "Digital Transformation Strategies",
      "Skill Development for Future Workforce",
      "Panel Discussion & Q&A",
    ],
    tag: "Manufacturing",
    color: "card--blue",
  },
  {
    id: 2,
    title: "Sustainable Industries – Green Today, Greener Tomorrow",
    city: "Delhi",
    date: "18th July 2026",
    time: "9:30 AM – 5:00 PM",
    venue: "The Leela Ambience Convention Hotel",
    agenda: [
      "Sustainability & ESG",
      "Green Technologies & Clean Energy",
      "Resource Efficiency & Waste Management",
      "Government Policies & Incentives",
      "Case Studies",
    ],
    tag: "Sustainability",
    color: "card--green",
  },
  {
    id: 3,
    title: "Global Competitiveness – Innovate, Integrate, Elevate",
    city: "Mumbai",
    date: "22nd August 2026",
    time: "9:30 AM – 5:00 PM",
    venue: "The Taj Lands End",
    agenda: [
      "Global Market Trends",
      "Product Innovation",
      "Export Strategies",
      "Supply Chain Resilience",
      "B2B Networking",
    ],
    tag: "Global Markets",
    color: "card--amber",
  },
  {
    id: 4,
    title: "Human Capital – The Engine of Growth",
    city: "Chennai",
    date: "19th September 2026",
    time: "9:30 AM – 5:00 PM",
    venue: "The Leela Palace Chennai",
    agenda: [
      "Workforce Transformation",
      "Employee Engagement",
      "HR Tech & Future of Work",
      "Diversity & Inclusion",
      "Interactive Workshop",
    ],
    tag: "HR & People",
    color: "card--rose",
  },
];

const institutionalWorkshops = [
  {
    id: 5,
    title: "Future Ready Institutions, Empowered Students",
    city: "Kolkata",
    date: "21st June 2026",
    time: "10:00 AM – 4:30 PM",
    venue: "TBA",
    agenda: [
      "Industry-Institute Partnerships",
      "Outcome Based Education",
      "Skill Development & Certifications",
      "Internships & Placements",
      "Innovation Ecosystem",
    ],
    tag: "Education",
    color: "card--blue",
  },
  {
    id: 6,
    title: "Learn Today, Lead Tomorrow",
    city: "Delhi",
    date: "19th July 2026",
    time: "10:00 AM – 4:30 PM",
    venue: "TBA",
    agenda: [
      "NEP 2020 Opportunities",
      "Industry Expectations",
      "Startup Culture",
      "Digital Transformation",
      "Career Guidance",
    ],
    tag: "Leadership",
    color: "card--green",
  },
  {
    id: 7,
    title: "Innovate. Collaborate. Elevate.",
    city: "Mumbai",
    date: "23rd August 2026",
    time: "10:00 AM – 4:30 PM",
    venue: "TBA",
    agenda: [
      "Academic-Industry Collaboration",
      "Employability Skills",
      "Emerging Technologies",
      "Research & Grants",
      "Student Clubs",
    ],
    tag: "Innovation",
    color: "card--amber",
  },
  {
    id: 8,
    title: "Educate. Engage. Excel.",
    city: "Chennai",
    date: "20th September 2026",
    time: "10:00 AM – 4:30 PM",
    venue: "TBA",
    agenda: [
      "Quality Education Standards",
      "Placement Readiness",
      "Entrepreneurship",
      "Student Well-being",
      "Alumni Connect",
    ],
    tag: "Excellence",
    color: "card--rose",
  },
];

const cityIcons = {
  Kolkata: "🔵",
  Delhi: "🟢",
  Mumbai: "🟡",
  Chennai: "🔴",
};

function EventCard({ event }) {
  return (
    <div className={`event-card ${event.color}`}>
      <div className="card-header">
        <div className="card-top-row">
          <span className="city-badge">
            <svg
              className="icon-pin"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {event.city}
          </span>
          <span className="free-badge">
            <svg className="icon-star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Free Participation
          </span>
        </div>
        <span className="topic-tag">{event.tag}</span>
        <h3 className="card-title">{event.title}</h3>
      </div>

      <div className="card-meta">
        <div className="meta-item">
          <svg
            className="meta-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{event.date}</span>
        </div>
        <div className="meta-item">
          <svg
            className="meta-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{event.time}</span>
        </div>
        {event.venue && event.venue !== "TBA" && (
          <div className="meta-item">
            <svg
              className="meta-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{event.venue}</span>
          </div>
        )}
      </div>

      <div className="card-agenda">
        <p className="agenda-label">Agenda Highlights</p>
        <ul className="agenda-list">
          {event.agenda.map((item, i) => (
            <li key={i} className="agenda-item">
              <span className="agenda-dot"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer">
        <button className="btn-register">
          Register Now
          <svg
            className="btn-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Workshops() {
  const [activeTab, setActiveTab] = useState("industry");

  const events =
    activeTab === "industry" ? industryWorkshops : institutionalWorkshops;

  return (
    <div className="workshops-page">
      {/* Hero */}
      <section className="workshops-hero">
        <div className="hero-noise"></div>
        <div className="hero-orb hero-orb--1"></div>
        <div className="hero-orb hero-orb--2"></div>
        <div className="hero-orb hero-orb--3"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            Federation of Indian Industries
            <span className="eyebrow-dot"></span>
          </div>
          <h1 className="hero-title">
            Workshops &amp;
            <br />
            <span className="hero-title--accent">Seminars</span>
          </h1>
          <p className="hero-subtitle">
            Empowering Industries &amp; Institutions Through Knowledge
          </p>
          <p className="hero-desc">
            FII workshops bring together industry leaders, academics, and
            innovators to drive meaningful conversations, share best practices,
            and build a future-ready workforce across India's key cities.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">8</span>
              <span className="stat-label">Events</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Cities</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Free</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="workshops-tabs-section">
        <div className="tabs-container">
          <div className="tabs-wrapper">
            <button
              className={`tab-btn ${activeTab === "industry" ? "tab-btn--active" : ""}`}
              onClick={() => setActiveTab("industry")}
            >
              <svg
                className="tab-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              Industry Workshops
              <span className="tab-count">4</span>
            </button>
            <button
              className={`tab-btn ${activeTab === "institutional" ? "tab-btn--active" : ""}`}
              onClick={() => setActiveTab("institutional")}
            >
              <svg
                className="tab-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Institutional Workshops
              <span className="tab-count">4</span>
            </button>
          </div>
          <div className="tabs-info">
            <span className="tabs-info-text">
              {activeTab === "industry"
                ? "Corporate & industry-focused events for professionals"
                : "Academic & campus-focused events for educators & students"}
            </span>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="workshops-grid-section">
        <div className="grid-container">
          <div className="section-header">
            <div className="section-label">
              {activeTab === "industry"
                ? "Industry Series 2026"
                : "Institutional Series 2026"}
            </div>
            <h2 className="section-title">
              {activeTab === "industry"
                ? "Workshops for Industry Leaders"
                : "Workshops for Educational Institutions"}
            </h2>
            <p className="section-desc">
              {activeTab === "industry"
                ? "A nationwide series crafted for business leaders, innovators, and change-makers across industries."
                : "Designed for educators, administrators, and students to bridge the gap between academia and industry."}
            </p>
          </div>

          <div className="events-grid">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* City Timeline */}
      <section className="city-timeline-section">
        <div className="timeline-container">
          <div className="timeline-label">2026 Tour</div>
          <div className="timeline-track">
            {["Kolkata", "Delhi", "Mumbai", "Chennai"].map((city, i) => (
              <div className="timeline-stop" key={city}>
                <div className="timeline-dot">
                  <span>{i + 1}</span>
                </div>
                <div className="timeline-city">{city}</div>
                {i < 3 && <div className="timeline-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="workshops-cta">
        <div className="cta-noise"></div>
        <div className="cta-orb cta-orb--1"></div>
        <div className="cta-orb cta-orb--2"></div>
        <div className="cta-content">
          <div className="cta-badge">Limited Seats Available</div>
          <h2 className="cta-title">Join Our Upcoming Workshops</h2>
          <p className="cta-subtitle">
            Be part of India's most impactful industry knowledge series. All
            workshops are free to attend — secure your spot today.
          </p>
          <div className="cta-actions">
            <button className="cta-btn cta-btn--primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Register Now
            </button>
            <button className="cta-btn cta-btn--secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
