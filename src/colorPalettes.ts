export const OTHER = {
  Other: "gray",
  Missing: "#555",
  Unknown: "#555",
} as const;
export const OTHER_DOMAIN = Object.keys(OTHER);
export const OTHER_RANGE = Object.values(OTHER);

export const RESOURCE_TYPE = {
  ...OTHER,
  Audiovisual: "#A6C4FF",
  Award: "#D5AC2B",
  Book: "#6D702B",
  "Book Chapter": "#FFDBA0",
  Collection: "#007A5B",
  "Computational Notebook": "#FFAEAE",
  "Conference Paper": "#8E5BAE",
  "Conference Proceeding": "#AC90BA",
  "Data Paper": "#7C4E47",
  Dataset: "#00B1E2",
  Dissertation: "#B79D99",
  Event: "#E377C2",
  Image: "#FFCCF0",
  Instrument: "#2C3A44",
  "Interactive Resource": "#65716A",
  Journal: "#B1CBB3",
  "Journal Article": "#B5C11F",
  Model: "#6AFFC7",
  "Output Management Plan": "#00B0B9",
  "Peer Review": "#4190DE",
  "Physical Object": "#0B5E8E",
  Preprint: "#89F4F6",
  Project: "#B19BFE",
  Report: "#83A8B9",
  Service: "#D0ECFF",
  Software: "#E25003",
  Sound: "#FE8256",
  Standard: "#EBA45D",
  "Study Registration": "#6DBB5E",
  Text: "#FFE2D7",
  Workflow: "#9F3F34",
  Other: "#C07E62",
}
export const RESOURCE_TYPE_DOMAIN = Object.keys(RESOURCE_TYPE);
export const RESOURCE_TYPE_RANGE = Object.values(RESOURCE_TYPE);

// Source:  https://r-charts.com/color-palettes/#discrete
// paletteer_d("ggthemes::Tableau_20")
export const LICENSE_RANGE = [
  '#4E79A7',
  '#A0CBE8',
  '#F28E2B',
  '#FFBE7D',
  '#59A14F',
  '#8CD17D',
  '#B6992D',
  '#F1CE63',
  '#499894',
  '#86BCB6',
  '#E15759',
  '#FF9D9A',
  '#79706E',
  '#BAB0AC',
  '#D37295',
  '#FABFD2',
  '#B07AA1',
  '#D4A6C8',
  '#9D7660',
  '#D7B5A6',
]


export const IDENTIFIER_DOMAIN = [
  'DOI',
  ...OTHER_DOMAIN
]

// Source:  https://r-charts.com/color-palettes/#discrete
// paletteer_d("ggthemes::Classic_Green_Orange_6")
export const IDENTIFIER_RANGE = [
  '#7B66D2FF',
  // '#DC5FBDFF',
  // '#94917BFF',
  // '#995688FF',
  // '#D098EEFF',
  // '#D7D5C5FF',
  ...OTHER_RANGE
]


// ORCID: #2CA02C


export const CONTRIBUTOR_DOMAIN = [
  'Creator',
  'Data Curator',
  'Project Leader'
]

export const CONTRIBUTOR_RANGE = [
  'red',
  'green',
  'blue'
]


export const AFFILIATION_DOMAIN = [
  'Affiliation 1',
  'Affiliation 2',
  'Affiliation 3'
]

export const AFFILIATION_RANGE = [
  'red',
  'green',
  'blue'
]



export const FIELD_OF_SCIENCE_DOMAIN = [
  'No Field of Science',
  'Natural sciences',
  'Mathematics',
  'Computer and information sciences',
  'Physical sciences',
  'Chemical sciences',
  'Earth and related environmental sciences',
  'Biological sciences',
  'Other natural sciences',
  'Engineering and technology',
  'Civil engineering',
  'Electrical engineering, electronic engineering, information engineering',
  'Mechanical engineering',
  'Chemical engineering',
  'Materials engineering',
  'Medical engineering',
  'Environmental engineering',
  'Environmental biotechnology',
  'Industrial biotechnology',
  'Nano-technology',
  'Other engineering and technologies',
  'Medical and health sciences',
  'Basic medicine',
  'Clinical medicine',
  'Health sciences',
  'Medical biotechnology',
  'Other medical sciences',
  'Agricultural sciences',
  'Agriculture, forestry, and fisheries',
  'Animal and dairy science',
  'Veterinary science',
  'Agricultural biotechnology',
  'Other agricultural sciences',
  'Social sciences',
  'Psychology',
  'Economics and business',
  'Educational sciences',
  'Sociology',
  'Law',
  'Political science',
  'Social and economic geography',
  'Media and communications',
  'Other social sciences',
  'Humanities',
  'History and archaeology',
  'Languages and literature',
  'Philosophy, ethics and religion',
  'Arts (arts, history of arts, performing arts, music)',
  'Other humanities'
]

export const FIELD_OF_SCIENCE_RANGE = [
  '#d9d9d9',
  '#ffffb3',
  '#ccebc5',
  '#8dd3c7',
  '#8dd3c7',
  '#8dd3c7',
  '#8dd3c7',
  '#8dd3c7',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#8dd3c7',
  '#80b1d3',
  '#b3de69',
  '#fdb462',
  '#fccde5',
  '#ccebc5',
  '#ccebc5',
  '#ffed6f'
]


export const REGISTRATION_AGENCY_DOMAIN = [
  'No Registration Agency',
  'Airiti',
  'CNKI',
  'Crossref',
  'DataCite',
  'ISTIC',
  'JaLC',
  'KISTI',
  'mEDRA',
  'OP'
]

export const REGISTRATION_AGENCY_RANGE = [
  '#d9d9d9',
  '#ffffb3',
  '#ccebc5',
  '#E81A31',
  '#159DEA',
  '#8dd3c7',
  '#8dd3c7',
  '#8dd3c7',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#80b1d3',
  '#8dd3c7',
  '#80b1d3',
  '#b3de69',
  '#fdb462',
  '#fccde5',
  '#ccebc5',
  '#ccebc5',
  '#ffed6f'
]
