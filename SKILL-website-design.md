---
name: website-design
type: skill
status: active
tags: [website, design, html, mockup, landing-page-agent]
created: 2026-04-14
updated: 2026-04-14
related: [Skills/Marketing/Funnels/landing-page, Agents/landing-page]
---

# Website Design

## Goal
Generate a polished, single-page HTML website mockup for a client or prospect. The website matches the **buildinamsterdam.com** aesthetic: bold typography, off-white backgrounds, editorial grid layouts, terracotta accents. Used to pitch web design services or deliver a full website visual for a client.

> **Distinction from Landing Page:** The landing page skill (`Skills/Marketing/Funnels/landing-page/`) produces conversion-focused funnel pages — opt-ins, VSL pages, sales pages — with direct response copy frameworks. This skill produces a **full website mockup**: multi-section, editorial layout, brand-forward design. Use this when the request is "build a website" or "design a website," not when the request is "build a landing page."

---

## Inputs

### Primary: Client Knowledge File (Vault clients)
When a client slug is provided, load `Clients/{slug}/knowledge.md` and extract:
- `company_name` — business name
- `description` / about — used in About section
- `keywords` / services — services grid (comma-separated)
- `phone`, `email`, `address`, `city`, `state`, `country` — contact section
- `industry` / niche — drives Unsplash image queries
- `first_name`, `last_name`, `title` — owner attribution

### Secondary: Google Sheet (prospect/lead workflows)
- **Google Sheet URL** with prospect data
- **Row number** (1-indexed, excluding header)
- Optional: **worksheet name** (defaults to first sheet)

#### Expected Sheet Columns
| Column | Maps To |
|---|---|
| company_name / company | Business name (hero, nav, footer) |
| description / about | About section + hero subtitle |
| keywords / services | Services grid (comma-separated) |
| phone / phone_number | Contact section |
| email / contact_email | Contact section |
| address / full_address | Contact section |
| city, state, country | Location info |
| industry / category | Unsplash image search queries |
| first_name, last_name | Owner attribution |
| title / role | Owner role |

---

## Scripts
- `Scripts/website/read_prospect.py` — Read a single prospect row from Google Sheets → JSON
- `Scripts/website/generate_website.py` — Generate HTML website from prospect JSON

---

## Process

### When client slug is provided (vault client)
Load the client knowledge file and pass it as JSON directly to the generator:

```bash
# Extract fields from client knowledge file and pipe as JSON
python3 Scripts/website/generate_website.py < /path/to/client_data.json
```

Or build the JSON inline from the knowledge file fields and pipe it.

### When Google Sheet URL is provided (prospect workflow)

#### Step 1: Read prospect data
```bash
python3 Scripts/website/read_prospect.py \
  --url "SHEET_URL" \
  --row ROW_NUMBER \
  --worksheet "WORKSHEET_NAME"  # optional
```
Outputs JSON to stdout.

#### Step 2: Generate website
```bash
python3 Scripts/website/read_prospect.py \
  --url "SHEET_URL" --row 1 | \
python3 Scripts/website/generate_website.py
```
Or with a saved JSON file:
```bash
python3 Scripts/website/generate_website.py < prospect.json
```

### Step 3: Preview
```bash
open .tmp/website_*.html
```

---

## Outputs
- `.tmp/website_{company_slug}.html` — Self-contained HTML file, viewable in any browser
- All CSS is inline, images are external URLs (Unsplash or picsum.photos fallback)

---

## Environment
- `UNSPLASH_ACCESS_KEY` in `.env` — Required for stock photos. Falls back to curated picsum.photos placeholders if not set.
- Google OAuth credentials (`token.json` / `credentials.json`) — Required only for the Google Sheets input path.

---

## Design System
- **Fonts**: Inter (sans) + Cormorant Garamond (serif/italic)
- **Colors**: Off-white `#F2EFE6`, Black `#000`, White `#FFF`, Terracotta `#C38133`
- **Typography**: Bold uppercase display (clamp 56-110px), section heads (32-56px), serif italic body (18px)
- **Layout**: 50/50 split-screen hero (image collage left, large text right), 2-col about, services grid, wide image break, 2-col contact, footer
- **Buttons**: Bordered, uppercase, letter-spaced

---

## Edge Cases
- **Missing columns / fields**: Script uses sensible defaults (e.g., "Welcome" if no description)
- **No Unsplash key**: Falls back to picsum.photos placeholder images with varied dimensions per section
- **Long company names**: CSS handles wrapping with responsive `clamp()` font sizing
- **Special characters**: HTML-escaped in output
- **No client knowledge file**: Ask user for company name and key details, or provide the Google Sheet path
