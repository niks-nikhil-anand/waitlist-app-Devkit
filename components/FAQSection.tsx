const PlusIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M6 1v10M1 6h10" />
  </svg>
);

const faqs = [
  {
    q: "When does it launch?",
    a: "v1.0 ships Tuesday, May 12, 2026. Founding-tier waitlist members get repo access 24 hours earlier on May 11.",
    open: true,
  },
  {
    q: "Is it really free?",
    a: 'Yes — MIT licensed, no gating, no “Lite” version. Use it on personal, commercial, and client projects. Fork it, modify it, sell what you build with it.',
    open: false,
  },
  {
    q: "Who is this for?",
    a: "Indie devs, founders, and small teams launching a Next.js product who want viral waitlist mechanics without subscribing to another SaaS. Comfortable with TypeScript and a cloud database.",
    open: false,
  },
  {
    q: "What's the tech stack?",
    a: "Next.js 14 (App Router), TypeScript, Tailwind, shadcn/ui, Supabase (Postgres + Auth), Resend + React Email, Zod validation. Deploys to Vercel in one click.",
    open: false,
  },
  {
    q: "Do I need to pay for hosting?",
    a: "Vercel, Supabase, and Resend all have generous free tiers. Most pre-launch waitlists never exceed them. You only pay if your launch genuinely scales.",
    open: false,
  },
  {
    q: "Can I customize everything?",
    a: (
      <>
        Yes. All copy, milestones, share text, theme tokens, and reward
        thresholds live in{" "}
        <span className="mono" style={{ fontSize: 13 }}>
          config/site.ts
        </span>
        . You own the source — change anything, anywhere.
      </>
    ),
    open: false,
  },
];

export default function FAQSection() {
  return (
    <section className="ql-s">
      <div className="wrap">
        <div className="eyebrow">09 / FAQ</div>
        <h2 className="ql-h">
          Common <span className="em">questions.</span>
        </h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details className="ql-q" key={i} open={faq.open}>
              <summary>
                <span>{faq.q}</span>
                <span className="toggle">
                  <PlusIcon />
                </span>
              </summary>
              <div className="ans">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
