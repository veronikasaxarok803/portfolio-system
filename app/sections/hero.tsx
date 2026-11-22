import portrait from "@/assets/portrait.webp";
import { Divider } from "../components/Divider";
import { LinkButton } from "../components/LinkButton";
import { Navigation } from "../components/Navigation";
import { PortraitCard } from "../components/PortraitCard";
import { SectionMarker } from "../components/SectionMarker";
import { Signature } from "../components/Signature";

const navItems = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Hero() {
  return (
    <section id="top" className="intro">
      <div className="flex h-16 items-center justify-between">
        <Signature />
        <Navigation
          items={navItems}
          action={
            <LinkButton variant="secondary" href="#contact">
              LET’S TALK
            </LinkButton>
          }
        />
      </div>

      <div className="flex flex-col gap-6 pt-10 md:pt-16">
        <div className="flex flex-col items-start justify-between gap-3 font-ui text-label md:flex-row md:items-center">
          <SectionMarker index="01">INDEPENDENT UI/UX &amp; WEB DESIGNER</SectionMarker>
          <span className="text-ink-muted">PORTFOLIO / VOL. 2026</span>
        </div>

        <h1 className="font-display text-display">Veronika Haran</h1>
        <Divider />

        <div className="flex flex-col justify-between gap-10 pt-2 lg:flex-row lg:gap-20">
          <div className="flex max-w-201 flex-col items-start gap-6">
            <h2 className="font-display text-heading">
              Good ideas deserve <br />
              thoughtful design.
            </h2>
            <p className="max-w-188 font-body text-body text-ink-muted">
              I’m a designer with 2 years of professional experience, known for my attention to detail and
              results-driven approach. I help startups and solo entrepreneurs turn their ideas into clean, modern
              websites and apps that work.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <LinkButton href="#work">EXPLORE MY WORK</LinkButton>
              <LinkButton variant="secondary" href="#contact">
                GET IN TOUCH
              </LinkButton>
            </div>
          </div>

          <PortraitCard
            image={portrait}
            imageAlt="Veronika Haran"
            name="VERONIKA HARAN"
            role="UI/UX & WEB DESIGNER"
            priority
            className="max-w-85"
          />
        </div>

        <div className="flex flex-col justify-between gap-2 pt-6 font-ui text-label text-ink-muted md:flex-row">
          <span>STRATEGY → STRUCTURE → INTERFACE</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>
    </section>
  );
}
