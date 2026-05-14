export default function ProgressNav({ sections, activeId, progress, onNavigate }) {
  return (
    <>
      <div className="scroll-progress-shell" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav className="section-nav" aria-label="Presentation sections">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`section-dot ${activeId === section.id ? 'active' : ''}`}
            onClick={() => onNavigate(section.id)}
            aria-label={section.label}
            title={section.label}
          >
            <span />
          </button>
        ))}
      </nav>
    </>
  )
}
