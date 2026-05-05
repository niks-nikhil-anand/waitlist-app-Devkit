const CheckIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M2 5l2 2 4-5" />
  </svg>
);

const bullets = [
  {
    bold: "Self-hosted, MIT licensed.",
    text: "Your audience, your data, your code.",
  },
  {
    bold: "Built-in viral mechanics.",
    text: "Referral links, leaderboards, milestone rewards out of the box.",
  },
  {
    bold: "Production-grade by default.",
    text: "Disposable email blocking, IP rate limits, anti-fraud honeypots.",
  },
  {
    bold: "Deploy in <60 minutes.",
    text: "Connect Supabase, add Resend key, push to Vercel.",
  },
];

export default function SolutionSection() {
  return (
    <section className="ql-s">
      <div className="wrap">
        <div className="solution-grid">
          <div>
            <div className="eyebrow left">03 / The solution</div>
            <h2 className="ql-h">
              A kit, <span className="em">not</span> another platform.
            </h2>
            <p className="s-sub">
              Querylane is a self-hosted Next.js codebase you clone once and own
              forever. Referrals, leaderboards, milestones, admin dashboard —
              all wired up. No subscription, no subscriber caps.
            </p>
            <ul className="solution-bullets">
              {bullets.map((b, i) => (
                <li key={i}>
                  <span className="ck">
                    <CheckIcon />
                  </span>
                  <div>
                    <b>{b.bold}</b>{" "}
                    <span dangerouslySetInnerHTML={{ __html: b.text }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="product-mockup">
            <div className="mockup-bar">
              <span />
              <span />
              <span />
              <div className="url">querylane.dev/status/ql_m48k</div>
            </div>
            <div className="mockup-body">
              <div className="mock-pos">
                <div className="lbl">Your position</div>
                <div className="num">#44</div>
                <div className="of">
                  of <b>312</b> · moved up 3 ↑
                </div>
              </div>
              <div className="mock-card">
                <div className="lbl">
                  <span>Milestones</span>
                  <b>3 / 5</b>
                </div>
                <div className="mock-prog">
                  <div className="mock-prog-fill" />
                </div>
                <div className="mock-share">
                  <span className="b">X</span>
                  <span className="b">in</span>
                  <span className="b">wa</span>
                  <span className="b">↗</span>
                </div>
              </div>
              <div className="mock-card">
                <div className="lbl">
                  <span>Top referrers</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    fontSize: 11,
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>1. m••••@stripe.com</span>
                    <span
                      style={{
                        color: "var(--ql-accent)",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      47
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>2. j••••••@vercel.com</span>
                    <span
                      style={{
                        color: "var(--ql-accent)",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      31
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      background: "var(--ql-accent-soft)",
                      padding: "3px 5px",
                      margin: "0 -5px",
                      borderRadius: 4,
                    }}
                  >
                    <span>12. you</span>
                    <span
                      style={{
                        color: "var(--ql-accent)",
                        fontFamily: "var(--font-jetbrains-mono)",
                      }}
                    >
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
