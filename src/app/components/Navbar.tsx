"use client";
import { useState, useEffect } from "react";

const navLinks = [

  { label: "ABOUT US", href: "#about" },
    { label: "SERVICES", href: "#services" },
  { label: "WHAT WE DO", href: "#what-we-do" },
 { label: "WHO WE ARE", href: "#about-team" },
];

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] bg-ink text-white px-4 py-2 text-sm"
      >
        Skip to content
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10"
        style={{
          backgroundColor: "#F7F2E7",
          transition: "background .14s ease-in-out, transform .14s ease-in-out",
        }}
      >
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between px-[4vw]"
          style={{
            height: scrolled ? "56px" : "80px",
            transition: "height .14s ease-in-out",
          }}
        >
          {/* Wordmark: ROAS / HAUS stacked */}
          <a
            href="#"
            className="flex flex-col leading-none text-ink select-none"
            style={{ fontWeight: 700, fontSize: "clamp(18px, 2.2vw, 24px)", letterSpacing: "-0.04em" }}
          >
            <span>ROAS</span>
            <span>HAUS</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink/70 hover:text-ink text-[13px] tracking-[0.02em] uppercase transition-opacity duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: social icons + CTA button */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="#" aria-label="TikTok" className="text-ink/60 hover:text-ink transition-colors"><TikTokIcon /></a>
            <a href="#" aria-label="Instagram" className="text-ink/60 hover:text-ink transition-colors"><InstagramIcon /></a>
            <a href="#" aria-label="LinkedIn" className="text-ink/60 hover:text-ink transition-colors"><LinkedInIcon /></a>
            <a
              href="#contact"
              className="ml-1 text-ink text-[13px] tracking-[0.02em] uppercase px-5 py-[10px] hover:bg-ink hover:text-cream"
              style={{ border: "0.8px solid currentColor", transition: "background-color .1s linear, color .1s linear" }}
            >
              CONTACT US
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] p-2 text-ink"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className="block w-[22px] h-px bg-current origin-center transition-transform duration-200"
              style={{ transform: menuOpen ? "translateY(6px) rotate(45deg)" : "" }}
            />
            <span
              className="block w-[22px] h-px bg-current transition-opacity duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-[22px] h-px bg-current origin-center transition-transform duration-200"
              style={{ transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "" }}
            />
          </button>
        </nav>

        {/* Mobile full-screen overlay */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col px-[4vw]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between" style={{ height: "80px" }}>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="flex flex-col leading-none text-ink select-none"
                style={{ fontWeight: 700, fontSize: "22px", letterSpacing: "-0.04em" }}
              >
                <span>ROAS</span>
                <span>HAUS</span>
              </a>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-ink p-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M2 2l16 16M18 2L2 18" />
                </svg>
              </button>
            </div>

            <ul className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-ink uppercase"
                    style={{ fontSize: "clamp(28px, 7vw, 48px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 0.94 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-auto mb-10 text-ink text-sm tracking-[0.02em] uppercase py-4 text-center hover:bg-ink hover:text-white"
              style={{ border: "0.8px solid #121212", transition: "background-color .1s linear, color .1s linear" }}
            >
              CONTACT US
            </a>
          </div>
        )}
      </header>
    </>
  );
}
