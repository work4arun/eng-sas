import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import { Lines, Words } from "@/components/Reveal";
import { FACILITIES } from "@/lib/site";

export const metadata = {
  title: "Facilities | Sasurie College of Engineering",
  description:
    "Campus facilities at Sasurie College of Engineering: a 46,468-volume central library with DELNET access, hostels, 12 GPS buses, a 600-seat canteen, dispensary and ambulance, 24-hour ATM, sports ground and gym, incubation centre and R&D cell.",
};

export default function FacilitiesPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["What the 10.61 acres", "actually hold."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Library, hostels, transport, food, health, sport, labs and the cell that turns projects into products — as the college describes them."
            />
          </div>
        </div>
        <FactCards
          minWidth={320}
          items={FACILITIES.map((f) => ({
            tag: f.tag,
            title: f.title,
            text: f.text,
            image: f.image,
            imageAlt: f.title,
          }))}
        />
        <div className="container" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <div className="cta-row">
            <a className="btn btn-primary" href="/admissions">Admissions</a>
            <a className="btn btn-ghost" href="/contact">Plan a visit</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
