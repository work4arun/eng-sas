// Content seeded from sasurieengg.com (WordPress site) — every claim here is taken
// from the college's own pages; nothing is invented. Document links point at the
// current site until the files are moved to this one (see README).

export const SITE = {
  name: "Sasurie College of Engineering",
  autonomy: "Autonomous",
  addressLines: [
    "Coimbatore Bypass (NH544), Vijayamangalam,",
    "Tiruppur district, Tamil Nadu – 638056",
  ],
  phones: ["94888 91111", "94888 92222", "94888 93333"],
  admissionPhones: ["94888 91111", "94888 92222", "94888 93333"],
  emails: ["info@sasurie.com", "sceprincipal@sasurie.com"],
  applyUrl: "https://admissions.sasurie.com/",
  studentLogin: "https://sasurie.kalvisalai.in/mob/#/",
  feePayment: "https://formbuilder.ccavenue.com/live/sasurie-college-of-engineering",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/sasurieinstitution/" },
    { label: "Facebook", href: "https://www.facebook.com/sasurieinstitution" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sasurie-institution/" },
    { label: "YouTube", href: "https://www.youtube.com/@sasurieinstitutions1919" },
    { label: "X", href: "https://twitter.com/sasurie_inst" },
  ],
};

// Navigation for the inner pages. The landing page keeps its own anchor nav.
export const ROUTES = [
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/facilities", label: "Facilities" },
  { href: "/placements", label: "Placements" },
  { href: "/admissions", label: "Admissions" },
  { href: "/disclosures", label: "Disclosures" },
  { href: "/contact", label: "Contact" },
];

// Landing footer: the four in-page anchors plus the seeded pages.
export const EXPLORE_LANDING = [
  { href: "#programmes", label: "Programmes" },
  { href: "#admissions", label: "Admissions" },
  { href: "#group", label: "Sasurie group" },
  { href: "/about", label: "About the college" },
  { href: "/departments", label: "Departments" },
  { href: "/facilities", label: "Facilities" },
  { href: "/placements", label: "Placements" },
  { href: "/disclosures", label: "Disclosures" },
  { href: "/contact", label: "Contact" },
];

export const ABOUT = {
  lede: "Sasurie College of Engineering is established by the Ponmudi Muthusamy Gounder Trust, Tiruppur, in the year 2001 by its founder Chairman Sri A.M. Kandaswami, a philanthropist and industrialist.",
  facts: [
    {
      tag: "Autonomous 2026",
      title: "Autonomous",
      color: "var(--green)",
      rgb: "148, 201, 61",
      text: "The UGC, New Delhi and Anna University, Chennai conferred autonomous status on the college in January 2026. It writes its own curriculum and conducts its own examinations.",
    },
    {
      tag: "Govt. Approved",
      title: "AICTE approved",
      color: "var(--blue)",
      rgb: "63, 107, 181",
      text: "Approved by the All India Council for Technical Education, with the Extension of Approval on file for every year from 2020-21 through 2025-26.",
    },
    {
      tag: "Affiliated Degrees",
      title: "Anna University",
      color: "var(--gold)",
      rgb: "253, 185, 19",
      text: "Programmes follow Anna University annexures; successful candidates' CGPA is sent to Anna University, Chennai for degree certificates.",
    },
    {
      tag: "Since 2001",
      title: "25 years",
      color: "var(--red)",
      rgb: "224, 31, 38",
      text: "A 10.61-acre campus near Vijayamangalam village on the Coimbatore Bypass (NH544), Tiruppur district, with 350+ industry partners and 100+ MoUs.",
    },
    {
      tag: "Students",
      title: "2,000+",
      color: "var(--blue)",
      rgb: "63, 107, 181",
      text: "More than 2,000 students enrolled across undergraduate and postgraduate programmes.",
    },
    {
      tag: "Alumni",
      title: "12,000+",
      color: "var(--gold)",
      rgb: "253, 185, 19",
      text: "An alumni network of over 12,000 professionals, with alumni association activities recorded every year.",
    },
    {
      tag: "Documents",
      title: "NAAC · NIRF · AQAR",
      color: "var(--green)",
      rgb: "148, 201, 61",
      text: "NAAC self-study documents, NIRF submissions for 2023-24 and 2024-25 and AQAR reports from 2018-19 onwards are published on the Disclosures page.",
    },
    {
      tag: "Campus",
      title: "10.61 acres",
      color: "var(--red)",
      rgb: "224, 31, 38",
      text: "LCD-equipped classrooms, auditorium and seminar halls, a computer centre, solar-backed power, Wi-Fi, hostels, sports ground and a 24-hour ATM.",
    },
  ],
  vision:
    "Our ambition is to develop a centre for imparting technical education with creativity and perform research with practical values to meet challenges of engineering environment and to achieve rural empowerment.",
  mission:
    "The institute aims to produce innovative professionals with sound subject knowledge, research experience and social character for a sustainable growth of the nation by providing adequate training to develop education with leadership qualities.",
  leadership: [
    {
      role: "Chairman",
      name: "Shri A.M. Kandaswami",
      text: "Founder Chairman of the Ponmudi Muthusamy Gounder Trust. “Education is not merely the acquisition of knowledge, but the transformation of young minds into responsible, skilled and value-driven professionals.” The college emphasises academic excellence with strong fundamentals, discipline and professional ethics, industry-integrated learning, innovation and research, and holistic personality development.",
    },
    {
      role: "Secretary",
      name: "Smt. K. Savitha Moganraj",
      text: "“We strive to bridge the gap between classroom learning and real-world application through industry collaboration, internships, skill certification programmes and innovation-driven initiatives.” Discipline, integrity, teamwork and social responsibility sit alongside technical expertise in the institution's culture.",
    },
    {
      role: "Head of the Institution",
      name: "Dr. R. Kiruba Shankar, Principal",
      text: "A Ph.D. in Electrical Engineering with more than 24 years of professional experience — over 20 in academia and 4 in industry — and a Certified LabVIEW Associate Developer (NI, USA). He has developed partnerships with 350+ industries, initiated 100+ MoUs, secured over ₹40 lakh in R&D grants and helped establish Centres of Excellence and R&D facilities worth over ₹15 crores in Industry 4.0, automation, smart manufacturing and IoT.",
    },
  ],
};

