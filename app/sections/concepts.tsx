import Image from "next/image";
import forma from "@/assets/forma-concept.png";
import clarity from "@/assets/clarity-concept.png";

export default function Concepts() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-inner section-rule concepts">
          <p className="font-ui text-label">02 / SELECTED CONCEPTS</p>
          <div className="concepts-head">
            <div>
              <h2 className="font-display text-title">Ideas made tangible.</h2>
              <p className="lead font-body text-body">A glimpse into my approach to websites and digital products.</p>
            </div>
            <p className="tag-note font-ui text-label">SELF-INITIATED EXPLORATIONS</p>
          </div>

          <div className="concept-grid">
            <article>
              <Image src={forma} alt="Forma — website concept for an interior design studio" className="aspect-cover w-full" />
              <h3 className="concept-title font-display text-subheading">Forma — a quieter kind of web</h3>
              <p className="concept-kind font-ui text-label">WEB DESIGN / ART DIRECTION</p>
              <p className="concept-desc font-body text-body">An editorial website concept for an interior design studio.</p>
            </article>
            <article>
              <Image src={clarity} alt="Clarity — planning dashboard product concept" className="aspect-cover w-full" />
              <h3 className="concept-title font-display text-subheading">Clarity — room to focus</h3>
              <p className="concept-kind font-ui text-label">PRODUCT DESIGN / UI EXPLORATION</p>
              <p className="concept-desc font-body text-body">A workspace concept that brings projects and priorities together.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
