"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const TESTIMONIALS = [
  {
    quote: "I've tried to run consistent 1:1s for two years. Cadence is the first thing that made it actually stick.",
    name: "Marcus T.",
    role: "Engineering Manager",
    initial: "M",
    accent: "#C8782A",
    avatarBg: "#FAE8D0",
  },
  {
    quote: "I manage 6 people across two cities. Before Cadence I was living in Slack threads. Now I just open the dashboard.",
    name: "Priya R.",
    role: "Team Lead",
    initial: "P",
    accent: "#3A7D7B",
    avatarBg: "#DFF0EF",
  },
  {
    quote: "Every other management tool felt built for a 500-person company. This fits how I actually work.",
    name: "Jordan K.",
    role: "Operations Manager",
    initial: "J",
    accent: "#7B8F6A",
    avatarBg: "#E8EEE5",
  },
  {
    quote: "Our weekly check-ins used to feel like a formality. Now my team actually comes prepared and we get things done.",
    name: "Sarah M.",
    role: "Department Head",
    initial: "S",
    accent: "#C2604A",
    avatarBg: "#F5E4E1",
  },
  {
    quote: "The agenda builder alone saved me an hour of prep every week. I wish I'd had this three jobs ago.",
    name: "David L.",
    role: "Senior Manager",
    initial: "D",
    accent: "#C8782A",
    avatarBg: "#FAE8D0",
  },
  {
    quote: "I finally have a clear picture of what's blocking my people. No more surprises at the end of the quarter.",
    name: "Keisha W.",
    role: "VP of Product",
    initial: "K",
    accent: "#3A7D7B",
    avatarBg: "#DFF0EF",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TESTIMONIALS.length;

  // Responsive perPage
  useEffect(() => {
    function update() {
      setPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = total - perPage;

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  // Clamp index when perPage changes
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, total - perPage)));
  }, [perPage, total]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  // Track width covers all cards; each card takes (1/total) of track width
  const trackWidthPct = (total / perPage) * 100;
  const cardWidthPct = 100 / total;
  const translateXPct = -(index / total) * 100;

  return (
    <section style={{ background: "#F5F0E8" }} className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#C8782A",
            marginBottom: 10,
          }}>
            What managers are saying
          </p>
          <div style={{ width: 28, height: 2, background: "#C8782A", margin: "0 auto" }} />
        </div>

        {/* Carousel viewport */}
        <div
          style={{ overflow: "hidden" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            style={{
              display: "flex",
              width: `${trackWidthPct}%`,
              transform: `translateX(${translateXPct}%)`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  width: `${cardWidthPct}%`,
                  padding: "0 12px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: 12,
                    border: "1px solid #D0CAC0",
                    padding: "32px 28px",
                    boxShadow: "0 2px 8px rgba(44,44,44,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    minHeight: 280,
                  }}
                >
                  {/* Decorative quote mark */}
                  <div style={{
                    position: "absolute",
                    top: 12,
                    right: 18,
                    fontFamily: "Georgia, serif",
                    fontSize: 88,
                    lineHeight: 1,
                    color: t.accent,
                    opacity: 0.07,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}>
                    &ldquo;
                  </div>

                  {/* Avatar */}
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: t.avatarBg,
                    border: `2px solid ${t.accent}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 700,
                      fontSize: 18,
                      color: t.accent,
                    }}>
                      {t.initial}
                    </span>
                  </div>

                  {/* Quote */}
                  <p style={{
                    fontFamily: "var(--font-source-sans)",
                    fontSize: 15,
                    color: "#2C2C2C",
                    lineHeight: 1.72,
                    flex: 1,
                    marginBottom: 24,
                  }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div style={{ borderTop: "1px solid #EBE6DD", paddingTop: 16 }}>
                    <div style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#2C2C2C",
                    }}>
                      {t.name}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-source-sans)",
                      fontSize: 13,
                      color: "#9C968B",
                      marginTop: 2,
                    }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36 }}>
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1.5px solid #C8782A",
              background: "transparent",
              color: "#C8782A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#C8782A";
              (e.currentTarget as HTMLButtonElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#C8782A";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === index ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  background: i === index ? "#C8782A" : "#D0CAC0",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.25s, background 0.25s",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1.5px solid #C8782A",
              background: "transparent",
              color: "#C8782A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#C8782A";
              (e.currentTarget as HTMLButtonElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#C8782A";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
