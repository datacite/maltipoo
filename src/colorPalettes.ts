export const OTHER = {
  Other: "gray",
  Missing: "#555",
  Unknown: "#555",
} as const;
export const OTHER_DOMAIN = Object.keys(OTHER);
export const OTHER_RANGE = Object.values(OTHER);

export const RESOURCE_TYPE = {
  ...OTHER,
  Audiovisual: "#AEC7E8",
  Award: "#D4AF37",
  Book: "#FF7F0E",
  "Book Chapter": "#FFBB78",
  Collection: "#D62728",
  "Computational Notebook": "#FF9896",
  "Conference Paper": "#9467BD",
  "Conference Proceeding": "#C5B0D5",
  "Data Paper": "#8C564B",
  Dataset: "#1F77B4",
  Dissertation: "#C49C94",
  Event: "#E377C2",
  Image: "#F7B6D2",
  Instrument: "#35424A",
  "Interactive Resource": "#7F7F7F",
  Journal: "#C7C7C7",
  "Journal Article": "#BCBD22",
  Model: "#DBDB8D",
  "Output Management Plan": "#17BECF",
  "Peer Review": "#9EDAE5",
  "Physical Object": "#3182BD",
  Preprint: "#6BAED6",
  Project: "#AB8DF8",
  Report: "#9ECAE1",
  Service: "#C6DBEF",
  Software: "#E6550D",
  Sound: "#FD8D3C",
  Standard: "#FDAE6B",
  "Study Registration": "#6DBB5E",
  Text: "#FDD0A2",
  Workflow: "#9F4639",
  Other: "#C59088",
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
