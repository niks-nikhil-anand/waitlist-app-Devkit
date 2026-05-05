# Waitlist App

**100% Free · Self-hosted · No subscriber limits · No monthly fees**

A viral referral waitlist with position tracking, email confirmation, social sharing, a live leaderboard, milestone rewards, and an admin dashboard. The same mechanics paid tools charge $15–50/month for — yours forever.

> Available free on [devkitmarket.com](https://devkitmarket.com)

---

## Features

**Core waitlist**
- Email signup with Zod validation and duplicate detection
- Real-time position tracking ("You are #47 of 312")
- Unique referral links per signup (`?ref=ABC123`)
- Queue jumping — each confirmed referral moves you up X positions
- Double opt-in email confirmation via Resend

**Viral mechanics**
- One-click share to Twitter/X, LinkedIn, WhatsApp, with pre-filled text
- Referral leaderboard (top 10, masked emails)
- Milestone rewards: 3 refs = Early Access, 10 = Founding Member, etc.
- Progress bar toward next reward tier

**Admin dashboard**
- Protected route with password gate
- Live stats: total signups, today's signups, confirmation rate, referral rate
- Sortable/filterable user table
- Accept or remove users manually
- One-click CSV export

**Anti-fraud**
- Disposable email blocking
- Self-referral prevention
- Honeypot field
- IP rate limiting (5 signups/IP/hour, configurable)
- Referrals only count after the referred user confirms their email

---

## Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Framework  | Next.js (App Router)                            |
| Styling    | Tailwind CSS + shadcn/ui                        |
| Database   | Supabase (PostgreSQL)                           |
| Email      | Resend + React Email                            |
| Validation | Zod                                             |
| Language   | TypeScript                                      |

---

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/your-username/waitlist-app-devkit.git
cd waitlist-app-devkit
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** in your Supabase dashboard
3. Run the migration file:

```bash
# Copy the contents of supabase/migrations/001_create_waitlist.sql
# and paste it into the Supabase SQL editor, then run it
```

4. Copy your project credentials from **Settings → API**:
   - Project URL
   - `anon` public key
   - `service_role` secret key

### 3. Set up Resend

1. Create a free account at [resend.com](https://resend.com)
2. Add and verify your sending domain
3. Create an API key from the dashboard

### 4. Configure environment variables

```bash
cp .env.example .env.local
```

Then fill in `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=waitlist@yourdomain.com

# App
NEXT_PUBLIC_APP_URL=https://yourproduct.com
ADMIN_PASSWORD=change-this-to-something-secure
```

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customization

All content and behavior is controlled from a single file: `config/site.ts`.

```ts
export const siteConfig = {
  name: "YourProduct",
  tagline: "One line about what you're building",
  url: "https://yourproduct.com",

  waitlist: {
    positionsPerReferral: 3,          // spots gained per referral
    requireEmailConfirmation: true,
    blockDisposableEmails: true,
    maxSignupsPerIpPerHour: 5,
  },

  milestones: [
    { count: 1,  name: "Queue Jump",      description: "Move up 3 positions" },
    { count: 3,  name: "Early Access",    description: "Get in before everyone else" },
    { count: 5,  name: "VIP Badge",       description: "Exclusive VIP status" },
    { count: 10, name: "Founding Member", description: "Lifetime founding perks" },
    { count: 25, name: "Inner Circle",    description: "Private community + founder access" },
  ],

  share: {
    twitter:  "I just joined the waitlist for {name}! Join me: {link}",
    linkedin: "Excited to be on the waitlist for {name}: {link}",
    whatsapp: "Hey! Join {name}'s waitlist through my link: {link}",
  },

  leaderboard: {
    enabled:    true,
    showTop:    10,
    maskEmails: true,   // shows a***@gmail.com
  },
};
```

---

## Project Structure

```
waitlist-app/
├── app/
│   ├── page.tsx                    # Landing page + signup form
│   ├── status/[id]/page.tsx        # Post-signup status + viral dashboard
│   ├── confirm/[token]/page.tsx    # Email confirmation handler
│   ├── admin/page.tsx              # Admin dashboard (protected)
│   └── api/
│       └── waitlist/
│           ├── join/route.ts       # POST — signup
│           ├── confirm/route.ts    # POST — email verification
│           ├── status/route.ts     # GET — position + referral stats
│           └── export/route.ts     # GET — CSV export (admin only)
├── components/
│   ├── sections/                   # Landing page sections
│   ├── waitlist/                   # Position card, share buttons, leaderboard
│   └── admin/                      # Stats cards, user table, export
├── emails/
│   ├── confirmation.tsx            # Verify email template
│   ├── welcome.tsx                 # Post-confirmation template
│   └── milestone.tsx               # Reward unlocked template
├── lib/
│   ├── supabase/                   # Browser, server, and admin clients
│   ├── resend.ts
│   ├── validators.ts               # Zod schemas
│   └── referral.ts                 # Code generation + validation
├── supabase/
│   └── migrations/
│       └── 001_create_waitlist.sql # Full database schema
├── config/
│   └── site.ts                     # All configurable content
└── .env.example
```

---

## Database Schema

Four tables: `waitlist`, `referral_log`, `milestones`, `admin_users`.

Key design decisions:
- `referral_code` — 8-char unique code, stored on every row
- `referred_by` — self-referencing FK to `referral_code`
- `status` — `pending | confirmed | accepted | removed`
- `position` — base position at signup; effective position is `position - (referral_count × positionsPerReferral)`
- A PostgreSQL trigger on `referral_log` auto-increments `referral_count` on the referrer's row
- Row Level Security enabled — public can insert and read only their own row; service role has full access

See the full schema in [supabase/migrations/001_create_waitlist.sql](supabase/migrations/001_create_waitlist.sql).

---

## API Reference

| Method | Route                     | Auth         | Description                        |
|--------|---------------------------|--------------|------------------------------------|
| POST   | `/api/waitlist/join`      | Public       | Sign up, get position + referral code |
| POST   | `/api/waitlist/confirm`   | Public       | Verify email via token             |
| GET    | `/api/waitlist/status`    | Public (own) | Position, referrals, milestones    |
| GET    | `/api/waitlist/export`    | Admin        | CSV of all entries                 |

**POST `/api/waitlist/join`**

```json
// Request
{ "email": "user@example.com", "ref": "A7kX9mPq" }

// Response 201
{
  "id": "uuid",
  "position": 47,
  "total": 312,
  "referral_code": "Bx9kL2mN",
  "message": "Check your email to confirm your spot!"
}
```

---

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Add all environment variables from `.env.example` in the Vercel project settings under **Settings → Environment Variables**.

That's it. Vercel handles the Next.js build automatically.

**Custom domain:** Set it in Vercel → **Settings → Domains**, then update `NEXT_PUBLIC_APP_URL` to match.

---

## Environment Variables

| Variable                        | Required | Description                              |
|---------------------------------|----------|------------------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`      | Yes      | Your Supabase project URL                |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes      | Supabase `anon` public key               |
| `SUPABASE_SERVICE_ROLE_KEY`     | Yes      | Supabase service role key (server only)  |
| `RESEND_API_KEY`                | Yes      | Resend API key for sending email         |
| `EMAIL_FROM`                    | Yes      | Verified sending address, e.g. `waitlist@yourdomain.com` |
| `NEXT_PUBLIC_APP_URL`           | Yes      | Your public URL (no trailing slash)      |
| `ADMIN_PASSWORD`                | Yes      | Password for `/admin` route              |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`  | No       | Plausible analytics domain               |
| `NEXT_PUBLIC_GA_ID`             | No       | Google Analytics measurement ID          |

---

## Pages

| Route              | Description                                                   |
|--------------------|---------------------------------------------------------------|
| `/`                | Landing page — hero, signup form, how it works, rewards       |
| `/status/[id]`     | Viral dashboard — position, referral link, share buttons, leaderboard |
| `/confirm/[token]` | Activates signup after email click                            |
| `/admin`           | Password-protected stats + user management                    |

---

## How the Referral Math Works

Each confirmed referral bumps the referrer's effective position by `positionsPerReferral` (default: 3).

```
effective_position = base_position - (referral_count × 3)
```

The K-factor (viral coefficient) is `share_rate × conversion_rate`. A 40% share rate with a 25% click-to-signup conversion gives K ≈ 0.30 — healthy organic growth that compounds over time. The status page is designed to maximize share rate: share buttons are the most prominent element, text is pre-filled, and position urgency drives action.

---

## License

MIT — use it, fork it, ship it, sell what you build with it.

---

## Credits

Built for [devkitmarket.com](https://devkitmarket.com) — free and paid kits for indie hackers and startup founders.
