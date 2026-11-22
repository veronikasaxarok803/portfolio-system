import Image from "next/image";
import portrait from "@/assets/portrait.webp";

function Arrow() {
  return (
    <span className="font-body text-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

export default function Hero() {
  return (
    <section className="intro">
      <nav className="nav">
        <a className="signature" href="#top" aria-label="vh">
          <span className="font-ui text-logo">vh</span>
          <span className="cursor" />
        </a>
        <div className="links font-ui text-label">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
          <a className="btn btn-outline font-ui text-button" href="#contact">
            LET’S TALK <Arrow />
          </a>
        </div>
      </nav>

      <div className="hero">
        <div className="details font-ui text-label">
          <div className="marker">
            <span className="index">01</span>
            <span>INDEPENDENT UI/UX &amp; WEB DESIGNER</span>
          </div>
          <span className="text-ink-muted">PORTFOLIO / VOL. 2026</span>
        </div>

        <h1 className="font-display text-display">Veronika Haran</h1>
        <hr className="divider" />

        <div className="positioning">
          <div className="copy">
            <h2 className="font-display text-heading">
              Good ideas deserve <br />
              thoughtful design.
            </h2>
            <p className="font-body text-body">
              I’m a designer with 2 years of professional experience, known for my attention to detail and
              results-driven approach. I help startups and solo entrepreneurs turn their ideas into clean, modern
              websites and apps that work.
            </p>
            <div className="actions">
              <a className="btn btn-primary font-ui text-button" href="#work">
                EXPLORE MY WORK <Arrow />
              </a>
              <a className="btn btn-outline font-ui text-button" href="#contact">
                GET IN TOUCH <Arrow />
              </a>
            </div>
          </div>

          <figure className="card">
            <Image className="aspect-portrait" src={portrait} alt="Veronika Haran" priority sizes="340px" />
            <figcaption className="font-ui text-label">
              <span className="text-ink-muted">VERONIKA HARAN</span>
              <span>UI/UX &amp; WEB DESIGNER</span>
            </figcaption>
          </figure>
        </div>

        <div className="footnote font-ui text-label">
          <span>STRATEGY → STRUCTURE → INTERFACE</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>
    </section>
  );
}
