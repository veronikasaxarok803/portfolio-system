const steps = [
  ["01", "Discover", "We talk about your goals, audience, and what your project needs to do."],
  ["02", "Define", "I map the structure and user flows to give the idea a strong foundation."],
  ["03", "Design", "I bring the direction to life, refining the details together with you."],
  ["04", "Deliver", "You get organized design files and clear guidance for development."],
];

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <p className="eyebrow">05 / HOW WE GET THERE</p>
        <h2 className="h-section h-process">A clear path from idea to launch.</h2>
        <ol className="steps">
          {steps.map(([n, title, text]) => (
            <li key={n} className="step">
              <span className="step-n">{n}</span>
              <h3 className="step-title">{title}</h3>
              <p className="step-text">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
