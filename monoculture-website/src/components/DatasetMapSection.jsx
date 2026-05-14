import { useEffect, useMemo, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { datasetLocations } from '../data/datasetLocations'

const CATEGORY_COLORS = {
  'Selection layer': '#ff5d5d',
  'Potato candidate': '#f59f00',
  'Maize candidate': '#00c767',
  'Open data': '#52aef7',
}

export default function DatasetMapSection({ id, visible }) {
  const mapNodeRef = useRef(null)
  const mapRef = useRef(null)
  const markerLayerRef = useRef(null)
  const [activePoint, setActivePoint] = useState(datasetLocations[0])

  useEffect(() => {
    if (!mapNodeRef.current || mapRef.current) return

    const map = L.map(mapNodeRef.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    }).setView([31.5, 104.5], 4.6)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map)

    const layer = L.layerGroup().addTo(map)
    mapRef.current = map
    markerLayerRef.current = layer

    return () => {
      map.remove()
      mapRef.current = null
      markerLayerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!markerLayerRef.current || !mapRef.current) return

    markerLayerRef.current.clearLayers()

    datasetLocations.forEach((point) => {
      const color = CATEGORY_COLORS[point.category] || '#ffffff'
      const marker = L.circleMarker([point.lat, point.lng], {
        radius: point.name === 'Qixingguan hotspot' ? 8 : 6,
        color: '#ffffff',
        weight: 1.5,
        fillColor: color,
        fillOpacity: 0.92,
      })

      marker.on('click', () => setActivePoint(point))
      marker.bindTooltip(
        `<div class="dataset-map-tooltip"><strong>${point.name}</strong><span>${point.precision}</span></div>`,
        {
          direction: 'top',
          offset: [0, -8],
          className: 'dataset-map-tooltip-shell',
        },
      )

      marker.addTo(markerLayerRef.current)
    })
  }, [])

  useEffect(() => {
    if (!mapRef.current || !visible) return
    mapRef.current.invalidateSize()
  }, [visible])

  useEffect(() => {
    if (!mapRef.current || !activePoint) return
    mapRef.current.flyTo(
      [activePoint.lat, activePoint.lng],
      activePoint.name === 'Qixingguan hotspot' ? 8.8 : 5.3,
      { duration: 1.4 },
    )
  }, [activePoint])

  const grouped = useMemo(() => {
    return datasetLocations.reduce((acc, point) => {
      if (!acc[point.category]) acc[point.category] = []
      acc[point.category].push(point)
      return acc
    }, {})
  }, [])

  return (
    <section id={id} className={`story-section ${visible ? 'is-visible' : ''}`}>
      <div className="section-frame">
        <div className="section-copy reveal">
          <span className="section-kicker">Dataset geography</span>
          <h2>Where the current data layers come from</h2>
          <p>
            This map uses one point per dataset origin anchor. Some points are exact hotspots,
            while others are province-level or China-level anchors because the exact site is not
            yet confirmed from the raw files.
          </p>
        </div>

        <div className="dataset-map-layout">
          <div className="dataset-map-card reveal">
            <div ref={mapNodeRef} className="dataset-map-canvas" />
          </div>

          <div className="dataset-map-sidebar reveal">
            <div className="dataset-map-active">
              <span className="dataset-map-badge">{activePoint.category}</span>
              <h3>{activePoint.name}</h3>
              <p className="dataset-map-precision">{activePoint.precision}</p>
              <p>{activePoint.note}</p>
            </div>

            <div className="dataset-map-groups">
              {Object.entries(grouped).map(([category, points]) => (
                <div key={category} className="dataset-map-group">
                  <h4>{category}</h4>
                  <ul>
                    {points.map((point) => (
                      <li key={point.name}>
                        <button onClick={() => setActivePoint(point)}>{point.name}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
