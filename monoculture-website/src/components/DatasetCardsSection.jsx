import { useMemo, useState } from 'react'
import { datasetCandidates } from '../data/datasetCandidates'

const FILTERS = ['All', 'Potato', 'Maize', 'Open Data']

export default function DatasetCardsSection({ id, visible }) {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return datasetCandidates
    return datasetCandidates.filter((item) => item.category === filter)
  }, [filter])

  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Candidate datasets</span>
          <h2>Candidate datasets after the pivot</h2>
          <p>
            Some of these are main crop-specific candidates, and some are support layers that help
            with location, climate, or soil context.
          </p>
        </div>

        <div className="dataset-tabs reveal">
          {FILTERS.map((item) => (
            <button
              key={item}
              className={`dataset-tab ${filter === item ? 'active' : ''}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="dataset-grid">
          {filtered.map((dataset, index) => (
            <article
              key={dataset.name}
              className="dataset-card reveal"
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              <div className="dataset-topline">
                <span className="dataset-category">{dataset.category}</span>
                <span className={`dataset-status status-${dataset.status.toLowerCase()}`}>
                  {dataset.status}
                </span>
              </div>
              <h3>{dataset.name}</h3>
              <p className="dataset-layer">{dataset.layer}</p>
              <ul className="dataset-variables">
                {dataset.variables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="dataset-meta">
                <span>Same-land: {dataset.sameLand}</span>
              </div>
              <p className="dataset-note">{dataset.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
