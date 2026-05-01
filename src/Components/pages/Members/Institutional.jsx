import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/BROUCHURE.pdf";
  link.download = "FII-Brochure.pdf";
  link.click();
};

import React from "react";
const style = `


  :root {
    --navy: #0A1F44;
    --blue: #1357BE;
    --sky: #2A7DE1;
    --accent: #F4A01C;
    --light: #EEF4FF;
    --white: #FFFFFF;
    --gray: #6B7A99;
    --border: #D6E4F7;
    --text: #1C2B4A;
  }

  body { font-family: 'DM Sans', sans-serif; color: var(--text); overflow-x: hidden; }

  .fii-page { background: #fff; margin-top: 40px }

  /* ── HERO ── */
  .hero {
    background: linear-gradient(135deg, var(--navy) 0%, #0d2d6b 50%, #133a8c 100%);
    min-height: 92vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 60px 0;
  }

  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .hero-orb-1 { width: 500px; height: 500px; background: rgba(42,125,225,0.25); top: -100px; right: -100px; }
  .hero-orb-2 { width: 300px; height: 300px; background: rgba(244,160,28,0.12); bottom: 0; left: 10%; }

  .hero-inner {
    max-width: 1240px; margin: 0 auto; padding: 0 32px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
    position: relative; z-index: 2;
  }

  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
    color: #A8C8FF; font-size: 12px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; padding: 6px 16px; border-radius: 100px; margin-bottom: 24px;
  }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 62px); font-weight: 800; line-height: 1.1;
    color: #fff; margin-bottom: 20px;
  }

  .hero h1 span { color: var(--accent); }

  .hero-sub {
    font-size: 18px; color: rgba(255,255,255,0.75); line-height: 1.7;
    margin-bottom: 16px; font-weight: 400;
  }

  .hero-desc {
    font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.8; margin-bottom: 36px;
  }

  .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

  .btn-primary {
    background: var(--accent); color: var(--navy);
    padding: 14px 28px; border-radius: 8px; font-weight: 700;
    font-size: 15px; border: none; cursor: pointer;
    transition: all 0.25s; text-decoration: none; display: inline-block;
    box-shadow: 0 4px 20px rgba(244,160,28,0.4);
  }
  .btn-primary:hover { background: #f5b03e; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(244,160,28,0.5); }

  .btn-outline {
    background: transparent; color: #fff;
    padding: 14px 28px; border-radius: 8px; font-weight: 600;
    font-size: 15px; border: 1.5px solid rgba(255,255,255,0.35); cursor: pointer;
    transition: all 0.25s; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-outline:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.7); }

  .hero-visual {
    display: flex; justify-content: center; align-items: center;
  }

  .hero-illustration {
    width: 100%; max-width: 480px;
  }

  /* ── STATS BAR ── */
  .stats-bar {
    background: var(--blue);
    padding: 0;
  }
  .stats-inner {
    max-width: 1240px; margin: 0 auto; padding: 0 32px;
    display: grid; grid-template-columns: repeat(4, 1fr);
  }
  .stat-item {
    padding: 28px 24px; text-align: center; border-right: 1px solid rgba(255,255,255,0.15);
    transition: background 0.2s;
  }
  .stat-item:last-child { border-right: none; }
  .stat-item:hover { background: rgba(255,255,255,0.08); }
  .stat-num { font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700; color: #fff; display: block; }
  .stat-label { font-size: 12px; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; display: block; }

  /* ── SECTION SHARED ── */
  section { padding: 96px 32px; }
  .container { max-width: 1240px; margin: 0 auto; }

  .section-tag {
    display: inline-block; background: var(--light); color: var(--blue);
    font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    padding: 5px 14px; border-radius: 100px; border: 1px solid var(--border); margin-bottom: 16px;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 3.5vw, 44px); font-weight: 700; color: var(--navy); line-height: 1.2; margin-bottom: 16px;
  }
  .section-sub { font-size: 16px; color: var(--gray); line-height: 1.8; max-width: 600px; }

  .section-header { margin-bottom: 56px; }
  .section-header.center { text-align: center; }
  .section-header.center .section-sub { margin: 0 auto; }

  /* ── ABOUT ── */
  .about { background: #fff; }
  .about-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
  .about-visual-box {
    background: linear-gradient(145deg, var(--light), #dceeff);
    border-radius: 24px; padding: 48px; position: relative; overflow: hidden;
  }
  .about-visual-box::after {
    content: '';
    position: absolute; top: -30px; right: -30px;
    width: 150px; height: 150px;
    background: radial-gradient(circle, rgba(19,87,190,0.15), transparent);
    border-radius: 50%;
  }
  .about-icon-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .about-icon-card {
    background: #fff; border-radius: 16px; padding: 24px;
    box-shadow: 0 2px 16px rgba(10,31,68,0.07);
    text-align: center; transition: transform 0.2s;
  }
  .about-icon-card:hover { transform: translateY(-4px); }
  .about-icon-card .icon { font-size: 32px; margin-bottom: 8px; display: block; }
  .about-icon-card p { font-size: 13px; font-weight: 600; color: var(--navy); }
  .about-text p { font-size: 16px; color: var(--gray); line-height: 1.9; margin-bottom: 20px; }
  .about-pill { display: inline-flex; align-items: center; gap: 8px; background: var(--light); border: 1px solid var(--border); border-radius: 100px; padding: 8px 18px; font-size: 13px; color: var(--blue); font-weight: 600; margin: 4px; }

  /* ── WHO CAN JOIN ── */
  .who { background: var(--light); }
  .who-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .who-card {
    background: #fff; border-radius: 20px; padding: 36px 24px; text-align: center;
    box-shadow: 0 2px 20px rgba(10,31,68,0.06); border: 1.5px solid transparent;
    transition: all 0.3s; cursor: default; position: relative; overflow: hidden;
  }
  .who-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--blue), var(--sky));
    opacity: 0; transition: opacity 0.3s;
  }
  .who-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(19,87,190,0.18); border-color: var(--sky); }
  .who-card:hover .who-icon, .who-card:hover .who-title, .who-card:hover .who-desc { position: relative; z-index: 1; }
  .who-card:hover .who-icon { background: rgba(255,255,255,0.2); }
  .who-card:hover .who-title { color: #fff; }
  .who-card:hover .who-desc { color: rgba(255,255,255,0.8); }
  .who-card:hover::before { opacity: 1; }
  .who-icon {
    width: 72px; height: 72px; border-radius: 20px;
    background: var(--light); display: flex; align-items: center; justify-content: center;
    font-size: 34px; margin: 0 auto 20px; transition: background 0.3s;
  }
  .who-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 10px; position: relative; }
  .who-desc { font-size: 13px; color: var(--gray); line-height: 1.7; position: relative; }

  /* ── ELIGIBILITY ── */
  .eligibility { background: #fff; }
  .elig-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .elig-card {
    border: 1.5px solid var(--border); border-radius: 16px; padding: 32px 28px;
    display: flex; gap: 18px; align-items: flex-start;
    transition: all 0.25s;
  }
  .elig-card:hover { border-color: var(--sky); box-shadow: 0 8px 32px rgba(19,87,190,0.1); transform: translateY(-3px); }
  .elig-check { width: 44px; height: 44px; min-width: 44px; border-radius: 12px; background: var(--light); display: flex; align-items: center; justify-content: center; font-size: 20px; }
  .elig-text h4 { font-size: 15px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .elig-text p { font-size: 13px; color: var(--gray); line-height: 1.6; }

  /* ── BENEFITS ── */
  .benefits { background: linear-gradient(180deg, #f0f6ff 0%, #fff 100%); }
  .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .benefit-card {
    background: #fff; border-radius: 20px; padding: 36px 28px;
    box-shadow: 0 2px 24px rgba(10,31,68,0.07); border: 1.5px solid transparent;
    transition: all 0.3s; position: relative;
  }
  .benefit-card::after {
    content: ''; position: absolute; bottom: 0; left: 28px; right: 28px; height: 3px;
    background: linear-gradient(90deg, var(--blue), var(--sky));
    border-radius: 3px; opacity: 0; transition: opacity 0.3s;
  }
  .benefit-card:hover { transform: translateY(-6px); box-shadow: 0 20px 56px rgba(19,87,190,0.14); border-color: var(--border); }
  .benefit-card:hover::after { opacity: 1; }
  .benefit-icon { font-size: 38px; margin-bottom: 18px; display: block; }
  .benefit-title { font-size: 17px; font-weight: 700; color: var(--navy); margin-bottom: 10px; }
  .benefit-desc { font-size: 14px; color: var(--gray); line-height: 1.7; }

  /* ── STUDENT BENEFITS ── */
  .student-benefits {
    background: linear-gradient(135deg, var(--navy) 0%, #0d2d6b 100%);
    position: relative; overflow: hidden;
  }
  .student-benefits::before {
    content: ''; position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
  }
  .student-benefits .container { position: relative; z-index: 1; }
  .student-benefits .section-title { color: #fff; }
  .student-benefits .section-sub { color: rgba(255,255,255,0.65); }
  .student-benefits .section-tag { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.2); }

  .student-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 56px; }
  .student-card {
    background: rgba(255,255,255,0.07); border: 1.5px solid rgba(255,255,255,0.12);
    border-radius: 20px; padding: 36px 24px; text-align: center;
    backdrop-filter: blur(12px); transition: all 0.3s;
  }
  .student-card:hover { background: rgba(255,255,255,0.13); transform: translateY(-6px); border-color: rgba(255,255,255,0.28); }
  .student-card-icon { font-size: 42px; margin-bottom: 18px; display: block; }
  .student-card h3 { font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 10px; }
  .student-card p { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.7; }
  .student-accent { display: block; width: 36px; height: 3px; background: var(--accent); border-radius: 2px; margin: 14px auto 0; }

  /* ── IMPACT ── */
  .impact { background: #fff; }
  .impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
  .impact-card {
    background: linear-gradient(145deg, var(--light), #dceeff);
    border-radius: 24px; padding: 48px 32px; text-align: center; position: relative; overflow: hidden;
    border: 1.5px solid var(--border); transition: transform 0.3s;
  }
  .impact-card:hover { transform: translateY(-6px); }
  .impact-card::after {
    content: ''; position: absolute; top: -20px; right: -20px;
    width: 100px; height: 100px;
    background: radial-gradient(circle, rgba(19,87,190,0.15), transparent);
    border-radius: 50%;
  }
  .impact-num {
    font-family: 'Playfair Display', serif; font-size: 54px; font-weight: 800;
    color: var(--blue); display: block; line-height: 1;
  }
  .impact-unit { font-size: 28px; color: var(--accent); }
  .impact-label { font-size: 15px; font-weight: 700; color: var(--navy); margin: 12px 0 8px; }
  .impact-desc { font-size: 13px; color: var(--gray); line-height: 1.6; }
  .impact-icon { font-size: 28px; position: absolute; top: 24px; right: 28px; opacity: 0.4; }

  /* ── CTA ── */
  .cta-section {
    background: linear-gradient(135deg, #0A1F44 0%, #1357BE 100%);
    padding: 96px 32px; text-align: center; position: relative; overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(42,125,225,0.2), transparent 70%);
  }
  .cta-section .container { position: relative; z-index: 1; }
  .cta-section .section-tag { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.2); }
  .cta-section .section-title { color: #fff; max-width: 700px; margin: 0 auto 16px; }
  .cta-section .section-sub { color: rgba(255,255,255,0.65); margin: 0 auto 40px; }
  .cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .hero-inner { grid-template-columns: 1fr; text-align: center; }
    .hero-visual { display: none; }
    .hero-btns { justify-content: center; }
    .hero-badge { display: inline-flex; }
    .about-grid { grid-template-columns: 1fr; gap: 48px; }
    .who-grid { grid-template-columns: repeat(2, 1fr); }
    .benefits-grid { grid-template-columns: repeat(2, 1fr); }
    .student-grid { grid-template-columns: repeat(2, 1fr); }
    .stats-inner { grid-template-columns: repeat(2, 1fr); }
    .stat-item:nth-child(2) { border-right: none; }
  }

  @media (max-width: 640px) {
    section { padding: 64px 20px; }
    nav { padding: 12px 20px; }
    .who-grid, .benefits-grid, .student-grid, .impact-grid { grid-template-columns: 1fr; }
    .elig-grid { grid-template-columns: 1fr; }
    .stats-inner { grid-template-columns: repeat(2, 1fr); }
    .hero-inner { padding: 0 20px; }
  }

  /* ── ANIMATIONS ── */
  .fade-up {
    opacity: 0; transform: translateY(32px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .fade-up-delay-1 { transition-delay: 0.1s; }
  .fade-up-delay-2 { transition-delay: 0.2s; }
  .fade-up-delay-3 { transition-delay: 0.3s; }
  .fade-up-delay-4 { transition-delay: 0.4s; }
  .fade-up-delay-5 { transition-delay: 0.5s; }
  .fade-up-delay-6 { transition-delay: 0.6s; }
`;

