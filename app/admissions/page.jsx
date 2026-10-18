import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { ADMISSION, SITE } from "@/lib/site";

export const metadata = {
  title: "Admissions | Sasurie College of Engineering",
  description:
    "Admissions at Sasurie College of Engineering: TNEA counselling for UG, TANCET or the Consortium CET for PG, eligibility criteria, the Sasurie Talent Examination scholarship with up to 100% fee waiver, and the college's contact numbers.",
};

export default function AdmissionsPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Admissions are open.", "Here is the whole route."]} />
            <Words className="lede" delay={0.2} text={ADMISSION.lede} />
          </div>
        </div>

        <div className="container">
          <ol className="steps">
            {ADMISSION.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.15 + i * 0.12}>
                <span
                  className="step-n"
                  aria-hidden="true"
                  style={i >= 3 ? { background: "var(--red)", color: "#fff" } : undefined}
                >
                  {i + 1}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="cta-row" style={{ marginTop: "clamp(28px, 4vw, 44px)" }}>
            <a className="btn btn-primary" href={SITE.applyUrl} target="_blank" rel="noreferrer">
              Apply online ↗
            </a>
            <a className="btn btn-ghost" href="tel:9488891111">Call 94888 91111</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Undergraduate", "eligibility."]} />
            <Words
              className="lede"
              delay={0.2}
              text="B.E. and B.Tech. admission is through Anna University TNEA counselling on Class-12 merit. These are the minimum marks in Physics, Chemistry and Mathematics the college publishes."
            />
          </div>
        </div>
        <FactCards
          minWidth={280}
          items={ADMISSION.ugEligibility.map((r, i) => ({
            tag: r.category,
            title: r.category,
            text: `HSC academic (+1 & +2): ${r.hsc}. Three-year diploma: ${r.diploma}.`,
            color: ["var(--green)", "var(--blue)", "var(--gold)", "var(--red)"][i % 4],
          }))}
        />
        <div className="container" style={{ marginTop: "clamp(32px, 5vw, 56px)" }}>
          <p className="fine" style={{ maxWidth: "70ch" }}>{ADMISSION.ugNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Postgraduate", "routes."]} />
            <Words
              className="lede"
              delay={0.2}
              text="M.E. and MBA admissions run on TANCET or the Consortium common entrance test. Here is what each programme accepts."
            />
          </div>
        </div>
        <FactCards
          minWidth={340}
          items={ADMISSION.pgEligibility.map((r, i) => ({
            tag: r.course.startsWith("MBA") ? "MBA" : "M.E.",
            title: r.course,
            text: r.requirement,
            color: i === 0 ? "var(--green)" : "var(--gold)",
          }))}
        />
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Fees, scholarships", "and refunds."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Merit and category scholarships are published by the college, and withdrawals follow an academic-year-wise refund policy."
            />
          </div>
        </div>
        <FactCards
          minWidth={300}
          items={ADMISSION.scholarships.map((s, i) => ({
            tag: "Scholarship",
            title: s.title,
            text: s.text,
            color: ["var(--gold)", "var(--red)", "var(--blue)", "var(--green)"][i % 4],
          }))}
        />
        <div className="container" style={{ marginTop: "clamp(32px, 5vw, 56px)" }}>
          <Reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Fee refund policy</h3>
            <PointList items={[ADMISSION.refund]} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Ask us", "anything."]} />
            <Words
              className="lede"
              delay={0.2}
              text={`Admission queries: ${SITE.admissionPhones.join(" / ")}. Email ${SITE.emails[0]}, or use the call-back form on the contact page.`}
            />
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="/contact">Contact &amp; call-back</a>
            <a className="btn btn-ghost" href="/disclosures">Fee &amp; policy documents</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
