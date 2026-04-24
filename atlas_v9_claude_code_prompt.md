# Atlas v9 — Claude Code Build Brief

## ROLE

You are a senior conversion-focused web engineer + direct-response copy strategist. Your job is to audit the existing Atlas v5 and Atlas v7 minimal sites, then ship a new **Atlas v9** that absorbs the structural, copy, and CRO patterns proven in three reference sites:

- `consulting.com` (Iman Gadzhi / consulting firm)
- `onepercent.dating` (1% — high-ticket dating SaaS for men)
- `joininsiders.ai` (AI Insiders mastermind)

The framework below is the abstracted blueprint pulled from those three sites. Treat it as the spec.

---

## PART 1 — THE ABSTRACTED FRAMEWORK

### A. The 9-Section Master Flow

Every one of the three reference sites runs some version of this sequence. v9 should follow it:

1. **Hero / Identity Hook** — Bold outcome + who it's for + one CTA
2. **Credibility Anchor** — Numbers, year established, client count, named brands
3. **Origin / "Why We Built This"** — Frames the market as broken, positions us as the fix
4. **The Mechanism** — The proprietary system / pillars / feature stack (named, branded)
5. **Tier Ladder or Offer Stack** — 2–4 tiers, each tagged to a specific buyer stage
6. **Proof Wall** — Big stats + dense testimonials with *specific revenue numbers*
7. **Disqualifier / Filter** — "This isn't for everyone…" — flips desire via exclusivity
8. **Founder / Team Voice Close** — Personal letter, signed, with team faces
9. **Final CTA** — Provocative emotional headline + the same single CTA from the hero

The same single CTA repeats 3–5 times across the page. **Never** offer competing CTAs.

### B. The Psychological Hooks (use across all copy)

| Hook | What it does | Reference example |
|---|---|---|
| **Opportunity framing** | Positions the offer as a once-in-a-decade window | "Selling AI to businesses is the greatest opportunity of the last decade" |
| **Status / identity targeting** | Names the buyer they want to become | "1%", "elite founders", "high-performing men" |
| **Disqualification** | Filters audience → increases perceived value | "We don't work with everyone" / "If you don't have your sh*t together, this isn't for you" |
| **Specific granular proof** | Numbers, not adjectives | "$70K daily revenue 3x in 2024" beats "great results" |
| **Dream-state visualization** | Show the after-state literally | Phone notifications, revenue charts, match screens |
| **Authority transfer** | We did it ourselves, now we install it | "Built our own empire using the same systems" |
| **Skepticism inoculation** | Acknowledge market noise before pitching | "Most of what's taught online is noise" |
| **Mechanism naming** | Brand the method → makes it feel proprietary | "Quantum", "Wingman", "Image Studio", "Photo Bank" |
| **Loss aversion / early-mover** | "Don't miss this like you missed the last one" | "Don't make the mistakes I made — jump in while you're still early" |
| **Provocative close** | One memorable, slightly edgy line at the end | "Ready to Build Something Disgustingly Profitable?" |

### C. The Copy Progression (sentence-by-sentence cadence)

Each section flows in this micro-pattern:

`Bold claim → Specific proof → Named mechanism → Outcome the reader can picture → CTA`

- Headlines are **short, declarative, identity-loaded**. No hedging language.
- Subheadlines do the work of qualifying ("for X who want Y, without Z").
- Body copy stays in 1–2 sentence punches. No paragraph blocks.
- Every section ends with either a CTA, a stat, or a name (testimonial, mechanism, brand).

### D. The CRO Mechanics

