// Content for the college website, drawn from the college's own published pages
// (sasurieengg.com). Document links point at the current site until the files are
// moved to this one (see README).

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
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/facilities", label: "Facilities" },
  { href: "/placements", label: "Placements" },
  { href: "/admissions", label: "Admissions" },
  { href: "/disclosures", label: "Disclosures" },
  { href: "/contact", label: "Contact" },
];

// Landing footer: the in-page anchors plus the inner pages.
export const EXPLORE_LANDING = [
  { href: "/", label: "Home" },
  { href: "/departments", label: "Programmes" },
  { href: "/admissions", label: "Admissions" },
  { href: "/#group", label: "Sasurie Group" },
  { href: "/about", label: "About the college" },
  { href: "/facilities", label: "Facilities" },
  { href: "/placements", label: "Placements" },
  { href: "/disclosures", label: "Disclosures" },
  { href: "/contact", label: "Contact" },
];

export const ABOUT = {
  lede: "Sasurie College of Engineering was established in 2001 by the Ponmudi Muthusamy Gounder Trust, Tiruppur, under its founder Chairman Shri A.M. Kandaswami, a philanthropist and industrialist.",
  facts: [
    {
      tag: "Since January 2026",
      title: "Autonomous status",
      color: "var(--green)",
      rgb: "148, 201, 61",
      text: "The UGC, New Delhi and Anna University, Chennai conferred autonomous status on the college in January 2026. The college designs its own curriculum and conducts its own examinations.",
    },
    {
      tag: "Approved",
      title: "AICTE approved",
      color: "var(--blue)",
      rgb: "63, 107, 181",
      text: "Approved by the All India Council for Technical Education, with an Extension of Approval for every academic year from 2020-21 to 2025-26.",
    },
    {
      tag: "Degrees",
      title: "Anna University",
      color: "var(--gold)",
      rgb: "253, 185, 19",
      text: "Programmes follow Anna University regulations. Results are compiled by the college and sent to Anna University, Chennai for degree certificates.",
    },
    {
      tag: "Since 2001",
      title: "25 years",
      color: "var(--red)",
      rgb: "224, 31, 38",
      text: "A 10.61-acre campus near Vijayamangalam on the Coimbatore Bypass (NH544), with more than 350 industry partners and over 100 MoUs.",
    },
    {
      tag: "Students",
      title: "2,000+",
      color: "var(--blue)",
      rgb: "63, 107, 181",
      text: "More than 2,000 students are enrolled across undergraduate and postgraduate programmes.",
    },
    {
      tag: "Alumni",
      title: "12,000+",
      color: "var(--gold)",
      rgb: "253, 185, 19",
      text: "An alumni network of more than 12,000 graduates, with alumni association activities held every year.",
    },
  ],
  vision:
    "To be a centre of technical education that combines creativity with research of practical value, meets the challenges of the engineering environment, and contributes to rural empowerment.",
  mission:
    "To produce innovative professionals with sound subject knowledge, research experience and social character, and to develop their leadership qualities through adequate training, for the sustainable growth of the nation.",
  values: [
    "Academic integrity",
    "Quiet excellence",
    "Collaborative spirit",
    "Critical thinking",
    "Inclusive culture",
    "Social impact",
  ],
  qualityPolicy:
    "Eminence in teaching through quality programmes, to produce self-sustained, adaptable young professionals with social relevance.",
  leadership: [
    {
      role: "Chairman",
      name: "Shri A.M. Kandaswami",
      text: "Founder Chairman of the Ponmudi Muthusamy Gounder Trust. “Education is not merely the acquisition of knowledge, but the transformation of young minds into responsible, skilled and value-driven professionals.” His message links the college's mission to India's Viksit Bharat 2047 vision, with a focus on innovation, sustainability, entrepreneurship and technology. The college's priorities are academic excellence with strong fundamentals, discipline and professional ethics, industry-integrated learning, innovation, research and entrepreneurship, and holistic personality development.",
    },
    {
      role: "Secretary",
      name: "Smt. K. Savitha Moganraj",
      text: "“We strive to bridge the gap between classroom learning and real-world application through industry collaboration, internships, skill certification programmes and innovation-driven initiatives.” Her message describes holistic education that builds intellectual growth, professional competence and ethical values, with character, integrity, teamwork and social responsibility alongside communication, leadership, entrepreneurial thinking and lifelong learning.",
    },
    {
      role: "Head of the Institution",
      name: "Dr. R. Kiruba Shankar, Principal",
      text: "Holds a Ph.D. in Electrical Engineering and is a Certified LabVIEW Associate Developer (NI, USA), with more than 24 years of experience: over 20 in academia and 4 in industry. Earlier roles include Director of Industry–Institute Partnership, Professor and Head, Director of Technology Collaboration and Innovation, and Chairman of the Board of Studies; he is an AICTE Margadarshak member. He has led curriculum modernisation under NEP 2020, accreditation work and faculty development; built partnerships with 350+ industries and over 100 MoUs; secured more than ₹40 lakh in research and event grants from agencies including UGC, AICTE, DST-SERB, CSIR and AERB; and helped establish Centres of Excellence and R&D facilities worth over ₹15 crore in Industry 4.0, automation, smart manufacturing and IoT. He has supervised three Ph.D. scholars, guided more than 20 M.E. scholars, delivered over 150 invited talks and received national awards for industry–academia partnership.",
    },
  ],
};

