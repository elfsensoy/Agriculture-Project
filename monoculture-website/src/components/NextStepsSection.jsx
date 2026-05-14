import { nextSteps } from '../data/presentationContent'

export default function NextStepsSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Next steps</span>
          <h2>These are the next steps.</h2>
          <p>
            I should not jump directly into final graphs before confirming the data structure. The
            responsible next step is to check what the files actually contain.
          </p>
        </div>

        <div className="roadmap reveal">
          {nextSteps.map((item, index) => (
            <div key={item} className="roadmap-step">
              <span className="roadmap-index">{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