// Only establishment years the college itself states are recorded here.
export const DEPARTMENT_DETAIL = {
  CSE: { since: "2001", email: "scecse@sasurie.com" },
  "AI and DS": { email: "scesh@sasurie.com", note: "Partnered with IIT-Bombay for a laboratory and workshops designed with a world-class curriculum." },
  "CSE (Cyber Security)": { email: "scecse@sasurie.com" },
  IT: { since: "2001", email: "scecse@sasurie.com" },
  ECE: { email: "sceece@sasurie.com" },
  EEE: { since: "2002", email: "sceeee@sasurie.com" },
  Mechanical: { email: "scemech@sasurie.com" },
  Civil: { email: "scecivil@sasurie.com" },
  "Science and Humanities": { email: "scesh@sasurie.com" },
};

export const FACILITIES = [
  {
    tag: "Library",
    title: "Central Library",
    text: "A collection of over 46,468 books across 815 m² with 148 seats, and DELNET consortium access to scholarly databases and full-text journals.",
    image: "/campus/library.webp",
  },
  {
    tag: "Hostel",
    title: "Hostels",
    text: "Separate hostel facilities for boys and girls inside the campus, with security and discipline as the stated priorities.",
  },
  {
    tag: "Transport",
    title: "12 buses",
    text: "A fleet of 12 GPS-equipped buses covering the city and neighbouring areas within a 50 km radius, for students and staff.",
  },
  {
    tag: "Canteen",
    title: "Canteen, 600 seats",
    text: "A 900 m² canteen seating 600, with hygienic catering, purified drinking water and modern cooking appliances, open every working day.",
  },
  {
    tag: "Health",
    title: "Dispensary & ambulance",
    text: "A campus dispensary with bed facility and an ambulance on standby for medical emergencies, for students and staff.",
  },
  {
    tag: "Money",
    title: "24-hour ATM",
    text: "An ATM inside the campus so students do not need to carry fees or cash around, available to hostellers and day scholars.",
  },
  {
    tag: "Sport",
    title: "Sports & gymnasium",
    text: "Coaching in sports and athletics by a qualified Physical Director and trainee faculty, with free access to the ground and gym on non-working days.",
    image: "/campus/sports.webp",
  },
  {
    tag: "Labs",
    title: "Seminar halls & laboratories",
    text: "Air-conditioned seminar halls and an auditorium for conferences and workshops, plus departmental laboratories and a high-speed internet computer centre.",
    image: "/campus/seminar-hall.webp",
  },
  {
    tag: "Ideas",
    title: "Incubation Centre",
    text: "A platform to translate ideas into products, with networking across entrepreneurs, customers and support agencies, and minimal commercial value taken.",
  },
  {
    tag: "Research",
    title: "Research & Development Cell",
    text: "Established to endorse, synchronise and implement R&D programmes, and to build the infrastructure and environment for a research culture — including Smart India Hackathon participation, patents and IPR programmes.",
  },
  {
    tag: "Campus",
    title: "Wi-Fi, power & access",
    text: "Campus-wide high-speed Wi-Fi, a power house with solar panels, UPS systems and inverters for uninterrupted supply, and ramps, rails and washrooms for differently-abled students.",
  },
  {
    tag: "Entrepreneurship",
    title: "EDC & industrial visits",
    text: "An Entrepreneurship Development Cell that nurtures entrepreneurial skills, with industrial visits giving practical exposure to emerging technologies.",
  },
];

