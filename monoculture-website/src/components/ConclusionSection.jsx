export default function ConclusionSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame conclusion-frame">
        <span className="section-kicker reveal">Conclusion</span>
        <h2 className="reveal">The biggest finding so far is data feasibility.</h2>
        <p className="reveal">
          A perfect same-local public dataset was not available, so the project moved toward the
          strongest available China-based crop-specific datasets instead of forcing weak data.
        </p>
        <p className="reveal conclusion-close">
          This makes the project more honest and realistic. The next step is to evaluate usable
          datasets, keep each crop dataset internally consistent, and compare soil-health patterns
          and risk pathways carefully.
        </p>
      </div>
    </section>
  )
}
