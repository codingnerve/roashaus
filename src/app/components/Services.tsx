"use client";

import { useState } from "react";
import { RevealBlock } from "./ui/RevealBlock";

const services = [
  {
    num: "01",
    title: "PAID SOCIAL",
    desc: "Meta, TikTok & Pinterest ads engineered around unit economics and ROAS targets — from creative testing to scaling what converts.",
    tag: "Meta · TikTok · Pinterest",
    details: [
      "Full-funnel campaign architecture across Meta (Facebook & Instagram), TikTok, and Pinterest — structured by audience temperature, not just placement.",
      "Rigorous creative testing frameworks: we isolate hooks, visuals, CTAs, and formats to find winning combinations fast, then scale only what's proven.",
      "Audience strategy built on first-party data — custom audiences, lookalikes, retargeting segments, and exclusion logic tuned to your customer LTV.",
      "Weekly performance reporting with clear ROAS, CPA, and CPM benchmarks. No vanity metrics — every decision ties back to unit economics.",
      "Ad account audits, pixel/CAPI setup, and ongoing bid strategy management to keep your delivery healthy as algorithms shift.",
    ],
  },
  {
    num: "02",
    title: "PAID SEARCH",
    desc: "Google Shopping, Performance Max and YouTube campaigns structured to print return at every stage of the funnel.",
    tag: "Google · YouTube · Bing",
    details: [
      "Google Search, Shopping, Performance Max, and YouTube campaigns built from scratch or audited and restructured for maximum efficiency.",
      "Shopping feed optimisation — product titles, descriptions, and custom labels aligned to search intent and bidding strategy.",
      "Keyword strategy grounded in commercial intent: exact match sculpting, negative keyword management, and query harvesting to cut wasted spend.",
      "YouTube pre-roll and discovery campaigns designed to drive qualified top-of-funnel traffic that feeds your retargeting pool.",
      "Conversion tracking setup and verification across GA4, Google Ads, and third-party attribution tools so every click is accounted for.",
    ],
  },
  {
    num: "03",
    title: "UGC CREATIVE",
    desc: "Thumb-stopping user-generated content at scale — scripted, produced and iterated for paid social performance.",
    tag: "Scripts · Production · Testing",
    details: [
      "End-to-end UGC production: brief writing, creator sourcing, script development, and delivery of ready-to-run ad assets — no agency back-and-forth.",
      "Hook-first scripting methodology: every video opens with a pattern-interrupt designed to stop the scroll within the first 2 seconds.",
      "Rapid iteration cycles — we test multiple hooks and formats per offer so learnings compound week over week rather than month over month.",
      "Creator matching based on your target audience demographics, not just follower count — authenticity converts, aesthetics alone don't.",
      "Static ad creation alongside video: carousels, DPA overlays, and graphic assets produced to complement your video testing.",
    ],
  },
  {
    num: "04",
    title: "EMAIL & SMS",
    desc: "Automated flows, sequences and broadcast campaigns that turn your list into a predictable, owned revenue channel.",
    tag: "Klaviyo · Postscript · Attentive",
    details: [
      "Core flow buildout: welcome series, abandoned cart, browse abandonment, post-purchase, win-back, and sunset — all personalised by behaviour and segment.",
      "Broadcast calendar strategy with send-time optimisation, subject line A/B testing, and list hygiene protocols that protect deliverability.",
      "SMS programme setup and integration alongside email — coordinated cross-channel sequences that feel personal, not spammy.",
      "Revenue attribution modelling to understand the true incremental lift from owned channels versus last-click reporting.",
      "List growth strategy: opt-in form design, pop-up triggers, and lead magnet development to grow your subscriber base profitably.",
    ],
  },
  {
    num: "05",
    title: "CRO & FUNNELS",
    desc: "Landing pages, PDPs and checkout optimisation that lift conversion rates without spending another cent on traffic.",
    tag: "A/B Testing · Heatmaps · LPO",
    details: [
      "Conversion audit of your entire funnel — from ad click to purchase confirmation — identifying friction points with heatmaps, session recordings, and analytics data.",
      "Landing page design and development optimised for paid traffic: fast load, singular CTA, social proof placement, and mobile-first layout.",
      "Product detail page (PDP) optimisation: above-the-fold hierarchy, image sequencing, copy structure, and trust signal placement tested against your baseline.",
      "A/B and multivariate test design, implementation, and statistical analysis — we run tests with enough traffic to reach significance before calling a winner.",
      "Checkout and post-purchase flow optimisation including upsell placement, payment method display, and abandonment recovery mechanics.",
    ],
  },
  {
    num: "06",
    title: "ANALYTICS & ATTRIBUTION",
    desc: "Full-funnel visibility and clean data infrastructure so every dollar is tracked, measured and accounted for.",
    tag: "GA4 · Triple Whale · Northbeam",
    details: [
      "Data infrastructure audit and rebuild: GA4 configuration, server-side tagging, and cross-platform event tracking so your data is trustworthy from day one.",
      "Multi-touch attribution modelling across paid social, paid search, email, and organic — move beyond last-click and understand what's actually driving revenue.",
      "Custom dashboard buildout in Triple Whale, Northbeam, or your preferred BI tool — one source of truth for media buyers, operators, and leadership.",
      "Cohort analysis and customer LTV modelling to inform CAC targets by channel, letting you bid more aggressively where the economics support it.",
      "Monthly business reviews translating data into clear decisions: what to scale, what to cut, where the next dollar of ad spend will earn the most.",
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      style={{ backgroundColor: "#F7F2E7" }}
      className="py-[clamp(80px,10vw,130px)] px-[4vw]"
    >
      <div className="flex gap-[clamp(24px,4vw,64px)] items-start">

        {/* ── Left column: heading + rows ──────────────────────── */}
        <div className="min-w-0 w-full md:w-[40%]">
          <RevealBlock>
            <p
              className="text-ink/40 uppercase flex items-center gap-2 mb-5"
              style={{ fontSize: "11px", letterSpacing: "0.18em" }}
            >
              <span>+</span> Our Services
            </p>
            <h2
              className="text-black uppercase mb-8"
              style={{
                fontSize: "clamp(44px,7.5vw,80px)",
                fontWeight: 600,
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
              }}
            >
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  letterSpacing: "-0.02em",
                  fontSize: "0.92em",
                }}
              >
                marketing
              </span>{" "}
              THAT
              <br />
              Creates Momentum
            </h2>
          </RevealBlock>

          <div>
            {services.map((s, i) => (
              <RevealBlock key={i} delay={i * 50}>
                <div style={{ height: "1px", backgroundColor: "rgba(18,18,18,0.12)" }} />
                <div
                  className="grid items-center py-5 gap-x-4 cursor-pointer transition-colors duration-150 -mx-[4vw] px-[4vw]"
                  style={{ gridTemplateColumns: "40px 1fr 28px" }}
                  onMouseEnter={() => setActive(i)}
                >
                  <span
                    className="text-ink/30"
                    style={{ fontSize: "11px", letterSpacing: "0.05em", fontVariantNumeric: "tabular-nums" }}
                  >
                    {s.num}
                  </span>

                  <div>
                    <p
                      className="text-ink uppercase leading-tight transition-colors duration-150"
                      style={{
                        fontSize: "clamp(16px,2.2vw,28px)",
                        fontWeight: active === i ? 800 : 600,
                        letterSpacing: "-0.02em",
                        color: active === i ? "#121212" : "rgba(18,18,18,0.55)",
                      }}
                    >
                      {s.title}
                    </p>
                    <p
                      className="mt-1 transition-all duration-150"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.07em",
                        color: "rgba(18,18,18,0.3)",
                        maxHeight: active === i ? "20px" : "0",
                        overflow: "hidden",
                        opacity: active === i ? 1 : 0,
                      }}
                    >
                      {s.tag}
                    </p>
                    <p
                      className="transition-all duration-150 md:hidden"
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "rgba(18,18,18,0.55)",
                        maxHeight: active === i ? "80px" : "0",
                        overflow: "hidden",
                        opacity: active === i ? 1 : 0,
                        marginTop: active === i ? "8px" : "0",
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{
                      color: active === i ? "#121212" : "rgba(18,18,18,0.2)",
                      transform: active === i ? "translateX(3px)" : "translateX(0)",
                      transition: "all 0.15s ease",
                    }}
                    aria-hidden="true"
                  >
                    <path d="M2.5 9h13M9 2.5l6.5 6.5L9 15.5" />
                  </svg>
                </div>
              </RevealBlock>
            ))}
            <div style={{ height: "1px", backgroundColor: "rgba(18,18,18,0.12)" }} />
          </div>
        </div>

        {/* ── Right column: sticky text detail panel ─────────────── */}
        <div
          className="hidden md:block shrink-0 sticky top-24 self-start"
          style={{ width: "60%" }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                opacity: active === i ? 1 : 0,
                transform: active === i ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                position: active === i ? "relative" : "absolute",
                pointerEvents: active === i ? "auto" : "none",
                top: 0,
                left: 0,
                right: 0,
              }}
            >
              <p
                className="text-ink/25 uppercase mb-3"
                style={{ fontSize: "11px", letterSpacing: "0.16em" }}
              >
                {s.num} / 06
              </p>
              <h3
                className="text-black uppercase mb-4"
                style={{
                  fontSize: "clamp(28px,3.5vw,48px)",
                  fontWeight: 700,
                  lineHeight: 0.96,
                  letterSpacing: "-0.03em",
                }}
              >
                {s.title}
              </h3>

              <div style={{ height: "1px", backgroundColor: "rgba(18,18,18,0.12)", marginBottom: "24px" }} />

              <p
                className="text-ink/70 mb-8"
                style={{ fontSize: "15px", lineHeight: 1.55, letterSpacing: "0.03em" }}
              >
                {s.desc}
              </p>

              <ul className="flex flex-col gap-5">
                {s.details.map((point, j) => (
                  <li key={j} className="flex gap-4 items-start">
                    <span
                      className="shrink-0 mt-[6px]"
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#121212",
                        opacity: 0.3,
                      }}
                    />
                    <p
                      className="text-ink/60"
                      style={{ fontSize: "14px", lineHeight: 1.65, letterSpacing: "0.02em" }}
                    >
                      {point}
                    </p>
                  </li>
                ))}
              </ul>

              <p
                className="mt-8 text-ink/30 uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.12em" }}
              >
                {s.tag}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
