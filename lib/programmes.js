// Shared by the landing page and the departments page.
// Programme list follows the departments published on sasurieengg.com
// (UG: B.E. and B.Tech., four years, intake through Anna University TNEA counselling).
export const PROGRAMMES = [
  {
    name: "Computer Science and Engineering",
    short: "CSE",
    group: "computing",
    degree: "B.E.",
    line: "Software, systems and the machines they run on.",
    build: "Students build web and mobile applications, databases, operating-system components and cloud deployments.",
    tags: ["Programming", "Data structures", "Cloud"],
  },
  {
    name: "Artificial Intelligence and Data Science",
    short: "AI and DS",
    group: "computing",
    degree: "B.Tech.",
    line: "Machine learning and data-driven decision making.",
    build: "Students build recommendation engines, vision models and dashboards on real datasets, supported by a laboratory and workshops developed in partnership with IIT Bombay.",
    tags: ["Machine learning", "Statistics", "Data engineering"],
  },
  {
    name: "Computer Science and Engineering (Cyber Security)",
    short: "Cyber Security",
    group: "computing",
    degree: "B.E.",
    line: "Securing the systems and data that people depend on.",
    build: "Coursework covers threat modelling, secure software development, network defence and digital forensics.",
    tags: ["Network security", "Cryptography", "Forensics"],
  },
  {
    name: "Information Technology",
    short: "IT",
    group: "computing",
    degree: "B.Tech.",
    line: "The information systems that businesses run on.",
    build: "Students build networked applications, secure services and enterprise software.",
    tags: ["Web technologies", "Networks", "Security"],
  },
  {
    name: "Electronics and Communication Engineering",
    short: "ECE",
    group: "electronics",
    degree: "B.E.",
    line: "Circuits, signals and the communication inside every device.",
    build: "Students build embedded systems, IoT sensor nodes, VLSI designs and wireless links.",
    tags: ["Embedded systems", "VLSI", "Communication"],
  },
  {
    name: "Electrical and Electronics Engineering",
    short: "EEE",
    group: "electronics",
    degree: "B.E.",
    line: "Power, machines and control for a changing grid.",
    build: "Students work on motor drives, solar power systems and industrial automation panels.",
    tags: ["Power systems", "Control", "Renewable energy"],
  },
  {
    name: "Mechanical Engineering",
    short: "Mechanical",
    group: "core",
    degree: "B.E.",
    line: "Design and manufacturing of the physical world.",
    build: "Students produce CAD models, 3D-printed parts, machined components and thermal systems, using the CAD/CAM, thermal and workshop facilities.",
    tags: ["Design", "Manufacturing", "Thermal"],
  },
  {
    name: "Civil Engineering",
    short: "Civil",
    group: "core",
    degree: "B.E.",
    line: "Planning and building the structures people live and work in.",
    build: "Students prepare structural models, site surveys, and water and road designs, with surveying and concrete-testing work in the department laboratories.",
    tags: ["Structures", "Surveying", "Environmental"],
  },
  {
    name: "Science and Humanities",
    short: "S and H",
    group: "foundation",
    degree: "First year",
    line: "The common first year for every engineering branch.",
    build: "Covers engineering mathematics, physics, chemistry, English and programming, the foundation on which the eight engineering departments build.",
    tags: ["Mathematics", "Physics", "Communication"],
  },
];

// Postgraduate programmes, shown beside the undergraduate ones on the landing page.
// `slug` points at the department page in lib/departments.js.
export const PG_PROGRAMMES = [
  {
    name: "M.E. Computer Science and Engineering",
    short: "M.E. CSE",
    slug: "me-computer-science-and-engineering",
    group: "pg",
    degree: "M.E.",
    line: "Advanced study in computer science and engineering.",
    build: "Regular lectures by leading academicians and professionals, with workshops and seminars on a world-class curriculum.",
    tags: ["Research", "Workshops and seminars", "IIT Bombay partnership"],
  },
  {
    name: "MBA",
    short: "MBA",
    slug: "mba",
    group: "pg",
    degree: "MBA",
    line: "Management education with four specialisations.",
    build: "A foundation first year, then specialisation in the second year in Finance, HR, Marketing or Business Analytics.",
    tags: ["Finance", "HR", "Marketing", "Business Analytics"],
  },
];

// The routes into the list: what a student wants to do, and the programmes that lead there.
// Colours follow the four layers of the Sasurie mark.
export const GOALS = [
  { key: "computing", label: "Build software, data and AI", short: "Computing and data", blurb: "Software, data, AI and security: four departments built around computing.", color: "#3F6BB5", rgb: "63, 107, 181" },
  { key: "electronics", label: "Design circuits, power and devices", short: "Electronics and electrical", blurb: "Circuits, communication, power and control, from chips to the grid.", color: "#FDB913", rgb: "253, 185, 19" },
  { key: "core", label: "Design and build the physical world", short: "Core engineering", blurb: "Mechanical and civil engineering: the machines, structures and systems around us.", color: "#94C93D", rgb: "148, 201, 61" },
  { key: "pg", label: "Go further with postgraduate study", short: "Postgraduate", blurb: "Two-year master's programmes in computing and in management.", color: "#E01F26", rgb: "224, 31, 38" },
];
