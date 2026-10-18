import Reveal from "./Reveal";

const facts = [
  {
    title: "Autonomous",
    text: "Autonomous status was conferred by the UGC and Anna University in January 2026 — the college now writes its own curriculum and conducts its own examinations.",
  },
  {
    title: "AICTE approved",
    text: "Approved by the All India Council for Technical Education, with the Extension of Approval on file for every year from 2020-21 through 2025-26.",
  },
  {
    title: "Anna University",
    text: "Programmes are built on Anna University annexures and degrees are awarded through Anna University, Chennai.",
  },
  {
    title: "Since 2001",
    text: "Founded by the Ponmudi Muthusamy Gounder Trust, Tiruppur. A 10.61-acre campus at Vijayamangalam on the Coimbatore Bypass (NH544).",
  },
];

export default function Facts() {
  return (
    <section className="facts" id="facts" aria-label="About the college">
      <div className="container facts-grid">
        {facts.map((f, i) => (
          <Reveal key={f.title} className="fact" delay={i * 0.08}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