const HeroIllustration = () => (
  <svg
    viewBox="0 0 520 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hero-illustration"
  >
    {/* Background circles */}
    <circle
      cx="260"
      cy="210"
      r="190"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1"
    />
    <circle
      cx="260"
      cy="210"
      r="140"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />

    {/* Main building */}
    <rect
      x="150"
      y="160"
      width="220"
      height="180"
      rx="8"
      fill="rgba(255,255,255,0.12)"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.5"
    />
    {/* Roof */}
    <polygon
      points="140,160 260,80 380,160"
      fill="rgba(255,255,255,0.1)"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="1.5"
    />
    {/* Columns */}
    <rect
      x="175"
      y="240"
      width="18"
      height="100"
      rx="3"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="215"
      y="240"
      width="18"
      height="100"
      rx="3"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="287"
      y="240"
      width="18"
      height="100"
      rx="3"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="327"
      y="240"
      width="18"
      height="100"
      rx="3"
      fill="rgba(255,255,255,0.2)"
    />
    {/* Door */}
    <rect
      x="232"
      y="280"
      width="56"
      height="60"
      rx="4"
      fill="rgba(244,160,28,0.4)"
      stroke="rgba(244,160,28,0.8)"
      strokeWidth="1.5"
    />
    {/* Windows */}
    <rect
      x="170"
      y="180"
      width="36"
      height="32"
      rx="4"
      fill="rgba(255,255,255,0.15)"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1"
    />
    <rect
      x="222"
      y="180"
      width="36"
      height="32"
      rx="4"
      fill="rgba(255,255,255,0.15)"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1"
    />
    <rect
      x="274"
      y="180"
      width="36"
      height="32"
      rx="4"
      fill="rgba(255,255,255,0.15)"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1"
    />
    <rect
      x="314"
      y="180"
      width="36"
      height="32"
      rx="4"
      fill="rgba(255,255,255,0.15)"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1"
    />
    {/* Flag */}
    <line
      x1="260"
      y1="80"
      x2="260"
      y2="40"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="2"
    />
    <rect x="260" y="40" width="30" height="18" rx="2" fill="#F4A01C" />

    {/* Floating cards */}
    <rect
      x="30"
      y="130"
      width="100"
      height="68"
      rx="12"
      fill="rgba(42,125,225,0.25)"
      stroke="rgba(42,125,225,0.5)"
      strokeWidth="1.5"
    />
    <circle cx="52" cy="155" r="12" fill="rgba(255,255,255,0.25)" />
    <text x="52" y="160" textAnchor="middle" fontSize="14">
      🎓
    </text>
    <rect
      x="46"
      y="173"
      width="68"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.3)"
    />
    <rect
      x="54"
      y="184"
      width="50"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.15)"
    />

    <rect
      x="390"
      y="100"
      width="100"
      height="68"
      rx="12"
      fill="rgba(19,87,190,0.3)"
      stroke="rgba(42,125,225,0.5)"
      strokeWidth="1.5"
    />
    <circle cx="412" cy="125" r="12" fill="rgba(255,255,255,0.25)" />
    <text x="412" y="130" textAnchor="middle" fontSize="14">
      🏭
    </text>
    <rect
      x="406"
      y="143"
      width="68"
      height="6"
      rx="3"
      fill="rgba(255,255,255,0.3)"
    />
    <rect
      x="414"
      y="154"
      width="50"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.15)"
    />

    <rect
      x="60"
      y="300"
      width="90"
      height="60"
      rx="10"
      fill="rgba(244,160,28,0.2)"
      stroke="rgba(244,160,28,0.45)"
      strokeWidth="1.5"
    />
    <text x="105" y="320" textAnchor="middle" fontSize="20">
      💼
    </text>
    <rect
      x="74"
      y="328"
      width="62"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.3)"
    />
    <rect
      x="80"
      y="338"
      width="50"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.15)"
    />

    <rect
      x="370"
      y="270"
      width="90"
      height="60"
      rx="10"
      fill="rgba(42,125,225,0.2)"
      stroke="rgba(42,125,225,0.45)"
      strokeWidth="1.5"
    />
    <text x="415" y="290" textAnchor="middle" fontSize="20">
      📊
    </text>
    <rect
      x="384"
      y="298"
      width="62"
      height="5"
      rx="2.5"
      fill="rgba(255,255,255,0.3)"
    />
    <rect
      x="390"
      y="308"
      width="50"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.15)"
    />

    {/* Connection lines */}
    <line
      x1="130"
      y1="164"
      x2="155"
      y2="215"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
      strokeDasharray="4,4"
    />
    <line
      x1="390"
      y1="135"
      x2="368"
      y2="185"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
      strokeDasharray="4,4"
    />

    {/* Stars */}
    <circle cx="80" cy="70" r="2.5" fill="rgba(255,255,255,0.6)" />
    <circle cx="440" cy="50" r="2" fill="rgba(244,160,28,0.8)" />
    <circle cx="480" cy="180" r="1.5" fill="rgba(255,255,255,0.5)" />
    <circle cx="20" cy="240" r="2" fill="rgba(244,160,28,0.6)" />
  </svg>
);

