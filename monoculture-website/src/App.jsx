import { useEffect, useMemo, useRef, useState } from 'react'
import './styles.css'
import ProgressNav from './components/ProgressNav'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ResearchQuestionSection from './components/ResearchQuestionSection'
import CropPairSection from './components/CropPairSection'
import DataStrategySection from './components/DataStrategySection'
import LocationSelectionSection from './components/LocationSelectionSection'
import HotspotSection from './components/HotspotSection'
import DataProblemSection from './components/DataProblemSection'
import PivotSection from './components/PivotSection'
import DatasetCardsSection from './components/DatasetCardsSection'
import DatasetMapSection from './components/DatasetMapSection'
import CriteriaSection from './components/CriteriaSection'
import CurrentStatusSection from './components/CurrentStatusSection'
import InterpretationSection from './components/InterpretationSection'
import LimitationsSection from './components/LimitationsSection'
import NextStepsSection from './components/NextStepsSection'
import ConclusionSection from './components/ConclusionSection'
import { presentationSections } from './data/presentationContent'

const SECTION_IDS = presentationSections.map((section) => section.id)

export default function App() {
  const [activeId, setActiveId] = useState(SECTION_IDS[0])
  const [visibleIds, setVisibleIds] = useState(() => new Set([SECTION_IDS[0]]))
  const [showUpdatedPath, setShowUpdatedPath] = useState(false)
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIds((prev) => {
          const next = new Set(prev)
          entries.forEach((entry) => {
            const id = entry.target.dataset.sectionId
            if (entry.isIntersecting) next.add(id)
          })
          return next
        })

        const candidates = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (candidates[0]) {
          setActiveId(candidates[0].target.dataset.sectionId)
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-10% 0px -22% 0px',
      },
    )

    SECTION_IDS.forEach((id) => {
      const node = sectionRefs.current[id]
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  const progress = useMemo(() => {
    const index = Math.max(SECTION_IDS.indexOf(activeId), 0)
    return (index + 1) / SECTION_IDS.length
  }, [activeId])

  const registerSection = (id) => (node) => {
    sectionRefs.current[id] = node
  }

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const isVisible = (id) => visibleIds.has(id)

  return (
    <div className="experience scroll-experience">
      <DarkBackdrop />
      <ProgressNav
        sections={presentationSections}
        activeId={activeId}
        progress={progress}
        onNavigate={scrollToSection}
      />

      <main className="story-shell">
        <SectionAnchor id="hero" register={registerSection}>
          <HeroSection id="hero" visible={isVisible('hero')} />
        </SectionAnchor>
        <SectionAnchor id="problem" register={registerSection}>
          <ProblemSection id="problem" visible={isVisible('problem')} />
        </SectionAnchor>
        <SectionAnchor id="question" register={registerSection}>
          <ResearchQuestionSection id="question" visible={isVisible('question')} />
        </SectionAnchor>
        <SectionAnchor id="crops" register={registerSection}>
          <CropPairSection id="crops" visible={isVisible('crops')} />
        </SectionAnchor>
        <SectionAnchor id="strategy" register={registerSection}>
          <DataStrategySection id="strategy" visible={isVisible('strategy')} />
        </SectionAnchor>
        <SectionAnchor id="selection" register={registerSection}>
          <LocationSelectionSection id="selection" visible={isVisible('selection')} />
        </SectionAnchor>
        <SectionAnchor id="hotspot" register={registerSection}>
          <HotspotSection id="hotspot" visible={isVisible('hotspot')} />
        </SectionAnchor>
        <SectionAnchor id="gap" register={registerSection}>
          <DataProblemSection id="gap" visible={isVisible('gap')} />
        </SectionAnchor>
        <SectionAnchor id="pivot" register={registerSection}>
          <PivotSection
            id="pivot"
            visible={isVisible('pivot')}
            showUpdatedPath={showUpdatedPath}
            onToggle={() => setShowUpdatedPath((prev) => !prev)}
          />
        </SectionAnchor>
        <SectionAnchor id="datasets" register={registerSection}>
          <DatasetCardsSection id="datasets" visible={isVisible('datasets')} />
        </SectionAnchor>
        <SectionAnchor id="mapdata" register={registerSection}>
          <DatasetMapSection id="mapdata" visible={isVisible('mapdata')} />
        </SectionAnchor>
        <SectionAnchor id="criteria" register={registerSection}>
          <CriteriaSection id="criteria" visible={isVisible('criteria')} />
        </SectionAnchor>
        <SectionAnchor id="status" register={registerSection}>
          <CurrentStatusSection id="status" visible={isVisible('status')} />
        </SectionAnchor>
        <SectionAnchor id="interpretation" register={registerSection}>
          <InterpretationSection id="interpretation" visible={isVisible('interpretation')} />
        </SectionAnchor>
        <SectionAnchor id="limitations" register={registerSection}>
          <LimitationsSection id="limitations" visible={isVisible('limitations')} />
        </SectionAnchor>
        <SectionAnchor id="next" register={registerSection}>
          <NextStepsSection id="next" visible={isVisible('next')} />
        </SectionAnchor>
        <SectionAnchor id="conclusion" register={registerSection}>
          <ConclusionSection id="conclusion" visible={isVisible('conclusion')} />
        </SectionAnchor>
      </main>
    </div>
  )
}

function SectionAnchor({ id, register, children }) {
  return (
    <div ref={register(id)} data-section-anchor data-section-id={id}>
      {children}
    </div>
  )
}

function DarkBackdrop() {
  return (
    <div className="dark-backdrop" aria-hidden="true">
      <div className="backdrop-line vertical" />
      <div className="backdrop-line horizontal" />
      <div className="backdrop-arc one" />
      <div className="backdrop-arc two" />
      <div className="backdrop-glow one" />
      <div className="backdrop-glow two" />
    </div>
  )
}
