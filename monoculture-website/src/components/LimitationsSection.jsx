export default function LimitationsSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Limitations</span>
          <h2>The project has clear limits, and those limits should stay visible.</h2>
          <p>
            At this stage, I can talk about feasibility, patterns, and risk pathways, but not
            final causal proof.
          </p>
        </div>

        <div className="criteria-stack">
          <article className="criteria-card reveal">
            <h3>1. No perfect same-local public dataset</h3>
            <p>I could not find a perfect same-local maize-versus-potato public soil time-series dataset.</p>
          </article>
          <article className="criteria-card reveal">
            <h3>2. Some layers are context, not final measured soil datasets</h3>
            <p>MapSPAM helps with crop overlap, and SoilGrids or CSDLv2 help with soil background, but they do not automatically prove yearly soil change.</p>
          </article>
          <article className="criteria-card reveal">
            <h3>3. Some studies discuss useful ideas but do not provide easy data files</h3>
            <p>Some sources are scientifically useful but still difficult to convert into analysis-ready tables.</p>
          </article>
          <article className="criteria-card reveal">
            <h3>4. Causality is limited</h3>
            <p>Since this is not a field experiment designed by me, I cannot prove that potato or maize directly caused a specific soil change.</p>
          </article>
          <article className="criteria-card reveal">
            <h3>5. Final analysis is not done yet</h3>
            <p>The next step is still to inspect, clean, and standardize the strongest datasets before making final comparison visuals.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
