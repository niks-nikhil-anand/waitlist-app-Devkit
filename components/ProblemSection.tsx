const XIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M3 3l8 8M11 3l-8 8" />
  </svg>
);

const pains = [
  {
    title: "Tired of setting up the same boilerplate again?",
    desc: "Auth, database, email, deploy config — the same scaffolding before you write line one of product code.",
  },
  {
    title: "SEO setup eating your week?",
    desc: "Metadata, OG images, sitemap, schema.org markup, robots.txt. By the time it's done you've forgotten what you were building.",
  },
  {
    title: "UI polish takes longer than the actual logic?",
    desc: "You spend a day on a button, a week on a dashboard table, and the killer feature ships looking like a hackathon project.",
  },
  {
    title: "Waitlist tools cost $15–50/month?",
    desc: "Per-subscriber pricing, locked branding, walled-off referral mechanics. You're paying rent on your own audience.",
  },
];

export default function ProblemSection() {
  return (
    <section className="ql-s">
      <div className="wrap">
        <div className="eyebrow">02 / The problem</div>
        <h2 className="ql-h">
          Shipping a launch page <span className="em">shouldn&apos;t</span> take
          a week.
        </h2>
        <p className="s-sub">
          Every founder&apos;s pre-launch playbook starts with the same wasted
          afternoon. Sound familiar?
        </p>

        <div className="problem-grid">
          {pains.map((pain, i) => (
            <div className="pain" key={i}>
              <div className="x">
                <XIcon />
              </div>
              <div>
                <h3>{pain.title}</h3>
                <p>{pain.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
