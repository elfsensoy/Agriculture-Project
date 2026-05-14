import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MapProgression from './MapProgression'
import './PresentationSlides.css'

const SLIDES = [
  {
    id: 'title',
    type: 'title',
    title: 'Clonal vs Seed-Based Monoculture',
    subtitle: 'A Data-Driven Soil Health Comparison',
    presenter_notes: 'Welcome everyone. Today I\'ll present research comparing soil health impacts between two crop propagation systems: clonal (potato) and seed-based (maize) monoculture in China.',
  },
  {
    id: 'research_question',
    type: 'content',
    title: '1. Research Question & Motivation',
    content: [
      { type: 'heading', text: 'Why does this matter?' },
      { type: 'text', text: 'Monoculture farming dominates global staple crop production, yet not all monocultures are structurally identical.' },
      { type: 'bullet', text: 'Seed-based systems (maize) reset genetic variation each cycle' },
      { type: 'bullet', text: 'Clonal systems (potato) replicate identical genotype continuously' },
      { type: 'heading', text: 'The Question' },
      { type: 'text', text: 'Do clonal and seed-based monoculture systems show different soil-health degradation patterns and early risk signals?' },
    ],
    presenter_notes: 'The core research question asks whether the biological structure of the crop system affects soil degradation. This matters for predicting which crops might face soil constraints first.',
  },
  {
    id: 'sustainability',
    type: 'content',
    title: '2. Sustainability Connection',
    content: [
      { type: 'heading', text: 'Environmental Sustainability' },
      { type: 'bullet', text: 'Soil health directly affects food production capacity' },
      { type: 'bullet', text: 'Early warning signals for soil degradation improve land management' },
      { type: 'heading', text: 'Economic Sustainability' },
      { type: 'bullet', text: 'Farmers can better plan crop rotations and amendments' },
      { type: 'bullet', text: 'Reduces long-term yield losses from continuous monoculture' },
      { type: 'heading', text: 'Social Sustainability' },
      { type: 'bullet', text: 'Staple crop security (maize and potato feed millions in China)' },
    ],
    presenter_notes: 'Our work contributes to all three pillars of sustainability. Specifically, it helps predict and prevent soil degradation, which protects food security.',
  },
  {
    id: 'crop_selection',
    type: 'content',
    title: '3. Methodology: Crop & Country Selection',
    content: [
      { type: 'heading', text: 'Layer 1: FAOSTAT Global Data' },
      { type: 'text', text: 'China is the world\'s largest producer of BOTH crops' },
      { type: 'heading', text: 'Layer 2: MapSPAM Spatial Distribution' },
      { type: 'text', text: 'Identified geographic overlap hotspot in Guizhou province' },
      { type: 'heading', text: 'Layer 3: Local Focus' },
      { type: 'text', text: 'Selected Qixingguan District, Bijie (27.2°N, 105.4°E) as primary overlap zone' },
    ],
    presenter_notes: 'The crop and country selection was justified through multiple data layers. This layered approach ensures our case is representative, not arbitrary.',
  },
  {
    id: 'methodology_pivot',
    type: 'content',
    title: '4. Methodology: Data Strategy & Pivot',
    content: [
      { type: 'heading', text: 'Original Goal' },
      { type: 'text', text: 'Find same-location paired dataset: maize + potato soil time-series from Qixingguan' },
      { type: 'heading', text: 'Reality Check' },
      { type: 'text', text: 'No clean publicly available paired dataset found with both crops, same location, comparable soil variables' },
      { type: 'heading', text: 'Methodological Pivot' },
      { type: 'bullet', text: 'Keep Guizhou/Qixingguan as case-selection & limitation story' },
      { type: 'bullet', text: 'Use strongest available China-based crop-specific datasets' },
      { type: 'bullet', text: 'Create structured comparison across studies' },
    ],
    presenter_notes: 'This is not a failure—it\'s rigorous methodology. We acknowledge data limitations upfront rather than forcing weak data. This is better science.',
  },
  {
    id: 'map_view',
    type: 'map',
    title: '5. Geographic Context & Data Locations',
    presenter_notes: 'Let me show you the geographic scope. We\'ll zoom from the world to China, then to Guizhou, and finally to the specific local area we investigated.',
  },
  {
    id: 'data_sources',
    type: 'content',
    title: '5. Data Sources & Strategy',
    content: [
      { type: 'heading', text: 'Priority Hierarchy' },
      { type: 'bullet', text: '1. Raw/supplementary datasets (CSV/XLSX files)' },
      { type: 'bullet', text: '2. Repository metadata (NCBI, Figshare, Dryad)' },
      { type: 'bullet', text: '3. Structured literature-derived datasets' },
      { type: 'heading', text: 'Key Studies' },
      { type: 'bullet', text: 'Potato: Qin et al. 2017, Zhao et al. 2020, Xing et al. 2024 (PLOS ONE, Frontiers)' },
      { type: 'bullet', text: 'Maize: Yang et al. 2026 (Guizhou karst, Frontiers)' },
    ],
    presenter_notes: 'We deliberately avoided only literature review. Our strategy prioritizes actual numerical data in downloadable format.',
  },
  {
    id: 'results_potato',
    type: 'content',
    title: '6. Results: Potato (Clonal System)',
    content: [
      { type: 'heading', text: 'Key Pattern: Continuous-Cropping Degradation' },
      { type: 'bullet', text: 'Yield declines with continuous cropping duration' },
      { type: 'bullet', text: 'Microbial biomass carbon decreases' },
      { type: 'bullet', text: 'Enzyme activity indices decline' },
      { type: 'heading', text: 'Risk Pathway' },
      { type: 'text', text: 'Clonal monoculture → Identical genotype annually → Soil biological imbalance → Yield decline' },
      { type: 'heading', text: 'Interpretation' },
      { type: 'text', text: 'Biological soil degradation is the dominant risk factor for clonal systems' },
    ],
    presenter_notes: 'The potato data shows a clear pattern: as you grow the same clone year after year, beneficial soil microbes and enzymes decline, leading to yield loss.',
  },
  {
    id: 'results_maize',
    type: 'content',
    title: '6. Results: Maize (Seed-Based System)',
    content: [
      { type: 'heading', text: 'Key Pattern: Management-Responsive Soil' },
      { type: 'bullet', text: 'Soil organic matter responds to fertilization and amendments' },
      { type: 'bullet', text: 'Available nitrogen and phosphorus are management-driven' },
      { type: 'bullet', text: 'Yield can be improved with proper amendments' },
      { type: 'heading', text: 'Risk Pathway' },
      { type: 'text', text: 'Seed-based monoculture → Annual genetic diversity → Nutrient-driven constraints → Soil fertility pressure' },
      { type: 'heading', text: 'Interpretation' },
      { type: 'text', text: 'Soil fertility (nutrients) is the dominant risk factor for seed-based systems; more manageable than biological collapse' },
    ],
    presenter_notes: 'Maize shows a different pattern: the risk is primarily about nutrient depletion, which CAN be managed. The system doesn\'t show biological imbalance the way potato does.',
  },
  {
    id: 'comparison',
    type: 'content',
    title: '7. Comparison: Clonal vs Seed-Based Risk Pathways',
    content: [
      { type: 'table', rows: [
        { col1: 'Aspect', col2: 'Potato (Clonal)', col3: 'Maize (Seed-Based)' },
        { col1: 'Time Structure', col2: 'Continuous duration (1–5+ years)', col3: 'Long-term trial (multiple years)' },
        { col1: 'Soil Response', col2: 'Microbial/enzyme decline', col3: 'Nutrient-management response' },
        { col1: 'Yield Response', col2: 'Declines progressively', col3: 'Improves with amendments' },
        { col1: 'Risk Driver', col2: 'Biological imbalance', col3: 'Soil fertility pressure' },
        { col1: 'Manageability', col2: 'Difficult (requires rotation)', col3: 'Easier (fertilization helps)' },
      ]},
    ],
    presenter_notes: 'This table captures the core finding: clonal and seed-based systems fail through different mechanisms. Understanding which one applies to your crop helps predict and prevent soil problems.',
  },
  {
    id: 'limitations',
    type: 'content',
    title: '8. Limitations & Honest Assessment',
    content: [
      { type: 'heading', text: 'Data Limitations' },
      { type: 'bullet', text: 'No same-location paired dataset for Guizhou' },
      { type: 'bullet', text: 'Potato and maize data from different research sites' },
      { type: 'bullet', text: 'Different measurement methodologies across studies' },
      { type: 'heading', text: 'Analysis Scope' },
      { type: 'bullet', text: 'This is exploratory pattern comparison, not causal proof' },
      { type: 'bullet', text: 'Soil degradation is multifactorial; we show one lens' },
      { type: 'heading', text: 'What We Are NOT Claiming' },
      { type: 'text', text: 'We are not claiming monoculture is good or that one crop is categorically better. We show different risk patterns.' },
    ],
    presenter_notes: 'Limitations are not weaknesses—they\'re honesty. Acknowledging them builds credibility. We found patterns consistent with known soil degradation mechanisms.',
  },
  {
    id: 'next_steps',
    type: 'content',
    title: '9. Next Steps & Future Directions',
    content: [
      { type: 'heading', text: 'Phase 1: Complete Data Inventory' },
      { type: 'bullet', text: 'Finalize which datasets are usable vs. too raw' },
      { type: 'bullet', text: 'Build standardized CSV format for cross-study comparison' },
      { type: 'heading', text: 'Phase 2: Expand Comparison' },
      { type: 'bullet', text: 'Include more crops (sugarcane, cotton) if data allows' },
      { type: 'bullet', text: 'Compare other monoculture pairs' },
      { type: 'heading', text: 'Phase 3: Develop Early-Warning Tools' },
      { type: 'bullet', text: 'Create soil-monitoring framework based on risk pathways' },
      { type: 'bullet', text: 'Test framework with local farmers in overlap regions' },
    ],
    presenter_notes: 'This work opens doors for practical soil monitoring. Farmers could use early-warning indicators specific to their crop type.',
  },
  {
    id: 'conclusion',
    type: 'content',
    title: 'Conclusion',
    content: [
      { type: 'heading', text: 'Key Takeaways' },
      { type: 'bullet', text: '✓ Clonal and seed-based monocultures show different soil degradation patterns' },
      { type: 'bullet', text: '✓ Clonal systems risk biological collapse; seed-based systems risk nutrient depletion' },
      { type: 'bullet', text: '✓ Different risk pathways require different management strategies' },
      { type: 'heading', text: 'Broader Implication' },
      { type: 'text', text: 'A crop\'s biological structure (clonal vs. seed-based) predicts its soil-health vulnerability better than crop identity alone.' },
      { type: 'heading', text: 'Practical Value' },
      { type: 'text', text: 'Early-warning monitoring frameworks tailored to propagation type can prevent soil-driven yield collapse.' },
    ],
    presenter_notes: 'Thank you. This research bridges data and real-world soil management. Happy to take questions.',
  },
]