const benefits = [
  {
    icon: "🏛️",
    title: "Industry-Aligned Education",
    desc: "Access curated curricula, live case studies, and industry mentors that keep your programs relevant to today's job market.",
  },
  {
    icon: "💼",
    title: "Internship & Placement Support",
    desc: "Tap into FII's expansive industry network for structured internship programs and campus placement drives.",
  },
  {
    icon: "🤝",
    title: "Networking Opportunities",
    desc: "Participate in summits, CXO roundtables, and inter-institutional forums that connect academia with industry leaders.",
  },
  {
    icon: "🔬",
    title: "Research & Innovation",
    desc: "Collaborate on live industry research projects, innovation labs, and sponsored R&D initiatives.",
  },
  {
    icon: "📚",
    title: "Knowledge Access",
    desc: "Gain access to FII's knowledge repository, policy briefs, industry reports, and exclusive webinar series.",
  },
  {
    icon: "🏆",
    title: "Branding & Recognition",
    desc: "Display the FII membership badge, get listed in the national directory, and gain visibility among top employers.",
  },
];

const studentBenefits = [
  {
    icon: "🧑‍🏫",
    title: "Mentorship",
    desc: "One-on-one mentoring from industry professionals across sectors.",
  },
  {
    icon: "📜",
    title: "Certifications",
    desc: "FII-certified skill credentials recognized by leading companies nationally.",
  },
  {
    icon: "🛠️",
    title: "Real-world Projects",
    desc: "Live industry projects embedded into coursework for hands-on learning.",
  },
  {
    icon: "🚀",
    title: "Internship Opportunities",
    desc: "Direct access to verified internships with FII's partner organizations.",
  },
];

