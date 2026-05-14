import { pipelineSteps } from '../data/presentationContent'
import { regionSelectionChartData } from '../data/chartData'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'

export default function LocationSelectionSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Why China and Guizhou?</span>
          <h2>Country and region selection were also data-supported.</h2>
          <p>
            First, I used FAOSTAT to help justify why maize and potato are meaningful crops and
            why China is a strong country frame. Then I used MapSPAM to see where maize and potato
            overlap spatially, and that is how Guizhou and Qixingguan/Bijie became important.
          </p>
        </div>

        <div className="status-grid">
          <article className="status-card reveal">
            <h3>Why China?</h3>
            <p>
              FAOSTAT helped justify China as a strong country frame because both maize and potato
              were important enough there to support a meaningful comparison.
            </p>
          </article>

          <article className="status-card reveal">
            <h3>Why Guizhou and Qixingguan?</h3>
            <p>
              MapSPAM helped show where maize and potato overlap spatially. Guizhou became
              important at the province level, and Qixingguan/Bijie became the main local hotspot.
            </p>
          </article>
        </div>

        <div className="pipeline-grid" style={{ marginTop: '18px' }}>
          <div className="pipeline-track">
            {pipelineSteps.map((step, index) => (
              <article
                key={step.label}
                className="pipeline-node reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="pipeline-index">0{index + 1}</span>
                <h3>{step.label}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>

          <div className="zoom-card reveal">
            <div className="zoom-map">
              <div className="zoom-panel zoom-china">China</div>
              <div className="zoom-panel zoom-guizhou">Guizhou</div>
              <div className="zoom-panel zoom-bijie">Bijie</div>
            </div>
            <p>
              So the local focus was not guessed. It came from crop and country selection, then
              spatial overlap, then local hotspot inspection.
            </p>
          </div>
        </div>

        <div className="chart-card reveal" style={{ marginTop: '18px' }}>
          <h3>Province-level overlap context</h3>
          <p className="dataset-note">
            This graph comes from the province-level output and helps show why Guizhou stayed important
            in the search, even though it did not automatically give the final same-local dataset.
          </p>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={regionSelectionChartData} margin={{ top: 16, right: 10, left: 0, bottom: 10 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="region" tick={{ fill: '#dfe8ff', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#b8c5dd', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(8, 12, 22, 0.96)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '14px',
                    color: '#fff',
                  }}
                  formatter={(value) => [`${Number(value).toLocaleString()} ha`, '']}
                />
                <Legend wrapperStyle={{ color: '#dfe8ff' }} />
                <Bar dataKey="maize" fill="#52aef7" radius={[8, 8, 0, 0]} name="Maize area" />
                <Bar dataKey="potato" fill="#f59f00" radius={[8, 8, 0, 0]} name="Potato area" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
