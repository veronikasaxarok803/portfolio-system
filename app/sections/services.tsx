const services = [
  {
    n: "01",
    title: "Web design",
    text: "Distinctive websites that communicate clearly and guide people to the next step.",
    tags: "LANDING PAGES / CORPORATE WEBSITES",
  },
  {
    n: "02",
    title: "UI/UX design",
    text: "Intuitive digital experiences, built around real people and the way they work.",
    tags: "USER FLOWS / WIREFRAMES / INTERFACES",
  },
  {
    n: "03",
    title: "Design systems",
    text: "A consistent visual language that keeps your product clear as it grows.",
    tags: "UI KITS / COMPONENTS / DESIGN GUIDELINES",
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-inner section-rule services">
          <div className="services-intro">
            <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>
            <h2 className="h-section h-services">
              Design with
              <br />
              a purpose.
            </h2>
            <p className="services-lead">
              From the first question to the final screen.
              <br />
              Thoughtful design at every step.
            </p>
          </div>
          <ol className="service-list">
            {services.map((s) => (
              <li key={s.n} className="service">
                <span className="service-n">{s.n}</span>
                <div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-text">{s.text}</p>
                  <p className="service-tags">{s.tags}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
