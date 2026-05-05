"use client";

import { useState } from "react";

export default function FinalCTASection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="final-cta">
      <div className="wrap">
        <h2>
          Be among the first to{" "}
          <span className="acc">launch faster.</span>
        </h2>
        <p>
          Join 1,284 makers waiting for May 12. Founding members keep their
          slot, lifetime Pro, and a direct line to the team.
        </p>
        <form
          className="ql-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input type="email" placeholder="you@studio.dev" required />
          <button type="submit">
            {submitted ? "You're in ✓" : "Join waitlist →"}
          </button>
        </form>
        <div
          style={{
            display: "flex",
            gap: 18,
            justifyContent: "center",
            flexWrap: "wrap",
            color: "var(--ql-mute)",
            fontSize: 13,
            fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono'), monospace",
            marginTop: 28,
            position: "relative",
          }}
        >
          <span>🔒 No spam, ever</span>
          <span>⏱ 1-click unsubscribe</span>
          <span>★ MIT licensed at launch</span>
        </div>
      </div>
    </section>
  );
}
