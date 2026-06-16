import { RevealBlock } from "./ui/RevealBlock";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#F7F2E7" }}
      className="py-[clamp(80px,12vw,140px)] px-[4vw] text-center"
    >
      <RevealBlock>
        <p
          className="text-ink uppercase tracking-[0.05em] underline underline-offset-4 mb-6"
          style={{ fontSize: "14px" }}
        >
          NOW ACCEPTING CLIENTS
        </p>
      </RevealBlock>

      <RevealBlock delay={80} className="reveal-d1">
        <h2
          className="text-black mb-6 max-w-4xl mx-auto"
          style={{ fontSize: "clamp(44px,7.5vw,100px)", fontWeight: 600, lineHeight: 0.94, letterSpacing: "-0.03em" }}
        >
          Ready to be our next success story?
        </h2>
      </RevealBlock>

      <RevealBlock delay={140} className="reveal-d2">
        <p
          className="text-ink/55 mx-auto mb-12"
          style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "48ch", letterSpacing: "0.02em" }}
        >
          We&apos;re a new agency — which means you get the founders on your account,
          every day. No handoffs, no junior managers. Just two people who care
          deeply about your numbers.
        </p>
      </RevealBlock>

      <RevealBlock delay={200} className="reveal-d3 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="mailto:growth@roashaus.com"
          className="inline-block text-ink uppercase tracking-[0.02em] px-[35px] py-[21px] hover:bg-ink hover:text-cream"
          style={{
            fontSize: "14.3px",
            border: "0.8px solid #121212",
            transition: "background-color .1s linear, color .1s linear",
          }}
        >
          TALK TO US
        </a>
        <a
          href="mailto:growth@roashaus.com"
          className="text-ink/50 uppercase tracking-[0.05em] underline underline-offset-4 hover:text-ink transition-colors"
          style={{ fontSize: "12px" }}
        >
          growth@roashaus.com
        </a>
      </RevealBlock>
    </section>
  );
}
