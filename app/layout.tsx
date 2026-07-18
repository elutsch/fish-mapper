import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AER Fishing Conditions",
    template: "%s | AER Fishing Conditions"
  },
  description:
    "On-water fishing condition verdicts for Southern Ontario, separated by powerboat, kayak, and canoe."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="site-header">
            <a className="menu-icon" href="/fishing" aria-label="Fishing map">
              <span />
              <span />
              <span />
            </a>
            <a className="brand" href="/fishing">
              AER Action
            </a>
            <a className="target-icon" href="/fishing" aria-label="Map overview" />
          </header>
          {children}
          <nav className="bottomnav" aria-label="Primary">
            <a className="navitem active" href="/fishing">
              Home
            </a>
            <a className="navitem" href="/fishing">
              Maps
            </a>
            <a className="navitem" href="/methods">
              Details
            </a>
            <a className="navitem" href="/disclaimer">
              Safety
            </a>
          </nav>
        </div>
      </body>
    </html>
  );
}