export const GOVERNING_COUNCIL = {
  roles: [
    "Approves merit-based scholarships, fellowships, studentships, medals, prizes and certificates, on the recommendation of the Academic Council.",
    "Approves new degree and diploma programmes.",
    "Approves the recruitment of teaching faculty and the Principal, following UGC and State Government policies.",
    "Approves the college's annual budget before it is submitted to the UGC.",
    "Carries out other functions, and forms committees, as needed for the development of the college.",
  ],
  members: [
    "Shri A.M. Kandaswami, Chairman, Sasurie Group of Institutions — Chairman.",
    "Smt. K. Savitha, Secretary, Sasurie Group of Institutions — member from the Trust.",
    "Smt. A.K. Swathi, Trustee — member from the Trust.",
    "Mr. S. Moganraj, eminent professional — nominated by the management.",
    "Prof. Dr. S. Kuppuswami, former Dean and Vice-Chancellor (i/c), Pondicherry University — educationalist nominated by the Trust.",
    "Prof. Dr. E. Balagurusamy, former Vice-Chancellor, Anna University, Chennai — educationalist nominated by the Trust.",
    "Mr. S. M. Sampth Kumar, cyber security expert, formerly of Accenture — industry expert nominated by the Trust.",
    "Dr. R. Kiruba Shankar, Principal, Sasurie College of Engineering — Member Secretary.",
  ],
};

export const FACILITIES = [
  {
    tag: "Library",
    title: "Central Library",
    text: "A collection of more than 46,000 volumes across 815 m² with 148 reading seats, and DELNET consortium access to scholarly databases and full-text journals.",
    image: "/campus/library.webp",
  },
  {
    tag: "Hostel",
    title: "Hostels",
    text: "Separate on-campus hostels for boys and girls, with a focus on security and discipline.",
  },
  {
    tag: "Transport",
    title: "College transport",
    text: "A fleet of 12 GPS-enabled buses serving the city and nearby areas within a 50 km radius, for students and staff.",
  },
  {
    tag: "Canteen",
    title: "Canteen",
    text: "A 900 m² canteen seating 600, with hygienic catering, purified drinking water and modern cooking equipment, open every working day.",
  },
  {
    tag: "Health",
    title: "Dispensary and ambulance",
    text: "A campus dispensary with beds, and an ambulance on standby for medical emergencies, serving students and staff.",
  },
  {
    tag: "Banking",
    title: "24-hour ATM",
    text: "An on-campus ATM, available to hostellers and day scholars alike.",
  },
  {
    tag: "Sports",
    title: "Sports and gymnasium",
    text: "Coaching in sports and athletics under a qualified Physical Director and trainee faculty, with free access to the ground and gymnasium on non-working days. Indoor games include chess, carrom, table tennis and badminton.",
    image: "/campus/sports.webp",
  },
  {
    tag: "Laboratories",
    title: "Seminar halls and laboratories",
    text: "Air-conditioned seminar halls and an auditorium for conferences and workshops, together with departmental laboratories and a computer centre with high-speed internet.",
    image: "/campus/seminar-hall.webp",
  },
  {
    tag: "Innovation",
    title: "Incubation Centre",
    text: "A platform for turning ideas into products, with networking opportunities across entrepreneurs, customers and support agencies.",
  },
  {
    tag: "Research",
    title: "Research and Development Cell",
    text: "Set up to promote, coordinate and implement R&D programmes and to build the infrastructure and environment for a research culture, including Smart India Hackathon participation and patent and IPR programmes.",
  },
  {
    tag: "Infrastructure",
    title: "Connectivity, power and accessibility",
    text: "Campus-wide high-speed Wi-Fi; a power house with solar panels, UPS systems and inverters for uninterrupted supply; and ramps, rails and washrooms for differently-abled students.",
  },
  {
    tag: "Enterprise",
    title: "Entrepreneurship and industrial visits",
    text: "An Entrepreneurship Development Cell that nurtures entrepreneurial skills, and industrial visits that give practical exposure to emerging technologies.",
  },
];

