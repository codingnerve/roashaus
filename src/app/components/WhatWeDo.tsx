import { RevealBlock } from "./ui/RevealBlock";

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      style={{ backgroundColor: "#121212" }}
      className="py-[clamp(80px,12vw,140px)] overflow-hidden"
    >
      {/* Video + overlapping heading wrapper */}
      <RevealBlock className="relative flex justify-center px-[4vw]">
        {/* Video container */}
        <div
          className="relative overflow-hidden w-full"
          style={{ aspectRatio: "9/7", width: "80%" }}
        >
          <video
            src="/videos/video2.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(18,18,18,0.6) 0%, transparent 45%), " +
                "linear-gradient(to bottom, rgba(18,18,18,0.55) 0%, transparent 35%)",
            }}
          />
          {/* Bottom label */}
          <div className="absolute bottom-6 left-8 flex items-center gap-3">
            <span
              className="flex items-center justify-center w-9 h-9 border border-white/40 text-white"
              style={{ borderRadius: "50%" }}
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M3 2l7 4-7 4V2z" />
              </svg>
            </span>
            <p className="text-white/60 uppercase tracking-[0.1em]" style={{ fontSize: "12px" }}>
              Agency Showreel
            </p>
          </div>
        </div>

        {/* Heading overlaid on top of video */}
        <h2
          className="absolute -top-16 left-0 right-0 text-white uppercase text-center pointer-events-none select-none z-10"
          style={{
            fontSize: "clamp(44px,7.5vw,100px)",
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            mixBlendMode: "overlay",
          }}
        >
          WHAT WE DO
        </h2>
      </RevealBlock>

      {/* Service tags */}
      <div className="mt-12 px-[4vw] flex flex-wrap justify-center gap-3">
        {[
          "Paid Social",
          "Paid Search",
          "UGC Creative",
          "Conversion Optimization",
          "Lifecycle Marketing",
        ].map((tag) => (
          <span
            key={tag}
            className="border border-white/20 text-white/50 uppercase px-4 py-2"
            style={{
              fontSize: "13.5px",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
