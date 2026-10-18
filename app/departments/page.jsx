import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import { Lines, Words } from "@/components/Reveal";
import { PROGRAMMES } from "@/lib/programmes";
import { DEPARTMENT_DETAIL } from "@/lib/site";

export const metadata = {
  title: "Departments | Sasurie College of Engineering",
  description:
    "Nine undergraduate departments — CSE, CSE (Cyber Security), AI and Data Science, IT, ECE, EEE, Mechanical, Civil and Science and Humanities — plus M.E. Computer Science and Engineering and MBA at Sasurie College of Engineering.",
};

const UG = PROGRAMMES.map((p) => {
  const d = DEPARTMENT_DETAIL[p.short] || {};
  const bits = [p.line, p.build];
  if (d.note) bits.push(d.note);
  if (d.since) bits.push(`Running since ${d.since}.`);
  return {
    tag: `${p.degree} · four years`,
    title: p.name,
    text: bits.join(" "),
    color:
      p.short === "CSE" ? "var(--red)" : p.short === "AI and DS" ? "var(--gold)" : "var(--blue)",
    links: d.email ? [{ label: d.email, href: `mailto:${d.email}` }] : undefined,
  };
});

const PG = [
  {
    tag: "M.E. · two years",
    title: "M.E. Computer Science and Engineering",
    text: "Eligibility: B.E./B.Tech. in EEE, ECE, Electronics, IT, CSE, I&C, E&I or Instrumentation, or M.C.A., or M.Sc. 5-year integrated in IT, CS or Software Engineering. The department regularly organises lectures by academicians and professionals that stress the latest innovative technologies.",
    color: "var(--green)",
    links: [{ label: "scecse@sasurie.com", href: "mailto:scecse@sasurie.com" }],
  },
  {
    tag: "MBA · two years",
    title: "MBA (HR / Finance / Marketing / Business Analytics)",
    text: "Eligibility: a recognised Bachelor's degree of at least 3 years with the minimum percentage of marks, and a qualifying score in TANCET or the Common Entrance Test by the Consortium of Self-Financing Professional Colleges. Lectures by academicians, industrial tours, personality development programmes, case studies and guest lecturers from industry.",
    color: "var(--gold)",
    links: [{ label: "scemba@sasurie.com", href: "mailto:scemba@sasurie.com" }],
  },
];

const SH = [
  {
    tag: "Foundation year",
    title: "Science and Humanities",
    text: "The department that carries the first-year foundation courses every branch shares, and the department that owns the college's language and science teaching. It reports good infrastructural facilities and a well-focused administrative structure behind a systematic work environment.",
    color: "var(--blue)",
    links: [{ label: "scesh@sasurie.com", href: "mailto:scesh@sasurie.com" }],
  },
];

export default function DepartmentsPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["The departments you", "can join today."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Eight undergraduate engineering branches, the Science and Humanities department that carries the foundation year, and two postgraduate programmes. Every department has its own email — write to it directly."
            />
          </div>
        </div>
        <FactCards items={UG} minWidth={320} />
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["After the", "first degree."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Postgraduate admissions run through TANCET or the Consortium common entrance test, or directly with the college for management-quota seats."
            />
          </div>
        </div>
        <FactCards items={PG} minWidth={340} />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Everyone starts", "in the same place."]} />
            <Words className="lede" delay={0.2} text="The department behind the first year of every branch." />
          </div>
        </div>
        <FactCards items={SH} minWidth={340} />
        <div className="container" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <div className="cta-row">
            <a className="btn btn-primary" href="/admissions">Admissions &amp; eligibility</a>
            <a className="btn btn-ghost" href="/placements">Where graduates go</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
