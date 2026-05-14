import { strategyChecklist } from '../data/presentationContent'

export default function DataStrategySection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Initial data strategy</span>
          <h2>The ideal dataset was strict from the beginning.</h2>
          <p>
            The goal was to find a public dataset where maize and potato could be compared fairly,
            with each crop dataset staying internally consistent.
          </p>
        </div>

        <div className="checklist-card reveal">
          <ul className="strategy-list">
            {strategyChecklist.map((item, index) => (
              <li key={item} style={{ transitionDelay: `${index * 90}ms` }}>
                <span className="checkmark">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