const eligibility = [
  {
    icon: "✅",
    title: "AICTE / UGC Recognized",
    desc: "Institution must hold valid recognition from AICTE, UGC, or equivalent statutory body.",
  },
  {
    icon: "📐",
    title: "Industry-Aligned Curriculum",
    desc: "Commitment to integrating industry-relevant skills and practical training in academic programs.",
  },
  {
    icon: "🎯",
    title: "Training & Placement Cell",
    desc: "An active T&P cell with a dedicated coordinator facilitating placements and internships.",
  },
  {
    icon: "📋",
    title: "Minimum 3-Year Operation",
    desc: "Institutions with at least 3 years of operational experience in technical or vocational education.",
  },
  {
    icon: "🌐",
    title: "Digital Infrastructure",
    desc: "Adequate digital infrastructure for virtual collaboration, online learning, and industry connect.",
  },
  {
    icon: "👥",
    title: "Student Enrollment",
    desc: "Minimum 100+ enrolled students in programs aligned with FII's industry verticals.",
  },
];

const whoCanJoin = [
  {
    icon: "🎓",
    title: "Universities",
    desc: "State, central, deemed, and private universities with affiliated programs.",
  },
  {
    icon: "🏫",
    title: "Colleges",
    desc: "Engineering, management, science, and arts colleges with industry-facing programs.",
  },
  {
    icon: "🔧",
    title: "ITIs",
    desc: "Industrial Training Institutes offering vocational and technical skill programs.",
  },
  {
    icon: "📊",
    title: "Skill Development Institutes",
    desc: "NSDC-affiliated and government-recognized skill development centres.",
  },
];

