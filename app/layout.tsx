import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bite Club",
    template: "%s | Bite Club"
  },
  description:
    "Bite Club gives Southern Ontario anglers on-water fishing condition verdicts by powerboat, kayak, and canoe."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="site-header">
            <a className="brand" href="/fishing" aria-label="Bite Club home">
              <img className="brand-logo" src="/brand/bite-club-logo.png" alt="Bite Club" />
            </a>
            <nav className="topnav" aria-label="Primary">
              <a href="/fishing">Home</a>
              <a href="/about">About</a>
              <a href="/faq">FAQ</a>
              <a href="/methods">Methods</a>
              <a href="/disclaimer">Safety</a>
            </nav>
            <details className="mobile-nav">
              <summary aria-label="Open navigation menu" title="Open navigation menu">
                <span className="menu-icon" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </summary>
              <nav className="mobile-nav-panel" aria-label="Mobile primary">
                <a href="/fishing">Home</a>
                <a href="/about">About</a>
                <a href="/faq">FAQ</a>
                <a href="/methods">Methods</a>
                <a href="/disclaimer">Safety</a>
              </nav>
            </details>
          </header>
          {children}
          <footer className="site-footer">
            <div className="footer-main">
              <div className="footer-brand">
                <a href="/fishing" aria-label="Bite Club home">
                  <img src="/brand/bite-club-logo.png" alt="Bite Club" />
                </a>
              </div>
              <nav className="footer-nav" aria-label="Footer">
                <a href="/fishing">Home</a>
                <a href="/about">About</a>
                <a href="/faq">FAQ</a>
                <a href="/methods">Methods</a>
                <a href="/disclaimer">Safety</a>
              </nav>
            </div>
            <div className="footer-bottom">
              <p>Conditions change quickly. Check official forecasts and assess the water before launching.</p>
              <span>&copy; 2026 Bite Club</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
