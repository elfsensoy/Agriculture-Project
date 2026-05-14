export default function InterpretationSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Interpretation and discussion</span>
          <h2>Data availability shaped what kind of comparison was actually possible.</h2>
          <p>
            At the beginning, the ideal design was very controlled: compare maize and potato in
            the same local overlap area. But the public data did not support that exact design.
            This does not mean the project failed. Actually, it made the project more realistic.
          </p>
          <p>
            A data-driven project should not only use data when it supports the original idea. It
            should also adapt when the data shows a limitation.
          </p>
        </div>

        <div className="status-grid">
          <article className="status-card done-card reveal">
            <h3>What this means</h3>
            <ul>
              <li>
                <span className="status-icon">✓</span>
                <span>The local data gap became part of the project’s finding.</span>
              </li>
              <li>
                <span className="status-icon">✓</span>
                <span>Public data is useful, but not always available at the perfect scale.</span>
              </li>
              <li>
                <span className="status-icon">✓</span>
                <span>The final project should compare patterns and risk pathways, not claim strict same-field causality.</span>
              </li>
            </ul>
          </article>

          <article className="status-card next-card reveal">
            <h3>How to read the crop comparison</h3>
            <ul>
              <li>
                <span className="status-icon pending">→</span>
                <span>For potato, I can look at continuous cropping, soil biology, microbial imbalance, and disease-related indicators.</span>
              </li>
              <li>
                <span className="status-icon pending">→</span>
                <span>For maize, I can look at soil nutrients, yield response, soil moisture, and management-related indicators.</span>
              </li>
              <li>
                <span className="status-icon pending">→</span>
                <span>The discussion is not “potato is bad and maize is good.” It is that different monoculture systems may need to be monitored differently.</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
