import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { PROGRAMMES } from "@/lib/programmes";
import { DEPARTMENTS, DEPARTMENT_BY_PROGRAMME, DEPARTMENT_BY_SLUG } from "@/lib/departments";

export const metadata = {
  title: "Departments | Sasurie College of Engineering",
  description:
    "Eight undergraduate engineering departments — CSE, CSE (Cyber Security), AI and Data Science, IT, ECE, EEE, Mechanical and Civil — with Science and Humanities, M.E. Computer Science and Engineering and MBA at Sasurie College of Engineering.",
};

const detailLink = (d) => ({ label: "Vision, mission and laboratories", href: `/departments/${d.slug}` });

// The foundation department has its own section below, so it is not repeated here.
const UG = PROGRAMMES.filter((p) => p.short !== "S and H").map((p) => {
  const d = DEPARTMENT_BY_PROGRAMME[p.short];
  const bits = [p.line, p.build];
  if (d.since) bits.push(`Established in ${d.since}.`);
  return {
    tag: d.credential,
    title: p.name,
    text: bits.join(" "),
    color:
      p.short === "CSE" ? "var(--red)" : p.short === "AI and DS" ? "var(--gold)" : "var(--blue)",
    links: [detailLink(d), { label: d.email, href: `mailto:${d.email}` }],
  };
});

const pgCard = (slug, color, text) => {
  const d = DEPARTMENT_BY_SLUG[slug];
  return {
    tag: `${d.credential}${d.since ? ` · since ${d.since}` : ""}`,
    title: d.name,
    text,
    color,
    links: [detailLink(d), { label: d.email, href: `mailto:${d.email}` }, { label: "View eligibility", href: "/admissions" }],
  };
};

const PG = [
  pgCard(
    "me-computer-science-and-engineering",
    "var(--green)",
    "A two-year postgraduate programme. The department regularly hosts lectures by academicians and industry professionals on emerging technologies, and works with IIT Bombay on a laboratory, workshops and seminars."
  ),
  pgCard(
    "mba",
    "var(--gold)",
    "A two-year, four-semester programme with specialisations in HR, Finance, Marketing and Business Analytics. Learning includes lectures by academicians, industrial tours, personality development programmes, case studies and guest lectures from industry."
  ),
];

const sh = DEPARTMENT_BY_SLUG["science-and-humanities"];
const SH = [
  {
    tag: "Foundation year",
    title: "Science and Humanities",
    text: "The department that teaches the first-year foundation courses shared by every branch: Chemistry, English, Mathematics and Physics, supported by counselling, seminars and personality development programmes.",
    color: "var(--blue)",
    links: [detailLink(sh), { label: sh.email, href: `mailto:${sh.email}` }],
  },
];

const CFAC_ACTIVITIES = [
  "Formation of regulations.",
  "Formation of curriculum and syllabus.",
  "Approval of special electives for Ph.D. students.",
  "Handling break of study, rejoining and withdrawal from end-semester examinations.",
  "Issue of eligibility certificates.",
  "Approval of addition or exemption of courses for transfer and break-of-study candidates.",
  "Approval of internships, online study, self-study and foreign exchange programmes.",
  "Facilitating the Academic Council, Standing Committee and Boards of Studies for regulations, curriculum and syllabus.",
  "Formation of the Department Consultative Committee and fixing the academic schedule.",
  "Issue of attested copies of the syllabus to students.",
];

export default function DepartmentsPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Departments and", "programmes."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Eight undergraduate engineering departments, the Science and Humanities department for the first year, and two postgraduate programmes. Each department can be contacted directly by email."
            />
          </div>
        </div>
        <FactCards items={UG} minWidth={320} />
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Postgraduate", "programmes."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Postgraduate admission is through TANCET or the Consortium Common Entrance Test, or through the college office for management-quota seats."
            />
          </div>
        </div>
        <FactCards items={PG} minWidth={340} />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["First-year", "foundation."]} />
            <Words className="lede" delay={0.2} text="The department that teaches the first year of every engineering branch." />
          </div>
        </div>
        <FactCards items={SH} minWidth={340} />
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Centre for", "Academic Courses."]} />
            <Words
              className="lede"
              delay={0.2}
              text="The centre administers all academic matters of the institute. It organises meetings of the Boards of Studies, Standing Committees and Academic Council, and prepares lesson plans and the academic schedule for all UG and PG programmes."
            />
          </div>
          <div style={{ display: "grid", gap: "clamp(32px, 5vw, 64px)", marginTop: "clamp(24px, 4vw, 48px)" }}>
            <Reveal>
              <h3 style={{ fontSize: "1.5rem" }}>What the centre handles</h3>
              <PointList items={CFAC_ACTIVITIES} />
            </Reveal>
            <Reveal>
              <h3 style={{ fontSize: "1.5rem" }}>Regulations and curriculum</h3>
              <PointList
                items={[
                  "Undergraduate regulations: Anna University 2021 and 2025, and Autonomous 2026.",
                  "Postgraduate (M.E. and MBA) regulations: Anna University 2021 and 2025, and Autonomous 2026.",
                  "The Autonomous (R-2026) curriculum covers every undergraduate programme except B.E. Civil Engineering, together with M.E. Computer Science and Engineering and MBA.",
                  "B.E. Civil Engineering follows the Anna University curriculum (R-2025 and R-2021 revised), as do the other undergraduate programmes for students admitted under those regulations.",
                ]}
              />
            </Reveal>
          </div>
          <div className="cta-row" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
            <a className="btn btn-primary" href="/admissions">Admissions and eligibility</a>
            <a className="btn btn-ghost" href="/placements">Placements</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
