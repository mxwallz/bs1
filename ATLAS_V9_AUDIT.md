---
type: audit
client: benjamin-seda
project: atlas-v9
created: 2026-04-20
auditor: claude-code
status: awaiting-signoff
inputs:
  - index-v5-minimal.html (2,066 lines)
  - index-v7-minimal.html (2,066 lines)
references:
  - https://consulting.com
  - https://onepercent.dating
  - https://joininsiders.ai
---

# Atlas v9 — Pre-Build Audit

> Gap analysis of the current Atlas minimal site against the 9-section framework abstracted from `consulting.com`, `onepercent.dating`, and `joininsiders.ai`. **No v9 code will be written until you sign off.**

---

## 0. The most important finding

**v5 and v7 are byte-identical.**

```
MD5 (index-v5-minimal.html) = 6c219a9b56c4d8b1ef8f54fd769c9961
MD5 (index-v7-minimal.html) = 6c219a9b56c4d8b1ef8f54fd769c9961
```

The prompt assumed two distinct variants. There is only one file, duplicated. All audit rows below therefore collapse to a single "v5/v7" column. If you intended v7 to represent a later, differentiated version, it was never saved — the copy was made byte-for-byte.

---

## 1. Section Map — What's Actually in v5/v7

| # | Section (line) | Heading | Role |
|---|---|---|---|
| 1 | §1 Hero (L986) | "You've built everything. Except this." | Identity hook + VSL frame + stat row |
| 2 | Marquee (L1040) | — | Scrolling proof band (6 client quotes) |
| 3 | §3 Problem (L1061) | "Three channels. All broken." | Pain framing (apps / IG / real life broken) |
| 4 | §? (L1141) | "Build your pipeline." | Mechanism 1 — channel fix |
| 5 | §? (L1230) | — | Messaging / chat simulation |
| 6 | §? (L1320) | "Turn matches into dates." | Mechanism 2 — conversion |
| 7 | §? (L1399) | "The system that makes it permanent." | Mechanism 3 — feedback loop (animated orbit) |
| 8 | About (L1528) | "I walked away from 200 million views." | Origin story (3rd-person) |
| 9 | Timeline (L1556) | "What your 90 days look like." | Week-by-week expectation |
| 10 | Results (L1598) | "These are not outliers." | 6 horizontal-scroll testimonial cards |
| 11 | Qualification (L1759) | "Is this for you?" | Fit / Not-fit checklist |
| 12 | FAQ (L1791) | "Your questions, answered." | 6 Q&As |
| 13 | Final CTA (L1828) | "Ready to have this area of your life handled?" | Close + "4 spots remaining" scarcity |
| 14 | Footer (L1850) | — | — |

---

## 2. Master 9-Section Flow — Comparison

Columns: **Present in v5/v7?** · **Quality 1–5** (vs. reference sites) · **Gap**.

