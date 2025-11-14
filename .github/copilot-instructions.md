# ZonaEnglish Affiliate Landing Page

## Project Overview

Single-page affiliate ambassador recruitment website for ZonaEnglish.id. Built with vanilla HTML/CSS/JS (no build tools or frameworks). The page promotes an affiliate program where ambassadors earn commissions by sharing voucher codes on social media.

## Architecture

- **Static site**: Three files (`index.html`, `style.css`, `script.js`) served directly
- **No build process**: Files are production-ready as-is
- **Images**: Stored in `img/` directory (`logo-ze.png`, `program-affiliate.png`, `gabung-jadi-ze.png`)

## Design System

### Color Palette (CSS Variables in `:root`)

- `--bg` (#0c1c3a), `--bg2` (#102753): Dark blue gradient backgrounds
- `--card` (#12224a): Card/section backgrounds
- `--accent` (#f5c542), `--accent-soft` (#ffd86b): Yellow/gold CTAs and highlights
- `--text` (#e8eefc): Primary text color
- `--muted` (#9fb3d9): Secondary text/labels
- `--border`: rgba(255, 255, 255, 0.08) for subtle dividers

### Typography

- System font stack (no custom fonts): `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...`
- Responsive sizing: `clamp()` for titles (e.g., `clamp(28px, 4.6vw, 46px)`)

### Component Patterns

- **Buttons**: `.btn-primary` (gradient yellow CTA) and `.btn-ghost` (outline style)
- **Cards**: `.card` with glassmorphism effect (`rgba` backgrounds + borders)
- **Badges**: `.badge` for pills/tags (rounded with border)
- **Reveal animation**: `.reveal` class for scroll-in fade-up effect (triggered by `IntersectionObserver` in `script.js`)

## Key Sections (HTML Structure)

1. **Header**: Sticky nav with mobile hamburger toggle (`.nav-toggle`)
2. **Hero**: Two-column grid (`.hero-grid`) with CTA buttons and floating card
3. **Skema Penghasilan**: Commission table with tier breakdown
4. **Simulasi Penghasilan**: `.pill-grid` showing earning estimates
5. **Affiliate Starter Kit**: `.grid-3` feature cards
6. **Affiliate Cycle Tahunan**: `.timeline` with milestone dots
7. **CTA Daftar**: Registration form links (Google Form, WhatsApp)
8. **Footer**: Simple two-column info bar

## JavaScript Behavior

- **Scroll reveal**: `IntersectionObserver` watches `.reveal` elements, adds `.show` class when visible (threshold: 0.2)
- **Mobile nav**: `.nav-toggle` button toggles `.open` class on `.nav`; clicking nav links closes menu

## Responsive Breakpoints

- `@media (max-width: 900px)`: Single-column hero/CTA grid, mobile nav menu, 2-column pills
- `@media (max-width: 600px)`: Single-column pills, stacked footer

## Content Guidelines

- **Language**: Indonesian (bahasa Indonesia)
- **Tone**: Youth-focused, casual, benefit-driven ("Join Early. Earn Big.")
- **Commission structure**:
  - 1st referral: Rp100,000
  - 2-5: Rp200,000/person
  - 6-10: Rp250,000/person
- **Payment methods**: OVO, DANA, GoPay (2×24 hour turnaround)

## External Links

- Registration form: `https://forms.gle/` (placeholder, update with actual URL)
- WhatsApp contact: `https://wa.me/6282188080688`

## Development Workflow

- **No build step**: Edit files directly, refresh browser to test
- **Testing**: Verify mobile nav toggle, scroll animations, responsive grids at 900px/600px breakpoints
- **Images**: Add new images to `img/` and reference with relative paths (`img/filename.png`)

## Style Conventions

- **Spacing**: `margin: 0` reset on headings/paragraphs, use `gap` for flexbox/grid spacing
- **Animations**: Keep subtle (0.12-0.5s transitions); use `transform` for hover effects
- **Accessibility**: Include `aria-label` on interactive elements (e.g., `.nav-toggle`, tables)
