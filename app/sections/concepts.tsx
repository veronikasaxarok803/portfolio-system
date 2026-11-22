import { Abs } from "../components/abs";

function FormaConcept() {
  return (
    <div className="concept concept-forma aspect-cover" role="img" aria-label="Forma — website concept for an interior design studio">
      <div className="concept-screen" style={{ left: 30, top: 35, width: 536, height: 378, background: "var(--color-forma-surface)" }}>
        <Abs x={25} y={20} w={180} font="display" size={23} ls={-1.035} color="ink">forma.</Abs>
        <Abs x={278} y={30} w={240} font="ui" size={8} color="ink" pre>{"SPACES    STUDIO    CONTACT"}</Abs>
        <Abs x={25} y={65} w={486} h={1} bg="forma-rule" />
        <Abs x={25} y={92} w={350} font="ui" size={8} color="ink-muted">SPACES FOR EVERYDAY LIVING</Abs>
        <Abs x={25} y={120} w={440} font="display" size={52} ls={-2.34} lh={1} color="ink">
          Less noise.
          <br />
          More room.
        </Abs>
        <Abs x={25} y={243} w={300} size={11} color="ink-muted">
          Considered interiors. Lasting impressions.
          <br />
          A quieter way to feel at home.
        </Abs>
        <Abs x={25} y={307} w={153} h={35} bg="ink" />
        <Abs x={36} y={317} w={140} font="ui" size={8} color="forma-surface" pre>{"EXPLORE THE STUDIO  ↗"}</Abs>
        <Abs x={338} y={326} w={180} font="ui" size={8} color="ink-muted">DESIGN / SPACE / DETAIL</Abs>
      </div>
    </div>
  );
}

const projects = [
  ["Website redesign", "In progress", 255],
  ["Brand direction", "In review", 292],
  ["Product launch", "Planning", 329],
] as const;

function ClarityConcept() {
  return (
    <div className="concept concept-clarity aspect-cover" role="img" aria-label="Clarity — planning dashboard product concept">
      <div className="concept-screen" style={{ left: 30, top: 35, width: 536, height: 378, background: "var(--color-clarity-surface)" }}>
        <Abs x={0} y={0} w={116} h={378} bg="clarity-sidebar" />
        <Abs x={18} y={21} w={96} font="display" size={20} ls={-0.9} color="clarity-ink">clarity</Abs>
        <Abs x={18} y={75} w={96} font="ui" size={8} color="clarity-muted">WORKSPACE</Abs>
        <Abs x={10} y={101} w={96} h={27} bg="clarity-selected" />
        <Abs x={18} y={107} w={88} size={10} color="clarity-ink">Overview</Abs>
        <Abs x={18} y={148} w={95} size={10} color="clarity-muted">
          Projects
          <br />
          <br />
          Calendar
          <br />
          <br />
          Settings
        </Abs>
        <Abs x={137} y={26} w={368} font="display" size={18} ls={-0.81} lh={1.2} color="clarity-ink">A little focus. A lot of progress.</Abs>
        <Abs x={137} y={58} w={350} font="ui" size={8} color="clarity-muted">YOUR WEEK, AT A GLANCE</Abs>
        <Abs x={137} y={86} w={376} h={83} bg="clarity-summary" />
        <Abs x={151} y={97} w={180} font="ui" size={8} color="clarity-label">THIS WEEK</Abs>
        <Abs x={151} y={116} w={300} font="display" size={23} ls={-1.035} color="clarity-ink">12 tasks completed</Abs>
        <Abs x={137} y={193} w={250} font="display" size={15} ls={-0.675} color="clarity-ink">Your projects</Abs>
        <Abs x={137} y={229} w={370} font="ui" size={8} color="clarity-muted" pre>{"PROJECT                         STATUS"}</Abs>
        {projects.map(([name, status, top]) => (
          <div key={name}>
            <Abs x={137} y={top - 8} w={376} h={1} bg="clarity-rule" />
            <Abs x={137} y={top} w={226} size={10} color="clarity-ink">{name}</Abs>
            <Abs x={391} y={top} w={120} size={9} color="clarity-status">{status}</Abs>
          </div>
        ))}
      </div>
    </div>
  );
}

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
              <div className="concept-scroll"><FormaConcept /></div>
              <h3 className="concept-title font-display text-subheading">Forma — a quieter kind of web</h3>
              <p className="concept-kind font-ui text-label">WEB DESIGN / ART DIRECTION</p>
              <p className="concept-desc font-body text-body">An editorial website concept for an interior design studio.</p>
            </article>
            <article>
              <div className="concept-scroll"><ClarityConcept /></div>
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
