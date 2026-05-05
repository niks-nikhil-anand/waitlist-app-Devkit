"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const timer = setTimeout(() => {
      let n = 0;
      const step = () => {
        n += Math.ceil((target - n) / 16);
        setCount(n);
        if (n < target) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 200);
    return () => clearTimeout(timer);
  }, [target]);

  return <>{count.toLocaleString()}</>;
}

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="ql-hero">
      <div className="wrap">
        <span className="ql-pill">
          <span className="dot" />
          Launching Tue, May 12 · invite only
        </span>

        <h1>
          Build &amp; launch your Next.js product{" "}
          <span className="acc">in hours, not weeks.</span>
        </h1>

        <p className="sub">
          Pre-built UI, SEO baked in, deploy on Vercel in one click. Built for
          indie devs and small teams shipping their first $1.
        </p>

        <form
          className="ql-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            id="email"
            type="email"
            placeholder="you@studio.dev"
            required
          />
          <button type="submit">
            {submitted ? "You're in ✓" : "Join waitlist →"}
          </button>
        </form>

        <div className="hero-meta">
          <span>🔒 No spam — unsubscribe anytime</span>
          <span className="counter-pill">
            <span className="dot2" />
            <b>
              <AnimatedCounter target={1284} />
            </b>{" "}
            people already joined
          </span>
        </div>

        <div className="ql-avatars">
          <div className="stack">
            <div className="av">M</div>
            <div className="av">J</div>
            <div className="av">P</div>
            <div className="av">A</div>
            <div className="av">+</div>
          </div>
          <span className="meta-text">
            <span className="stars">★★★★★</span>
            &nbsp; trusted by makers at Stripe, Vercel, Linear
          </span>
        </div>
      </div>
    </section>
  );
}