export const PLACEMENT = {
  lede: "The Department of Placement and Career Development (DPCD) works to place students in companies before they finish their programmes, and to train them for the recruitment process they will meet.",
  overview: [
    "The DPCD is run by a Placement Director with a full-time permanent coordinator. Its office sits in a separate air-conditioned block with audio-visual facilities for presentations, written tests, group discussions and interviews.",
    "The department focuses on developing students' technical knowledge and soft skills to meet corporate recruitment processes, and on counselling and guiding students towards their career placement.",
  ],
  objectives: [
    "Develop technical knowledge and soft skills for the corporate recruitment process.",
    "Groom interpersonal skills, self-presentation, a positive attitude, aptitude and career planning.",
    "Place the maximum number of students through campus and off-campus drives.",
  ],
  highlights: [
    "Industry–institution interaction sessions.",
    "Full-time trainers for soft skills and aptitude.",
    "Soft-skills training by experts from outside the college.",
    "Workshops for aptitude and in-plant training.",
  ],
  contact: { email: "sceplacement@sasurie.com", phone: "91 94425 93803" },
  note: "The college publishes its recruiter list on the placements page. It does not publish placement percentages or salary statistics, so none are claimed here.",
};

export const ADMISSION = {
  lede: "Admissions are open. Undergraduate seats are filled through Anna University TNEA counselling on Class-12 merit, postgraduate seats through TANCET or the Consortium CET, and management-quota seats through the college office.",
  steps: [
    {
      title: "Choose your programme and check eligibility",
      text: "Pick the B.E. or B.Tech. programme you want (departments have their own pages here), or an M.E./MBA if you have finished a degree, then check the eligibility tables below.",
    },
    {
      title: "Apply through the right route",
      text: "UG: Anna University TNEA counselling, using your Class-12 marks. PG: TANCET or the Common Entrance Test by the Consortium of Self-Financing Professional Colleges. Management quota: apply to the college directly.",
    },
    {
      title: "Submit your documents",
      text: "Gather your transcripts and certificates and submit them — complete submissions are processed faster. The college publishes its academic-year-wise fee refund policy for withdrawals.",
    },
    {
      title: "Confirm your seat and plan funding",
      text: "The Sasurie Talent Examination (STE) is an all-India admission test for merit scholarships with up to a 100% fee waiver. Differently-abled, single-parent and sports-quota scholarships (100% waiver) are also available.",
    },
  ],
  ugEligibility: [
    { category: "General", hsc: "Physics + Chemistry + Maths: 45% (minimum 135 of 300)", diploma: "45%" },
    { category: "Backward", hsc: "Physics + Chemistry + Maths: 40% (minimum 120 of 300)", diploma: "40%" },
    { category: "Most Backward", hsc: "Physics + Chemistry + Maths: 40% (minimum 120 of 300)", diploma: "40%" },
    { category: "SC / ST", hsc: "Physics + Chemistry + Maths: 40% (minimum 120 of 300)", diploma: "40%" },
  ],
  ugNote: "Pass in any recognised Bachelor's degree in Science of minimum 3 years duration with Mathematics as a subject is accepted for the relevant postgraduate routes.",
  pgEligibility: [
    { course: "M.E. Computer Science and Engineering", requirement: "B.E./B.Tech. in EEE, ECE, Electronics, IT, CSE, I&C, E&I or Instrumentation; or M.C.A.; or M.Sc. 5-year integrated in IT, CS or Software Engineering." },
    { course: "MBA (HR / Finance / Marketing / Business Analytics)", requirement: "A recognised Bachelor's degree of at least 3 years — 10+2+3/4/5, 10+3 diploma +3, B.E./B.Tech./B.Arch/B.Pharm, or 10+2+AMIE — with the minimum percentage of marks; qualify in TANCET or the Consortium CET." },
  ],
  scholarships: [
    { title: "Sasurie Talent Examination (STE)", text: "An all-India admission test for merit scholarships in the institution, with up to a 100% fee waiver." },
    { title: "Sports quota", text: "100% fee waiver for sports-quota admissions." },
    { title: "Differently-abled students", text: "Scholarships for differently-abled students, with campus access facilities (ramps, rails, washrooms)." },
    { title: "Single parent", text: "Scholarships for students from single-parent families." },
  ],
  refund: "Fee refunds for withdrawals follow the college's academic-year-wise refund policy (published from 2024-25 onwards).",
};

