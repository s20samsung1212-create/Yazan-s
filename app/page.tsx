"use client";

import { useState } from "react";
import { Mail, Globe, Code, Code2, Palette, Sparkles, ExternalLink, Cpu, Heart, Pickaxe, Shovel, Box, Flame, UserCheck, Wrench, Sun, Moon, MapPin, FileText, ArrowUpRight, Clock, CheckCircle } from "lucide-react";

export default function Home() {
  // حالة التحكم بالوضع: true = وضع النهار (Overworld Day)، false = وضع الليل (Nether Night)
  const [isDayMode, setIsDayMode] = useState(false);

  // حالة فلتر المشاريع: "all" | "completed" | "in_progress"
  const [projectFilter, setProjectFilter] = useState<"all" | "completed" | "in_progress">("all");

  // الألوان الديناميكية بناءً على الوضع المختار
  const bgColor = isDayMode ? "#f0f9ff" : "#0b0e14";
  const textColor = isDayMode ? "#0f172a" : "#f8fafc";
  const cardBg = isDayMode ? "rgba(255, 255, 255, 0.75)" : "rgba(18, 22, 32, 0.4)";
  const cardBorder = isDayMode ? "rgba(186, 230, 253, 0.8)" : "rgba(51, 65, 85, 0.6)";
  const subTextColor = isDayMode ? "#475569" : "#94a3b8";

  // مصفوفة كافة المشاريع (المكتملة + قيد التنفيذ)
  const projects = [
    // --- مشاريع مكتملة (Completed) ---
    {
      id: "adco-lube",
      title: "ADCO LUBE INDUSTRIAL",
      status: "completed",
      badge: "ADCO_LUBE",
      accentColor: "#38bdf8",
      gradient: "linear-gradient(to bottom right, rgba(56, 189, 248, 0.2), #0b0e14)",
      description: "Enterprise digital solution and product showcase web portal for industrial lubricant products.",
      tags: ["REACT", "TAILWIND", "UI/UX"],
      pdfUrl: "/adco-lube.pdf",
      gridSpan: 1
    },
    {
      id: "diyafah-home",
      title: "DIYAFAL HOME E-COMMERCE",
      status: "completed",
      badge: "DIYAFAL_HOME",
      accentColor: "#34d399",
      gradient: "linear-gradient(to bottom right, rgba(16, 185, 129, 0.2), #0b0e14)",
      description: "Full-stack web application featuring dynamic product management, catalog filter, and WhatsApp checkout system.",
      tags: ["NEXT.JS", "SUPABASE", "VERCEL"],
      pdfUrl: "/diyafah-home.pdf",
      gridSpan: 1
    },
    {
      id: "ai-shorts-gen",
      title: "AI SHORTS GENERATOR",
      status: "completed",
      badge: "AISHORT_GEN",
      accentColor: "#fbbf24",
      gradient: "linear-gradient(to bottom right, rgba(251, 191, 36, 0.2), #0b0e14)",
      description: "Automated Python desktop video processing engine utilizing FastAPI, MoviePy, yt-dlp, and FFmpeg for video clipping & subtitles.",
      tags: ["PYTHON", "FASTAPI", "FFMPEG"],
      pdfUrl: "/aishort-generator.pdf",
      gridSpan: 1
    },
    {
      id: "stark-system",
      title: "STARK ENTERPRISE APP",
      status: "completed",
      badge: "STARK_SYSTEM",
      accentColor: "#ef4444",
      gradient: "linear-gradient(to bottom right, rgba(239, 68, 68, 0.2), #0b0e14)",
      description: "Modern administrative dashboard and web portal designed for scalable enterprise resource and workflow management.",
      tags: ["REACT", "TYPESCRIPT", "DASHBOARD"],
      pdfUrl: "/stark.pdf",
      gridSpan: 1
    },
    {
      id: "personal-portfolios",
      title: "PERSONAL & BRAND WEBSITES",
      status: "completed",
      badge: "PERSONAL_PORTFOLIOS",
      accentColor: "#34d399",
      gradient: "linear-gradient(to bottom right, rgba(16, 185, 129, 0.2), #0b0e14)",
      description: "A suite of custom-designed personal websites, 3D interactive experiences, and high-performance landing pages.",
      tags: ["NEXT.JS", "THREE.JS", "FRAMER"],
      pdfUrl: "/personal-websites.pdf",
      gridSpan: 1
    },
    {
      id: "tech-consulting",
      title: "SOFTWARE CONSULTING & SEMINARS",
      status: "completed",
      badge: "TECH_CONSULTING",
      accentColor: "#0284c7",
      gradient: "linear-gradient(to bottom right, rgba(56, 189, 248, 0.2), #0b0e14)",
      description: "Software engineering mentorship sessions, workshops on modern web stack architecture, and academic guidance for engineering students.",
      tags: ["CONSULTING", "SEMINARS", "MENTORSHIP"],
      pdfUrl: "/software-consulting.pdf",
      gridSpan: 1
    },

    // --- مشاريع قيد التنفيذ (In Progress) ---
    {
      id: "dont-see-anything",
      title: "I DON'T SEE ANYTHING",
      status: "in_progress",
      badge: "NO_VISION_PROJECT",
      accentColor: "#f59e0b",
      gradient: "linear-gradient(to bottom right, rgba(245, 158, 11, 0.25), #0b0e14)",
      description: "Conceptual experimental digital web experience under active architectural development and prototyping.",
      tags: ["NEXT.JS", "EXPERIMENTAL", "CREATIVE_UI"],
      pdfUrl: "#",
      gridSpan: 1
    },
    {
      id: "jy-store",
      title: "J&Y FASHION STORE",
      status: "in_progress",
      badge: "J&Y_STORE",
      accentColor: "#f59e0b",
      gradient: "linear-gradient(to bottom right, rgba(245, 158, 11, 0.2), #0b0e14)",
      description: "High-end fashion e-commerce web platform featuring indigo branding, sportswear catalog, and seamless Cash On Delivery.",
      tags: ["NEXT.JS", "TAILWIND", "E-COMMERCE"],
      pdfUrl: "/j-and-y-store.pdf",
      gridSpan: 1
    },
    {
      id: "game-project",
      title: "INTERACTIVE GAME ENGINE",
      status: "in_progress",
      badge: "GAME_PROJECT",
      accentColor: "#f59e0b",
      gradient: "linear-gradient(to bottom right, rgba(245, 158, 11, 0.25), #0b0e14)",
      description: "Custom browser-based game mechanics engine implementing interactive 2D/3D physics and voxel environments.",
      tags: ["CANVAS_API", "THREE.JS", "GAME_DEV"],
      pdfUrl: "#",
      gridSpan: 1
    },
    {
      id: "trading-bot",
      title: "ALGORITHMIC TRADING BOT",
      status: "in_progress",
      badge: "TRADING_BOT",
      accentColor: "#f59e0b",
      gradient: "linear-gradient(to bottom right, rgba(245, 158, 11, 0.25), #0b0e14)",
      description: "Automated algorithmic financial execution and analytics bridge interfacing Python scripts with MetaTrader 5 terminals.",
      tags: ["PYTHON", "METATRADER_5", "FINTECH"],
      pdfUrl: "#",
      gridSpan: 1
    },
    {
      id: "gg-code",
      title: "GG CODE PLATFORM",
      status: "in_progress",
      badge: "GG_CODE",
      accentColor: "#f59e0b",
      gradient: "linear-gradient(to bottom right, rgba(245, 158, 11, 0.25), #0b0e14)",
      description: "Next-generation developer toolset and interactive code platform optimized for high-speed technical workflows.",
      tags: ["REACT", "TYPESCRIPT", "DEV_TOOLS"],
      pdfUrl: "#",
      gridSpan: 1
    }
  ];

  // تصفية المشاريع بحسب الفلتر المختار
  const filteredProjects = projects.filter((project) => {
    if (projectFilter === "completed") return project.status === "completed";
    if (projectFilter === "in_progress") return project.status === "in_progress";
    return true;
  });

  return (
    <main style={{ backgroundColor: bgColor, color: textColor, minHeight: "100vh", fontFamily: "sans-serif", overflowX: "hidden", position: "relative", transition: "all 0.4s ease" }}>
      
      {/* FLOATING TRANSPARENT MINECRAFT ELEMENTS IN BACKGROUND */}
      <div style={{ position: "absolute", top: "10%", left: "4%", opacity: isDayMode ? 0.12 : 0.05, pointerEvents: "none" }}>
        <Pickaxe size={130} color="#34d399" />
      </div>
      <div style={{ position: "absolute", top: "25%", right: "5%", opacity: isDayMode ? 0.12 : 0.05, pointerEvents: "none" }}>
        <Shovel size={120} color="#38bdf8" />
      </div>
      <div style={{ position: "absolute", top: "50%", left: "3%", opacity: isDayMode ? 0.12 : 0.05, pointerEvents: "none" }}>
        <Box size={140} color="#a855f7" />
      </div>
      <div style={{ position: "absolute", top: "75%", right: "4%", opacity: isDayMode ? 0.12 : 0.05, pointerEvents: "none" }}>
        <Flame size={130} color="#fbbf24" />
      </div>

      {/* 1. MINECRAFT HUD / NAVIGATION BAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: isDayMode ? "rgba(255, 255, 255, 0.9)" : "rgba(11, 14, 20, 0.88)", backdropFilter: "blur(12px)", borderBottom: `2px solid ${isDayMode ? "#0284c7" : "rgba(16, 185, 129, 0.4)"}`, transition: "all 0.4s ease" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          <span className="font-pixel" style={{ fontWeight: "bold", fontSize: "16px", color: isDayMode ? "#0284c7" : "#34d399", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "12px", height: "12px", backgroundColor: isDayMode ? "#0284c7" : "#10b981", boxShadow: `0 0 10px ${isDayMode ? "#0284c7" : "#10b981"}`, display: "inline-block" }}></span>
            YAZAN.DEV
          </span>

          {/* MINECRAFT HEALTH BAR & LEVEL */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", gap: "4px", color: "#ef4444" }}>
              <Heart size={16} fill="#ef4444" />
              <Heart size={16} fill="#ef4444" />
              <Heart size={16} fill="#ef4444" />
              <Heart size={16} fill="#ef4444" />
              <Heart size={16} fill="#ef4444" />
            </div>
            <span className="font-pixel" style={{ fontSize: "11px", color: isDayMode ? "#0284c7" : "#34d399", backgroundColor: isDayMode ? "rgba(2, 132, 199, 0.15)" : "rgba(16, 185, 129, 0.15)", padding: "4px 8px", border: `1px solid ${isDayMode ? "#0284c7" : "#10b981"}` }}>
              LVL 99
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {/* INTERACTIVE DAY/NIGHT MODE TOGGLE BUTTON */}
            <button 
              onClick={() => setIsDayMode(!isDayMode)} 
              className="font-pixel" 
              style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: isDayMode ? "#e0f2fe" : "rgba(30, 41, 59, 0.6)", padding: "6px 12px", border: `1px solid ${isDayMode ? "#38bdf8" : "#334155"}`, color: isDayMode ? "#0369a1" : "#fbbf24", fontSize: "10px", borderRadius: "4px" }}
            >
              {isDayMode ? <Sun size={14} /> : <Moon size={14} />}
              <span>{isDayMode ? "OVERWORLD_DAY" : "NETHER_NIGHT"}</span>
            </button>

            <a href="mailto:skyveryhigh26@gmail.com" style={{ color: subTextColor }} title="Email"><Mail size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: subTextColor }} title="LinkedIn"><Globe size={20} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: subTextColor }} title="GitHub"><Code size={20} /></a>
          </div>

        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px", paddingLeft: "24px", paddingRight: "24px", maxWidth: "1150px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative" }}>
        
        {/* GAMEMODE BADGE */}
        <div className="font-pixel" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "4px", backgroundColor: isDayMode ? "rgba(2, 132, 199, 0.1)" : "rgba(16, 185, 129, 0.1)", border: `1px solid ${isDayMode ? "#0284c7" : "#10b981"}`, color: isDayMode ? "#0284c7" : "#34d399", fontSize: "11px", marginBottom: "28px" }}>
          <Sparkles size={14} />
          <span>GAMEMODE: HARDCORE FRONT-END ENGINEER</span>
        </div>

        {/* MAIN TITLE */}
        <h1 className="font-pixel" style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", color: isDayMode ? "#0369a1" : "#34d399", letterSpacing: "1px", textShadow: isDayMode ? "3px 3px 0px #bae6fd" : "3px 3px 0px #065f46" }}>
          YAZAN AL-BAROUDI
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", color: isDayMode ? "#0284c7" : "#38bdf8", fontSize: "14px", marginBottom: "20px" }} className="font-pixel">
          <MapPin size={16} />
          <span>Damascus, Syria | Remote Ready Worldwide</span>
        </div>

        <p style={{ fontSize: "18px", color: isDayMode ? "#334155" : "#cbd5e1", maxWidth: "760px", marginBottom: "36px", lineHeight: "1.6", fontWeight: "300" }}>
          Computer Engineer, Front-End Developer, and UI/UX Specialist with 4+ years of experience crafting high-performance web applications, automated media engines, e-commerce architectures, and design systems.
        </p>

        {/* EXP BAR */}
        <div style={{ width: "100%", maxWidth: "500px", marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: isDayMode ? "#0284c7" : "#34d399", marginBottom: "6px" }} className="font-pixel">
            <span>EXP: FULL-STACK & UI/UX MASTERY</span>
            <span>100% / MAX</span>
          </div>
          <div style={{ width: "100%", height: "12px", backgroundColor: isDayMode ? "#e2e8f0" : "#1e293b", border: `2px solid ${isDayMode ? "#cbd5e1" : "#334155"}` }}>
            <div style={{ width: "100%", height: "100%", backgroundColor: isDayMode ? "#0284c7" : "#10b981", boxShadow: `0 0 12px ${isDayMode ? "#0284c7" : "#10b981"}` }}></div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginBottom: "60px" }}>
          <a href="#projects" className="font-pixel mc-btn" style={{ fontSize: "12px", padding: "16px 28px", backgroundColor: isDayMode ? "#0284c7" : "#10b981", color: "#fff", fontWeight: "bold", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", border: `2px solid ${isDayMode ? "#38bdf8" : "#34d399"}`, boxShadow: isDayMode ? "4px 4px 0px #0369a1" : "4px 4px 0px #065f46" }}>
            <Pickaxe size={16} />
            <span>[ CRAFT & PROJECTS ]</span>
            <ArrowUpRight size={16} />
          </a>
          <a href="mailto:skyveryhigh26@gmail.com" className="font-pixel mc-btn" style={{ fontSize: "12px", padding: "16px 28px", backgroundColor: isDayMode ? "#ffffff" : "#151922", border: `2px solid ${isDayMode ? "#cbd5e1" : "#334155"}`, color: isDayMode ? "#0f172a" : "#cbd5e1", textDecoration: "none", boxShadow: isDayMode ? "4px 4px 0px #94a3b8" : "4px 4px 0px #0f172a", display: "flex", alignItems: "center", gap: "8px" }}>
            <Shovel size={16} />
            <span>[ CONTACT / HIRE ME ]</span>
          </a>
        </div>

        {/* INVENTORY HOTBAR STATS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", width: "100%", maxWidth: "850px", padding: "16px", backgroundColor: cardBg, backdropFilter: "blur(8px)", border: `2px solid ${cardBorder}` }}>
          <div style={{ padding: "12px", backgroundColor: isDayMode ? "rgba(255,255,255,0.8)" : "rgba(11, 14, 20, 0.6)", border: `1px solid ${cardBorder}`, textAlign: "center" }}>
            <div className="font-pixel" style={{ color: isDayMode ? "#0284c7" : "#34d399", fontSize: "16px", marginBottom: "4px" }}>4+ YRS</div>
            <div style={{ color: subTextColor, fontSize: "11px" }}>Experience</div>
          </div>
          <div style={{ padding: "12px", backgroundColor: isDayMode ? "rgba(255,255,255,0.8)" : "rgba(11, 14, 20, 0.6)", border: `1px solid ${cardBorder}`, textAlign: "center" }}>
            <div className="font-pixel" style={{ color: "#0284c7", fontSize: "16px", marginBottom: "4px" }}>100%</div>
            <div style={{ color: subTextColor, fontSize: "11px" }}>Responsive</div>
          </div>
          <div style={{ padding: "12px", backgroundColor: isDayMode ? "rgba(255,255,255,0.8)" : "rgba(11, 14, 20, 0.6)", border: `1px solid ${cardBorder}`, textAlign: "center" }}>
            <div className="font-pixel" style={{ color: "#d97706", fontSize: "16px", marginBottom: "4px" }}>60 FPS</div>
            <div style={{ color: subTextColor, fontSize: "11px" }}>Performance</div>
          </div>
          <div style={{ padding: "12px", backgroundColor: isDayMode ? "rgba(255,255,255,0.8)" : "rgba(11, 14, 20, 0.6)", border: `1px solid ${cardBorder}`, textAlign: "center" }}>
            <div className="font-pixel" style={{ color: "#9333ea", fontSize: "16px", marginBottom: "4px" }}>GLOBAL</div>
            <div style={{ color: subTextColor, fontSize: "11px" }}>Remote Ready</div>
          </div>
        </div>

      </section>

      {/* 3. PROFESSIONAL SUMMARY */}
      <section style={{ padding: "60px 24px", maxWidth: "1150px", margin: "0 auto", borderTop: `2px solid ${cardBorder}` }}>
        <h2 className="font-pixel" style={{ fontSize: "18px", marginBottom: "32px", textAlign: "center", color: isDayMode ? "#0284c7" : "#34d399", letterSpacing: "1px" }}>
          // CV_SECTION: PROFESSIONAL_SUMMARY
        </h2>

        <div className="mc-card" style={{ padding: "32px", backgroundColor: cardBg, backdropFilter: "blur(10px)", border: `2px solid ${cardBorder}`, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <UserCheck style={{ color: isDayMode ? "#0284c7" : "#34d399" }} size={28} />
            <h3 className="font-pixel" style={{ fontSize: "16px", color: textColor }}>ABOUT ME & ENGINEERING PROFILE</h3>
          </div>
          <p style={{ color: isDayMode ? "#334155" : "#cbd5e1", fontSize: "15px", lineHeight: "1.8", fontWeight: "300", margin: 0 }}>
            Passionate Computer Engineer and Front-End Specialist with over 4 years of hands-on experience building scalable, high-performance web applications and design systems. Skilled in turning complex business requirements into elegant, pixel-perfect digital solutions across React, Next.js, TypeScript, and modern CSS frameworks. Proven track record in delivering remote e-commerce engines, administrative dashboards, and automated media generation workflows for international and regional enterprise clients across the UAE, Iraq, and Syria.
          </p>
        </div>
      </section>

      {/* 4. DETAILED SKILLS MATRIX */}
      <section style={{ padding: "60px 24px", maxWidth: "1150px", margin: "0 auto", borderTop: `2px solid ${cardBorder}` }}>
        <h2 className="font-pixel" style={{ fontSize: "18px", marginBottom: "48px", textAlign: "center", color: isDayMode ? "#0284c7" : "#34d399", letterSpacing: "1px" }}>
          // INVENTORY: FULL_SKILLS_MATRIX
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "28px" }}>
          
          <div className="mc-card" style={{ padding: "28px", backgroundColor: cardBg, backdropFilter: "blur(10px)", border: `2px solid ${cardBorder}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Code2 style={{ color: isDayMode ? "#0284c7" : "#34d399" }} size={24} />
              <h3 className="font-pixel" style={{ fontSize: "15px", color: textColor }}>FRONT-END DEVELOPMENT</h3>
            </div>
            <p style={{ color: subTextColor, fontSize: "13px", lineHeight: "1.6", marginBottom: "16px" }}>
              React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, State Management.
            </p>
            <div className="font-pixel" style={{ fontSize: "10px", color: isDayMode ? "#0284c7" : "#34d399", display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span>PROFICIENCY</span>
              <span>95%</span>
            </div>
            <div style={{ width: "100%", height: "8px", backgroundColor: isDayMode ? "#e2e8f0" : "#1e293b", border: `1px solid ${cardBorder}` }}>
              <div style={{ width: "95%", height: "100%", backgroundColor: isDayMode ? "#0284c7" : "#10b981" }}></div>
            </div>
          </div>

          <div className="mc-card" style={{ padding: "28px", backgroundColor: cardBg, backdropFilter: "blur(10px)", border: `2px solid ${cardBorder}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Palette style={{ color: "#0284c7" }} size={24} />
              <h3 className="font-pixel" style={{ fontSize: "15px", color: textColor }}>UI/UX & VISUAL DESIGN</h3>
            </div>
            <p style={{ color: subTextColor, fontSize: "13px", lineHeight: "1.6", marginBottom: "16px" }}>
              Figma Design Systems, Adobe Photoshop, High-Fidelity Wireframing, User Journey Mapping, Interactive Prototyping, Brand Asset Creation.
            </p>
            <div className="font-pixel" style={{ fontSize: "10px", color: "#0284c7", display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span>PROFICIENCY</span>
              <span>90%</span>
            </div>
            <div style={{ width: "100%", height: "8px", backgroundColor: isDayMode ? "#e2e8f0" : "#1e293b", border: `1px solid ${cardBorder}` }}>
              <div style={{ width: "90%", height: "100%", backgroundColor: "#0284c7" }}></div>
            </div>
          </div>

          <div className="mc-card" style={{ padding: "28px", backgroundColor: cardBg, backdropFilter: "blur(10px)", border: `2px solid ${cardBorder}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Cpu style={{ color: "#d97706" }} size={24} />
              <h3 className="font-pixel" style={{ fontSize: "15px", color: textColor }}>BACKEND & AUTOMATION</h3>
            </div>
            <p style={{ color: subTextColor, fontSize: "13px", lineHeight: "1.6", marginBottom: "16px" }}>
              PHP (Laravel), Supabase (PostgreSQL), Python (FastAPI, FFmpeg, MoviePy video automation engines), RESTful APIs integration.
            </p>
            <div className="font-pixel" style={{ fontSize: "10px", color: "#d97706", display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span>PROFICIENCY</span>
              <span>85%</span>
            </div>
            <div style={{ width: "100%", height: "8px", backgroundColor: isDayMode ? "#e2e8f0" : "#1e293b", border: `1px solid ${cardBorder}` }}>
              <div style={{ width: "85%", height: "100%", backgroundColor: "#d97706" }}></div>
            </div>
          </div>

          <div className="mc-card" style={{ padding: "28px", backgroundColor: cardBg, backdropFilter: "blur(10px)", border: `2px solid ${cardBorder}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Wrench style={{ color: "#9333ea" }} size={24} />
              <h3 className="font-pixel" style={{ fontSize: "15px", color: textColor }}>ENGINEERING TOOLS & WORKFLOWS</h3>
            </div>
            <p style={{ color: subTextColor, fontSize: "13px", lineHeight: "1.6", marginBottom: "16px" }}>
              Git/GitHub, VS Code, Node.js, Web Vitals Optimization, Cross-Browser Compatibility, Agile Collaboration, Technical Mentorship.
            </p>
            <div className="font-pixel" style={{ fontSize: "10px", color: "#9333ea", display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span>PROFICIENCY</span>
              <span>92%</span>
            </div>
            <div style={{ width: "100%", height: "8px", backgroundColor: isDayMode ? "#e2e8f0" : "#1e293b", border: `1px solid ${cardBorder}` }}>
              <div style={{ width: "92%", height: "100%", backgroundColor: "#9333ea" }}></div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WORK EXPERIENCE */}
      <section style={{ padding: "60px 24px", maxWidth: "1150px", margin: "0 auto", borderTop: `2px solid ${cardBorder}` }}>
        <h2 className="font-pixel" style={{ fontSize: "18px", marginBottom: "48px", textAlign: "center", color: isDayMode ? "#0284c7" : "#34d399", letterSpacing: "1px" }}>
          // CV_SECTION: WORK_EXPERIENCE
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div className="mc-card" style={{ padding: "28px", backgroundColor: cardBg, backdropFilter: "blur(10px)", border: `2px solid ${cardBorder}`, position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
              <div>
                <h3 className="font-pixel" style={{ fontSize: "16px", color: textColor, marginBottom: "4px" }}>SENIOR FRONT-END & UI/UX DEVELOPER</h3>
                <div style={{ color: isDayMode ? "#0284c7" : "#34d399", fontSize: "14px", fontWeight: "bold" }}>E-Commerce & Enterprise Apps | Regional Clients (UAE, Iraq, Syria)</div>
              </div>
              <span className="font-pixel" style={{ fontSize: "11px", color: "#0284c7", padding: "4px 10px", backgroundColor: "rgba(2, 132, 199, 0.1)", border: "1px solid #0284c7", height: "fit-content" }}>
                2022 - PRESENT
              </span>
            </div>
            <ul style={{ color: subTextColor, fontSize: "14px", lineHeight: "1.7", paddingLeft: "20px", margin: 0 }}>
              <li>Engineered custom full-stack e-commerce platforms and automated software systems.</li>
              <li>Architected corporate dashboards, product catalog systems, and high-converting web architectures.</li>
              <li>Created end-to-end design systems in Figma and custom visual brand assets using Photoshop.</li>
            </ul>
          </div>

          <div className="mc-card" style={{ padding: "28px", backgroundColor: cardBg, backdropFilter: "blur(10px)", border: `2px solid ${cardBorder}`, position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
              <div>
                <h3 className="font-pixel" style={{ fontSize: "16px", color: textColor, marginBottom: "4px" }}>FRONT-END DEVELOPER & EDUCATIONAL CONSULTANT</h3>
                <div style={{ color: isDayMode ? "#0284c7" : "#34d399", fontSize: "14px", fontWeight: "bold" }}>Software Mentorship & Tech Workshops</div>
              </div>
              <span className="font-pixel" style={{ fontSize: "11px", color: "#0284c7", padding: "4px 10px", backgroundColor: "rgba(2, 132, 199, 0.1)", border: "1px solid #0284c7", height: "fit-content" }}>
                2020 - 2022
              </span>
            </div>
            <ul style={{ color: subTextColor, fontSize: "14px", lineHeight: "1.7", paddingLeft: "20px", margin: 0 }}>
              <li>Built modular user interfaces with React, JavaScript (ES6+), Next.js, and Tailwind CSS.</li>
              <li>Led technical seminars and software consulting sessions for beginner engineering students.</li>
              <li>Optimized web application loading speeds, cross-browser compatibility, and mobile responsiveness.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 6. FEATURED PROJECTS SECTION (WITH STATUS TABS) */}
      <section id="projects" style={{ padding: "60px 24px", maxWidth: "1150px", margin: "0 auto", borderTop: `2px solid ${cardBorder}` }}>
        <h2 className="font-pixel" style={{ fontSize: "18px", marginBottom: "28px", textAlign: "center", color: isDayMode ? "#0284c7" : "#34d399", letterSpacing: "1px" }}>
          // CREATIONS: FEATURED_WORLDS ({filteredProjects.length})
        </h2>

        {/* PROJECT STATUS FILTER TABS */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
          <button
            onClick={() => setProjectFilter("all")}
            className="font-pixel"
            style={{
              padding: "10px 20px",
              fontSize: "11px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: projectFilter === "all" ? (isDayMode ? "#0284c7" : "#10b981") : (isDayMode ? "#e0f2fe" : "rgba(30, 41, 59, 0.6)"),
              color: projectFilter === "all" ? "#ffffff" : (isDayMode ? "#0284c7" : "#cbd5e1"),
              border: `2px solid ${projectFilter === "all" ? (isDayMode ? "#38bdf8" : "#34d399") : cardBorder}`,
              boxShadow: projectFilter === "all" ? (isDayMode ? "3px 3px 0px #0369a1" : "3px 3px 0px #065f46") : "none",
              transition: "all 0.2s ease"
            }}
          >
            [ ALL WORLDS ({projects.length}) ]
          </button>

          <button
            onClick={() => setProjectFilter("completed")}
            className="font-pixel"
            style={{
              padding: "10px 20px",
              fontSize: "11px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: projectFilter === "completed" ? (isDayMode ? "#0284c7" : "#10b981") : (isDayMode ? "#e0f2fe" : "rgba(30, 41, 59, 0.6)"),
              color: projectFilter === "completed" ? "#ffffff" : (isDayMode ? "#0284c7" : "#cbd5e1"),
              border: `2px solid ${projectFilter === "completed" ? (isDayMode ? "#38bdf8" : "#34d399") : cardBorder}`,
              boxShadow: projectFilter === "completed" ? (isDayMode ? "3px 3px 0px #0369a1" : "3px 3px 0px #065f46") : "none",
              transition: "all 0.2s ease"
            }}
          >
            [ COMPLETED ({projects.filter(p => p.status === "completed").length}) ]
          </button>

          <button
            onClick={() => setProjectFilter("in_progress")}
            className="font-pixel"
            style={{
              padding: "10px 20px",
              fontSize: "11px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: projectFilter === "in_progress" ? "#f59e0b" : (isDayMode ? "#fef3c7" : "rgba(30, 41, 59, 0.6)"),
              color: projectFilter === "in_progress" ? "#ffffff" : "#f59e0b",
              border: `2px solid ${projectFilter === "in_progress" ? "#fbbf24" : cardBorder}`,
              boxShadow: projectFilter === "in_progress" ? "3px 3px 0px #b45309" : "none",
              transition: "all 0.2s ease"
            }}
          >
            [ IN PROGRESS ({projects.filter(p => p.status === "in_progress").length}) ]
          </button>
        </div>
        
        {/* PROJECTS GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "28px" }}>
          
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="mc-card" 
              style={{ 
                backgroundColor: cardBg, 
                backdropFilter: "blur(10px)", 
                border: `2px solid ${project.status === "in_progress" ? "rgba(245, 158, 11, 0.6)" : cardBorder}`, 
                overflow: "hidden", 
                display: "flex", 
                flexDirection: "column",
                position: "relative"
              }}
            >
              {/* CARD TOP BANNER */}
              <div style={{ height: "180px", background: project.gradient, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `2px solid ${cardBorder}`, position: "relative" }}>
                
                {/* STATUS BADGE TOP RIGHT */}
                <div style={{ position: "absolute", top: "12px", right: "12px" }}>
                  {project.status === "in_progress" ? (
                    <span className="font-pixel" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "9px", padding: "4px 8px", backgroundColor: "rgba(245, 158, 11, 0.2)", color: "#fbbf24", border: "1px solid #f59e0b", borderRadius: "2px" }}>
                      <Clock size={12} />
                      <span>IN PROGRESS</span>
                    </span>
                  ) : (
                    <span className="font-pixel" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "9px", padding: "4px 8px", backgroundColor: "rgba(16, 185, 129, 0.2)", color: "#34d399", border: "1px solid #10b981", borderRadius: "2px" }}>
                      <CheckCircle size={12} />
                      <span>COMPLETED</span>
                    </span>
                  )}
                </div>

                <span className="font-pixel" style={{ color: project.accentColor, fontSize: "14px", letterSpacing: "2px", border: `2px solid ${project.accentColor}`, padding: "8px 16px", backgroundColor: "rgba(0,0,0,0.7)" }}>
                  {project.badge}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 className="font-pixel" style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "10px", color: textColor }}>
                  {project.title}
                </h3>
                
                <p style={{ color: subTextColor, fontSize: "13px", marginBottom: "20px", flexGrow: 1, lineHeight: "1.6", fontWeight: "300" }}>
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="font-pixel" style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px", fontSize: "9px" }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} style={{ padding: "4px 8px", backgroundColor: isDayMode ? "#e0f2fe" : "#111827", color: project.accentColor, border: `1px solid ${project.accentColor}` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION LINK */}
                {project.status === "completed" ? (
                  <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="font-pixel mc-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: project.accentColor, fontSize: "11px", textDecoration: "none" }}>
                    <FileText size={14} />
                    <span>[ VIEW PDF DOCS ]</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <div className="font-pixel" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#f59e0b", fontSize: "11px" }}>
                    <Clock size={14} />
                    <span>[ UNDER CONSTRUCTION ]</span>
                  </div>
                )}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* MINECRAFT CHAT BOX NOTIFICATION (BOTTOM LEFT) */}
      <div className="font-pixel" style={{ position: "fixed", bottom: "16px", left: "16px", zIndex: 40, padding: "8px 14px", backgroundColor: isDayMode ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.8)", border: `1px solid ${isDayMode ? "#0284c7" : "rgba(52, 211, 153, 0.4)"}`, color: isDayMode ? "#0284c7" : "#34d399", fontSize: "10px", backdropFilter: "blur(4px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        [Server]: Yazan Al-Baroudi joined the game. Remote Job Quest Active!
      </div>

      {/* 7. FOOTER */}
      <footer className="font-pixel" style={{ padding: "48px 24px", borderTop: `2px solid ${cardBorder}`, textAlign: "center", color: subTextColor, fontSize: "11px" }}>
        <p>© 2026 YAZAN AL-BAROUDI. BUILT WITH NEXT.JS & MINECRAFT SPIRIT.</p>
      </footer>

    </main>
  );
}