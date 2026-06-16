"use client";

/* Instagram-style grid feed
   Layout: 5-col on desktop, 3-col on mobile
   Mix of photo tiles, text-overlay tiles, and one graphic card */

type Post =
  | { type: "image"; src: string; label?: string; sublabel?: string; labelStyle?: "overlay" | "badge" }
  | { type: "graphic"; title: string; subtitle: string; accent: string };

const posts: Post[] = [
  {
    type: "image",
    src: "/images/ig_1.jpg",
    label: "Campaign Shoot",
    sublabel: "@roashaus",
    labelStyle: "overlay",
  },
  {
    type: "image",
    src: "/images/ig_2.jpg",
    label: "NEW CLIENT",
    sublabel: "welcome to the team ✦",
    labelStyle: "overlay",
  },
  {
    type: "image",
    src: "/images/ig_3.jpg",
    label: "LORNA JANE",
    sublabel: "Paid Social · 4.2× ROAS",
    labelStyle: "badge",
  },
  {
    type: "graphic",
    title: "NEW CLIENT\nBUZZ ......",
    subtitle: "another one",
    accent: "#E8DDD0",
  },
  {
    type: "image",
    src: "/images/ig_4.jpg",
    label: "FUJIFILM",
    sublabel: "New partnership →",
    labelStyle: "overlay",
  },
  {
    type: "image",
    src: "/images/ig_5.jpg",
    label: "Brand Collab",
    sublabel: "Editorial",
    labelStyle: "overlay",
  },
  {
    type: "image",
    src: "/images/ig_6.jpg",
    label: "BEAUTIFUL\nFOR MUM",
    sublabel: "Gift Guide",
    labelStyle: "badge",
  },
  {
    type: "image",
    src: "/images/ig_7.jpg",
    label: "The Newlyweds",
    sublabel: "Campaign",
    labelStyle: "overlay",
  },
  {
    type: "image",
    src: "/images/ig_8.jpg",
    label: "Mother's Day",
    sublabel: "Gift Guide",
    labelStyle: "overlay",
  },
  {
    type: "image",
    src: "/images/ig_9.jpg",
    label: "Studio",
    sublabel: "Behind the scenes",
    labelStyle: "overlay",
  },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function InstagramFeed() {
  return (
    <section
      style={{ backgroundColor: "#F7F2E7" }}
      className="py-10"
    >
      {/* ── Grid ───────────────────────────────────────────── */}
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
      >
        {posts.map((post, i) => (
          <a
            key={i}
            href="#"
            className="relative block overflow-hidden group"
            style={{ aspectRatio: "1/1" }}
            aria-label={post.type === "image" ? post.label : post.title}
          >
            {post.type === "image" ? (
              <>
                {/* Photo */}
                <img
                  src={post.src}
                  alt={post.label ?? ""}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105"
                  style={{ transition: "transform 0.5s ease" }}
                />

                {/* Hover dim */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Badge style: white card at bottom */}
                {post.labelStyle === "badge" && post.label && (
                  <div
                    className="absolute bottom-0 left-0 right-0 px-3 py-2"
                    style={{ background: "rgba(247,242,231,0.95)" }}
                  >
                    <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.05em", color: "#121212", whiteSpace: "pre-line" }}>{post.label}</p>
                    {post.sublabel && (
                      <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 400, fontSize: "9px", letterSpacing: "0.03em", color: "rgba(18,18,18,0.5)", marginTop: "1px" }}>{post.sublabel}</p>
                    )}
                  </div>
                )}

                {/* Overlay style: text on dark gradient */}
                {post.labelStyle === "overlay" && post.label && (
                  <>
                    <div
                      className="absolute inset-x-0 bottom-0 pointer-events-none"
                      style={{ height: "55%", background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.04em", color: "#fff" }}>{post.label}</p>
                      {post.sublabel && (
                        <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 300, fontSize: "9px", color: "rgba(255,255,255,0.65)", marginTop: "1px" }}>{post.sublabel}</p>
                      )}
                    </div>
                  </>
                )}
              </>
            ) : (
              /* Graphic card */
              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-4 group-hover:brightness-95 transition-all"
                style={{ backgroundColor: post.accent }}
              >
                <p
                  style={{
                    fontFamily: "Georgia,'Times New Roman',serif",
                    fontWeight: 700,
                    fontSize: "clamp(14px,1.6vw,22px)",
                    lineHeight: 1.1,
                    color: "#121212",
                    whiteSpace: "pre-line",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Helvetica Neue',Arial,sans-serif",
                    fontWeight: 400,
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: "rgba(18,18,18,0.5)",
                    marginTop: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  {post.subtitle}
                </p>
              </div>
            )}
          </a>
        ))}
      </div>

      {/* ── Bottom link ────────────────────────────────────── */}
      <div className="px-[4vw] pt-6 flex justify-center">
        <a
          href="#"
          className="flex items-center gap-2 uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            color: "rgba(18,18,18,0.45)",
            fontFamily: "'Helvetica Neue',Arial,sans-serif",
          }}
        >
          <InstagramIcon />
          View more on Instagram
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M1.5 5h7M5 1.5l3.5 3.5L5 8.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
