export const presentationSections = [
  { id: 'hero', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'question', label: 'Question' },
  { id: 'crops', label: 'Crop Pair' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'selection', label: 'Selection' },
  { id: 'hotspot', label: 'Hotspot' },
  { id: 'gap', label: 'Data Gap' },
  { id: 'pivot', label: 'Pivot' },
  { id: 'datasets', label: 'Candidates' },
  { id: 'mapdata', label: 'Data Map' },
  { id: 'criteria', label: 'Criteria' },
  { id: 'status', label: 'Status' },
  { id: 'interpretation', label: 'Discussion' },
  { id: 'limitations', label: 'Limits' },
  { id: 'next', label: 'Next Steps' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const soilIndicators = [
  'pH',
  'SOC / OM',
  'Total nitrogen',
  'Available phosphorus',
  'Available potassium',
  'Bulk density',
  'CEC',
  'Microbial indicators',
  'Enzyme activity',
  'Yield',
]

export const cropCards = [
  {
    name: 'Potato',
    subtype: 'Clonal crop',
    detail: 'Potato grows from tubers rather than seed, so it works as the clonal case in the comparison.',
  },
  {
    name: 'Maize',
    subtype: 'Seed-based crop',
    detail: 'Maize grows from seed, so it works as the seed-based case in the comparison.',
  },
]

export const cropCandidateGroups = {
  clonal: ['Potato', 'Sweet potato', 'Cassava', 'Banana / plantain', 'Sugar cane'],
  seed: ['Maize', 'Rice', 'Wheat'],
}

export const cropCandidates = [
  {
    crop: 'Maize',
    propagation: 'Seed-based',
    reason: 'Large staple crop with strong comparison value and better data potential.',
    filter: 'Strong shortlist',
    decision: 'Selected',
  },
  {
    crop: 'Rice',
    propagation: 'Seed-based',
    reason: 'Important staple crop, but less aligned with the final comparison direction.',
    filter: 'Possible shortlist',
    decision: 'Not selected',
  },
  {
    crop: 'Wheat',
    propagation: 'Seed-based',
    reason: 'Important crop, but the maize comparison path was stronger.',
    filter: 'Possible shortlist',
    decision: 'Not selected',
  },
  {
    crop: 'Potato',
    propagation: 'Clonal',
    reason: 'Important crop with strong continuous-cropping relevance and better data potential.',
    filter: 'Strong shortlist',
    decision: 'Selected',
  },
  {
    crop: 'Sweet potato',
    propagation: 'Clonal',
    reason: 'Useful clonal candidate, but not as strong as potato for the final pairing.',
    filter: 'Possible shortlist',
    decision: 'Not selected',
  },
  {
    crop: 'Cassava',
    propagation: 'Clonal',
    reason: 'Relevant clonal crop globally, but weaker fit for the China-focused project frame.',
    filter: 'Lower shortlist',
    decision: 'Not selected',
  },
  {
    crop: 'Banana / plantain',
    propagation: 'Clonal',
    reason: 'Biologically relevant, but weak fit for the chosen country and data frame.',
    filter: 'Lower shortlist',
    decision: 'Not selected',
  },
  {
    crop: 'Sugar cane',
    propagation: 'Clonal',
    reason: 'Potentially useful, but potato gave a cleaner comparison path.',
    filter: 'Possible shortlist',
    decision: 'Not selected',
  },
]

export const cropFilterLegend = {
  'Strong shortlist': 3,
  'Possible shortlist': 2,
  'Lower shortlist': 1,
}

export const strategyChecklist = [
  'Same country',
  'Same province or region preferred',
  'Same local environmental context preferred',
  'Separate crop fields allowed',
  'Each crop dataset must stay internally land-consistent',
  'Time trend or continuous-cropping duration preferred',
]

export const pipelineSteps = [
  {
    label: 'FAOSTAT',
    body: 'Helped choose China as the strongest country frame and helped narrow the crop shortlist instead of choosing crops randomly.',
  },
  {
    label: 'MapSPAM',
    body: 'Helped show where maize and potato overlap on the map, so the local search had a clear starting point.',
  },
  {
    label: 'Guizhou',
    body: 'Became the province of interest because the overlap pattern there looked especially useful.',
  },
  {
    label: 'Qixingguan / Bijie',
    body: 'Became the original hotspot for checking whether a fair same-local dataset was actually possible.',
  },
]

export const evaluationCriteria = [
  {
    title: 'Crop identity',
    body: 'The dataset should clearly represent potato or maize, not a vague mixed crop group.',
  },
  {
    title: 'Location',
    body: 'The field, site, grid cells, or region should be clear enough to follow through the project.',
  },
  {
    title: 'Time structure',
    body: 'The dataset should show change over time or across continuous-cropping duration.',
  },
  {
    title: 'Soil-health variables',
    body: 'The dataset should include useful soil or crop indicators, not only general description.',
  },
  {
    title: 'Land consistency',
    body: 'I do not want to compare soil values from random places. For each crop, the soil data should come from the same field, site, trial, grid cells, or clearly defined region, so the comparison stays fair.',
    highlight: true,
  },
]

export const doneItems = [
  'Potato and maize were selected through data-supported filtering',
  'China was selected as the country frame',
  'Guizhou and Qixingguan were identified as the main overlap hotspot',
  'The ideal same-local dataset was searched for directly',
  'The ideal same-local public dataset was not found',
  'The project pivot was defined instead of forcing weak data',
  'The strongest current candidates are Xing et al. 2024 for potato and Wei et al. 2026 for maize',
  'The project is currently in dataset feasibility and preprocessing stage',
]

export const notDoneItems = [
  'Full raw data download',
  'Preprocessing and structure inspection',
  'Variable cleaning and standardization',
  'Final comparison analysis',
  'Final result visualization',
]

export const nextSteps = [
  'Download selected raw datasets',
  'Inspect file structures',
  'Build the raw dataset inventory',
  'Clean and standardize variables',
  'Create maize and potato processed datasets',
  'Apply trend analysis and soil-health comparison logic',
  'Visualize comparison patterns',
]
