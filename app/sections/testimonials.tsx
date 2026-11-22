import { Divider } from "../components/Divider";
import { LinkButton } from "../components/LinkButton";
import { SectionMarker } from "../components/SectionMarker";

const testimonials = [
  {
    name: "Olena Kovalenko",
    role: "Founder, Forma Studio",
    text: "Veronika turned a vague idea into a clear, calm website. Our customers now find what they need in seconds.",
  },
  {
    name: "Max Bondar",
    role: "Product Manager, Clarity",
    text: "She asks the right questions before drawing anything. The result was a product our whole team could build with confidence.",
  },
  {
    name: "Daria Melnyk",
    role: "Marketing Lead, Northside",
    text: "Fast, thoughtful and easy to work with. The design system she delivered still keeps our pages consistent.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <Divider />
        <div className="py-8">
          <SectionMarker index="06" className="mt-8">TESTIMONIALS</SectionMarker>
          <h2 className="mt-6 font-display text-title">Kind words from clients.</h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 min-[1201px]:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name} className="flex flex-col gap-6 rounded-card border border-line bg-surface p-6">
                <blockquote className="font-body text-body">“{t.text}”</blockquote>
                <footer className="mt-auto">
                  <p className="font-display text-subheading">{t.name}</p>
                  <p className="mt-2 font-ui text-label text-ink-muted">{t.role}</p>
                </footer>
              </li>
            ))}
          </ul>
          <div className="mt-8 pb-8">
            <LinkButton href="#contact" size="lg">WRITE TO ME</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
