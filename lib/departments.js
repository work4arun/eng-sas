// Department detail pages. Transferred from the college's own department pages on
// sasurieengg.com (courses/ug-courses/*, courses/pg-courses/*). Faculty rosters are not
// carried: the live site's two faculty tables disagree with each other.

const CS_PEOS = [
  "Understand the basics and emerging techniques across computer science and engineering.",
  "Analyse and solve problems by applying the fundamentals of mathematics, science and engineering.",
  "Apply modern skills, techniques and engineering tools to build computational systems.",
  "Understand recent research areas and contribute original work to the field.",
  "Adapt to evolving technical challenges and changing career opportunities.",
  "Communicate effectively and collaborate within engineering teams.",
  "Gain a background in humanities and social sciences for effective engineering, leadership and citizenship.",
];

const CS_PSOS = [
  "Design and programming skills to build and automate business solutions using current technologies.",
  "A strong theoretical foundation for research and for elegant solutions to complex problems.",
  "The ability to work in teams with other engineering fields to design, build and develop system applications.",
];

const CS_LABS = [
  "Mobile Application Development Lab",
  "Internet Programming Lab",
  "Cloud Computing Lab",
  "Computer Networks Lab",
  "Python Programming Lab",
  "Data Structure Lab",
  "Object-Oriented Programming Lab",
  "Database Management Systems Lab",
  "Security Lab",
];

const CS_VISION =
  "To advance the state of the art in computer science and engineering through cutting-edge research, quality publications and lasting patents, and to meet the country's industry needs with quality IT human resources.";

const CS_MISSION = [
  "Produce highly qualified, motivated graduates through a rigorous curriculum of theory and application, able to solve problems individually and in teams.",
  "Create knowledge of fundamental principles and innovative technologies through research, including interdisciplinary topics.",
  "Serve local and national communities with an awareness of ethical responsibilities to the profession and to society.",
];

const IIT_NOTE =
  "The department is partnered with IIT Bombay for a laboratory and for workshops and seminars, designed around a world-class curriculum.";

