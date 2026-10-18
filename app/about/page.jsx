import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { ABOUT } from "@/lib/site";

export const metadata = {
  title: "About | Sasurie College of Engineering (Autonomous)",
  description:
    "Sasurie College of Engineering, Vijayamangalam, Tiruppur — founded in 2001 by the Ponmudi Muthusamy Gounder Trust, autonomous from January 2026, AICTE approved, degrees awarded through Anna University.",
};

const LEADERSHIP = ABOUT.leadership.map((l) => ({
  tag: l.role,
  title: l.name,
  text: l.text,
}));

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["About Sasurie College", "of Engineering."]} />
            <Words className="lede" delay={0.2} text={ABOUT.lede} />
          </div>
        </div>
        <FactCards items={ABOUT.facts} minWidth={250} />

        <div className="container" style={{ marginTop: "clamp(48px, 7vw, 96px)" }}>
          <div className="cta-row">
            <a className="btn btn-primary" href="/departments">See the departments</a>
            <a className="btn btn-ghost" href="/disclosures">Documents &amp; disclosures</a>
            <a className="btn btn-ghost" href="/contact">Visit or call us</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Vision and mission,", "in the college's words."]} />
            <Words className="lede" delay={0.2} text="The two statements the institution publishes as its purpose." />
          </div>
        </div>
        <FactCards
          minWidth={340}
          items={[
            { tag: "Our Vision", title: "Vision", text: ABOUT.vision, color: "var(--green)", rgb: "148, 201, 61" },
            { tag: "Our Mission", title: "Mission", text: ABOUT.mission, color: "var(--blue)", rgb: "63, 107, 181" },
          ]}
        />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Who runs", "the college."]} />
            <Words className="lede" delay={0.2} text="The trust, the management and the head of the institution, as published on the college's own pages." />
          </div>
        </div>
        <FactCards items={LEADERSHIP} minWidth={320} />

        <div className="container" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <Reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>What the campus holds</h3>
            <PointList
              items={[
                "10.61 acres near Vijayamangalam village, on the Coimbatore Bypass (NH544), Tiruppur district.",
                "LCD-equipped classrooms, an auditorium, seminar halls and tutorial rooms.",
                "Departmental laboratories and a high-speed internet computer centre.",
                "A power house with solar panels, UPS systems and inverters for uninterrupted supply.",
                "Separate hostels for boys and girls inside the campus, a 900 m² canteen and a 24-hour ATM.",
                "Dispensary with bed facility and an ambulance on standby.",
                "Ramps, rails and washrooms for differently-abled students.",
              ]}
            />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
