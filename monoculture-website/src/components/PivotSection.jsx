export default function PivotSection({ id, visible, showUpdatedPath, onToggle }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Methodological pivot</span>
          <h2>The pivot: move where usable data exists.</h2>
          <p>
            The ideal same-local public dataset was not found. So instead of forcing weak data, I
            changed the strategy: Guizhou and Qixingguan stay as the case-selection and limitation
            story, while the main analysis moves toward the strongest available China-based potato
            and maize datasets.
          </p>
        </div>

        <div className="status-grid" style={{ marginBottom: '18px' }}>
          <article className="status-card reveal">
            <h3>Old plan</h3>
            <p>Use Guizhou and Qixingguan as the full final comparison location.</p>
          </article>

          <article className="status-card reveal">
            <h3>Updated plan</h3>
            <p>
              Keep Guizhou and Qixingguan as the case-selection and limitation story, but move the
              main analysis toward the strongest available China-based crop-specific datasets.
            </p>
          </article>
        </div>

        <div className={`pivot-panel reveal ${showUpdatedPath ? 'show-updated' : ''}`}>
          <div className="pivot-path old-path">
            <span className="pivot-label">Old path</span>
            <strong>Guizhou / Qixingguan only</strong>
          </div>
          <div className="pivot-divider" />
          <div className="pivot-path new-path">
            <span className="pivot-label">Updated path</span>
            <strong>Guizhou selection layer → China-based usable datasets → preprocessing and analysis</strong>
          </div>
        </div>

        <button className="pivot-button reveal" onClick={onToggle}>
          {showUpdatedPath ? 'Show Old Plan' : 'Show Updated Plan'}
        </button>
      </div>
    </section>
  )
}
