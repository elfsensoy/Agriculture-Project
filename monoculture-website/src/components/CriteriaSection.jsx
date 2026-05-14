import { evaluationCriteria } from '../data/presentationContent'

export default function CriteriaSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Dataset evaluation criteria</span>
          <h2>Land consistency is the rule that keeps the comparison fair.</h2>
          <p>
            I do not want to compare soil values from random places. For each crop, the soil data
            should come from the same field, site, trial, grid cells, or clearly defined region.
          </p>
        </div>

        <div className="criteria-stack">
          {evaluationCriteria.map((criterion, index) => (
            <article
              key={criterion.title}
              className={`criteria-card reveal ${criterion.highlight ? 'highlight' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3>{criterion.title}</h3>
              <p>{criterion.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