const stats = [
  { num: "500", unit: "+", label: "Member Institutions" },
  { num: "1.2", unit: "L+", label: "Students Impacted" },
  { num: "200", unit: "+", label: "Industry Partners" },
  { num: "85", unit: "%", label: "Placement Growth" },
];

const impactData = [
  {
    icon: "📈",
    num: "10",
    unit: "x",
    label: "Skill Development",
    desc: "Members report 10x faster skill development cycles through structured industry collaboration.",
  },
  {
    icon: "💼",
    num: "85",
    unit: "%",
    label: "Placement Growth",
    desc: "Institutional members experience up to 85% improvement in campus placement rates within two years.",
  },
  {
    icon: "🤝",
    num: "200",
    unit: "+",
    label: "Industry Collaborations",
    desc: "Over 200 active MoUs and live projects running simultaneously across member institutions.",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ target, unit }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const num = parseFloat(target);
          const step = num / 60;
          let cur = 0;
          const t = setInterval(() => {
            cur = Math.min(cur + step, num);
            setVal(cur);
            if (cur >= num) clearInterval(t);
          }, 20);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  const display = Number.isInteger(parseFloat(target))
    ? Math.round(val).toString()
    : val.toFixed(1);

  return (
    <span ref={ref} className="impact-num">
      {display}
      <span className="impact-unit">{unit}</span>
    </span>
  );
}

