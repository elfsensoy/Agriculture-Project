import { soilIndicators } from '../data/presentationContent'

export default function ProblemSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Problem background</span>
          <h2>Monoculture creates soil-health risk, but the risk is not always the same.</h2>
          <p>
            Monoculture means growing the same crop repeatedly or intensively in a farming system.
            Over time, this may create problems such as nutrient pressure, lower soil organic
            matter, soil acidity, biological imbalance, disease pressure, and yield decline.
          </p>
        </div>

        <div className="indicator-cloud">
          {soilIndicators.map((item, index) => (
            <span
              key={item}
              className="indicator-pill reveal"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
