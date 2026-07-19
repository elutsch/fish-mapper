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
              <a href="/fishing">Map</a>
              <a href="/about">About</a>
              <a href="/methods">Methods</a>
              <a href="/disclaimer">Safety</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
