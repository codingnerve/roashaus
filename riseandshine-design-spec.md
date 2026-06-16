# Rise & Shine PR — Website Design Specification

> Reverse-engineered design + motion spec for **https://www.riseandshinepr.co.nz/**
> Captured for rebuild reference. The live site is built on **Squarespace 7.1** (template family `seven-one`, "global animations" engine). This document describes the look, layout, content structure, and every animation/transition so the site can be recreated on any stack (Squarespace, or a custom Next.js/React build).
>
> ⚠️ **Content note:** The headlines and section labels below are reproduced as functional UI strings so you can match layout. Longer body paragraphs and client testimonials are **summarised/paraphrased** — replace them with your own (or the client's) final copy. Do not ship another brand's marketing copy verbatim.

---

## 1. Brand & Art Direction Summary

A bold, editorial, **high-fashion PR agency** aesthetic. The whole site runs on three moves:

1. **Oversized neo-grotesque display type** (Helvetica-Neue / Neue Haas Grotesk), set huge, tight, and often in ALL CAPS, frequently **overlapping imagery**.
2. **Big alternating colour blocks** — warm cream, off-white, and pure black — so each section feels like a fresh editorial spread.
3. **Restrained, "expensive" motion** — soft fade-and-rise reveals on scroll, two horizontal auto-scrolling marquees, a testimonial carousel, and a video showreel. Nothing bouncy; everything eases.

Overall vibe: *Vogue masthead meets boutique agency deck.* Confident, minimal, lots of negative space, photography does the talking.

---

## 2. Global Design System (Design Tokens)

### 2.1 Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--cream` | `#F7F2E7` (rgb 247,242,231) | Header bar + warm section backgrounds (hero, about, clients, featured, CTA) |
| `--paper` | `#F5F5F5` (rgb 245,245,245) | Default page background / light text on dark |
| `--ink` | `#121212` (rgb 18,18,18) | Primary text, "WHAT WE DO" dark section, footer |
| `--black` | `#000000` | Marquee band, testimonial section, service-tag labels, footer |
| `--white` | `#FFFFFF` | Text on black sections |
| `--slate` | `#4A5464` (rgb 74,84,100) | Muted secondary text (rare) |
| Overlays | `rgba(0,0,0,.5)`, `rgba(18,18,18,.5)`, `rgba(38,38,38,.9)` | Video controls / media scrims |

Accent HSL exposed by the theme is `0,0%,0%` — i.e. **the "accent" colour is black**. There is no saturated brand colour; all colour comes from photography. Keep the chrome strictly mono + cream.

### 2.2 Typography

The display + body face is a **tight neo-grotesque**. Live site loads **Neue Haas Grotesk** (Display weight ~600, Text weight ~400) with the computed fallback stack `"Helvetica Neue", Arial, sans-serif`. For a rebuild use, in order of preference: **Neue Haas Grotesk Display/Text** → **Helvetica Neue** → **Inter / Inter Tight** (free substitute) → system sans.

Signature treatment for big headings: **negative letter-spacing (~-3%)** and **line-height ≈ 0.93–1.0** so lines stack tightly.

| Role | Font | Size (desktop) | Weight | Line-height | Letter-spacing | Transform |
|---|---|---|---|---|---|---|
| Hero H1 (`WE HELP BRANDS SHINE.`) | Display | ~84px (clamp up to ~120px on wide) | 600 | 0.94 | −0.03em | none (caps in copy) |
| Mega section H1 (`WHAT WE DO`) | Display | ~99px | 600 | 1.0 | −0.03em | UPPERCASE |
| Section H1 (`ABOUT US`, `OUR CLIENTS`, `FEATURED PROJECTS`) | Display | ~84px | 600 | 0.94 | −0.03em | UPPERCASE |
| Marquee text | Display | ~53px | 400/600 | — | −0.03em | none |
| Testimonial quote H2 | Display | ~53px | 400 | 1.13 | −0.03em | none |
| Footer wordmark `RISE AND SHINE` | Display | ~84px | 600 | 0.94 | −0.03em | UPPERCASE |
| Footer `STAY IN TOUCH` H2 | Display | ~35px | 400 | 1.13 | −0.03em | UPPERCASE |
| Sub-headline H3 (`Let us help…`) | Display | ~28px | 400 | 1.15 | −0.03em | none |
| Body paragraph | Text | 16px | 400 | 1.32 (≈21px) | 0.05em (0.8px) | none |
| Eyebrow / labels (`LET'S CHAT`, `EVENTS`) | Text | 14–16px | 400 | — | 0.05em | UPPERCASE, often **underlined** |
| Nav links | Text/Inter | ~14.5px | 400 | — | normal | UPPERCASE |
| Project captions | Text | ~14.7px | 400 | 1.32 | 0.05em | mixed (italic for campaign names) |
| Service-tag labels | Text | ~13.5px | 400 | — | 0.02em | UPPERCASE |

> Rule of thumb: **headings = tight, huge, caps**; **body = small, airy, slightly tracked-out, sentence case**. That contrast is most of the brand.

### 2.3 Layout & Spacing

- **Max content width:** full-bleed sections (`background-width--full-bleed`); inner content uses an inset gutter (~`header-width-inset`). Site gutter ≈ 4–6vw.
- **Grid:** most editorial sections are a **2-column** split (text column + full-bleed image column that bleeds to the viewport edge). Headings are positioned to **overlap** the adjacent image/logo cluster.
- **Vertical rhythm:** generous. Sections are tall (many ~90vh+), separated by thin **full-width hairline dividers** (`section-divider`, 1px line) on the cream/paper sections.
- **Section dividers:** simple straight horizontal rule (SVG line, full width) between light sections — *not* angled/zigzag.
- **Corners:** **0px border-radius everywhere.** Buttons, inputs, image frames are all square. (Squarespace tweaks: `*-shape-square`.)

### 2.4 Buttons

Primary/secondary buttons share one look:

```
display: inline-block;
background: transparent;
color: #000;                 /* #fff on dark sections */
border: 0.8px solid currentColor;   /* thin 1px square outline */
border-radius: 0;
padding: ~21px 35px;
font-size: 14.3px;
text-transform: uppercase;
letter-spacing: ~0.02em;
transition: background-color .1s linear, color .1s linear;
```

**Hover:** fills solid — background → ink/black, text → cream/white (invert). Fast 0.1s linear.
Example labels: `CONTACT US`, `TALK TO US`, `JOIN`.

### 2.5 Iconography

- Social icons (TikTok, Instagram, LinkedIn) as small monoline SVGs in the header (right side) and footer.
- A small **animated dot/bullet** "•" sits beside the hero headline (decorative accent, see §4.2).

---

## 3. Global Motion System (the "effects & transitions")

This is the most important part to replicate the *feel*. Squarespace's **"Fade" global animation, complexity = Detailed, curve = Ease** drives nearly every section.

### 3.1 Scroll-reveal (applies to almost every block)

- **Trigger:** element enters the viewport (IntersectionObserver, ~15–20% visible).
- **Effect:** **fade + rise.** Element starts `opacity: 0` and translated **down ~20–40px**, then animates to `opacity: 1` / `translateY(0)`.
- **Timing:** ~**0.6–0.9s**, `ease` / `ease-out`. Slight **stagger** between sibling blocks (image vs heading vs paragraph reveal a beat apart).
- **Once:** plays once on first entry (does not replay on scroll-up).
- Images additionally carry an `animation-loaded` class — they fade in from `opacity:0` as they decode.

**Rebuild recipe (Framer Motion / CSS):**
```css
.reveal { opacity: 0; transform: translateY(28px); }
.reveal.in-view {
  opacity: 1; transform: none;
  transition: opacity .7s ease, transform .7s ease;
}
/* stagger children by 80–120ms */
```

### 3.2 Sticky header behaviour

- **Position:** `position: fixed`, top, full width, always visible.
- **Background:** solid **cream `#F7F2E7`** with a thin bottom hairline.
- **Transparent-header tweak** is enabled, so over a dark hero it can start transparent; here it resolves to the cream bar.
- **Shrink on scroll:** header gets a `shrink` class once you scroll down — it **reduces height/padding** (logo + bar get a touch smaller) and the divider firms up.
- **Transition:** `background .14s ease-in-out, transform .14s ease-in-out`. Header height ≈ 80px (slightly less when shrunk).

### 3.3 Horizontal marquees (two of them)

Both are continuous, infinite, linear-timing horizontal scrollers (duplicated track translated `-50%` on loop):

1. **Statement marquee** (black band, §4.4): large display text reading
   *"Memorable and strategic partnerships · Tailored communications plans · Drive brand trust and visibility · Real results ·"* — scrolls **right → left**, slow, never stops. Off-white text on black.
2. **Services marquee / carousel** (§4.8): a row of category cards (`MEDIA RELATIONS`, `SOCIAL MEDIA`, `EVENTS`, `ACTIVATION`, `SPECIAL PROJECTS`, repeated — 10 items) auto-advancing horizontally; each card is an image with a black label box beneath. Has Prev/Next arrows too.

**Rebuild recipe:**
```css
@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
.marquee-track { display:flex; width:max-content; animation: marquee 28s linear infinite; }
/* duplicate the content once inside the track for a seamless loop */
```

### 3.4 Testimonial carousel (§4.6)

- Full-black slide region, **4 slides**, one quote visible at a time with the next slide's text peeking at the right edge.
- **Prev / Next** circular arrow buttons (bottom). Likely auto-advances; transition is a **horizontal slide** between quotes, eased.
- "Item X of 4" live-region for a11y.

### 3.5 Video showreel (§4.9)

- A native HTML5 `<video>` (~35s) in the dark "WHAT WE DO" section, with custom controls (Play, current/duration time, Mute, Settings, Fullscreen, seek bar + buffered progress).
- Poster frame shows lifestyle/event footage; the video itself contains big category words (e.g. "EVENTS") as motion-graphics.
- Click-to-play (not autoplaying with sound).

### 3.6 Hover micro-interactions

- **Nav links:** colour/opacity shift on hover (`transition: all`), subtle.
- **Underlined category links** (`EVENTS`, `PUBLIC RELATIONS`, `SOCIAL & INFLUENCER`): underline present at rest; hover lifts opacity / underline emphasis.
- **Buttons:** solid-fill invert (see §2.4).
- **Portfolio/featured hover:** theme configured for **fade** + **scale-up** zoom on image hover (`hover-static-animation-type-scale-up`) — images gently zoom on hover.
- **Instagram tiles:** hover scrim/zoom; one tile is a video with a play affordance.

---

## 4. Section-by-Section Breakdown

Page order, top → bottom. Background colour is called out per section because the alternation is core to the design.

### 4.1 Header / Navigation — `#F7F2E7` cream, fixed
- **Left:** text wordmark logo — **"RISE / SHINE"** stacked, with **"AND"** tucked between them (small). Black.
- **Center/right nav links:** `FEATURED PROJECTS` · `WHO WE ARE` · `WHAT WE DO` · `BLOG` (uppercase).
- **Right cluster:** social icons (TikTok, Instagram, LinkedIn) + a boxed **`CONTACT US`** outline button.
- **"Skip to Content"** a11y link first in DOM.
- Mobile: collapses to a hamburger ("Open Menu/Close Menu") → full-screen overlay nav (`white` themed overlay).
- **Motion:** fixed; shrinks on scroll (§3.2).

### 4.2 Hero — `#F7F2E7` cream
- **Headline (massive, staggered ind*ent):**
  - Line 1: **`WE HELP`** (with an animated **•** dot to its right)
  - Line 2: **`BRANDS`** (indented right)
  - Line 3: **`SHINE.`** (indented further right)
- **Flanking category links** (underlined, uppercase), each deep-links into `/the-work`:
  - Left: **`EVENTS`**, **`PUBLIC RELATIONS`**
  - Right: **`SOCIAL & INFLUENCER`**
- **Below the headline:** a **3-up strip of campaign images** (e.g., a red-lit event with a violinist, a wellness portrait, a fragrance portrait) that bleed off the left/right edges — reads like an editorial gallery teaser.
- **Motion:** headline + links fade-rise in on load; images fade in as they decode; the dot is a subtle decorative animation.

### 4.3 About Us — `#F7F2E7` cream, 2-column
- **Left column:** heading **`ABOUT US`** (stacked on 2 lines, huge) sitting above **two body paragraphs**.
  - *Paraphrased copy:* Rise & Shine is a creative, results-driven, full-service PR & communications agency in Auckland, NZ, helping lifestyle brands connect, get discovered and "shine." Boutique and nimble; tailored strategies across media relations, influencer marketing, events and brand partnerships; strong relationships with NZ media, creators and tastemakers; attuned to industry shifts incl. AI-powered search, while still betting on storytelling, credible coverage and human connection. Closes: *"your brand will shine for all the right reasons."*
- **Right column:** full-bleed **team photograph** (three women, studio white background) bleeding to the right viewport edge.
- **Motion:** text block fade-rises; image fades in; subtle stagger.

### 4.4 Statement Marquee — `#000` black band
- Single-line horizontal **auto-scroll marquee**, large off-white display text:
  *"Memorable and strategic partnerships · Tailored communications plans · Drive brand trust and visibility · Real results ·"* (dot `·` separators, loops forever). See §3.3.

### 4.5 Our Clients — `#F7F2E7` cream
- **Centered oversized heading** `OUR` / `CLIENTS` (stacked) that **overlaps a scattered grid of client logos**.
- **Logos seen:** Lorna Jane, Le Creuset, BOSSI, TEVA, essano, Eau Thermale Avène, Cadence, 42, Glasshouse Fragrances, Miele, dermalogica, Clinicians, CIRCA … (monochrome/native-colour logo lockups arranged around the heading).
- **Motion:** logos fade-rise in, lightly staggered; heading sits on top (z-index above logo grid).

### 4.6 Testimonials — `#000` black, white text, carousel
- Full-black section, **giant quote** typography. **4 testimonials** in a slider (one visible, next peeking right). Prev/Next arrows. (§3.4)
- *Attributions (keep, replace quotes with final copy):*
  - **Maree Todd** — Head of Marketing, **Le Creuset Australia & NZ**
  - **Tim Phin** — Publisher, **Remix Magazine**
  - **Ashleigh Cometti** — **Viva** Beauty Editor
  - **Hannah Barrett** — Content Creator
- **Motion:** horizontal eased slide between quotes; text fade-rise on entry.

### 4.7 Featured Projects — `#F7F2E7` cream, editorial collage
- **Big heading `FEATURED PROJECTS`** overlapping a collage of overlapping campaign images (team portrait, chef cooking with Le Creuset cookware, an awards "THE WINNER IS" graphic, partner logos SABEN / dermalogica / icehouse).
- **Project captions** (label + italic campaign name), e.g.:
  - **GLASSHOUSE FRAGRANCES** — *'Happy Happy' Holiday Collection Launch*
  - **DERMALOGICA** — *'EmpowHER' Campaign*
  - **LE CREUSET** — *'Rhone' Launch*
- **Motion:** images fade-in + hover **scale-up zoom**; captions fade-rise; heading overlaps with higher z-index.

### 4.8 Services Carousel — `#F7F2E7` cream
- Horizontal **auto-scrolling card carousel** (10 items, loops). Each card = a media thumbnail (press clipping, IG post, event photo, activation) with a **solid black label box** beneath:
  `MEDIA RELATIONS` · `SOCIAL MEDIA` · `EVENTS` · `ACTIVATION` · `SPECIAL PROJECTS` (repeated). Prev/Next arrows; each links into `/the-work#…`.
- **Motion:** continuous marquee-style advance (§3.3) + arrow control.

### 4.9 What We Do — `#121212` dark
- **Mega heading `WHAT WE DO`** rendered in a **light/translucent tint** so it reads as a ghost headline overlapping the video.
- **Video showreel** (~00:35) centered below with custom dark player controls (§3.5).
- **Motion:** heading fade-rise; video poster → click-to-play.

### 4.10 We Love The Work — `#F7F2E7` cream, 2-column
- **Heading** `WE LOVE THE` / `WORK` (stacked) + short paragraph.
  - *Paraphrased copy:* Established **2018** by respected PR professional **Luci Marshall**; Auckland-based Rise & Shine was created to give beauty, wellness and lifestyle brands a new approach.
- **Image column:** full-bleed lifestyle/event photo (red-toned event styling) to one edge.
- **Motion:** standard fade-rise + image fade-in.

### 4.11 CTA — `#F7F2E7` cream
- **Eyebrow:** `LET'S CHAT` (small, uppercase).
- **Headline (sentence case, huge):** **"Time to realise your brand dreams."**
- **Button:** square outline **`TALK TO US`** → `/contact-us` (hover fills solid).
- **Motion:** fade-rise; button hover invert.

### 4.12 Instagram Feed — bridges into footer
- Horizontal **row of ~9–10 Instagram tiles** (square images, one video tile with a Play button) linking out to individual IG posts. Examples seen: "For Mum" Le Creuset promo, Mother's Day Gift Guide, a flower-arranging video, "The Newlyweds," floral arrangements.
- **Social nav** repeated: TikTok / Instagram / LinkedIn.
- **Motion:** tiles fade-in; hover zoom/scrim.

### 4.13 Footer — `#000` black, white text
- **Left:** giant **`RISE AND SHINE`** wordmark (stacked `RISE AND` / `SHINE`).
- **Right — newsletter:** `STAY IN TOUCH` heading + **email input** (`Email Address` placeholder, square, solid field) + **`JOIN`** button.
- **Tagline (H3):** *"Let us help your brand rise and shine above the rest."*
- **Contact:** `Luci Marshall – Director` · `luci@riseandshinepr.co.nz` (mailto) · `Rise & Shine PR • 46A Lake Road, Northcote, Auckland 0627`.
- **Social text links:** Instagram · Linkedin · TikTok.
- **Motion:** fade-rise on entry.

---

## 5. Responsive Behaviour

- Squarespace `mobile-style-available` — fully responsive.
- **Display type uses fluid sizing** (`clamp()`-style) — scale hero from ~40px (mobile) to ~120px (wide desktop). Keep the −3% tracking and tight leading at all sizes.
- **2-column editorial splits stack** to single column on mobile (text above, image below / full-bleed).
- **Nav collapses** to hamburger → full-screen overlay menu.
- **Marquees & carousels** keep running on mobile (reduce font size, keep loop speed).
- Honour `prefers-reduced-motion`: disable marquee loops and reveal transl/fade (show content statically).

---

## 6. Rebuild Checklist / Implementation Notes

**If rebuilding custom (recommended stack: Next.js + Tailwind + Framer Motion):**

1. **Tokens first.** Define the 5 colours (`cream #F7F2E7`, `paper #F5F5F5`, `ink #121212`, `black #000`, `white #fff`) and the type scale from §2.2. Load Neue Haas Grotesk (Adobe Fonts) or Inter Tight as the free stand-in.
2. **Layout primitives:** a `FullBleedSection` (sets bg colour + min-height) and a `SplitEditorial` (text col + edge-bleeding image col). Everything is square-cornered.
3. **Type:** build a `<Display>` component with tight tracking (−0.03em) + line-height 0.94; use it for every big heading. Overlap headings on imagery with negative margins / absolute positioning + z-index.
4. **Motion layer (the signature):**
   - `useInView` → fade + `translateY(28px→0)`, 0.7s ease, stagger 80–120ms (§3.1).
   - Two CSS marquees (§3.3).
   - Testimonial slider (4 slides) + services slider (10 cards), eased horizontal slide.
   - Sticky header with shrink-on-scroll (§3.2).
   - Custom video player or a styled `<video controls>`.
   - Wrap all of it in a `prefers-reduced-motion` guard.
5. **Sections** in the exact order of §4.
6. **Content:** swap all paraphrased paragraphs and testimonials for the brand's own final copy and licensed photography. Provide real client logos / IG embeds.

**If rebuilding on Squarespace 7.1 (fastest path to "exact"):**
- Use a template in the `seven-one` family.
- Site Styles → set the two display/body fonts, the cream/black palette, **square buttons**, **square form fields**.
- Site Styles → **Animations: style = Fade, complexity = Detailed, curve = Ease**.
- Header: enable **Fixed** + **Transparent** + shrink (basic fixed style).
- Build sections with full-bleed backgrounds; use **Marquee** blocks for the two scrollers, a **List Section (carousel)** for testimonials and for the service tags, a **Video block** for the showreel, and an **Instagram block** for the feed.

---

### Appendix — Raw token reference (from live computed styles)

```
Body bg:            rgb(245,245,245)  #F5F5F5
Header bg:          rgb(247,242,231)  #F7F2E7
Ink text:           rgb(18,18,18)     #121212
Accent (HSL):       0,0%,0%  → black
Hero H1:            84.4px / lh 78.98px (0.94) / ls -2.53px (-0.03em) / weight 600
"WHAT WE DO" H1:    98.9px  / lh 98.9px  / ls -2.97px
Marquee/quote:      53.3px  / ls -1.60px
Body p:             16px / lh 21.2px / ls 0.8px (0.05em)
Button:             border 0.8px solid; radius 0; padding 20.8px 34.7px; uppercase;
                    transition background-color .1s linear, color .1s linear
Header:             position fixed; height ~80px;
                    transition background .14s ease-in-out, transform .14s ease-in-out
Fonts loaded:       Neue Haas Grotesk Display (n6), Neue Haas Grotesk Text (n4)
                    fallback "Helvetica Neue", Arial, sans-serif; also Inter / Inter Tight
Platform:           Squarespace 7.1 (seven-one global animations, style=fade, detailed, ease)
Page height:        ~9369px @ 1036px viewport
```