export default function FIIInstitutionalMembers() {
  useScrollReveal();

  return (
    <>
      <style>{style}</style>
      <div className="fii-page">
        {/* HERO */}
        <section className="hero">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-inner">
            <div>
              <div className="hero-badge">🏛️ &nbsp; FII Membership Program</div>
              <h1>
                Institutional <span>Members</span>
              </h1>
              <p className="hero-sub">
                Empowering educational institutions to build industry-ready
                talent.
              </p>
              <p className="hero-desc">
                The Federation of Institutes & Industries (FII) is India's
                premier bridge between academia and industry — fostering
                collaboration, skill development, and career readiness at scale.
              </p>
              <div className="hero-btns">
                <a href="#cta" className="btn-primary">
                  Become a Member
                </a>
                {/* <Link to="/apply" className="btn-outline">
                  <span>📄</span> Download Brochure
                </Link> */}
                <button onClick={handleDownload} className="btn-outline">
  📄 Download Brochure
</button>
              </div>
            </div>
            <div className="hero-visual">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="stats-bar">
          <div className="stats-inner">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-num">
                  {s.num}
                  {s.unit}
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section className="about" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="fade-up">
                <div className="about-visual-box">
                  <div className="about-icon-grid">
                    {[
                      ["🎓", "Academia"],
                      ["🏭", "Industry"],
                      ["🔗", "Collaboration"],
                      ["🚀", "Growth"],
                    ].map(([ic, lb]) => (
                      <div className="about-icon-card" key={lb}>
                        <span className="icon">{ic}</span>
                        <p>{lb}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="about-text fade-up fade-up-delay-1">
                <div className="section-tag">About Membership</div>
                <h2 className="section-title">
                  What is Institutional Membership?
                </h2>
                <p>
                  Institutional Membership with FII is a strategic partnership
                  that bridges the gap between academic training and real-world
                  industry demands. It is designed for educational institutions
                  that are committed to producing graduates who are not just
                  degree-holders, but skilled professionals ready to contribute
                  from day one.
                </p>
                <p>
                  As an FII Institutional Member, your institution gains direct
                  access to a curated ecosystem of industry leaders, policy
                  frameworks, placement networks, and research collaborations —
                  giving your students a decisive competitive advantage in the
                  workforce.
                </p>
                <div
                  style={{ marginTop: 24, display: "flex", flexWrap: "wrap" }}
                >
                  {[
                    "Industry Connect",
                    "Placement Network",
                    "Skill Ecosystem",
                    "Policy Access",
                  ].map((p) => (
                    <span className="about-pill" key={p}>
                      ✓ {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO CAN JOIN */}
        <section className="who" id="who">
          <div className="container">
            <div className="section-header center">
              <div className="section-tag fade-up">Eligibility</div>
              <h2 className="section-title fade-up fade-up-delay-1">
                Who Can Join?
              </h2>
              <p className="section-sub fade-up fade-up-delay-2">
                FII welcomes all forward-thinking educational institutions that
                share a vision of industry-aligned education and career-ready
                graduates.
              </p>
            </div>
            <div className="who-grid">
              {whoCanJoin.map((w, i) => (
                <div
                  className={`who-card fade-up fade-up-delay-${i + 1}`}
                  key={w.title}
                >
                  <div className="who-icon">{w.icon}</div>
                  <div className="who-title">{w.title}</div>
                  <div className="who-desc">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="eligibility">
          <div className="container">
            <div className="section-header center">
              <div className="section-tag fade-up">Criteria</div>
              <h2 className="section-title fade-up fade-up-delay-1">
                Eligibility Criteria
              </h2>
              <p className="section-sub fade-up fade-up-delay-2">
                Institutions that meet the following baseline criteria are
                invited to apply for FII Institutional Membership.
              </p>
            </div>
            <div className="elig-grid">
              {eligibility.map((e, i) => (
                <div
                  className={`elig-card fade-up fade-up-delay-${(i % 3) + 1}`}
                  key={e.title}
                >
                  <div className="elig-check">{e.icon}</div>
                  <div className="elig-text">
                    <h4>{e.title}</h4>
                    <p>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits" id="benefits">
          <div className="container">
            <div className="section-header center">
              <div className="section-tag fade-up">Key Benefits</div>
              <h2 className="section-title fade-up fade-up-delay-1">
                Why Join as an Institutional Member?
              </h2>
              <p className="section-sub fade-up fade-up-delay-2">
                Unlock a comprehensive suite of benefits designed to elevate
                your institution's academic impact and student outcomes.
              </p>
            </div>
            <div className="benefits-grid">
              {benefits.map((b, i) => (
                <div
                  className={`benefit-card fade-up fade-up-delay-${(i % 3) + 1}`}
                  key={b.title}
                >
                  <span className="benefit-icon">{b.icon}</span>
                  <div className="benefit-title">{b.title}</div>
                  <div className="benefit-desc">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STUDENT BENEFITS */}
        <section className="student-benefits">
          <div className="container">
            <div className="section-header center">
              <div className="section-tag fade-up">For Students</div>
              <h2 className="section-title fade-up fade-up-delay-1">
                Student Benefits
              </h2>
              <p className="section-sub fade-up fade-up-delay-2">
                When your institution joins FII, every student gains access to
                transformative career development opportunities.
              </p>
            </div>
            <div className="student-grid">
              {studentBenefits.map((s, i) => (
                <div
                  className={`student-card fade-up fade-up-delay-${i + 1}`}
                  key={s.title}
                >
                  <span className="student-card-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="student-accent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="impact" id="impact">
          <div className="container">
            <div className="section-header center">
              <div className="section-tag fade-up">Our Impact</div>
              <h2 className="section-title fade-up fade-up-delay-1">
                Measurable Outcomes
              </h2>
              <p className="section-sub fade-up fade-up-delay-2">
                FII membership delivers real, quantifiable improvements across
                skill development, placement, and industry collaboration.
              </p>
            </div>
            <div className="impact-grid">
              {impactData.map((d, i) => (
                <div
                  className={`impact-card fade-up fade-up-delay-${i + 1}`}
                  key={d.label}
                >
                  <span className="impact-icon">{d.icon}</span>
                  <Counter target={d.num} unit={d.unit} />
                  <div className="impact-label">{d.label}</div>
                  <div className="impact-desc">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="cta">
          <div className="container">
            <div className="section-tag fade-up">Join Today</div>
            <h2 className="section-title fade-up fade-up-delay-1">
              Join FII as an Institutional Member
            </h2>
            <p className="section-sub fade-up fade-up-delay-2">
              Take the first step toward transforming your institution into a
              launchpad for India's next generation of industry-ready
              professionals.
            </p>
            <div className="cta-btns fade-up fade-up-delay-3">
              <Link to="/apply" className="btn-primary">
                Apply for Membership
              </Link>{" "}
              <Link
              to="/contact"
                className="btn-outline"
                style={{ fontSize: 16, padding: "16px 36px" }}
              >
                <span>📞</span> Talk to an Advisor
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
