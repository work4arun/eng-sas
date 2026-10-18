import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import { Lines, Words } from "@/components/Reveal";
import { DISCLOSURES } from "@/lib/site";

export const metadata = {
  title: "Disclosures & documents | Sasurie College of Engineering",
  description:
    "NAAC self-study documents, NIRF submissions, AQAR reports from 2018-19, AICTE extensions of approval, IQAC, acts and statutes, Board of Studies and finance committee records published by Sasurie College of Engineering.",
};

export default function DisclosuresPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Everything the college", "publishes about itself."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Accreditation and ranking documents, the annual quality reports, the AICTE approvals and the committee records — collected from the college's own pages."
            />
          </div>
        </div>

        <FactCards
          minWidth={320}
          items={DISCLOSURES.map((d, i) => ({
            tag: d.group,
            title: d.group,
            text: d.note,
            color: ["var(--green)", "var(--blue)", "var(--gold)", "var(--red)"][i % 4],
            links: [
              ...(d.file ? [d.file] : []),
              ...(d.href
                ? [{
                    label: d.href.endsWith(".pdf") ? "Open the PDF ↗" : "Open the documents ↗",
                    href: d.href,
                  }]
                : []),
            ],
          }))}
        />

        <div className="container" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <p className="fine" style={{ maxWidth: "72ch" }}>
            The document files currently sit on the college&apos;s existing website; the links above point there until they are moved onto this site.
          </p>
          <div className="cta-row" style={{ marginTop: "clamp(24px, 3vw, 36px)" }}>
            <a className="btn btn-primary" href="/admissions">Admissions</a>
            <a className="btn btn-ghost" href="/contact">Contact the office</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
