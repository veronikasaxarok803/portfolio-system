export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div>
            <p className="font-ui text-label">07 / LET’S MAKE SOMETHING GOOD</p>
            <h2 className="contact-title font-display text-title">
              Your next idea.
              <br />
              Our next project.
            </h2>
            <p className="contact-lead font-body text-body">
              Have something in mind? Tell me a little about it.
              <br />
              Let’s find the right direction together.
            </p>
          </div>
          <form className="contact-form">
            <label className="field">
              <span className="field-label font-ui text-label">YOUR NAME</span>
              <input className="field-input font-body text-body" name="name" type="text" placeholder="How should I call you?" autoComplete="name" />
            </label>
            <label className="field">
              <span className="field-label font-ui text-label">EMAIL ADDRESS</span>
              <input className="field-input font-body text-body" name="email" type="email" placeholder="Where can I reach you?" autoComplete="email" />
            </label>
            <label className="field">
              <span className="field-label font-ui text-label">A LITTLE ABOUT YOUR PROJECT</span>
              <textarea className="field-input field-textarea font-body text-body" name="project" placeholder="What would you like to create?" />
            </label>
            <button className="contact-btn font-ui text-button" type="button">
              <span>LET’S TALK</span>
              <span className="font-body text-arrow" aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="font-ui text-logo">vh</span>
              <span className="cursor" />
              <span className="footer-copy font-ui text-label">© 2026 VERONIKA HARAN</span>
            </div>
            <p className="font-ui text-label text-ink-muted">THOUGHTFUL DESIGN. MEANINGFUL CONNECTIONS.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
