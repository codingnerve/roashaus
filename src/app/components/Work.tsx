import { RevealBlock } from "./ui/RevealBlock";

const projects = [
  {
    img: "/images/project_1.jpg",
    hoverImg: "/images/project_1_hover.jpg",
    title: "META ADS OVERHAUL",
    subtitle: "1.4× → 2.9× ROAS in 6 weeks",
  },
  {
    img: "/images/project_2.jpg",
    hoverImg: "/images/project_2_hover.jpg",
    title: "UGC CREATIVE SPRINT",
    subtitle: "180% lift in click-through rate",
  },
  {
    img: "/images/project_3.jpg",
    hoverImg: "/images/project_3_hover.jpg",
    title: "GOOGLE SHOPPING REBUILD",
    subtitle: "CPC down 30% · Revenue up 55%",
  },
];

function CompassBadge() {
  return (
    <svg
      viewBox="0 0 140 140"
      width="130"
      height="130"
      fill="none"
      aria-hidden="true"
      style={{ color: "rgba(18,18,18,0.55)" }}
    >
      <circle cx="70" cy="70" r="58" stroke="currentColor" strokeWidth="0.75" />
      <defs>
        <path
          id="cbRing"
          d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1-100,0"
        />
      </defs>
      <text
        fontSize="10.5"
        fill="currentColor"
        letterSpacing="3.9"
        fontFamily="'Helvetica Neue',Arial,sans-serif"
        fontWeight="400"
      >
        <textPath href="#cbRing">
          EARLY RESULTS · REAL CLIENTS ·
        </textPath>
      </text>
      <g transform="translate(70,70)" fill="currentColor">
        <polygon points="0,-22 2.5,-2.5 0,22 -2.5,-2.5" />
        <polygon points="-22,0 -2.5,-2.5 22,0 -2.5,2.5" />
        <polygon
          points="0,-22 13,-13 22,0 13,13 0,22 -13,13 -22,0 -13,-13"
          opacity="0.1"
        />
        <circle r="3" />
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="-28"
            x2="0"
            y2="-24"
            stroke="currentColor"
            strokeWidth="1.5"
            transform={`rotate(${deg})`}
          />
        ))}
        {[45, 135, 225, 315].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="-28"
            x2="0"
            y2="-25.5"
            stroke="currentColor"
            strokeWidth="1"
            transform={`rotate(${deg})`}
            opacity="0.6"
          />
        ))}
      </g>
    </svg>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      style={{ backgroundColor: "#F7F2E7" }}
      className="py-[clamp(60px,8vw,100px)] px-[4vw]"
    >
      {/* ── Row 1: Heading + Compass ──────────────────────────── */}
      <div className="flex items-start justify-between mb-8 md:mb-10">
        <RevealBlock>
          <p
            className="text-ink/40 uppercase flex items-center gap-2 mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.18em" }}
          >
            <span>+</span> FIRST RESULTS
          </p>
          <h2 className="leading-[0.88]">
            <span
              className="block text-black uppercase"
              style={{
                fontSize: "clamp(44px,7.5vw,100px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              FEATURED
            </span>
            <span
              className="block text-black"
              style={{
                fontSize: "clamp(44px,7.5vw,100px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                fontStyle: "italic",
                fontFamily: "var(--font-cormorant-garamond)",
              }}
            >
              PROJECTS
              <span
                style={{
                  fontSize: "0.45em",
                  verticalAlign: "super",
                  marginLeft: "0.1em",
                }}
              >
                ✦
              </span>
            </span>
          </h2>
        </RevealBlock>

        <RevealBlock delay={100} className="hidden md:block shrink-0 mt-2">
          <CompassBadge />
        </RevealBlock>
      </div>

      {/* ── Row 2: 3 Cards ───────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((p, i) => (
          <RevealBlock key={i} delay={i * 100}>
            <a
              href="#"
              className="relative block overflow-hidden group"
              style={{ aspectRatio: "3/4", willChange: "transform" }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0"
                style={{ transition: "opacity 0.65s ease-in-out" }}
              />
              <img
                src={p.hoverImg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
                style={{ transition: "opacity 0.65s ease-in-out" }}
              />

              {i === 0 && (
                <div
                  className="absolute inset-x-0 top-0 pointer-events-none group-hover:opacity-0"
                  style={{
                    height: "52%",
                    background:
                      "linear-gradient(to bottom, rgba(247,242,231,0.97) 0%, rgba(247,242,231,0.7) 50%, transparent 100%)",
                    transition: "opacity 0.65s ease-in-out",
                  }}
                />
              )}

              {i > 0 && (
                <div
                  className="absolute inset-x-0 top-0 pointer-events-none group-hover:opacity-0"
                  style={{
                    height: "30%",
                    background:
                      "linear-gradient(to bottom, rgba(247,242,231,0.4) 0%, transparent 100%)",
                    transition: "opacity 0.65s ease-in-out",
                  }}
                />
              )}

              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 p-5 z-10 group-hover:opacity-0"
                  style={{ transition: "opacity 0.65s ease-in-out" }}>
                  <p
                    className="text-ink/70 mb-5"
                    style={{ fontSize: "16px", lineHeight: 1.6, letterSpacing: "0.02em", maxWidth: "230px" }}
                  >
                    Early wins from our first clients — honest results, no hype.
                    This is what we do when given the keys.
                  </p>
                  <span
                    className="inline-flex items-center gap-2 bg-ink text-white uppercase hover:bg-ink/80 transition-colors"
                    style={{ fontSize: "11px", letterSpacing: "0.1em", padding: "10px 18px", borderRadius: "5px" }}
                  >
                    EXPLORE PROJECTS
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M1.5 6h9M6.5 1.5l4.5 4.5-4.5 4.5" />
                    </svg>
                  </span>
                </div>
              )}

              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 40%, transparent 60%)" }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-white uppercase font-[600] leading-tight" style={{ fontSize: "13px", letterSpacing: "0.06em" }}>
                    {p.title}
                  </p>
                  <p className="text-white/55 mt-1" style={{ fontSize: "11px", letterSpacing: "0.03em" }}>
                    {p.subtitle}
                  </p>
                </div>
                <div
                  className="shrink-0 w-7 h-7 flex items-center justify-center border border-white/40 group-hover:border-white group-hover:bg-white/10 transition-colors"
                  style={{ borderRadius: "50%" }}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
                    <path d="M1.5 5.5h8M5.5 1.5l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </a>
          </RevealBlock>
        ))}
      </div>
    </section>
  );
}
