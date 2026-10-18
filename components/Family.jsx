import Image from "next/image";
import Reveal, { Lines, Words } from "./Reveal";
import Tilt from "./Tilt";

const INSTITUTIONS = [
  { src: "/brand/engg.png", name: "Sasurie College of Engineering", here: true },
  { src: "/brand/arts.png", name: "Sasurie College of Arts and Science" },
  { src: "/brand/pharmacy.png", name: "Sasurie College of Pharmacy" },
  { src: "/brand/nursing.png", name: "Sasurie College of Nursing" },
  { src: "/brand/pharmacy-research.png", name: "Sasurie College of Pharmacy and Research" },
  { src: "/brand/nursing-research.png", name: "Sasurie College of Nursing and Research" },
];

export default function Family() {
  return (
    <section className="family section" id="group">
      <div className="container">
        <div className="section-head">
          <Lines lines={["Part of the Sasurie", "Group of Institutions."]} />
          <Words
            className="lede"
            delay={0.2}
            text="Sasurie College of Engineering sits in the Sasurie Group of Institutions, alongside the arts and science, pharmacy, nursing and research colleges — one idea across the group: create your future."
          />
        </div>

        <ul className="family-grid">
          {INSTITUTIONS.map((c, i) => (
            <Reveal as="li" key={c.name} variant="scale" delay={(i % 3) * 0.1 + Math.floor(i / 3) * 0.12} className={`family-cell${c.here ? " is-here" : ""}`}>
              <Tilt max={10} className="logo-tilt">
                <Image src={c.src} alt={c.name} width={1100} height={268} sizes="(max-width: 700px) 80vw, 360px" />
              </Tilt>
              {c.here && <span className="here">You are here</span>}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
