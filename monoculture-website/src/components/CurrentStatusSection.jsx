import { doneItems, notDoneItems } from '../data/presentationContent'

export default function CurrentStatusSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">What the data has shown so far</span>
          <h2>Progress findings so far</h2>
          <p>
            The project is still in dataset feasibility and preprocessing stage. So these are
            progress findings, not final soil-health results.
          </p>
        </div>

        <div className="status-grid">
          <article className="status-card done-card reveal">
            <h3>Shown so far</h3>
            <ul>
              {doneItems.map((item) => (
                <li key={item}>
                  <span className="status-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="status-card next-card reveal">
            <h3>Next phase</h3>
            <ul>
              {notDoneItems.map((item) => (
                <li key={item}>
                  <span className="status-icon pending">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