export const DISCLOSURES = [
  {
    group: "NAAC",
    note: "National Assessment and Accreditation Council documents: IIQA (Institutional Information for Quality Assessment), SSR (Self Study Report), the NAAC accreditation certificate and the extended profile of the college.",
    href: "https://sasurieengg.com/naac/",
  },
  {
    group: "NIRF",
    note: "National Institutional Ranking Framework submissions for 2024-25 and 2023-24, with Data Capture Sheets for overall and innovation categories.",
    href: "https://sasurieengg.com/nirf-ranking/",
  },
  {
    group: "AQAR",
    note: "Annual Quality Assurance Reports for 2018-19, 2019-20, 2020-21, 2021-22, 2022-23 and 2023-24, criteria 1 to 7.",
    href: "https://sasurieengg.com/aqar/",
  },
  {
    group: "AICTE — Extension of Approval",
    note: "Extension of Approval documents for 2020-21, 2021-22, 2022-23, 2023-2024, 2024-2025 and 2025-2026.",
    href: "https://sasurieengg.com/eoa/",
  },
  {
    group: "Policies & Strategic Plan",
    note: "Institutional policies and the strategic plan, published by the college.",
    href: "https://sasurieengg.com/policies-strategic-plan/",
  },
  {
    group: "IQAC",
    note: "Internal Quality Assurance Cell — composition, minutes and quality initiatives.",
    href: "https://sasurieengg.com/internal-quality-assurance-cell/",
    file: { label: "IQAC Cell (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/01/IQAC-Cell.pdf" },
  },
  {
    group: "Acts & Statutes",
    note: "The college's acts and statutes, as approved for the autonomous institution.",
    href: "https://sasurieengg.com/wp-content/uploads/2025/11/acts-statutes.pdf",
  },
  {
    group: "Board of Studies",
    note: "Members list for the Board of Studies.",
    file: { label: "Board of Study Members List (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/02/Board-of-Study-Members-List-1.pdf" },
  },
  {
    group: "Finance Committee",
    note: "Finance committee records.",
    file: { label: "Finance Committee (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/02/Finance-Committee.pdf.pdf" },
  },
  {
    group: "Institution–Industry Cell",
    note: "The cell that runs industry partnerships, internships and MoUs.",
    file: { label: "Institution–Industry Cell (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/01/Institution-Industry-cell.pdf" },
  },
  {
    group: "Examinations",
    note: "The Controller of Examinations office, established in January 2026 after the conferment of autonomous status. Results are compiled here and sent to Anna University, Chennai for provisional and degree certificates.",
    href: "https://sasurieengg.com/examinations/",
  },
  {
    group: "Admission brochure",
    note: "The college's admission brochure (PDF).",
    href: "https://sasurieengg.com/wp-content/uploads/2025/11/Flyer-college.pdf",
  },
];

export const DEPARTMENT_CONTACTS = [
  { name: "Principal", email: "sceprincipal@sasurie.com" },
  { name: "Computer Science and Engineering", email: "scecse@sasurie.com" },
  { name: "Electronics and Communication Engineering", email: "sceece@sasurie.com" },
  { name: "Electrical and Electronics Engineering", email: "sceeee@sasurie.com" },
  { name: "Mechanical Engineering", email: "scemech@sasurie.com" },
  { name: "Civil Engineering", email: "scecivil@sasurie.com" },
  { name: "Science and Humanities", email: "scesh@sasurie.com" },
  { name: "MBA", email: "scemba@sasurie.com" },
  { name: "Placement (DPCD)", email: "sceplacement@sasurie.com" },
  { name: "Controller of Examinations", email: "coe@sasurie.com" },
];
