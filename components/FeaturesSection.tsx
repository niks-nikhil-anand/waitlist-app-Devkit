const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 2L3 14h7l-1 8 11-13h-7l1-7z" />
      </svg>
    ),
    title: "Instant setup",
    desc: "Clone, set two env vars, run dev. Live in under sixty minutes — README walks you through every step.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="6" /><path d="M16 16l4 4" /><path d="M11 8v3l2 2" />
      </svg>
    ),
    title: "SEO ready",
    desc: "Metadata API, OG image template, schema.org JSON-LD, sitemap and robots.txt. Lighthouse 100 out of the box.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Pre-built UI",
    desc: "shadcn/ui primitives styled to a coherent design system. Dark mode included; not bolted on.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" />
      </svg>
    ),
    title: "One-click Vercel deploy",
    desc: "Connect Supabase project, paste your Resend key, push. Zero infra to manage, zero cold starts.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12l4-4 4 4 4-4 4 4M3 18h18" />
      </svg>
    ),
    title: "Viral referral engine",
    desc: "Unique link per signup, queue-jump on confirmed referral, masked-email leaderboard. Fraud protection wired in.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" /><path d="M3 7l9 6 9-6" />
      </svg>
    ),
    title: "Email confirmation",
    desc: "Double opt-in via Resend, three React Email templates included, swap providers in <10 minutes.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" />
        <path d="M3 9h18M3 15h18M9 3v18" />
      </svg>
    ),
    title: "Admin dashboard",
    desc: "Stats, user table, accept/remove, CSV export. Password-protected, no extra auth setup.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "One-file config",
    desc: (
      <>
        All copy, milestones, share text, and theme tokens live in{" "}
        <span className="mono" style={{ fontSize: 12 }}>
          config/site.ts
        </span>
        .
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="ql-s">
      <div className="wrap">
        <div className="eyebrow">04 / Features</div>
        <h2 className="ql-h">
          Everything you need <span className="em">in the box.</span>
        </h2>
        <p className="s-sub">
          Eight production sections, two themes, one config file. Drop your copy
          and ship by lunch.
        </p>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feat" key={i}>
              <div className="icn">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
