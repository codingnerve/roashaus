"use client";

const scattered = [
  /* Top row */
  {
    name: "essano",
    pos: { top: "9%", left: "7%" },
    rotate: "-1deg",
    logo: (
      <svg viewBox="0 0 110 26" fill="currentColor" width="170">
        <text
          x="0"
          y="20"
          fontFamily="'Helvetica Neue',Arial,sans-serif"
          fontWeight="300"
          fontSize="20"
          letterSpacing="1"
        >
          ·essano
        </text>
      </svg>
    ),
  },
  {
    name: "Avène",
    pos: { top: "4%", left: "40%" },
    rotate: "0deg",
    logo: (
      <div className="text-center" style={{ lineHeight: 1.1 }}>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "3px",
            fontFamily: "'Helvetica Neue',Arial,sans-serif",
            fontWeight: 300,
            opacity: 0.7,
          }}
        >
          EAU THERMALE
        </p>
        <p
          style={{
            fontSize: "38px",
            fontFamily: "Georgia,'Times New Roman',serif",
            fontStyle: "italic",
            fontWeight: 400,
            letterSpacing: "0.5px",
          }}
        >
          Avène
        </p>
      </div>
    ),
  },
  {
    name: "Cadence",
    pos: { top: "7%", right: "7%" },
    rotate: "0deg",
    logo: (
      <svg viewBox="0 0 110 28" fill="currentColor" width="170">
        <text
          x="0"
          y="22"
          fontFamily="Georgia,serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="22"
          letterSpacing="1"
        >
          Cadence
        </text>
      </svg>
    ),
  },
  /* Left column */
  {
    name: "C42",
    pos: { top: "30%", left: "2%" },
    rotate: "0deg",
    logo: (
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "18px",
          border: "2.5px solid rgba(18,18,18,0.65)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Helvetica Neue',Arial,sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          letterSpacing: "-1px",
        }}
      >
        42
      </div>
    ),
  },
  {
    name: "dermalogica",
    pos: { top: "53%", left: "2%" },
    rotate: "0deg",
    logo: (
      <svg viewBox="0 0 150 26" fill="currentColor" width="220">
        <text
          x="0"
          y="20"
          fontFamily="'Helvetica Neue',Arial,sans-serif"
          fontWeight="300"
          fontSize="18"
          letterSpacing="0.3"
        >
          dermalogica
        </text>
      </svg>
    ),
  },
  {
    name: "The Beauty Chef",
    pos: { bottom: "18%", left: "2%" },
    rotate: "-3deg",
    logo: (
      <div
        style={{
          width: "82px",
          height: "82px",
          borderRadius: "50%",
          border: "1.5px solid rgba(18,18,18,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <p
          style={{
            fontSize: "8px",
            fontFamily: "Georgia,serif",
            textAlign: "center",
            letterSpacing: "1px",
            lineHeight: 1.5,
            opacity: 0.7,
          }}
        >
          THE BEAUTY CHEF
        </p>
      </div>
    ),
  },
  /* Right column */
  {
    name: "Glasshouse",
    pos: { top: "16%", right: "8%" },
    rotate: "0deg",
    logo: (
      <div className="text-center" style={{ lineHeight: 1.2 }}>
        <svg
          viewBox="0 0 28 28"
          width="38"
          height="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          style={{ display: "block", margin: "0 auto 5px" }}
        >
          <circle cx="14" cy="14" r="11" />
          <circle cx="14" cy="14" r="7" />
          <line x1="14" y1="3" x2="14" y2="7" />
          <line x1="14" y1="21" x2="14" y2="25" />
          <line x1="3" y1="14" x2="7" y2="14" />
          <line x1="21" y1="14" x2="25" y2="14" />
        </svg>
        <p
          style={{
            fontSize: "13px",
            fontFamily: "Georgia,serif",
            letterSpacing: "2px",
            fontWeight: 400,
          }}
        >
          GLASSHOUSE
        </p>
        <p
          style={{
            fontSize: "10px",
            fontFamily: "Georgia,serif",
            letterSpacing: "2.5px",
            fontWeight: 400,
            opacity: 0.6,
          }}
        >
          FRAGRANCES
        </p>
      </div>
    ),
  },
  {
    name: "Miele",
    pos: { top: "40%", right: "4%" },
    rotate: "0deg",
    logo: (
      <div
        style={{
          backgroundColor: "#9B1B30",
          color: "#fff",
          padding: "9px 22px",
          fontFamily: "'Helvetica Neue',Arial,sans-serif",
          fontWeight: 700,
          fontSize: "26px",
          letterSpacing: "1.5px",
        }}
      >
        Miele
      </div>
    ),
  },
  {
    name: "Clinicians",
    pos: { top: "58%", right: "4%" },
    rotate: "1deg",
    logo: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <svg viewBox="0 0 18 18" width="30" fill="currentColor">
          <path d="M7 2h4v4h4v4h-4v4H7v-4H3V6h4V2z" />
        </svg>
        <div>
          <p
            style={{
              fontFamily: "'Helvetica Neue',Arial,sans-serif",
              fontWeight: 700,
              fontSize: "22px",
              letterSpacing: "0.3px",
            }}
          >
            Clinicians
          </p>
          <p
            style={{
              fontFamily: "'Helvetica Neue',Arial,sans-serif",
              fontWeight: 300,
              fontSize: "10px",
              letterSpacing: "1px",
              opacity: 0.5,
            }}
          >
            Research Based
          </p>
        </div>
      </div>
    ),
  },
  /* Bottom row */
  {
    name: "CIRCA",
    pos: { bottom: "30%", left: "18%" },
    rotate: "0deg",
    logo: (
      <svg viewBox="0 0 110 28" fill="currentColor" width="170">
        <text
          x="0"
          y="22"
          fontFamily="'Helvetica Neue',Arial,sans-serif"
          fontWeight="300"
          fontSize="22"
          letterSpacing="5"
        >
          CIRCA
        </text>
      </svg>
    ),
  },
  {
    name: "honuka",
    pos: { bottom: "14%", left: "15%" },
    rotate: "-1deg",
    logo: (
      <svg viewBox="0 0 120 30" fill="currentColor" width="180">
        <text
          x="0"
          y="24"
          fontFamily="Georgia,serif"
          fontStyle="italic"
          fontWeight="400"
          fontSize="24"
          letterSpacing="1"
        >
          honuka
        </text>
      </svg>
    ),
  },
  {
    name: "SHISEIDO",
    pos: { bottom: "12%", left: "43%" },
    rotate: "0deg",
    logo: (
      <div className="text-center" style={{ lineHeight: 1.2 }}>
        <svg
          viewBox="0 0 28 28"
          width="42"
          height="42"
          fill="currentColor"
          style={{ display: "block", margin: "0 auto 4px" }}
        >
          <circle
            cx="14"
            cy="14"
            r="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <path
            d="M14 4c-3 2-5 5-4 9 1 3 4 5 7 4 2-1 3-3 2-5-1-1-3-2-4-1"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "'Helvetica Neue',Arial,sans-serif",
            fontWeight: 600,
            letterSpacing: "2px",
          }}
        >
          SHISEIDO
        </p>
        <p
          style={{
            fontSize: "9px",
            fontFamily: "'Helvetica Neue',Arial,sans-serif",
            fontWeight: 300,
            letterSpacing: "1.5px",
            opacity: 0.5,
          }}
        >
          GINZA TOKYO
        </p>
      </div>
    ),
  },
  {
    name: "VERSACE",
    pos: { bottom: "14%", right: "8%" },
    rotate: "0deg",
    logo: (
      <svg viewBox="0 0 160 36" fill="currentColor" width="220">
        <text
          x="0"
          y="30"
          fontFamily="'Times New Roman',Georgia,serif"
          fontWeight="700"
          fontSize="32"
          letterSpacing="1"
        >
          VERSACE
        </text>
      </svg>
    ),
  },
  {
    name: "BAUME",
    pos: { bottom: "4%", right: "4%" },
    rotate: "0deg",
    logo: (
      <svg viewBox="0 0 110 26" fill="currentColor" width="150">
        <text
          x="0"
          y="20"
          fontFamily="'Helvetica Neue',Arial,sans-serif"
          fontWeight="700"
          fontSize="18"
          letterSpacing="4"
        >
          BAUME
        </text>
      </svg>
    ),
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      style={{ backgroundColor: "#F7F2E7" }}
      className="relative overflow-hidden"
    >
      {/* ── Desktop: scattered layout ─────────────────────────── */}
      <div
        className="hidden md:block relative w-full"
        style={{ minHeight: "max(620px, 72vh)" }}
      >
        <h2
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center uppercase pointer-events-none select-none z-0"
          style={{
            fontSize: "clamp(80px,13vw,150px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 0.88,
            color: "#121212",
          }}
        >
          BRANDS
          <br />
          WE&apos;RE
          <br />
          BUILT FOR
        </h2>

        {scattered.map((item) => (
          <div
            key={item.name}
            className="absolute z-10"
            style={{
              ...item.pos,
              transform: `rotate(${item.rotate})`,
              color: "rgba(18,18,18,0.72)",
              transition: "color 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#121212")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(18,18,18,0.72)")
            }
          >
            {item.logo}
          </div>
        ))}
      </div>

      {/* ── Mobile: stacked grid ──────────────────────────────── */}
      <div className="md:hidden px-[4vw] py-[clamp(64px,14vw,100px)]">
        <h2
          className="text-center text-ink uppercase mb-12"
          style={{
            fontSize: "clamp(56px,16vw,80px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 0.88,
          }}
        >
          BRANDS
          <br />
          WE&apos;RE
          <br />
          BUILT FOR
        </h2>
        <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
          {scattered.map((item) => (
            <div key={item.name} style={{ color: "rgba(18,18,18,0.65)" }}>
              {item.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
