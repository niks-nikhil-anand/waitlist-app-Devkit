"use client";

export default function StickyCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const el = document.getElementById("email");
      if (el) el.focus();
    }, 400);
  };

  return (
    <div className="sticky-cta">
      <div className="info">
        <b>1,284</b> joined · 216 spots left
      </div>
      <button onClick={scrollToTop}>Join waitlist →</button>
    </div>
  );
}