export const DEPARTMENTS = [
  {
    slug: "cse",
    programme: "CSE",
    level: "Undergraduate",
    name: "Computer Science and Engineering",
    credential: "B.E. · four years",
    since: "2001",
    email: "scecse@sasurie.com",
    overview:
      "The department is growing in academic activities, publications and national and international recognition, and regularly hosts lectures by academicians and professionals on innovative topics in computer science and information technology.",
    vision: CS_VISION,
    mission: CS_MISSION,
    peos: CS_PEOS,
    psos: CS_PSOS,
    labs: CS_LABS,
    extras: [{ title: "Industry and academic partnership", items: [IIT_NOTE] }],
    newsletter: { label: "Department newsletter (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2025/10/NEWSLETTER-CSE.pdf" },
  },
  {
    slug: "ai-and-data-science",
    programme: "AI and DS",
    level: "Undergraduate",
    name: "Artificial Intelligence and Data Science",
    credential: "B.Tech. · four years",
    since: "2020",
    email: "scesh@sasurie.com",
    overview:
      "The department prepares students to work with data and intelligent systems, with a laboratory and workshops developed in partnership with IIT Bombay and regular lectures by academicians and professionals.",
    vision:
      "To become a globally recognised centre of excellence in Artificial Intelligence and Data Science, producing innovative visionaries and research experts who address complex real-world challenges and contribute to national development.",
    mission: [
      "Provide ethics-based, cutting-edge education in Artificial Intelligence and Data Science.",
      "Build industry and research partnerships and develop innovative solutions in emerging areas.",
      "Instil social responsibility in students.",
      "Encourage entrepreneurship and an innovative, creative mindset.",
    ],
    peos: [
      "Apply the fundamentals of basic sciences, mathematics, artificial intelligence, data science and statistics to manage and analyse large volumes of data.",
      "Pursue research and build sustainable solutions that benefit ecosystems.",
      "Think logically, learn throughout life and work ethically in multidisciplinary teams.",
      "Design AI-based solutions for real-world problems and contribute to economic growth.",
    ],
    psos: [
      "Build AI-based, domain-specific processes for decision-making in business and governance.",
      "Derive foresight, insight and hindsight from data to solve business and engineering problems.",
      "Apply AI, data analytics and industrial tools to address societal problems.",
      "Develop skills in data analytics, visualisation, knowledge engineering and project coordination.",
      "Conduct fundamental AI research to meet societal needs.",
    ],
    labs: [
      "Artificial Intelligence Laboratory",
      "Machine Learning Laboratory",
      "Deep Learning Laboratory",
      "Database Design and Management Laboratory",
      "Data Science and Analytics Laboratory",
    ],
    extras: [{ title: "Industry and academic partnership", items: [IIT_NOTE] }],
  },
  {
    slug: "cyber-security",
    programme: "Cyber Security",
    level: "Undergraduate",
    name: "Computer Science and Engineering (Cyber Security)",
    credential: "B.E. · four years",
    since: "2021",
    email: "scecse@sasurie.com",
    overview:
      "The department offers B.E. Computer Science and Engineering with a specialisation in Cyber Security, with a laboratory and workshops developed in partnership with IIT Bombay.",
    vision:
      "To be a globally recognised centre of excellence in Cyber Security, producing innovative visionaries and research experts who address complex real-world challenges and contribute to national development.",
    mission: [
      "Provide cutting-edge cyber security education grounded in ethical and moral values.",
      "Build partnerships with industry and research organisations and create innovative solutions in emerging research areas.",
      "Instil social responsibility and encourage students to use their skills for society.",
      "Guide students towards entrepreneurship and an innovative, creative mindset in Cyber Security.",
    ],
    peos: CS_PEOS,
    psos: CS_PSOS,
    labs: CS_LABS,
    extras: [{ title: "Industry and academic partnership", items: [IIT_NOTE] }],
  },
  {
    slug: "information-technology",
    programme: "IT",
    level: "Undergraduate",
    name: "Information Technology",
    credential: "B.Tech. · four years",
    since: "2001",
    email: "scecse@sasurie.com",
    overview:
      "The department hosts regular guest lectures by academicians and professionals, and has a laboratory and workshops developed in partnership with IIT Bombay.",
    vision: CS_VISION,
    mission: CS_MISSION,
    peos: CS_PEOS,
    psos: CS_PSOS,
    labs: CS_LABS,
    extras: [{ title: "Industry and academic partnership", items: [IIT_NOTE] }],
  },
  {
    slug: "ece",
    programme: "ECE",
    level: "Undergraduate",
    name: "Electronics and Communication Engineering",
    credential: "B.E. · four years",
    since: "2001",
    email: "sceece@sasurie.com",
    overview:
      "The department supports its programme with industry-supported laboratories, a project lab and centres of excellence in embedded systems and antennas.",
    vision:
      "To foster academic excellence in electronics, communication and allied disciplines to meet the growing needs of society.",
    mission: [
      "Provide quality education, professional aptitude, continuous learning, ethics and social responsibility.",
      "Build a framework for research and innovation, with regular industry interaction.",
      "Create a learner-centric environment that upgrades knowledge and skills.",
    ],
    peos: [
      "Successful career: prepare graduates for careers in academia, industry or entrepreneurship.",
      "Foundational concepts: build strong fundamentals and advanced tools for solutions of varying complexity.",
      "Analytical methodology: develop critical analysis of literature and ethical, research-oriented problem-solving.",
    ],
    psos: [
      "Analyse, design and develop solutions using the fundamentals of electronics and communication.",
      "Apply design principles and best practices to build quality products for scientific and business uses.",
      "Adapt to emerging information and communication technologies to innovate solutions for existing systems.",
    ],
    labs: [
      "Electronic Devices and Circuits Lab",
      "Digital Lab",
      "Electronic System Design Lab",
      "Simulation Lab",
      "Microprocessor Lab",
      "Microwave and Optical Communication Lab",
      "PG VLSI and Applied Electronics Laboratory",
    ],
    extras: [
      { title: "Centres and project facilities", items: ["Centre of Excellence for Embedded Systems.", "Centre of Excellence for Antennas.", "An industry-supported laboratory and a project lab."] },
    ],
  },
  {
    slug: "eee",
    programme: "EEE",
    level: "Undergraduate",
    name: "Electrical and Electronics Engineering",
    credential: "B.E. · four years",
    since: "2002",
    email: "sceeee@sasurie.com",
    overview:
      "Faculty expertise spans power systems, electrical machines, power electronics, control engineering and embedded systems. The department has set up centres of excellence and signed MoUs with industry, and its students have won awards in nationwide competitions.",
    vision:
      "To prepare highly competent electrical and electronics professionals with trained skills to meet current and emerging challenges and to serve society.",
    mission: [
      "Create technical manpower for current and future industry demands.",
      "Develop innovative skills and a positive attitude through effective teaching and learning.",
      "Provide advanced engineering research so that graduates can pursue broad, competitive career paths.",
    ],
    peos: [
      "Employment in core electrical and electronics engineering and service sectors.",
      "Advancement to technical lead positions.",
      "Higher studies leading to postgraduate and research degrees.",
      "Consultancy to solve practical problems for core organisations.",
      "Entrepreneurship in electrical and electronics product and service industries.",
    ],
    psos: [
      "Foundation of electrical engineering: understanding of electrical components, circuits, systems and control across power generation, transmission, distribution, utilisation and energy conservation.",
      "Foundation of mathematical concepts: applying mathematical methods, tools and algorithms to electrical engineering problems.",
      "Computing and research ability: using knowledge across domains to identify research gaps and produce new ideas and innovations.",
    ],
    labs: [
      "Engineering Practices",
      "Electron Devices and Circuits",
      "Electrical Machines",
      "Power Electronics and Drives",
      "Power Systems",
      "Control and Instrumentation",
      "Analog and Digital Electronics",
      "Microprocessors and Microcontrollers",
      "Embedded Systems",
      "Electric Vehicle Design",
      "Industrial Automation",
      "Control and Robotics",
    ],
  },
  {
    slug: "mechanical",
    programme: "Mechanical",
    level: "Undergraduate",
    name: "Mechanical Engineering",
    credential: "B.E. · four years",
    since: "2003",
    email: "scemech@sasurie.com",
    overview:
      "The department has collaborated with well-known industries and institutions. Its alumni hold key roles in industry and institutions in India and overseas, and leading companies recruit its graduates during campus placements each year.",
    vision:
      "To develop a centre for technical education that combines creativity and research of practical value, meets engineering challenges and supports rural empowerment.",
    mission: [
      "Produce innovative professionals with sound subject knowledge.",
      "Support the sustainable growth of the nation through research, social character and leadership-focused training.",
      "Produce mechanical engineers with strong theoretical knowledge and hands-on experience, grounded in moral values and ethics.",
    ],
    peos: [
      "Build a foundation in mathematical, scientific and engineering fundamentals for solving engineering problems, preparing students for graduate studies and industry careers.",
      "Develop the skills to design, improve and install mechanical and integrated systems involving people and materials.",
      "Teach modern mechanical system design and expose students to industrial practice to improve employability and adaptability.",
    ],
    psos: [
      "Analyse, design and develop solutions using foundational mechanical engineering concepts.",
      "Apply design principles and best practices to build quality products for scientific and business applications.",
    ],
    labs: [
      "Engineering Practices",
      "Manufacturing Technology",
      "Thermal Engineering Laboratory I",
      "Thermal Engineering Laboratory II",
      "Metrology and Measurements",
      "Dynamics",
      "CAD/CAM",
      "Mechatronics",
    ],
  },
  {
    slug: "civil",
    programme: "Civil",
    level: "Undergraduate",
    name: "Civil Engineering",
    credential: "B.E. · four years",
    email: "scecivil@sasurie.com",
    overview:
      "Graduates of the department have shown merit and competence in India and abroad, its faculty have received best-faculty awards from various forums, and the department has run sponsored seminars, conferences, non-formal courses and awareness programmes.",
    vision:
      "To build civil engineers with deep technical knowledge and a global outlook who are ethically sound and committed to nation-building.",
    mission: [
      "Produce high-calibre civil engineers with strong technical skills and ethical values.",
      "Become a centre of excellence in civil engineering and related research.",
      "Provide knowledge and consultancy services to the community across civil engineering areas.",
    ],
    peos: [
      "Graduates build professional competence and use modern tools to execute projects.",
      "Graduates apply engineering and scientific principles to complex problems through lifelong learning.",
      "Graduates handle multidisciplinary projects with professional and ethical responsibility.",
    ],
    psos: [
      "Plan, analyse, design and execute cost-effective civil engineering projects that protect natural resources and support sustainable growth.",
      "Pursue employment, start-ups, entrepreneurship, research or professional chartered engineering roles with honesty and integrity.",
    ],
    labs: [
      "Surveying: total station, GPS, electronic and transit theodolites, dumpy levels, plane tables and compasses.",
      "Hydraulics and Fluid Machinery: flow-measurement equipment (orifices, notches, venturimeter, pitot tubes, Reynolds apparatus) and pump and turbine test set-ups (Pelton, Kaplan, Francis, centrifugal, reciprocating).",
      "Environmental Engineering: digital pH, turbidity and conductivity meters, BOD incubator, flame photometer, DO and TDS analysers.",
      "Concrete: testing of cement and aggregates, workability of fresh concrete, and destructive and non-destructive tests on hardened concrete.",
      "Strength of Materials: universal testing machine, hardness testers, compression and spring testers, impact (Izod/Charpy), deflection and torsion testing machines.",
      "Computer Laboratory: AutoCAD and Revit for design and drafting.",
    ],
  },
  {
    slug: "science-and-humanities",
    programme: "S and H",
    level: "First year",
    name: "Science and Humanities",
    credential: "First-year foundation",
    email: "scesh@sasurie.com",
    overview:
      "The department covers Chemistry, English, Mathematics and Physics. It supports students through counselling, seminars and personality development programmes, and faculty are available outside class hours.",
    vision: "To make the Science and Humanities department a model of excellence in the multidisciplinary branches of engineering.",
    mission: [
      "Build a learning community in which people learn, work and respect each other.",
      "Provide a solid engineering foundation through model tools and laboratories for mathematics, basic sciences and engineering fundamentals.",
      "Build English language skills (listening, speaking, reading and writing) and soft skills for career readiness.",
      "Contribute to faculty development, modern laboratories and competence in engineering physics.",
      "Develop good citizens through all-round development.",
    ],
    peos: [],
    psos: [],
    labs: [
      "Physics Lab: torsional pendulum, Young's modulus, Lee's disc method, laser, ultrasonic interferometer, spectrometer, air wedge method, semiconductor band gap, Poiseuille's method and Carey Foster's bridge.",
      "Chemistry Lab: digital pH meter, potentiometer, spectrophotometer, conductivity meter and flame photometer, viscometer, hot air oven, double distillation unit, water bath and digital weighing balance.",
      "Language Lab: communication, soft skills, interpersonal skills and public speaking training.",
    ],
  },
  {
    slug: "me-computer-science-and-engineering",
    programme: null,
    level: "Postgraduate",
    name: "M.E. Computer Science and Engineering",
    credential: "M.E. · two years",
    since: "2001",
    email: "scecse@sasurie.com",
    overview:
      "The department regularly hosts lectures by leading academicians and professionals on innovative topics in computer science and information technology, and runs workshops and seminars with a world-class curriculum.",
    vision: CS_VISION,
    mission: CS_MISSION,
    peos: CS_PEOS,
    psos: CS_PSOS,
    labs: CS_LABS,
    extras: [{ title: "Industry and academic partnership", items: [IIT_NOTE] }],
  },
  {
    slug: "mba",
    programme: null,
    level: "Postgraduate",
    name: "MBA (HR / Finance / Marketing / Business Analytics)",
    credential: "MBA · two years (four semesters)",
    since: "2006",
    email: "scemba@sasurie.com",
    overview:
      "A full-time Master of Business Administration established to produce young management executives of global standard. The first year covers foundation courses, and students specialise in the second year in Finance, HR, Marketing or Business Analytics.",
    vision:
      "To become a leader in value-based management education and to contribute to global standards in business practice and research.",
    mission: [
      "Adopt innovative learning and development methods.",
      "Enhance learners' employability skills.",
      "Encourage collaborative and contemporary research.",
      "Promote entrepreneurship through innovative ideas.",
    ],
    peos: [
      "Apply emerging technologies to meet the critical needs of strategic business operations.",
      "Demonstrate strong interpersonal skills and a high level of proficiency in their domains.",
      "Apply management theories and principles to support organisational growth and development.",
      "Evaluate and develop solutions to contemporary problems using management tools.",
    ],
    psos: [],
    labs: ["Data Analysis and Business Modelling Lab: SPSS for data entry, analysis, tables and graphs."],
    extras: [
      {
        title: "Learning activities",
        items: [
          "Lectures by academicians and guest lectures from industry.",
          "Industrial tours and case studies.",
          "Personality development programmes and communication-skills workshops, run with the English faculty.",
          "Interactive training programmes, industry–institute interaction and consultancy opportunities.",
        ],
      },
    ],
  },
];

export const DEPARTMENT_BY_SLUG = Object.fromEntries(DEPARTMENTS.map((d) => [d.slug, d]));
export const DEPARTMENT_BY_PROGRAMME = Object.fromEntries(
  DEPARTMENTS.filter((d) => d.programme).map((d) => [d.programme, d])
);