- **Single offer, single CTA.** One conversion action repeated. No menu of choices.
- **Above-the-fold clarity:** outcome + qualifier + CTA visible without scroll.
- **Visual proof, not stock imagery.** Screenshots of dashboards, notifications, chat logs, revenue charts, real client photos.
- **Specific numbers always.** "$100M+ generated", "23,000 clients", "$400K launch in a week" — never round or vague.
- **Dense testimonial walls** with face + name + title + dollar-result quote. Aim for 8–12, not 3.
- **Mobile-first vertical storytelling.** 1% dating runs an image-by-image scroll story (Todd's transformation). v9 should have at least one section like this.
- **Repeated CTAs at: hero, after proof, after mechanism, after disqualifier, final.**
- **Tier cards** with a one-line "for whom" tag under each tier name (consulting.com pattern).
- **FAQ near the bottom** to absorb final objections.

### E. Visual / Design Tokens (consistent across all 3 references)

- Dark or near-black backgrounds with bright high-contrast accent
- Tight serif or geometric sans for headlines, clean sans for body
- Heavy use of real photography (founders, clients, product UI screenshots)
- Generous vertical spacing, never crowded
- Stat blocks with delta indicators (e.g. "8.6M ↑ 20.4%")
- Image carousels and grids for product/result proof

---

## PART 2 — AUDIT INSTRUCTIONS

Before writing any v9 code, do this:

1. Open the current `atlas-v5` and `atlas-v7-minimal` codebases.
2. Map each existing section in v5 and v7 against the **9-Section Master Flow** above. Output a comparison table:

   | v9 Section | Present in v5? | Present in v7? | Quality vs. reference (1–5) | Gap |
   |---|---|---|---|---|

3. For each existing section, score it against the **Psychological Hooks** table. Note which hooks are missing.
4. Flag every place v5/v7 violates the CRO mechanics above (multiple CTAs, vague claims, weak testimonials, no disqualifier, etc.).
5. Surface the audit as `ATLAS_V9_AUDIT.md` in the project root before generating any new code. Wait for my review if there's anything ambiguous.

---

## PART 3 — V9 BUILD SPEC

Once the audit is done and I've signed off, build `atlas-v9` as a new directory.

### Stack

- Match the existing stack of v7-minimal (don't re-platform unless I tell you to).
- Components should be modular — one component per section in the master flow.
- All copy should live in a single editable `content.ts` (or equivalent) file so I can rewrite without touching markup.

### Section-by-section build requirements

**1. Hero**
- Single H1 with the outcome promise (one sentence, ≤ 14 words)
- Subhead with the qualifier ("for X who want Y, without Z")
- One CTA button. No secondary CTA.
- Credibility line below CTA ("Established YYYY | N+ clients" pattern)
- Optional: 1–2 hero images or a short looping video

**2. Credibility Anchor strip**
- Logo bar OR stat ticker (3–6 numbers with delta indicators)
- No copy beyond labels

**3. Origin / Why Built**
- 2-paragraph "Why we built this" block
- Frame: market is broken → here's why → we're the fix
- Founder photo or team shot

**4. Mechanism / Pillars**
- 4–6 named pillars in a grid
- Each pillar gets: icon, branded name, one-line description
- This is where you brand the *method* (give it a name)

**5. Tier Ladder**
- 2–4 tier cards stacked or side-by-side
- Each card: tier name, one-line "for whom", 3–5 bullet outcomes, CTA
- The CTA on every card routes to the same single conversion action

**6. Proof Wall**
- Big stat block at top (4–8 numbers, the impressive ones)
- Below: 8–12 testimonials in a grid or carousel
- Each testimonial: photo, name, title/company, quote with a *specific dollar or % outcome bolded*
- Disclaimer line at the bottom

**7. Disqualifier**
- Short section, large type
- "This isn't for everyone. If you don't have X, this isn't for you."
- Then re-state who it *is* for, in punchy fragments

**8. Founder / Team Close**
- Signed letter, first-person
- "Much love," + team photo grid
- Re-states the opportunity and the qualifier

**9. Final CTA**
- Provocative H2 (think "Ready to build something disgustingly profitable?")
- Same CTA button
- One subtle alt route below for those not ready (e.g. "for X, [secondary thing] might have spots open")

### Mobile-first storytelling section (insert between sections 3 and 4)

Build at least one **vertical scroll narrative** modeled on the 1% dating "Todd" sequence: 6–10 stacked frames, each with a single image and a one-line caption that progresses a transformation story. This is the highest-converting pattern on their site and v5/v7 almost certainly don't have it.

### Copy rules (enforced)

- No hedging words ("might", "could help", "potentially")
- No round numbers — use specific ones (`$2.8M`, not `millions`)
- Every claim followed by either proof or a named mechanism
- All CTAs use the same verb + object across the entire page
- Testimonials must include a dollar figure, percentage, or specific outcome

### Acceptance criteria

Before you mark v9 done:

- [ ] All 9 master sections present and ordered correctly
- [ ] Single CTA repeated minimum 4 times, zero competing CTAs anywhere
- [ ] Vertical scroll narrative section built
- [ ] At least 8 testimonials with specific dollar/% outcomes bolded
- [ ] Disqualifier section present and uses identity-flipping language
- [ ] Founder letter signed with team photo grid
- [ ] All copy in `content.ts`, all components modular
- [ ] Lighthouse mobile score ≥ 90 for performance and accessibility
- [ ] Hero loads with outcome + qualifier + CTA visible without scroll on a 390px viewport
- [ ] `ATLAS_V9_CHANGELOG.md` documents every section gain over v5 and v7

---

## PART 4 — DELIVERABLES

1. `ATLAS_V9_AUDIT.md` — gap analysis vs. the framework (deliver first, wait for sign-off)
2. `atlas-v9/` — full new build
3. `ATLAS_V9_CHANGELOG.md` — what changed, why, and which reference site each pattern came from
4. Short Loom-style writeup at the bottom of the changelog: top 3 things v9 does that v5/v7 didn't, in plain English

---

## NOTES

- Don't touch v5 or v7 — v9 is a new directory. They stay as references.
- If you hit a copy decision you can't make from this brief, leave a `// COPY_TODO:` comment and flag it in the changelog. Don't invent claims or numbers.
- The whole point of this rebuild is that v5 and v7 are *minimal* — likely under-using proof, under-using disqualification, and missing the narrative storytelling pattern. Bias hard toward density, specificity, and emotional progression.
