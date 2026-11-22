export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow eyebrow-ink">06 / LET’S MAKE SOMETHING GOOD</p>
            <h2 className="contact-title">
              Your next idea.
              <br />
              Our next project.
            </h2>
            <p className="contact-lead">
              Have something in mind? Tell me a little about it.
              <br />
              Let’s find the right direction together.
            </p>
          </div>
          <form className="contact-form">
            <label className="field">
              <span className="field-label">YOUR NAME</span>
              <input className="field-input" name="name" type="text" placeholder="How should I call you?" autoComplete="name" />
            </label>
            <label className="field">
              <span className="field-label">EMAIL ADDRESS</span>
              <input className="field-input" name="email" type="email" placeholder="Where can I reach you?" autoComplete="email" />
            </label>
            <label className="field">
              <span className="field-label">A LITTLE ABOUT YOUR PROJECT</span>
              <textarea className="field-input field-textarea" name="project" placeholder="What would you like to create?" />
            </label>
            <button className="contact-btn" type="button">
              <span>LET’S TALK</span>
              <span className="contact-btn-arrow" aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="footer-sig">vh</span>
              <span className="cursor" />
              <span className="footer-copy">© 2026 VERONIKA HARAN</span>
            </div>
            <p className="footer-note">THOUGHTFUL DESIGN. MEANINGFUL CONNECTIONS.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
