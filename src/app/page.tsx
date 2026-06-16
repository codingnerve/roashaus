import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import StatementMarquee from "./components/StatementMarquee";
import Clients from "./components/Clients";
import Testimonials from "./components/WhyUs";
import FeaturedProjects from "./components/Work";
import ServicesCarousel from "./components/Services";
import WhatWeDo from "./components/WhatWeDo";
import WeLoveTheWork from "./components/WeLoveTheWork";
import CTA from "./components/Contact";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* §4.2 Hero — cream */}
        <Hero />

        <div className="section-divider" />

        {/* §4.4 Statement Marquee — black band (no divider: dark bg separates) */}
        {/* <StatementMarquee /> */}
        {/* §4.3 About — cream, 2-col split */}
        <About />

        {/* §4.6 Testimonials — black carousel (no divider: dark bg separates) */}
        <Testimonials />

        <div className="section-divider" />

        {/* §4.7 Featured Projects — cream editorial collage */}
        {/* <FeaturedProjects /> */}

        <div className="section-divider" />
        {/* §4.5 Our Clients — cream */}
        <Clients />
        {/* §4.8 Services Carousel — cream auto-scroller */}
        <ServicesCarousel />

        {/* §4.9 What We Do — dark #121212 with video (no divider: dark bg separates) */}
        <WhatWeDo />

        <div className="section-divider" />

        {/* §4.10 We Love The Work — cream, 2-col */}
        <WeLoveTheWork />

        <div className="section-divider" />

        {/* §4.11 CTA — cream */}
        <CTA />

        {/* §4.12 Instagram Feed — cream, bridges into footer */}
        <InstagramFeed />
      </main>

      {/* §4.13 Footer — black */}
      <Footer />
    </>
  );
}