export const PLACEMENT = {
  lede: "The Department of Placement and Career Development (DPCD) prepares students for the recruitment process and works to place them with companies before they complete their programmes.",
  overview: [
    "The DPCD is led by a Placement Director with a full-time permanent coordinator. Its office is in a separate air-conditioned block with audio-visual facilities for presentations, written tests, group discussions and interviews. The office also hosts company representatives visiting the campus.",
    "The department develops students' technical knowledge and soft skills for corporate recruitment, and counsels and guides them towards career placement.",
  ],
  objectives: [
    "Develop technical knowledge and soft skills for the corporate recruitment process.",
    "Build interpersonal skills, self-presentation, a positive attitude, aptitude and career planning.",
    "Place the maximum number of students through campus and off-campus drives.",
  ],
  highlights: [
    "Industry–institution interaction sessions.",
    "Full-time trainers for soft skills and aptitude.",
    "Soft-skills training by external experts.",
    "Workshops on aptitude and in-plant training.",
  ],
  contact: { email: "sceplacement@sasurie.com", phone: "+91 94425 93803" },
  note: "For the list of recruiting companies and placement statistics, please contact the placement office.",
};

export const ADMISSION = {
  lede: "Admissions are open. Undergraduate seats are filled through Anna University TNEA counselling on Class 12 marks, postgraduate seats through TANCET or the Consortium CET, and management-quota seats through the college office.",
  steps: [
    {
      title: "Choose your programme and check eligibility",
      text: "Select a B.E. or B.Tech. programme, or an M.E. or MBA programme if you have completed a degree, and review the eligibility criteria below.",
    },
    {
      title: "Apply through the right route",
      text: "UG: Anna University TNEA counselling, based on your Class 12 marks. PG: TANCET or the Common Entrance Test of the Consortium of Self-Financing Professional Colleges. Management quota: apply to the college directly.",
    },
    {
      title: "Submit your documents",
      text: "Submit your mark sheets and certificates. Complete submissions are processed faster.",
    },
    {
      title: "Confirm your seat and review scholarships",
      text: "The Sasurie Talent Examination (STE) is an all-India admission test for merit scholarships, with up to a 100% fee waiver. Scholarships are also available for sports-quota, differently-abled and single-parent students.",
    },
  ],
  ugEligibility: [
    { category: "General", hsc: "minimum 45% in Physics, Chemistry and Mathematics (135 of 300)", diploma: "45%" },
    { category: "Backward Class (BC)", hsc: "minimum 40% in Physics, Chemistry and Mathematics (120 of 300)", diploma: "40%" },
    { category: "Most Backward Class (MBC)", hsc: "minimum 40% in Physics, Chemistry and Mathematics (120 of 300)", diploma: "40%" },
    { category: "SC / ST", hsc: "minimum 40% in Physics, Chemistry and Mathematics (120 of 300)", diploma: "40%" },
  ],
  ugNote: "These are minimum eligibility marks. Seats are allotted through TNEA counselling.",
  pgEligibility: [
    { course: "M.E. Computer Science and Engineering", requirement: "B.E./B.Tech. in EEE, ECE, Electronics, IT, CSE, Instrumentation and Control, or Electronics and Instrumentation; M.C.A.; or a five-year integrated M.Sc. in IT, Computer Science or Software Engineering." },
    { course: "MBA (HR / Finance / Marketing / Business Analytics)", requirement: "A recognised Bachelor's degree of at least three years (10+2+3, 10+2+4 or 10+2+5; a 10+3 diploma followed by a three-year degree; B.E./B.Tech./B.Arch./B.Pharm.; or 10+2+AMIE) with the minimum percentage of marks, and a qualifying score in TANCET or the Consortium CET." },
  ],
  scholarships: [
    { title: "Sasurie Talent Examination (STE)", text: "An all-India admission test for merit scholarships, with up to a 100% fee waiver." },
    { title: "Sports quota", text: "A 100% fee waiver for sports-quota admissions." },
    { title: "Differently-abled students", text: "Scholarships for differently-abled students, supported by campus access facilities such as ramps, rails and washrooms." },
    { title: "Single parent", text: "Scholarships for students from single-parent families." },
  ],
  refund: "Refunds on withdrawal follow the college's academic-year-wise fee refund policy. The policy for 2024-25 is available as a PDF below; please contact the admissions office for any other year.",
  refundPolicyUrl: "https://sasurieengg.com/wp-content/uploads/2025/11/Refund-policy-SCE-final.pdf",
  brochureUrl: "https://sasurieengg.com/wp-content/uploads/2025/11/Flyer-college.pdf",
};