| v9 Section | Present in v5/v7? | Quality (1–5) | Gap |
|---|---|---|---|
| **1. Hero / Identity Hook** | Yes (L986) | 4 | Strong identity hook ("You've built everything. Except this."), VSL slot, 4-stat credibility row, single CTA. Qualifier subhead works. Missing: explicit outcome promise in H1 (current H1 is identity-only; outcome is pushed to subhead). Reference sites lead with an **outcome** in H1 (consulting.com = service promise, 1% = "Get 2-3 Dates a Week", AI Insiders = "Greatest Opportunity of the Decade"). |
| **2. Credibility Anchor Strip** | Partial (embedded in hero stat row, L1016) | 3 | The 4-stat row (200M+ Views / 10+ Years / 1,000+ Private Clients / <5% Accepted) covers this partially. Reference sites (consulting.com) run a **separate, denser strip** of 6 metrics with delta indicators ("8.6M ↑ 20.4%"). Atlas has no delta framing and no logo bar (no branded publications / partners / podcast placements as visual trust). |
| **3. Origin / Why We Built This** | Yes (L1528, "About") | 3 | Present but **written in 3rd-person narrative**, not framed as "market is broken → here's why → we're the fix." Missing: market-gap framing (the "most dating advice is noise" inoculation), missing founder photo (placeholder only), and it sits *after* the mechanism sections — reference sites all place origin before mechanism for narrative order. |
| **4. The Mechanism / Pillars** | Split across 3 sections (L1141, L1320, L1399) | 2 | Mechanism is present **conceptually** but **not branded**. The offer foundation and brand-voice doc both specify capitalized proprietary names — *3 Part Pipeline*, *Conversion Blueprint*, *Feedback Layer*, *Atlas Network* — **none of these names appear on the page**. Reference sites brand their method aggressively (Quantum, Wingman, Image Studio, Photo Bank). This is the single biggest copy gap. v9 needs a unified **"The Atlas System"** pillar grid with 4 named pillars. |
| **5. Tier Ladder / Offer Stack** | ❌ Absent | 0 | **Completely missing.** Offer foundation specifies 3 tiers ($10K–$12K / $18K–$22K / $25K–$30K) with "for whom" taglines (90-day Private / 6-month Concierge / 12-month Private Client). Not surfaced anywhere. Consulting.com's tier ladder is one of its strongest conversion mechanics. |
| **6. Proof Wall** | Partial (L1040 marquee + L1598 results) | 3 | 6 testimonials present (Todd, Yaro, Spencer, Aakash, Ben, Hector), each with **named client + role + specific metric** (20 dates/30 days, 40+ matches/24 hrs, 10 dates/month 1, etc.) — this is strong. **Gaps:** (a) avatars are initial letters only, no photos; (b) no big stat block above the grid (revenue/client-count/acceptance-rate); (c) spec wants 8–12 testimonials, we have 6; (d) no disclaimer line. AI Insiders has 13 testimonials with bolded $ outcomes — we're under-indexed. |
| **7. Disqualifier / Filter** | Yes (L1759, "Is this for you?") | 3 | Present as side-by-side Fit/Not-fit grid. Voice matches Benjamin's brand (direct, not harsh). **Gap vs. reference:** 1% dating opens disqualifier with *"If you don't have your sh\*t together, this service is not for you."* — large type, identity-flipping, one punch. Atlas v5/v7 uses a utilitarian checklist layout. Not wrong, but softer than the reference pattern. |
| **8. Founder / Team Voice Close** | ❌ Absent | 0 | No signed letter. The About section (§8 above) is 3rd-person narrative, not a 1st-person "Much love," close with team photo grid. 1% dating's "Much love," + 6 team avatars is a **massive trust lift** at the bottom of the funnel — Atlas has female advisors + 6 coaches in the Atlas Network (per offer-foundation) and surfaces zero of them visually. |
| **9. Final CTA** | Yes (L1828) | 3 | Present. Headline "Ready to have this area of your life handled?" is on-brand (dry, understated — matches Benjamin's voice). Scarcity strip ("ENROLLMENT OPEN · 4 SPOTS REMAINING") is good. **Critical bug:** final CTA button uses `href="#"` (L1841) — clicking sends user to page-top, not to the Typeform. Must fire the `tf-apply-btn` popup or link to `#apply`/`#hero`. |
| **Vertical scroll narrative** (insert between §3 and §4) | ❌ Absent | 0 | The prompt explicitly calls this out as the **highest-converting pattern on 1% dating**. Atlas v5/v7 uses a horizontal auto-scroll card row instead. Todd is Atlas's obvious narrative subject (54-year-old retired investor, paying a matchmaker, got 20 dates in 30 days) — the story is handed to us. Structure: 6–10 stacked frames, one image + one caption each. **Must build in v9.** |
| **FAQ** | Yes (L1791) | 4 | 6 Q&As covering legitimacy, cost, time, guarantee, pickup-objection, age/divorce. Strong. Minor: the guarantee answer ("we've never had to honor it with a client who showed up") is buried in FAQ-#4 — belongs upstream in the offer/CTA region. |

---

## 3. Reference-Site Reference Panel (what we're borrowing from)

| Pattern | Source | What to borrow |
|---|---|---|
| Hero stat strip with 6 numbers + delta indicators | consulting.com | Separate credibility strip between hero and origin |
| 4-tier ladder with "for whom" tagline | consulting.com (Monetise / UpLevel / Quantum / Masterminds) | Direct mapping to Atlas's 3 tiers from offer-foundation |
| "Apply to Work With Us" × 4 instances | consulting.com | Single CTA verb+object, repeated 4+ times |
| Disqualifier opener in large type | 1% dating — "If you don't have your sh\*t together, this service is not for you." | Upgrade Atlas's Fit/Not-fit grid to lead with one punch line |
| Vertical scroll transformation narrative (7 frames) | 1% dating (Todd sequence) | **Build the Atlas Todd sequence** — same structure, Atlas's Todd (54, retired investor, matchmaker → 20 dates/30 days) |
| Signed founder close + team photo grid with "Much love," | 1% dating | Build Atlas version: signed letter from Benjamin + female advisor team + 6 coaches in Atlas Network |
| 13 quantified testimonials with bolded $ outcomes | AI Insiders | Upgrade Atlas's 6 cards to 8–12, photo-based, specific-outcome-bolded |
| Skepticism inoculation in hero-adjacent copy | AI Insiders ("without any technical experience, coding knowledge") | Atlas version: "without pickup lines, canned openers, or outsourcing your personality" |
| Provocative final H2 | consulting.com — "Ready to Build Something Disgustingly Profitable?" | ⚠️ **Do not copy directly** — off-brand for Benjamin. See §6 below. |
| Opportunity framing ("Greatest Opportunity of the Decade") | AI Insiders | ⚠️ **Skip** — off-brand for Atlas. Their scarcity frame is "less than 5% accepted" not "generational window." See §6. |

---

## 4. Psychological Hooks — Scoring v5/v7

| Hook | Score | Present where | Gap to close in v9 |
|---|---|---|---|
| **Opportunity framing** | 2/5 | Implicit in "4 spots remaining" scarcity strip | No generational/decade frame used (on-brand decision — see §6). Acceptable gap. |
| **Status/identity targeting** | 4/5 | "You've built everything," "27 or older," "professionally successful" | Add the "high-performing men" / "top 1% men" phrasing from brand-voice doc. |
| **Disqualification** | 4/5 | Fit / Not-fit grid + application-only framing | Sharpen opening line (see §3 pattern from 1% dating). |
| **Specific granular proof** | 5/5 | Named clients + specific metrics in marquee + 6 tinder cards | Industry best. Keep the specificity — add volume (6 → 10+). |
| **Dream-state visualization** | 2/5 | Text-only quotes, no screenshots, no photos, initial-letter avatars | **Biggest visual gap.** v9 needs: profile screenshots, match notifications, text threads, real client photos (or placeholders with clear `// COPY_TODO: photo`). |
| **Authority transfer** | 4/5 | "I walked away from 200M views" origin story | Strong. Could tie "I built this system for myself first" more explicitly. |
| **Skepticism inoculation** | 3/5 | FAQ-#1 "Is this legit? Most dating coaches aren't." | Move upstream — make it a visible section ("Most of what's taught is noise" style) not buried in FAQ. |
| **Mechanism naming** | 2/5 | Feature sections exist, none capitalized or branded | **Critical fix.** Add the 4 capitalized framework names (*3 Part Pipeline*, *Conversion Blueprint*, *Feedback Layer*, *Atlas Network*) from brand-voice doc. This alone will lift perceived proprietariness by a category. |
| **Loss aversion / early-mover** | 3/5 | "Every year you leave this untouched, the gap gets more expensive" (final CTA) | Only appears once. Seed it in a pre-CTA block earlier too. |
| **Provocative close** | 3/5 (but intentional) | "Ready to have this area of your life handled?" | **On-brand; do not make more provocative.** See §6. |

---

## 5. CRO Mechanics — Violations

| # | Violation | Severity | Line | Fix in v9 |
|---|---|---|---|---|
| V1 | **Broken final CTA.** `href="#"` scrolls to top instead of firing the Typeform popup. | **Critical** | L1841 | Make it a `tf-apply-btn` pointing to the real Typeform ID, or `href="#hero"`. |
| V2 | **Only 3 CTAs on the page.** Spec requires ≥4 (hero, post-proof, post-mechanism, post-disqualifier, final). | High | L1010, L1750, L1841 | Add CTA after mechanism (post-Feedback-Layer section) and after disqualifier. Minimum 5. |
| V3 | **No tier ladder at all.** Entire offer stack invisible on page. | High | — | Insert 3 tier cards from offer-foundation (Private / Concierge / Private Client), each with "for whom" tagline + 3–5 outcome bullets + same CTA. |
| V4 | **Testimonial avatars are initial letters**, not photos. | High | L1608–L1719 | Photo slots with `// COPY_TODO: photo` placeholders. Structure the card so a real photo drops in later. |
| V5 | **Only 6 testimonials.** Spec wants 8–12. | Medium | L1598 | Grid of 10 slots. Fill 6 with current Todd/Yaro/Spencer/Aakash/Ben/Hector content. Leave 4 as blank card placeholders with `// COPY_TODO: testimonial`. |
| V6 | **No founder letter / signed close / team photo grid.** | High | — | New section before Final CTA: signed letter from Benjamin + female advisor team grid + Atlas Network coaches. Placeholders for photos. |
| V7 | **No vertical scroll narrative.** Results use horizontal auto-scroll cards instead. | High | L1598 | Build Atlas Todd sequence — 7–8 stacked frames, one image + one caption per frame, mobile-first. Narrative arc: before (matchmaker failing) → profile rebuild → first date → volume scaling → today. |
| V8 | **Mechanism not branded.** Sections describe features in plain language. | High | L1141, L1320, L1399 | Replace "Build your pipeline / Turn matches into dates / The system that makes it permanent" with branded pillar grid labeled *The Atlas System*, with *3 Part Pipeline*, *Conversion Blueprint*, *Feedback Layer*, *Atlas Network* as 4 capitalized pillars. |
| V9 | **Guarantee buried in FAQ.** | Medium | L1810 | Surface the guarantee near the final CTA as a trust badge or line beneath the CTA button — "90-day guarantee: hit 1–3 dates/week or we keep working free." |
| V10 | **No skepticism inoculation section.** Only addressed in FAQ. | Medium | — | 1–2 line section before mechanism: "Most dating advice online is noise. This is a system, not tips. Here's what makes it different." |
| V11 | **Credibility strip is embedded in hero, not a separate section.** | Low | L1016 | Optional: split into separate strip after hero with logo bar or 6-stat grid. Debatable — Benjamin's voice prefers density over fragmentation. |
| V12 | **Origin section placed after mechanism.** Reference-site convention is origin → mechanism. | Low | L1528 | Move About section earlier, between Problem and Mechanism. |
| V13 | **Above-the-fold test:** at 390px viewport, hero H1 + subhead + VSL may push CTA below the fold. | Medium | L986–L1013 | Verify in v9 — outcome + qualifier + CTA must be visible without scroll at 390×844. |

---

## 6. Brand-Voice Protection Notes — Where v9 Should Diverge From the Framework

The 9-section framework is a template. Benjamin's voice (documented in `brand-voice.md`) rejects 3 framework patterns. **Do not blindly apply them.**

| Framework says | Benjamin's voice says | v9 decision |
|---|---|---|
| "Provocative final headline — e.g. 'Ready to Build Something Disgustingly Profitable?'" | Dry, matter-of-fact. Never oversells. Signature lines: "It's just math.", "That's the trap.", "You just show up to the dates." | **Keep** the current "Ready to have this area of your life handled?" or go even drier ("Ready to run the system?" / "Apply, or don't."). Do not force edginess. |
| "Opportunity framing — once-in-a-decade window" | Rejects hype. Scarcity framed through selectivity ("less than 5% accepted"), not urgency theater. | **Skip** generational/decade framing. Lean into selectivity as the scarcity mechanic. |
| "Status language like 'elite founders', 'high-performing men'" | Uses "high-performing men" ✓ but never "elite," "transformation," "journey," "mindset shift" | **Use** "high-performing men," "already crushing it," "your city and schedule." **Avoid** the banned vocabulary list in brand-voice.md. |

Also: the brand-voice doc specifies a **color palette** — base `#0a0a0a`, navy tints (`#0a0d1f`, `#08101c`, `#0d1128`), electric blue accent `#4F7EFF`, gold CTA `#C9A84C`. v5/v7 already runs a dark palette; v9 should explicitly adopt the gold-on-dark CTA button instead of the current white button (L1010).

---

## 7. Additional findings

- `page-foundation.md` and `copy-foundation.md` in the client folder are **unfilled templates** (the Landing Page Agent and Copywriter Agent never ran against this client). v9 can still ship without them, but the agent pipeline exists and could be re-run to ground copy decisions if you want them populated.
- Typeform ID is a placeholder (`data-tf-popup="YOUR_FORM_ID"`, L1010). v9 should inherit this as a `// COPY_TODO:` — I won't invent a Typeform ID.
- Benjamin photo is a broken image reference (`benjamin-photo.jpg`, L1534) with a text fallback. v9 will keep a placeholder slot.
- Client testimonial photos don't exist in the repo. v9 will use initial-avatar placeholders with a `// COPY_TODO: photo` comment per card — upgrading the current pattern to a photo-ready card structure (just with no photo data yet) so drop-in is trivial later.

---

## 8. v9 Build — Planned Section Order (for your review)

Proposed order (mapping master-flow to Atlas specifics):

1. **Hero** — H1 identity hook + outcome-bearing subhead + VSL slot + single CTA + 4-stat credibility row
2. **Credibility strip** — optional denser strip of numbers + (future) logo bar
3. **Skepticism inoculation** — 2-line framing: "Most dating advice is noise. This is a system."
4. **Origin / Why Built** — 1st-person, signed, moved up from current position
5. **Vertical scroll narrative** — Atlas Todd sequence, 7–8 frames, image + caption, mobile-first
6. **The Atlas System** — 4-pillar branded mechanism grid (*3 Part Pipeline*, *Conversion Blueprint*, *Feedback Layer*, *Atlas Network*)
7. **Tier Ladder** — 3 cards from offer-foundation, same CTA on each
8. **Proof Wall** — big stat block + 10-slot testimonial grid (6 filled + 4 placeholders)
9. **Disqualifier** — sharpened "Is this for you?" with 1% dating-style opener
10. **Founder / Team Close** — signed letter + team photo grid (placeholders)
11. **90-day Timeline** — kept from current (strong)
12. **FAQ** — kept, with guarantee moved upstream to §10/§13
13. **Final CTA** — fixed href, guarantee line underneath, gold button per brand palette
14. **Footer** — unchanged

CTAs land at: §1 hero, end of §6 (post-mechanism), end of §7 (tier cards trigger individually), end of §8 (post-proof), end of §9 (post-disqualifier), §13 final = **6 CTAs**, all single-verb ("Apply for Your Consultation →").

---

## 9. Open questions before I build

1. **Section order** — do you accept the §3 skepticism block and the origin moved before mechanism? Or keep origin late like current?
2. **Provocative final H2** — keep "Ready to have this area of your life handled?" (on-brand dry), or push drier ("Apply, or don't.") or go standard ("Ready to run the system?")? My recommendation: keep current.
3. **Tier ladder on-page** — offer-foundation has 3 tiers but also notes "Simpler alternative: single $15K flat." Do you want v9 to surface 3 tiers, or a single CTA to Apply and let the tier discussion happen on-call? Surfacing tiers is higher-CRO but less on-brand for consultative positioning.
4. **Atlas Todd sequence — I write the section copy as flagged?** You said build the frame + image placeholders + general section copy. Confirming: 7–8 frames, each with image placeholder + caption copy I draft, arc = matchmaker failing → profile rebuild → first dates → volume → today. Want a pre-written frame outline before I build it into the HTML, or am I good to ship it inline?
5. **Brand names for the 4 pillars** — brand-voice doc lists *3 Part Pipeline*, *Conversion Blueprint*, *Feedback Layer*, *Atlas Network*. Confirm those are the 4 pillars I brand in the mechanism grid. If you want different names / a 5th pillar, say now.
6. **CTA count target** — I'm planning 6. Minimum spec is 4. Happy with 6?

---

## 10. What happens next

**On your sign-off, I'll ship `index-v9.html`** in this directory (single static HTML, matching your "single file is fine" decision), plus `ATLAS_V9_CHANGELOG.md` documenting section-by-section gains with reference-site attribution and the plain-English top-3 writeup.

**I will not start v9 until you respond to §9 or say "go."**
