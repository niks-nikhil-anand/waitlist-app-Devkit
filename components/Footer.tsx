const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 1.2h3.7l-8 9.1L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.5-9.7L0 1.2h7.6l5.2 6.9zm-1.3 19.4h2L6.5 3.3H4.4z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.3 4.4A19 19 0 0015.7 3a13 13 0 00-.6 1.2 17.6 17.6 0 00-5.2 0A13 13 0 009.3 3 19 19 0 004.7 4.4 20 20 0 001.2 16a19 19 0 005.7 2.9 14 14 0 001.2-2 12 12 0 01-1.9-.9l.5-.4a13.4 13.4 0 0011.6 0l.5.4a12 12 0 01-1.9.9 14 14 0 001.2 2 19 19 0 005.7-2.9 20 20 0 00-3.5-11.6zM8.5 13.7c-1.1 0-2-1-2-2.3 0-1.2.9-2.2 2-2.2s2 1 2 2.3c0 1.2-.9 2.2-2 2.2zm7 0c-1.1 0-2-1-2-2.3 0-1.2.9-2.2 2-2.2s2 1 2 2.3c0 1.2-.9 2.2-2 2.2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="ql-footer">
      <div className="wrap">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <a href="#" className="ql-logo">
            <span className="mark">◐</span>
            querylane
          </a>

          <div style={{ display: "flex", gap: 8 }}>
            <a href="#" aria-label="Twitter" className="social-link">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="GitHub" className="social-link">
              <GitHubIcon />
            </a>
            <a href="#" aria-label="Discord" className="social-link">
              <DiscordIcon />
            </a>
          </div>

          <span className="copyright">
            © 2026 querylane · hello@querylane.dev
          </span>
        </div>
      </div>
    </footer>
  );
}
