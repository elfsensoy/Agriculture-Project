import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapProgression.css'

export default function MapProgression() {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const [zoomLevel, setZoomLevel] = useState(0)

  const zoomStages = [
    { name: 'World', lat: 20, lng: 0, zoom: 2, label: 'Global Context' },
    { name: 'China', lat: 35.8, lng: 104.2, zoom: 5, label: 'China' },
    { name: 'Guizhou', lat: 26.7, lng: 105.8, zoom: 8, label: 'Guizhou Province' },
    { name: 'Bijie', lat: 27.2, lng: 105.5, zoom: 10, label: 'Bijie Prefecture' },
    { name: 'Qixingguan', lat: 27.2083, lng: 105.375, zoom: 12, label: 'Qixingguan District (Study Area)' },
  ]

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    const map = L.map(mapRef.current).setView([20, 0], 2)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      // Don't destroy to allow re-rendering
    }
  }, [])

  const animateTo = (stage) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([stage.lat, stage.lng], stage.zoom, {
        duration: 2,
        easeLinearity: 0.25,
      })
      setZoomLevel(zoomStages.indexOf(stage))
    }
  }

  useEffect(() => {
    // Auto-play zoom progression every 5 seconds
    const interval = setInterval(() => {
      setZoomLevel((prev) => {
        const next = prev + 1
        if (next >= zoomStages.length) return 0
        return next
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    animateTo(zoomStages[zoomLevel])
  }, [zoomLevel])

  return (
    <div className="map-progression-container">
      <div ref={mapRef} className="map-progression" />

      <div className="zoom-controls">
        <div className="zoom-title">{zoomStages[zoomLevel].label}</div>
        <div className="zoom-buttons">
          {zoomStages.map((stage, i) => (
            <button
              key={i}
              className={`zoom-btn ${i === zoomLevel ? 'active' : ''}`}
              onClick={() => setZoomLevel(i)}
            >
              {stage.name}
            </button>
          ))}
        </div>
      </div>

      <div className="map-markers">
        {zoomLevel >= 4 && (
          <>
            <div className="marker-info">
              <h4>📍 Qixingguan District, Bijie</h4>
              <p>Primary overlap hotspot identified via FAOSTAT + MapSPAM</p>
              <p className="coords">Coordinates: 27.21°N, 105.38°E</p>
            </div>
          </>
        )}
      </div>

      <div className="map-legend">
        <p>Click buttons to navigate or watch automatic progression</p>
      </div>
    </div>
  )
}
