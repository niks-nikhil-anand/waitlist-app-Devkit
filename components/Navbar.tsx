"use client";

export default function Navbar() {
  const scrollToEmail = () => {
    const el = document.getElementById("email");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => el.focus(), 400);
    }
  };

  return (
    <nav className="ql-top">
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <a href="#" className="ql-logo">
          <span className="mark">◐</span>
          querylane
        </a>

        <span className="nav-counter">
          <span
            style={{
              width: 6,
              height: 6,
              background: "var(--ql-accent)",
              borderRadius: "50%",
              animation: "ql-pulse 1.6s ease-in-out infinite",
              display: "inline-block",
            }}
          />
          <b>1,284</b> joined ·{" "}
          <span style={{ color: "var(--ql-warn)" }}>216 spots left</span>
        </span>

        <button className="nav-cta" onClick={scrollToEmail}>
          <span>Join waitlist</span>
          <span className="arr">↗</span>
        </button>
      </div>
    </nav>
  );
}
