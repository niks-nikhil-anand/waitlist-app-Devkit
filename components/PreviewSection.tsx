const demoRows = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
    title: "Email confirmation",
    desc: "Double opt-in via Resend",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12l4-4 4 4 4-4 4 4M3 18h18" />
      </svg>
    ),
    title: "Referral tracking",
    desc: "Auto queue-jump on confirmed signup",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="14" width="5" height="7" />
        <rect x="9.5" y="9" width="5" height="12" />
        <rect x="16" y="4" width="5" height="17" />
      </svg>
    ),
    title: "Public leaderboard",
    desc: "Top 10 referrers, email masked",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Anti-fraud",
    desc: "Disposable email + rate limit + honeypot",
  },
];

export default function PreviewSection() {
  return (
    <section className="ql-s">
      <div className="wrap">
        <div className="eyebrow">07 / What you&apos;ll get</div>
        <h2 className="ql-h">
          A working product, <span className="em">not screenshots.</span>
        </h2>
        <p className="s-sub">
          Every screen below ships ready to deploy. No &ldquo;coming soon&rdquo;
          stubs, no half-built features.
        </p>

        <div className="demo-frame">
          <div className="mockup-bar">
            <span />
            <span />
            <span />
            <div className="url">querylane.dev/admin</div>
          </div>
          <div className="demo-content">
            <div className="demo-left">
              <h4>
                Admin <span className="em">that doesn&apos;t suck.</span>
              </h4>
              <p>
                Search, filter, accept, remove, export — every action one click
                away. Dark mode by default.
              </p>
              <div className="stat-row">
                <div>
                  <div className="v">312</div>
                  <div className="k">Total</div>
                </div>
                <div>
                  <div className="v">28</div>
                  <div className="k">Today</div>
                </div>
                <div>
                  <div className="v">89%</div>
                  <div className="k">Confirmed</div>
                </div>
              </div>
            </div>
            <div className="demo-right">
              {demoRows.map((row, i) => (
                <div className="demo-row" key={i}>
                  <div className="ico">{row.icon}</div>
                  <div className="body">
                    <b>{row.title}</b>
                    <span>{row.desc}</span>
                  </div>
                  <span className="tag">live</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
