export default function ResearchQuestionSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame centered-question">
        <span className="section-kicker reveal">Research question</span>
        <h2 className="question-display reveal">
          How can public datasets be used to compare soil-health patterns and early risk signals
          between a clonal monoculture crop and a seed-based monoculture crop?
        </h2>
        <p className="question-note reveal">
          The project is both a crop comparison and a dataset feasibility study.
        </p>
      </div>
    </section>
  )
}
