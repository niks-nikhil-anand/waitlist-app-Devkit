const ArrowIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M2 5h6M5 2l3 3-3 3" />
  </svg>
);

const steps = [
  {
    num: "1",
    title: "Join the waitlist",
    desc: "Drop your email. Confirm with one click. You'll get the download link the moment v1.0 ships on May 12.",
    arrow: false,
  },
  {
    num: "2",
    title: "Get early access",
    desc: "Repo invite goes to waitlist members 24h before public launch. Founding-tier signups get a lifetime Pro license.",
    arrow: true,
  },
  {
    num: "3",
    title: "Launch your product fast",
    desc: "Clone, configure, deploy. Run your own waitlist with viral mechanics — keep 100% of the revenue, branding, and data.",
    arrow: true,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="ql-s">
      <div className="wrap">
        <div className="eyebrow">05 / How it works</div>
        <h2 className="ql-h">
          Three steps to <span className="em">launch ready.</span>
        </h2>
        <p className="s-sub">
          From email submission to your audience checking their position. The
          only friction is yours to remove.
        </p>

        <div className="steps-grid">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              {s.arrow && (
                <span className="step-arr">
                  <ArrowIcon />
                </span>
              )}
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