export const DISCLOSURES = [
  {
    group: "NAAC",
    note: "National Assessment and Accreditation Council documents: the IIQA (Institutional Information for Quality Assessment), the SSR (Self Study Report), the accreditation certificate and the extended profile.",
    href: "https://sasurieengg.com/naac/",
  },
  {
    group: "NIRF",
    note: "National Institutional Ranking Framework submissions for 2023-24 and 2024-25, with Data Capture Sheets for the overall and innovation categories.",
    href: "https://sasurieengg.com/nirf-ranking/",
  },
  {
    group: "AQAR",
    note: "Annual Quality Assurance Reports for 2018-19 to 2023-24, covering criteria 1 to 7.",
    href: "https://sasurieengg.com/aqar/",
  },
  {
    group: "AICTE Extension of Approval",
    note: "Extension of Approval documents for 2020-21 to 2025-26.",
    href: "https://sasurieengg.com/eoa/",
  },
  {
    group: "Policies and Strategic Plan",
    note: "Institutional policies and the strategic plan.",
    href: "https://sasurieengg.com/policies-strategic-plan/",
  },
  {
    group: "IQAC",
    note: "The Internal Quality Assurance Cell: composition, minutes and quality initiatives.",
    href: "https://sasurieengg.com/internal-quality-assurance-cell/",
    file: { label: "IQAC Cell (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/01/IQAC-Cell.pdf" },
  },
  {
    group: "Acts and Statutes",
    note: "The college's acts and statutes.",
    href: "https://sasurieengg.com/wp-content/uploads/2025/11/acts-statutes.pdf",
  },
  {
    group: "Board of Studies",
    note: "List of Board of Studies members.",
    file: { label: "Board of Studies Members List (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/02/Board-of-Study-Members-List-1.pdf" },
  },
  {
    group: "Finance Committee",
    note: "Finance Committee records.",
    file: { label: "Finance Committee (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/02/Finance-Committee.pdf.pdf" },
  },
  {
    group: "Institution–Industry Cell",
    note: "The cell that manages industry partnerships, internships and MoUs.",
    file: { label: "Institution–Industry Cell (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/01/Institution-Industry-cell.pdf" },
  },
  {
    group: "Examinations",
    note: "The Controller of Examinations office, established in January 2026 after the college received autonomous status. Results are compiled here and sent to Anna University, Chennai for provisional and degree certificates.",
    href: "https://sasurieengg.com/examinations/",
  },
  {
    group: "Admission brochure",
    note: "The college's admission brochure (PDF).",
    href: "https://sasurieengg.com/wp-content/uploads/2025/11/Flyer-college.pdf",
  },
];

export const DEPARTMENT_CONTACTS = [
  { name: "Principal", email: "sceprincipal@sasurie.com", scope: "Institutional and administrative matters." },
  { name: "Computer Science and Engineering", email: "scecse@sasurie.com", scope: "Academic enquiries for the department." },
  { name: "Electronics and Communication Engineering", email: "sceece@sasurie.com", scope: "Academic enquiries for the department." },
  { name: "Electrical and Electronics Engineering", email: "sceeee@sasurie.com", scope: "Academic enquiries for the department." },
  { name: "Mechanical Engineering", email: "scemech@sasurie.com", scope: "Academic enquiries for the department." },
  { name: "Civil Engineering", email: "scecivil@sasurie.com", scope: "Academic enquiries for the department." },
  { name: "Science and Humanities", email: "scesh@sasurie.com", scope: "First-year and foundation course enquiries." },
  { name: "MBA", email: "scemba@sasurie.com", scope: "Academic enquiries for the department." },
  { name: "Placement (DPCD)", email: "sceplacement@sasurie.com", scope: "Campus recruitment and placement enquiries." },
  { name: "Controller of Examinations", email: "coe@sasurie.com", scope: "Examination and results enquiries." },
];
