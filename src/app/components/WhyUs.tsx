"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "We gave ROAS Haus our Meta account in month one — ROAS went from 1.4x to 2.9x inside six weeks. For a small brand our size, that's the difference between breaking even and actually growing. Wish we'd found them sooner.",
    name: "Sophie Allen",
    role: "Founder",
    brand: "Bask Skincare",
  },
  {
    quote:
      "Fresh agency, but the thinking is anything but. They came in, audited our Google Shopping setup in 48 hours, and had a clear plan within the week. Our CPCs dropped 30% in the first month. Highly recommend.",
    name: "Daniel Park",
    role: "Co-founder",
    brand: "Northform Apparel",
  },
  {
    quote:
      "I was nervous about working with a new agency but the transparency won me over immediately. Weekly reports, daily Slack updates, zero fluff. Our abandoned cart flow alone is now generating revenue we were leaving on the table.",
    name: "Mia Chen",
    role: "Head of E-commerce",
    brand: "Grove Wellness",
  },
  {
    quote:
      "They don't just run ads — they actually understand the business behind them. Asked us questions no previous agency ever thought to ask. Three months in and we've hit our highest revenue month ever.",
    name: "Tom Briggs",
    role: "Founder & CEO",
    brand: "Heyday Home",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section
      className="bg-black py-[clamp(64px,10vw,120px)] overflow-hidden"
      aria-label="Client testimonials"
    >
      <div className="px-[4vw] mb-10">
        <p
          className="text-white/30 uppercase tracking-[0.05em]"
          style={{ fontSize: "13px" }}
          aria-live="polite"
          aria-atomic="true"
        >
          Item {active + 1} of {total}
        </p>
      </div>

      <div className="overflow-hidden" role="region" aria-roledescription="carousel" aria-label="Testimonials">
        <div
          className="flex"
          style={{
            transform: `translateX(calc(${active} * -85vw))`,
            transition: "transform 0.5s ease",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="shrink-0 px-[4vw]"
              style={{ width: "85vw" }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${total}`}
            >
              <blockquote>
                <p
                  className="text-white font-[400] tracking-[-0.03em] leading-[1.13] mb-10"
                  style={{ fontSize: "clamp(22px,4.5vw,53px)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer style={{ fontSize: "14px", letterSpacing: "0.05em" }} className="text-white/50">
                  <span className="text-white font-[400]">{t.name}</span>
                  {t.role && <span> — {t.role}</span>}
                  {t.brand && <span>, <em>{t.brand}</em></span>}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[4vw] mt-12 flex gap-3">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-12 h-12 text-white/50 hover:text-white hover:border-white transition-colors flex items-center justify-center"
          style={{ border: "0.8px solid rgba(255,255,255,0.3)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8l5 5" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-12 h-12 text-white/50 hover:text-white hover:border-white transition-colors flex items-center justify-center"
          style={{ border: "0.8px solid rgba(255,255,255,0.3)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 3l5 5-5 5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
