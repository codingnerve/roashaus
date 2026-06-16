import { RevealBlock } from "./ui/RevealBlock";

export default function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#F7F2E7" }}
      className="overflow-hidden py-20"
    >
      <div className="grid md:grid-cols-2 items-stretch">
        {/* Left: text */}
        <div className="pl-[4vw] pr-[4vw] md:pr-[5vw] pt-[clamp(24px,3vw,40px)] pb-[clamp(64px,10vw,100px)]">
          <RevealBlock>
            <h2
              aria-label="We scale brands fast."
              className="ml-[130px] text-black"
            >
              {/* Line 1 */}

              <span
                style={{
                  fontSize: "clamp(44px,7.5vw,110px)",
                  fontWeight: 600,
                  lineHeight: 0.94,
                  letterSpacing: "-0.03em",
                }}
                className="text-black"
              >
                About
              </span>

              {/* Line 2 */}
              <span
                className="hero-animate hero-animate-d2 block ml-[130px]"
                style={{ paddingLeft: "clamp(44px,7vw,144px)" }}
              >
                <span
                  style={{
                    fontSize: "clamp(44px,7.5vw,100px)",
                    fontWeight: 600,
                    lineHeight: 0.94,
                    letterSpacing: "-0.03em",
                  }}
                  className="text-black"
                >
                  Us
                </span>
              </span>
            </h2>
            {/* <h2
              className="text-black uppercase"
              style={{ fontSize: "clamp(40px,8vw,130px)", fontWeight: 600, lineHeight: 0.94, letterSpacing: "0em" }}
            >
              ABOUT<br />US
            </h2> */}
          </RevealBlock>

          <RevealBlock delay={80} className="reveal-d1 mt-8">
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.55,
                letterSpacing: "0.03em",
              }}
              className="text-ink/70"
            >
              ROAS Haus is a newly launched performance marketing agency based
              in Auckland, New Zealand. We were built from day one to do one
              thing well: help direct-to-consumer and e-commerce brands turn ad
              spend into consistent, profitable revenue.
            </p>
          </RevealBlock>

          <RevealBlock delay={160} className="reveal-d2">
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.55,
                letterSpacing: "0.03em",
              }}
              className="text-ink/70"
            >
              We&apos;re a small team — and we intend to stay that way. Every
              client gets our full attention, not a junior account manager. We
              don&apos;t pitch and disappear; we get inside your numbers,
              understand your margins, and build campaigns that have to work —
              because your growth is how we grow too.
            </p>
          </RevealBlock>
        </div>

        {/* Right: full-bleed team photo */}
        <RevealBlock
          delay={100}
          className="reveal-d1 relative min-h-[400px] md:min-h-0 overflow-hidden"
        >
          <img
            src="/images/team_photo.png"
            alt="ROAS Haus team collaboration"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </RevealBlock>
      </div>
    </section>
  );
}
