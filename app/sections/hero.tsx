import Image from "next/image";
import portrait from "@/assets/portrait.webp";

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

export default function Hero() {
  return (
    <div className="hero-bg">
      <section className="intro">
        <nav className="nav">
          <a className="signature" href="#top" aria-label="vh">
            <span>vh</span>
            <span className="cursor" />
          </a>
          <div className="links">
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
            <a className="btn btn-outline" href="#contact">
              LET’S TALK <Arrow />
            </a>
          </div>
        </nav>

        <div className="hero">
          <div className="details">
            <div className="marker">
              <span className="index">01</span>
              <span className="text-accent">INDEPENDENT UI/UX &amp; WEB DESIGNER</span>
            </div>
            <span className="text-ink-muted">PORTFOLIO / VOL. 2026</span>
          </div>

          <h1 className="name">Veronika Haran</h1>
          <hr className="divider" />

          <div className="positioning">
            <div className="copy">
              <h2>
                Good ideas deserve <br />
                thoughtful design.
              </h2>
              <p>
                I’m a designer with 2 years of professional experience, known for my attention to
                detail and results-driven approach. I help startups and solo entrepreneurs turn
                their ideas into clean, modern websites and apps that work.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#work">
                  EXPLORE MY WORK <Arrow />
                </a>
                <a className="btn btn-outline" href="#contact">
                  GET IN TOUCH <Arrow />
                </a>
              </div>
            </div>

            <figure className="card">
              <Image src={portrait} alt="Veronika Haran" priority sizes="342px" />
              <figcaption>
                <span className="text-ink-muted">VERONIKA HARAN</span>
                <span className="text-accent">UI/UX &amp; WEB DESIGNER</span>
              </figcaption>
            </figure>
          </div>

          <div className="footnote">
            <span>STRATEGY → STRUCTURE → INTERFACE</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>
    </div>
  );
}
