import { cropCards } from '../data/presentationContent'

export default function HeroSection({ id, visible }) {
  return (
    <section id={id} className={`story-section hero-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame hero-frame">
        <div className="hero-grid" aria-hidden="true">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="hero-grid-dot" />
          ))}
        </div>

        <div className="hero-copy reveal">
          <span className="section-kicker">IF 201 project presentation</span>
          <h1>A Data-Driven Comparison of Clonal and Seed-Based Monoculture Systems</h1>
          <p className="hero-subtitle">Soil Health, Early Risk Signals, and Dataset Feasibility</p>
          <p className="hero-body">
            This project uses data mainly as a tool for decision-making. The data helped choose
            the crops, choose the country and region, and understand which comparisons are
            actually possible.
          </p>
        </div>

        <div className="hero-crops">
          {cropCards.map((card, index) => (
            <article
              key={card.name}
              className={`crop-card reveal crop-card-${index === 0 ? 'left' : 'right'}`}
            >
              <span className="crop-card-tag">{card.subtype}</span>
              <h2>{card.name}</h2>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>

        <div className="scroll-cue">
          <span>Scroll to follow the project story</span>
          <div className="scroll-cue-line" />
        </div>
      </div>
    </section>
  )
}
