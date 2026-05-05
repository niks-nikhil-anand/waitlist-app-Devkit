const perks = [
  {
    featured: true,
    ribbon: "FOUNDING",
    ico: "⚡",
    title: "24h early access",
    desc: "Repo invite a full day before public launch. Beat everyone else to the import.",
  },
  {
    featured: false,
    ribbon: null,
    ico: "∞",
    title: "Lifetime Pro license",
    desc: "Every future Pro feature, free, forever. Auth Boilerplate. Admin Dashboard. SaaS Pro.",
  },
  {
    featured: false,
    ribbon: null,
    ico: "★",
    title: "Founding member badge",
    desc: "Permanent profile flair on the public leaderboard. The receipts you'll show in two years.",
  },
  {
    featured: false,
    ribbon: null,
    ico: "◆",
    title: "Direct line to the team",
    desc: "Private Discord channel. Roadmap voting. We actually ship the things you ask for.",
  },
];

export default function IncentiveSection() {
  return (
    <section className="ql-s incentive-section">
      <div className="wrap">
        <div className="eyebrow">08 / Why now</div>
        <h2 className="ql-h">
          Founding members get <span className="em">the real deal.</span>
        </h2>
        <p className="s-sub">
          First 500 signups unlock perks that won&apos;t exist after launch. We
          mean it.
        </p>

        <div className="incentives">
          {perks.map((p, i) => (
            <div className={`incentive${p.featured ? " featured" : ""}`} key={i}>
              {p.ribbon && <span className="ribbon">{p.ribbon}</span>}
              <div className="ico">{p.ico}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="slots-bar">
          <div className="meta">
            <span>founding slots filling</span>
            <span>
              <b>284 / 500</b> claimed · 216 left
            </span>
          </div>
          <div className="slots-prog">
            <div className="slots-prog-fill" />
          </div>
        </div>
      </div>
    </section>
  );
}