export default function PresentationSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNotes, setShowNotes] = useState(false)

  const slide = SLIDES[currentSlide]
  const isMapSlide = slide.type === 'map'

  const goNext = () => {
    if (currentSlide < SLIDES.length - 1) setCurrentSlide(currentSlide + 1)
  }
  const goPrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }

  return (
    <div className="presentation-container">
      {/* Main Slide Area */}
      <div className="slide-area">
        {isMapSlide ? (
          <MapProgression />
        ) : (
          <Slide slide={slide} />
        )}
      </div>

      {/* Bottom Controls */}
      <div className="slide-footer">
        <div className="slide-controls">
          <button onClick={goPrev} disabled={currentSlide === 0} className="nav-btn">
            <ChevronLeft size={24} />
          </button>
          <div className="slide-counter">
            {currentSlide + 1} / {SLIDES.length}
          </div>
          <button onClick={goNext} disabled={currentSlide === SLIDES.length - 1} className="nav-btn">
            <ChevronRight size={24} />
          </button>
        </div>

        <button
          onClick={() => setShowNotes(!showNotes)}
          className={`notes-btn ${showNotes ? 'active' : ''}`}
        >
          {showNotes ? 'Hide Notes' : 'Presenter Notes'}
        </button>
      </div>

      {/* Presenter Notes Panel */}
      {showNotes && (
        <div className="presenter-notes-panel">
          <div className="notes-header">Presenter Notes — Slide {currentSlide + 1}</div>
          <div className="notes-content">{slide.presenter_notes}</div>
        </div>
      )}

      {/* Keyboard Navigation Hint */}
      <div className="keyboard-hint">← → Arrow keys or click buttons to navigate</div>
    </div>
  )
}

function Slide({ slide }) {
  if (slide.type === 'title') {
    return (
      <div className="slide slide-title">
        <div className="title-content">
          <h1>{slide.title}</h1>
          <p className="slide-subtitle">{slide.subtitle}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="slide slide-content">
      <h2 className="slide-title-text">{slide.title}</h2>
      <div className="slide-body">
        {slide.content.map((item, i) => {
          if (item.type === 'heading') {
            return <h3 key={i} className="content-heading">{item.text}</h3>
          }
          if (item.type === 'text') {
            return <p key={i} className="content-text">{item.text}</p>
          }
          if (item.type === 'bullet') {
            return <div key={i} className="content-bullet">• {item.text}</div>
          }
          if (item.type === 'table') {
            return (
              <table key={i} className="content-table">
                <tbody>
                  {item.rows.map((row, j) => (
                    <tr key={j} className={j === 0 ? 'table-header' : ''}>
                      <td>{row.col1}</td>
                      <td>{row.col2}</td>
                      <td>{row.col3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
