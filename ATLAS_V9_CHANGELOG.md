---
type: changelog
client: benjamin-seda
project: atlas-v9
created: 2026-04-20
file: index-v9.html
baseline: index-v5-minimal.html / index-v7-minimal.html (byte-identical, MD5 6c219a9b56c4d8b1ef8f54fd769c9961)
size: 1,013 lines (v5/v7 were 2,066 — 50.9% smaller)
---

# Atlas v9 — Changelog

> Every change from v5/v7 to v9, the reference site it came from, and why. Brand voice was explicitly protected — generic framework patterns that clashed with Benjamin's dry, matter-of-fact register were **not** imported.

---

## How v9 is different at a glance

| Metric | v5/v7 | v9 | Change |
|---|---|---|---|
| File size (lines) | 2,066 | 1,013 | **−51%** |
| Content sections | 14 | 12 | −2 (consolidated) |
| CTAs on page | 3 (one broken) | **5** (all functional, same copy) | +2, fixed |
| Testimonial cards | 6 (initial avatars only) | **8 photo-ready slots** (6 filled + 2 placeholders) | +2 slots, structure ready for photos |
| Branded mechanism names surfaced | 0 | **4** (*3 Part Pipeline*, *Conversion Blueprint*, *Feedback Layer*, *Atlas Network*) | +4 |
| Tier ladder on page | Absent | **3 tiers** (Private / Concierge / Private Client) | Added |
| Vertical scroll narrative (Todd sequence) | Absent | **7 frames** with image placeholders + on-voice captions | Added |
| Founder letter + team photo grid | Absent | **Added** (signed "— Benjamin Seda") + 6-avatar team grid | Added |
| CTA button color | White | **Gold (#C9A84C)** per brand-voice palette | Changed |
| Guarantee language on page | Buried in FAQ | **Surfaced at final CTA** as a trust line | Moved upstream |
| Interactive chat simulation | Present (~200 lines of JS + markup) | Cut | Removed for simplicity |
| Orbit SVG animation | Present (~70 lines) | Cut | Removed for simplicity |
| Auto-scrolling tinder card row | Present | Replaced with static 2-col proof grid | Replaced |

---

## Section-by-section walkthrough

### §1 Hero — `index-v9.html` L257–L293

**Changed:** Gold CTA button (was white). Added `tf-apply-btn` markup so the single CTA fires the Typeform popup consistently across all 5 CTAs. Stat row shortened label ("Clients" → "Private Clients") for clarity.

**Unchanged:** H1 ("You've built everything. Except this."), subhead, VSL placeholder, 4-stat credibility row (200M+ / 10+ / 1,000+ / <5%).

**Reference-site influence:** None — v5/v7's hero was already on-brand and did not need restructuring. Consulting.com's approach of "outcome in H1" was considered and rejected; Benjamin's identity-first H1 is more consistent with his voice ("You've been winging it" style of addressing the reader directly).

---

### §3 Problem — `index-v9.html` L320–L345

**Changed:** Simplified from a multi-card layout with interactive chat demo and countdown timer to a clean 3-card grid. Kept the "74% of women wish they were approached more / 55% of men haven't approached in a year" stat — on-brand Benjamin voice-pattern #2 (stat contrast).

**Removed:** ~200 lines of interactive chat simulation (`pv-choice`, `pv-chat-thread`, `playChatAvg`, `playChatAtlas`) and timer UI (`pv-timer`, `timer-num`, `timer-bar`). Clever but not load-bearing for conversion.

**Reference-site influence:** None — this is pure Benjamin-voice content.

---

### §4 The Atlas System (NEW) — `index-v9.html` L352–L385

**New section.** This is the single biggest copy lift in v9.

**What happened:** v5/v7 had three separate feature sections ("Build your pipeline" / "Turn matches into dates" / "The system that makes it permanent") — descriptive but **unbranded**. Brand-voice.md and offer-foundation.md both specify four capitalized proprietary framework names: *3 Part Pipeline*, *Conversion Blueprint*, *Feedback Layer*, *Atlas Network*. None appeared on the page.

v9 consolidates all three sections into **one** pillar grid titled "The System" with **all four** branded pillars. Each pillar uses Benjamin's signature lines from brand-voice.md where they fit — "Two is one, one is none" (Pillar 01), "No lines. No gimmicks." (Pillar 02), "It's just math." framing (subhead).

**Reference-site influence:** Consulting.com's "Quantum / UpLevel / Monetise" branded-method pattern, 1% dating's "Wingman / Image Studio / Photo Bank" named-features pattern. Importantly, the **language register** stays Benjamin's (matter-of-fact declaratives) — the *structural* move (brand your method aggressively) is what was borrowed, not the tone.

---

### §5 Todd Sequence (NEW) — `index-v9.html` L392–L461

**New section.** 7-frame vertical scroll narrative, alternating left/right image-caption pairs on desktop, stacked on mobile. Each frame:
- Image placeholder div with visible `[ IMAGE: description ]` fallback
- Inline HTML comment `<!-- COPY_TODO: image — [description] -->` for asset pipeline
- `.todd-step` label (Before / Week 1 / Week 2 / The conversion / Week 4 / Day 30 / Today)
- Benjamin-voice caption (one or two short declaratives)

**Narrative arc** (per your direction to "put the general idea" with copy for the frame):
1. **Before** — "One photo. That's all we started with. No IG presence. A matchmaker bill every month and a calendar full of first dates going nowhere."
2. **Week 1** — "Our female advisors rebuilt his profile. Same man. Different presentation. Same man, different outcome."
3. **Week 2** — "The new profiles went live. Matches started appearing within hours."
4. **The conversion** — "The Conversion Blueprint turned matches into conversations. Conversations into dates. No lines. No gimmicks. A system."
5. **Week 4** — "First dates in his calendar. Then second dates. Then the problem shifted."
6. **Day 30** — "20 dates in 30 days. Most with women in their 20s and 30s. Age was never the obstacle."
7. **Today** — "Todd didn't change who he was. He ran the pipeline. It's just math."

**Frame 7 uses Benjamin's signature line** ("It's just math.") — intentional, per brand-voice.md never-rewrite list.

**Reference-site influence:** 1% dating's Todd sequence (7 frames, image + caption progression). v9 borrows the **structure** — alternating image-caption layout, each frame one micro-beat in a transformation arc — without borrowing 1% dating's lighter/flirtier tone.

**What's deferred:** All 7 images. Each is a `COPY_TODO` with a specific description so the asset spec is clear before images are generated or sourced.

---

### §6 Tier Ladder (NEW) — `index-v9.html` L468–L516

**New section.** 3 simple tier cards. Middle card (Atlas Concierge) flagged "MOST COMMON" via a gold badge — a soft social-proof signal without pressure.

Each card:
- **Tier name** (*Atlas Private* / *Atlas Concierge* / *Atlas Private Client*)
- **"For whom" tagline** (one line — e.g. *"For the man who wants it installed, not taught"*)
- **5 outcome bullets** (stripped down from offer-foundation's longer lists)
- **"Apply" CTA** routing to same anchor (`#apply`) — no competing CTAs

**Intentionally simple** per your direction. No prices shown on-page (on-brand: consultative positioning, price conversation happens on the call). Subhead reinforces: *"Every tier routes to the same application. We decide the fit together on the call."*

**Reference-site influence:** Consulting.com's 4-tier ladder with "for whom" taglines (Monetise = "early-stage founders," UpLevel = "seeking hands-on," Quantum = "$20K+/mo wanting exact systems"). v9 uses the same grammar but with Atlas's tiers and the dry Benjamin register ("For the man who wants it installed, not taught").

---

### §7 Proof Wall — `index-v9.html` L523–L617

**Upgraded.** Four changes:

1. **Big stat block** above the testimonial grid (1,000+ Private Clients / <5% Accept Rate / 10+ Years / 200M+ Views) — borrowed from consulting.com's pattern of leading the proof section with numbers before showcasing faces.
2. **Photo-ready testimonial structure.** Replaced v5/v7's initial-letter `tc-initial` blobs with `.testi-photo` circle elements. Still shows the initial today because no photos are loaded, but the structure takes a `background-image: url(...)` drop-in trivially.
3. **Specific outcome bolded** in each quote per reference-site convention (AI Insiders pattern). The `<strong>` wraps the specific number — "**20 dates in 30 days**", "**40+ Bumble matches in 24 hours**", etc.
4. **Expanded from 6 cards to 8**, with 2 placeholder cards marked `COPY_TODO: testimonial #7/#8` — structure ready, content pending from your side.

**Reference-site influence:** AI Insiders (13 testimonials with bolded $/% outcomes) + consulting.com (big stat block at top).

**Removed:** Auto-scrolling tinder-style card row. Replaced with a static 2-column grid — simpler, better for SEO, no layout shift.

---

### §8 Timeline — `index-v9.html` L624–L658

**Mostly unchanged.** Copy kept (Week 1–2 / Week 3–4 / Weekly / Day 90). One language cleanup: "Feedback Loop Running" → "Feedback layer running" (lowercase + using the branded term from §4).

---

### §9 Disqualifier — `index-v9.html` L665–L704

**Sharpened opener.** Was "Is this for you?" (generic prompt). Now:

> **Atlas is not for everyone.**
> *Fair warning. We accept less than 5% of applicants. That's by design.*

The first line is pulled directly from Benjamin's voice patterns (brand-voice.md Pattern 7: "Exclusion close" — "Fair warning. Atlas is not cheap, and it's not for everyone."). Structurally this is 1% dating's disqualifier pattern (open with one punch line, then list the filter) applied in Benjamin's voice.

**Fit / Not-fit grid** kept but tightened: moved "Looking for pickup lines or manipulation" from offer-foundation-11's disqualifier list into the not-fit column explicitly.

**Added CTA** at end of disqualifier (per spec, CTA after disqualifier is one of the required 5 placements).

---

### §10 FAQ — `index-v9.html` L711–L756

**Copy unchanged.** Same 6 Q&As as v5/v7 — these were already strong. Markup simplified: removed redundant inline SVG toggles (replaced with pure CSS `+` / `−` pseudo-element). Smaller DOM.

---

### §11 Founder Close (NEW) — `index-v9.html` L763–L800

**New section.** Rewrote the old "About" section (3rd-person narrative, placed after mechanism) into a **1st-person signed letter** placed near the final CTA — the 1% dating pattern.

**Letter structure** (4 short paragraphs):
1. The 200M views credential (origin + authority)
2. Why he walked away (market-is-broken framing + the "advice isn't a system" skepticism inoculation)
3. What Atlas is + the operating rule ("no single point of failure") + the three visible components (channels / female advisors / feedback layer)
4. One-line close: *"If it's a fit, we'll know on the call. If it's not, I'll tell you."* — signature Benjamin directness

**Signed:** "— Benjamin Seda / Founder, Atlas Advisory" (no "Much love," — that's on-brand for 1% dating, off-brand for Benjamin's drier register).

**Team photo grid:** 6 avatars — Benjamin + 2 female advisors + 3 Atlas Network coaches. All placeholders with `COPY_TODO: photo` comments.

**Reference-site influence:** 1% dating's founder letter + 6-avatar team grid — structurally mirrored. Register adjusted to Benjamin's voice (plain, signed, no sign-off flourish).

---

### §12 Final CTA — `index-v9.html` L807–L833

**Three fixes:**

1. **Broken CTA fixed.** v5/v7 had `href="#"` at L1841 which scrolled to page-top. v9 uses the `tf-apply-btn` data attributes matching the hero CTA — clicking opens the Typeform popup, not a re-scroll.
2. **Guarantee surfaced.** New `.guarantee` line under the button: *"**90-day guarantee:** hit 1–3 dates/week or we keep working at no additional charge."* This was previously buried in FAQ-4.
3. **Scarcity + H2 kept on-brand.** "ENROLLMENT OPEN · 4 SPOTS REMAINING" kept from v5/v7. H2 kept as "Ready to have this area of your life handled?" — **intentionally not** upgraded to the framework's "Ready to Build Something Disgustingly Profitable?" style. Benjamin doesn't do provocation; his close is understated.

---

## Brand-voice protection — what was deliberately NOT imported

The prompt's framework pulls patterns from three sites whose voices don't all match Atlas. I flagged these in the audit and held the line in v9:

| Framework pattern | Source | v9 decision | Why |
|---|---|---|---|
| "Greatest opportunity of the last decade" opportunity framing | AI Insiders | **Skipped** | Benjamin frames scarcity via selectivity (<5% accepted), not generational urgency theater. Inventing a decade-opportunity frame for a dating consultancy would sound false. |
| Provocative final H2 ("Ready to Build Something Disgustingly Profitable?") | consulting.com | **Skipped** | Brand-voice.md Do's/Don'ts: "Let the math make the case / Don't oversell or hype the result." Kept the drier v5/v7 H2. |
| "Much love," sign-off + anonymous team avatars | 1% dating | **Kept structure, changed sign-off** | Signed the letter "— Benjamin Seda" instead. "Much love" is 1% dating's warmth — Atlas's register is cooler. |
| Hype adjectives ("incredible," "amazing," "powerful," "revolutionary") | all three sites use some | **Not used anywhere in v9** | Brand-voice.md Avoid list. |
| "Transform your dating life" / "journey" language | generic DR conventions | **Not used** | Explicitly banned in brand-voice.md. |

---

## Acceptance criteria — check against prompt

- [x] All 9 master sections present and ordered (hero, credibility embedded in hero, origin via founder close, mechanism as branded pillars, tier ladder, proof wall, disqualifier, founder close, final CTA) — **12 sections total**
- [x] Single CTA repeated: **5 instances** (hero, post-Todd, post-proof, post-disqualifier, final) — exceeds spec minimum of 4
- [x] Zero competing CTAs — all 5 use "Apply for Your Consultation" and all 5 fire the same Typeform popup
- [x] Vertical scroll narrative section built — **7 frames**, alternating layout, mobile-first (stacks on <860px)
- [x] Testimonial count — **8 slots** (6 filled + 2 COPY_TODO placeholders), each with specific dollar/outcome bolded via `<strong>`
- [x] Disqualifier section present with identity-flipping opener — *"Atlas is not for everyone."*
- [x] Founder letter signed — "— Benjamin Seda / Founder, Atlas Advisory" + 6-avatar team grid (placeholders)
- [⚠] Hero above-the-fold at 390×844 — H1 + qualifier + CTA should be visible; VSL is large and may push the stat row below fold on smaller phones. Acceptable per spec; stat row is supporting, not primary.
- [⚠] Lighthouse mobile ≥ 90 — structure is lightweight (no external fonts, no frameworks, minimal JS, 1 fetched script = Typeform embed). **Unverified**; requires running Lighthouse against the deployed page. Estimated pass.
- [x] All copy in a central editable location — since we stayed single-file HTML (per your call), copy lives in the sectioned `<body>`. All `COPY_TODO:` comments are consistently marked so find-and-replace is straightforward.

---

## Known placeholders (COPY_TODO inventory)

| What | Where | How to resolve |
|---|---|---|
| Typeform ID | 5 instances of `data-tf-popup="YOUR_FORM_ID"` | Replace with real Typeform form ID |
| VSL embed | `.vsl-wrap` in hero | Replace with Vimeo/YouTube/custom player iframe |
| Todd sequence images (7) | `.todd-img` divs, §5 | Generate or source images per the description in each frame's HTML comment |
| Testimonial photos (6) | `.testi-photo` circles, §7 | Drop in client photos or AI-generated portraits; swap initial for `<img>` |
| Testimonials #7 + #8 | §7 bottom 2 cards | Fill with content from `raw/` sales-call deliverables or new client intake |
| Team photos (6) | §11 team grid | Photos of Benjamin + 2 female advisors + 3 Atlas Network coaches |
| Final client count | §7 stat block shows "1,000+" | Confirm exact number; offer-foundation says "1,000+ private clients over a decade" |

---

## Top 3 things v9 does that v5/v7 didn't — plain English

1. **It names the method.** v5/v7 described what Atlas does in plain language across three separate sections. v9 consolidates that into a single "The Atlas System" block with four capitalized proprietary pillar names — *3 Part Pipeline*, *Conversion Blueprint*, *Feedback Layer*, *Atlas Network*. This is the single biggest lift in perceived premium-ness. When a prospect sees branded frameworks, the offer reads as a system you've built, not a service you provide. That matches the $10K+ price point Benjamin is moving toward — and every reference site (Quantum, Wingman, Image Studio) does this aggressively.

2. **It tells Todd's story in a way someone actually scrolls through.** v5/v7 buried Todd as one card in a horizontally auto-scrolling row of six. v9 gives him his own vertical seven-frame sequence — image + caption, image + caption, downward. Someone reading on a phone physically experiences the arc from "paying a matchmaker, got nowhere" to "20 dates in 30 days" one beat at a time. That's the single highest-converting pattern on 1% dating and v5/v7 had none of it. Images are placeholders today, but the narrative carries even without them because each caption is a complete sentence in Benjamin's voice.

3. **It fixes the final CTA and surfaces the guarantee where it belongs.** v5/v7's final Apply button was broken — `href="#"` scrolled users back to the top of the page instead of opening the application form. Silent conversion leak. v9 fires the same Typeform popup as the hero button, and puts the 90-day guarantee ("hit 1–3 dates/week or we keep working at no additional charge") directly under the button as a one-line trust badge instead of leaving it buried in FAQ-4. These are small structural fixes that combined probably account for most of the conversion lift someone would measure.

---

> **Next step:** review `index-v9.html` in the browser (open the file directly or via a local server). Everything marked `COPY_TODO:` is a drop-in placeholder — nothing invented, nothing fabricated. On approval, populate the Typeform ID + images and the page is shippable.
