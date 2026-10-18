import Reveal from "./Reveal";

const facts = [
  { title: "Autonomous", text: "Designs its own syllabus and conducts its own examinations." },
  { title: "AICTE approved", text: "Programmes approved by the All India Council for Technical Education." },
  { title: "Anna University", text: "Degrees awarded through Anna University, Chennai." },
  { title: "Tiruppur district", text: "Campus at Vijayamangalam, Tamil Nadu, close to Coimbatore." },
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
