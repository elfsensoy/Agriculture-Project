export default function HotspotSection({ id, visible }) {
  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame hotspot-frame">
        <div className="hotspot-card reveal">
          <span className="section-kicker">Local hotspot</span>
          <h2>Qixingguan District, Bijie, Guizhou</h2>
          <p className="hotspot-coordinates">Coordinates: 27.2083, 105.3750</p>
          <p>
            This was the strongest local maize-potato overlap hotspot from the MapSPAM-based
            selection logic, so it became the main same-context search target.
          </p>
        </div>

        <div className="hotspot-map reveal" aria-hidden="true">
          <div className="hotspot-surface" />
          <div className="hotspot-ring ring-one" />
          <div className="hotspot-ring ring-two" />
          <div className="hotspot-ring ring-three" />
          <div className="hotspot-marker" />
          <div className="hotspot-label">Qixingguan hotspot</div>
        </div>
      </div>
    </section>
  )
}
