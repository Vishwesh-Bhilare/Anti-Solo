# 🚀 ANTI-SOLO — No One’s Left Behind
## (File structure and overall layouts are prone to changes)

**ANTI-SOLO** is a production-ready MVP that fixes one of hackathons’ biggest problems: **solo participants getting excluded**.  
It uses **AI-powered, merit-based matching** to help individuals—especially introverts and students from lesser-known colleges—find the right teams, fast.

> Built to convert. Built to scale. Built to include.

---

## 🎯 What This MVP Does

- Eliminates solo exclusion in hackathons  
- Forms **balanced teams** using real skill data  
- Rewards reliability with a **Social Credit system**  
- Works across colleges, backgrounds, and experience levels  

---

## ✨ Core Highlights

- 🎨 **Ocean Breeze Design System** — clean light theme, blue-first UI
- 📊 **Data-driven landing page** with live stats & social proof
- 🧠 **AI-enhanced skill profiles** (GitHub + LeetCode)
- 🤝 **Smart team matching** based on skill gaps & compatibility
- 🏆 **Social Credit System** to prevent ghosting
- ⚡ **Next.js 14 + Supabase + Vercel** production stack

---

## 🧱 Tech Stack

| Layer        | Tech |
|-------------|------|
| Framework   | Next.js 14 (App Router) |
| Language    | TypeScript |
| Styling     | Tailwind CSS (Custom Design System) |
| Auth        | Supabase Auth (GitHub OAuth + Email) |
| Database    | Supabase PostgreSQL |
| AI          | Gemini API |
| Analytics   | Vercel Analytics |
| Deployment  | Vercel (Edge Functions) |

---

## 🎨 Design System (Ocean Breeze)

- **Primary:** `#3B82F6`
- **Secondary:** `#1E40AF`
- **Accent:** `#60A5FA`
- **Background:** `#FFFFFF`
- **Surface:** `#F8FAFC`
- **Font:** Inter

Built for clarity, speed, and trust.

---

## 📱 MVP Feature Breakdown

### Phase 1 — Landing Page
- Hero section with live metrics
- How-it-works (3-step flow)
- Featured hackathons grid
- Testimonials carousel (JSON-driven)
- Conversion-focused CTAs

### Phase 2 — Core Product
- Supabase authentication
- Profile setup with GitHub / LeetCode
- AI skill extraction & visualization
- Event discovery & filtering
- Team browsing & join requests

### Phase 3 — Polish & Data
- Social Credit visualization
- Real-time stat updates
- Mock → real data switch
- Responsive + performance tuning
- Analytics integration

---

## 📊 Example Metrics Shown on Landing Page

- **2,847** developers matched  
- **94%** solo inclusion rate  
- **4.7★** user satisfaction  
- **63%** cross-college teams  

All metrics are JSON-driven and ready for real data.

---

## 🧩 Project Structure

```bash
anti-solo/
├── app/
│   ├── (landing)/
│   ├── (auth)/
│   ├── dashboard/
│   └── api/
├── components/
│   ├── layout/
│   ├── ui/
│   ├── sections/
│   └── features/
├── lib/
│   ├── supabase/
│   ├── mockData/
│   └── utils/
├── types/
└── public/
```

---

## Social Credit System (Key Differentiator)

- Tracks reliability & participation
- Visible on profiles and team cards
- Discourages ghosting
- Rewards consistent contributors
- Tiers:
  - PLATINUM → GOLD → SILVER → BRONZE → PROVISIONAL

---
 
## Philosophy

```txt
Hackathons should reward skill and effort — not existing networks.
```

ANTI-SOLO exists to level the playing field.
