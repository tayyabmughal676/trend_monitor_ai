# Brand Monitor AI - Implementation Plan

## Project Overview
**Goal:** Build a Gen-Z focused platform for brand monitoring across LLMs (Grok, Gemini, ChatGPT, etc.).
**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, DaisyUI/RadixUI, Lucide Icons.
**Vibe:** High energy, vibrant, "Gen-Z" aesthetics (gradients, glassmorphism, micro-interactions, dark mode default).

---

## Phase 1: Frontend Foundation & Design System (Current Focus)
*Goal: Establish the visual language and core layout.*

### Step 1.1: Project Configuration & Dependencies
- [x] Install UI libraries: `daisyui`, `lucide-react`, `framer-motion` (for animations), `clsx`, `tailwind-merge`.
- [x] Configure Tailwind for "Gen-Z" palette (Neon greens, electric purples, deep blacks).
- [x] Setup font (e.g., 'Outfit' or 'Space Grotesk' via `next/font`).

### Step 1.2: Global Styles & Layout
- [x] Create `globals.css` with custom CSS variables for gradients and glass effects.
- [x] Build a `MainLayout` component with a sticky, glassmorphism navbar and mobile-responsive footer.
- [x] Implement a "Noise" texture overlay or animated background for that raw/retro feel.

### Step 1.3: Reusable UI Components (The "Vibe" Kit)
- [x] **Buttons:** Neobrutalist or Glassmorphism styles with hover tilts.
- [x] **Cards:** High-contrast borders, glow effects on hover.
- [x] **Inputs:** Large text, floating labels, smooth focus transitions.
- [x] **Toast/Notifications:** Custom animated alerts.

---

## Phase 2: Core Frontend Pages (Static/Mocked)
*Goal: Build the visible pages with mocked data to visualize the UX.*

### Step 2.1: Landing Page (The "Hook")
- [x] **Hero Section:** Big bold typography, animated text ("What does ChatGPT think of *You*?"), 3D-style floating elements.
- [x] **Feature Showcase:** Scroll-triggered animations for features.
- [x] **Marquee:** Infinite scroll of supported LLM logos.

### Step 2.2: Authentication UI
- [x] **Login/Register:** Split screen or centered card with social login buttons (visual only for now).
- [x] **Onboarding:** A quick "Select your interests" or "Claim your brand" flow.

### Step 2.3: Dashboard & Brand Monitoring
- [x] **Dashboard Home:** Grid layout showing "Trending Brands" and "Your Watchlist".
- [x] **Search Interface:** A massive, central search bar (Google-style but cooler) to "Ask the AI".
- [x] **Brand Detail View:**
    - Sentiment Analysis Charts (using Recharts or similar, mocked data).
    - "LLM Says" cards: Mocked chat bubbles showing what Grok/Gemini might say.

---

## Phase 3: Backend & Logic (Future)
*Goal: Connect the frontend to real data and Auth.*

- [ ] Setup Supabase or NextAuth for Authentication.
- [ ] Database Schema (Users, Brands, Watchlists, Snapshots).
- [ ] API Routes for fetching brand data.
- [ ] Integration with LLM APIs (or scraping logic if APIs unavailable).
- [ ] Cron jobs for periodic monitoring.

---

## Phase 4: Polish & SEO
- [ ] Add Metadata for SEO.
- [ ] Performance optimization (Lighthouse check).
- [ ] PWA capabilities (optional).
