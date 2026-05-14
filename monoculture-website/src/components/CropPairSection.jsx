import { cropCandidateGroups, cropCandidates, cropFilterLegend } from '../data/presentationContent'
import { cropSelectionChartData } from '../data/chartData'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts'

export default function CropPairSection({ id, visible }) {
  const shortlisted = cropCandidates.filter((candidate) => candidate.filter !== 'Lower shortlist')
  const selected = cropCandidates.filter((candidate) => candidate.decision === 'Selected')

  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Why potato and maize?</span>
          <h2>Crop selection was data-supported, not random.</h2>
          <p>
            I did not choose these crops randomly. I first considered different clonal and
            seed-based crop candidates, then used crop data as a first filter to narrow the
            comparison.
          </p>
        </div>

        <div className="comparison-lane">
          <article className="pair-card reveal">
            <span className="pair-card-tag">Clonal crop</span>
            <h3>Potato</h3>
            <ul>
              <li>Propagated through tubers</li>
              <li>Continuous cropping and soil biology are central concerns</li>
              <li>Disease and microbial imbalance are major risk pathways</li>
            </ul>
          </article>

          <div className="comparison-link reveal">
            <span>comparison design</span>
          </div>

          <article className="pair-card reveal">
            <span className="pair-card-tag">Seed-based crop</span>
            <h3>Maize</h3>
            <ul>
              <li>Grown from seed</li>
              <li>Soil nutrients, yield response, and moisture are central concerns</li>
              <li>Management effects matter more than clonal repetition</li>
            </ul>
          </article>
        </div>

        <div className="status-grid" style={{ marginTop: '18px' }}>
          <article className="status-card reveal">
            <h3>First list</h3>
            <ul>
              <li>
                <span className="status-icon">C</span>
                <span>Clonal: {cropCandidateGroups.clonal.join(', ')}</span>
              </li>
              <li>
                <span className="status-icon">S</span>
                <span>Seed-based: {cropCandidateGroups.seed.join(', ')}</span>
              </li>
            </ul>
          </article>

          <article className="status-card reveal">
            <h3>After filtering</h3>
            <ul>
              {shortlisted.map((candidate) => (
                <li key={candidate.crop}>
                  <span className="status-icon pending">→</span>
                  <span>
                    {candidate.crop} ({candidate.propagation}) - {candidate.filter}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="dataset-grid" style={{ marginTop: '18px' }}>
          {selected.map((candidate, index) => (
            <article
              key={candidate.crop}
              className="dataset-card reveal"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="dataset-topline">
                <span className="dataset-category">{candidate.propagation}</span>
                <span className={`dataset-status status-${candidate.decision === 'Selected' ? 'use' : 'context'}`}>
                  {candidate.decision}
                </span>
              </div>
              <h3>{candidate.crop}</h3>
              <p className="dataset-layer">{candidate.reason}</p>
              <div className="dataset-meta">
                <span>Final selection: {candidate.decision}</span>
              </div>
              <div className="candidate-scorebar" aria-hidden="true">
                <span
                  className="candidate-scorefill"
                  style={{ width: `${(cropFilterLegend[candidate.filter] / 3) * 100}%` }}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="chart-card reveal" style={{ marginTop: '18px' }}>
          <h3>Simple crop comparison used as a first filter</h3>
          <p className="dataset-note">
            This chart uses harvested area in China as one simple comparison aid. It is not the
            whole decision by itself, but it shows why maize and potato stayed important in the shortlist.
          </p>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={cropSelectionChartData} margin={{ top: 16, right: 10, left: 0, bottom: 10 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="crop" tick={{ fill: '#dfe8ff', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#b8c5dd', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(8, 12, 22, 0.96)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '14px',
                    color: '#fff',
                  }}
                  formatter={(value) => [`${value} million ha`, 'Harvested area']}
                />
                <Bar dataKey="harvestedAreaMha" radius={[8, 8, 0, 0]}>
                  {cropSelectionChartData.map((entry) => (
                    <Cell
                      key={entry.crop}
                      fill={entry.selected ? '#00c767' : entry.category === 'Clonal' ? '#f59f00' : '#52aef7'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="question-note reveal" style={{ marginTop: '18px' }}>
          This score was not treated as a final truth. It was a transparent first filter.
        </p>
      </div>
    </section>
  )
}
