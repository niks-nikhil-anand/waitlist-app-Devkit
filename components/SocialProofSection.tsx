const stats = [
  { num: "1,284", lbl: "Devs on waitlist" },
  { num: "★ 4.9", lbl: "Avg. rating" },
  { num: "28", lbl: "Companies repping" },
  { num: "216", lbl: "Founding slots left" },
];

const quotes = [
  {
    stars: "★★★★★",
    body: (
      <>
        <span className="em">
          &ldquo;Got more signups in three days than my last waitlist got in a
          month.&rdquo;
        </span>{" "}
        The referral system is genuinely the difference.
      </>
    ),
    av: "M",
    avColor: undefined,
    name: "Mira Okafor",
    role: "Founder · ledgerline.dev",
  },
  {
    stars: "★★★★★",
    body: (
      <>
        I was paying $39/mo to a SaaS for the same features.{" "}
        <span className="em">
          Got the kit, deployed in an hour, cancelled the subscription.
        </span>
      </>
    ),
    av: "J",
    avColor: "oklch(0.72 0.16 245)",
    name: "Jonas Reinhardt",
    role: "Eng · stack/lab",
  },
  {
    stars: "★★★★★",
    body: (
      <>
        The admin dashboard alone is worth it.{" "}
        <span className="em">It feels like a product, not a template.</span>
      </>
    ),
    av: "P",
    avColor: "oklch(0.82 0.16 80)",
    name: "Priya Anand",
    role: "Indie · paperplane.studio",
  },
];

export default function SocialProofSection() {
  return (
    <section className="ql-s proof-band">
      <div className="wrap">
        <div className="eyebrow">06 / Credibility</div>
        <h2 className="ql-h">
          Built by developers, <span className="em">for developers.</span>
        </h2>
        <p className="s-sub">
          Early traction from indie hackers, founders, and engineers across the
          makers&apos; community.
        </p>

        <div className="proof-stats">
          {stats.map((s, i) => (
            <div className="proof-stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="quotes-grid">
          {quotes.map((q, i) => (
            <div className="quote" key={i}>
              <div className="stars">{q.stars}</div>
              <blockquote>{q.body}</blockquote>
              <div className="author">
                <div
                  className="av"
                  style={q.avColor ? { background: q.avColor } : undefined}
                >
                  {q.av}
                </div>
                <div>
                  <div className="nm">{q.name}</div>
                  <div className="rl">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
