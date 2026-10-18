import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { PLACEMENT } from "@/lib/site";

export const metadata = {
  title: "Placements | Sasurie College of Engineering",
  description:
    "The Department of Placement and Career Development at Sasurie College of Engineering: aptitude and soft-skill training, industry–institution interaction, campus and off-campus drives. Contact sceplacement@sasurie.com.",
};

export default function PlacementsPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Placements start", "long before the drive."]} />
            <Words className="lede" delay={0.2} text={PLACEMENT.lede} />
          </div>
        </div>

        <FactCards
          minWidth={320}
          items={[
            {
              tag: "The office",
              title: "A placement block of its own",
              text: PLACEMENT.overview[0],
              color: "var(--blue)",
              rgb: "63, 107, 181",
            },
            {
              tag: "The focus",
              title: "Trained for the process",
              text: PLACEMENT.overview[1],
              color: "var(--green)",
              rgb: "148, 201, 61",
            },
            {
              tag: "Contact",
              title: "Talk to the DPCD",
              text: `Speak to the placement office directly, or write in about recruiting from the campus.`,
              color: "var(--gold)",
              rgb: "253, 185, 19",
              links: [
                { label: "sceplacement@sasurie.com", href: "mailto:sceplacement@sasurie.com" },
                { label: "Call 91 94425 93803", href: "tel:+919442593803" },
              ],
            },
          ]}
        />

        <div
          className="container"
          style={{ marginTop: "clamp(48px, 7vw, 96px)", display: "grid", gap: "clamp(32px, 5vw, 64px)" }}
        >
          <Reveal>
            <h3 style={{ fontSize: "1.5rem" }}>Objectives</h3>
            <PointList items={PLACEMENT.objectives} />
          </Reveal>
          <Reveal>
            <h3 style={{ fontSize: "1.5rem" }}>What the department runs</h3>
            <PointList items={PLACEMENT.highlights} />
          </Reveal>
          <Reveal>
            <p className="fine" style={{ maxWidth: "62ch" }}>{PLACEMENT.note}</p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
