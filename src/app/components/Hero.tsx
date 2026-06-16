const categoryLink =
  "text-ink text-[14px] tracking-[0.05em] uppercase underline underline-offset-4 hover:opacity-50 transition-opacity";

export default function Hero() {
  return (
    <section
      id="home"
      style={{ backgroundColor: "#F7F2E7" }}
      className="relative pt-20 overflow-hidden"
    >
      <div className="relative px-[4vw] pt-[clamp(36px,6vw,88px)]">
        {/* Left category links (desktop) */}

        {/* Staggered headline */}
        <h1 aria-label="We scale brands fast." className="ml-[130px]">
          {/* Line 1 */}
          <span className="hero-animate hero-animate-d1 flex items-baseline gap-[0.25em]">
            <span
              style={{
                fontSize: "clamp(44px,9.5vw,145px)",
                fontWeight: 600,
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
              }}
              className="text-black"
            >
              WE SCALE
            </span>
          </span>

          {/* Line 2 */}
          <span
            className="hero-animate hero-animate-d2 block ml-[130px]"
            style={{ paddingLeft: "clamp(44px,7vw,144px)" }}
          >
            <span
              style={{
                fontSize: "clamp(44px,9.5vw,145px)",
                fontWeight: 600,
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
              }}
              className="text-black"
            >
              BRANDS
            </span>
          </span>

          {/* Line 3 */}
          <span
            className="hero-animate hero-animate-d3 block ml-[130px]"
            style={{ paddingLeft: "clamp(88px,14vw,288px)" }}
          >
            <span
              style={{
                fontSize: "clamp(44px,9.5vw,145px)",
                fontWeight: 600,
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
              }}
              className="text-black"
            >
              FAST.
            </span>
          </span>
        </h1>

        {/* Mobile category links */}
        <div className="hero-animate hero-animate-d4 md:hidden flex flex-wrap gap-x-6 gap-y-2 mt-6">
          <a href="#featured-projects" className={categoryLink}>
            PAID SOCIAL
          </a>
          <a href="#featured-projects" className={categoryLink}>
            PAID SEARCH
          </a>
          <a href="#featured-projects" className={categoryLink}>
            UGC CREATIVE &amp; CRO
          </a>
        </div>
      </div>

      {/* 3-up image strip — bleeds to viewport edges */}
      <div
        className="hero-animate hero-animate-d5 flex gap-2 md:gap-20 mt-[clamp(28px,5vw,60px)]"
        style={{ marginLeft: "calc(-4vw)", marginRight: "calc(-4vw)" }}
      >
        <div
          className="flex-1 overflow-hidden"
          style={{ aspectRatio: "4/5", minWidth: 0 }}
        >
          <img
            src="/images/hero_1.png"
            alt="Skincare product photoshoot"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div
          className="flex-1 overflow-hidden"
          style={{ aspectRatio: "4/5", minWidth: 0 }}
        >
          <img
            src="/images/hero_2.png"
            alt="Growth analytics dashboard on laptop"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div
          className="flex-1 overflow-hidden"
          style={{ aspectRatio: "4/5", minWidth: 0 }}
        >
          <img
            src="/images/hero_3.png"
            alt="UGC content creator setup"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
