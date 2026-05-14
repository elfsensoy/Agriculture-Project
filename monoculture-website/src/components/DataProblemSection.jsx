export default function DataProblemSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame split-frame">
        <article className="split-card ideal-card reveal">
          <span className="section-kicker">Ideal</span>
          <h2>Same-local maize and potato soil time-series dataset</h2>
          <p>
            Ideally, I wanted a public dataset where maize and potato could be compared in the
            same local area, preferably around Qixingguan or Bijie, with soil-health indicators
            over time.
          </p>
        </article>

        <article className="split-card reality-card reveal">
          <span className="section-kicker">Reality</span>
          <h2>That perfect same-local public dataset was not found.</h2>
          <p>
            I found useful local evidence, but not a clean enough same-local public dataset to use
            as the final maize-versus-potato soil comparison.
          </p>
        </article>
      </div>
    </section>
  )
}
