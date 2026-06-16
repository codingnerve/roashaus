import { RevealBlock } from "./ui/RevealBlock";
import { NewsletterForm } from "./ui/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-black" style={{ backgroundColor: "#000" }}>
      <div className="px-[4vw] py-[clamp(64px,10vw,120px)]">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-start">

          {/* Left: giant wordmark */}
          <RevealBlock>
            <p
              className="text-white uppercase select-none mt-10"
              style={{ fontSize: "clamp(40px,8vw,140px)", fontWeight: 700, lineHeight: 0.94, letterSpacing: "-0.04em" }}
            >
              ROAS HAUS
            </p>
          </RevealBlock>

          {/* Right: newsletter + contact */}
          <div>
            <RevealBlock delay={80} className="reveal-d1">
              <h2
                className="text-white uppercase mb-6"
                style={{ fontSize: "clamp(22px,3.5vw,35px)", fontWeight: 400, lineHeight: 1.13, letterSpacing: "-0.03em" }}
              >
                STAY IN TOUCH
              </h2>
            </RevealBlock>

            <RevealBlock delay={160} className="reveal-d2 mb-10">
              <NewsletterForm />
            </RevealBlock>

            <RevealBlock delay={200} className="reveal-d3">
              <h3
                className="text-white/60 mb-8"
                style={{ fontSize: "clamp(16px,2.2vw,28px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.03em" }}
              >
                Let us help scale your brand and maximize your ROAS.
              </h3>

              <address className="not-italic text-white/40 text-sm leading-[1.8] tracking-[0.05em]">
                <p>Luca Marshall — Director</p>
                <a href="mailto:growth@roashaus.com" className="hover:text-white/70 transition-colors">
                  growth@roashaus.com
                </a>
                <p className="mt-1">ROAS Haus · 12 Customs Street East, Auckland CBD 1010</p>
              </address>

              <div className="mt-8 flex gap-6">
                {["Instagram", "LinkedIn", "TikTok"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-white/30 hover:text-white text-[13px] tracking-[0.05em] uppercase transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>

      <div className="px-[4vw] pb-8 text-white/20 text-xs tracking-[0.05em]">
        &copy; {new Date().getFullYear()} ROAS Haus
      </div>
    </footer>
  );
}
