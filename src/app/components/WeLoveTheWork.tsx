import { RevealBlock } from "./ui/RevealBlock";

const team = [
  {
    index: "01",
    name: "James Carter",
    role: "Co-Founder · Head of Paid Media",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "Paid Strategy"],
    bio: "James has spent 8 years inside ad accounts — from scrappy DTC startups to 8-figure e-commerce brands. He lives in the data: building campaign architecture, stress-testing creative hooks, and finding the levers that turn ad spend into scalable, predictable revenue. His obsession is unit economics — if the numbers don't stack up, we don't scale.",
    stat: { value: "8 Yrs", label: "Paid Media Experience" },
  },
  {
    index: "02",
    name: "Sophia Carter",
    role: "Co-Founder · Strategy & Client Partnerships",
    tags: ["Growth Strategy", "Creative Direction", "CRO", "Client Success"],
    bio: "Sophia bridges the gap between performance data and brand. She works directly with clients to align growth targets with creative direction, making sure every campaign we run feels on-brand while hitting the numbers that matter. She brings the client-side perspective that keeps our work commercially sharp.",
    stat: { value: "100%", label: "Client Focus" },
  },
];

export default function WeLoveTheWork() {
  return (
    <section id="about-team" style={{ backgroundColor: "#F7F2E7" }}>
      {/* ── Intro row ───────────────────────────────────────── */}
      <div className="px-[4vw] pt-[clamp(64px,10vw,120px)] pb-[clamp(40px,6vw,80px)]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          <RevealBlock>
            <p
              className="text-ink/40 uppercase flex items-center gap-2 mb-5"
              style={{ fontSize: "11px", letterSpacing: "0.18em" }}
            >
              <span>+</span> Who We Are
            </p>
            <h2
              className="text-black uppercase"
              style={{
                fontSize: "clamp(48px,8vw,110px)",
                fontWeight: 600,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
              }}
            >
              WE LOVE
              <br />
              THE WORK
            </h2>
          </RevealBlock>

          <RevealBlock delay={100}>
            <p
              className="text-ink/55 mb-5"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                letterSpacing: "0.02em",
                maxWidth: "52ch",
              }}
            >
              ROAS Haus is a newly launched Auckland-based performance marketing
              agency founded by a husband-and-wife team. New agency — not new to
              advertising. Between us we bring 8+ years of hands-on paid media
              experience to every single client.
            </p>
            <p
              className="text-ink/55"
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                letterSpacing: "0.02em",
                maxWidth: "52ch",
              }}
            >
              We deliberately keep our client roster small so every brand gets
              the founders, not a junior. We&apos;re selective about who we take
              on — because we only want to work with brands we genuinely believe
              we can grow.
            </p>
          </RevealBlock>
        </div>
      </div>

      {/* ── Full-width divider ───────────────────────────────── */}
      <div style={{ height: "1px", backgroundColor: "rgba(18,18,18,0.12)" }} />

      {/* ── Team members ────────────────────────────────────── */}
      {team.map((member, i) => (
        <div key={i}>
          <RevealBlock>
            <div className="px-[4vw] py-[clamp(48px,7vw,96px)] grid md:grid-cols-12 gap-y-8 gap-x-[4vw] items-start group">
              {/* Index number */}
              <div className="md:col-span-1 flex md:block items-center gap-4">
                <span
                  className="text-ink/15 select-none"
                  style={{
                    fontSize: "clamp(48px,6vw,80px)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {member.index}
                </span>
              </div>

              {/* Name + role */}
              <div className="md:col-span-4">
                <h3
                  className="text-black uppercase mb-2"
                  style={{
                    fontSize: "clamp(28px,4vw,54px)",
                    fontWeight: 700,
                    lineHeight: 0.94,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-ink/40 uppercase mb-6"
                  style={{ fontSize: "11px", letterSpacing: "0.12em" }}
                >
                  {member.role}
                </p>

                {/* Stat */}
                <div
                  className="inline-flex flex-col border px-5 py-4"
                  style={{ borderColor: "rgba(18,18,18,0.15)" }}
                >
                  <span
                    className="text-black"
                    style={{
                      fontSize: "clamp(28px,3vw,40px)",
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {member.stat.value}
                  </span>
                  <span
                    className="text-ink/40 uppercase mt-1"
                    style={{ fontSize: "10px", letterSpacing: "0.12em" }}
                  >
                    {member.stat.label}
                  </span>
                </div>
              </div>

              {/* Bio + tags */}
              <div className="md:col-span-7">
                <p
                  className="text-ink/65 mb-8"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    letterSpacing: "0.02em",
                    maxWidth: "60ch",
                  }}
                >
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-ink/50 uppercase"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        border: "0.8px solid rgba(18,18,18,0.2)",
                        padding: "6px 14px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealBlock>

          {/* Divider between / after members */}
          <div
            style={{ height: "1px", backgroundColor: "rgba(18,18,18,0.12)" }}
          />
        </div>
      ))}
    </section>
  );
}
