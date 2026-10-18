const facts = [
  {
    title: "Autonomous",
    tag: "Autonomous 2026",
    color: "var(--green)",
    rgb: "148, 201, 61",
    glow: "rgba(148, 201, 61, 0.16)",
    text: "Autonomous status was conferred by the UGC and Anna University in January 2026 — the college now writes its own curriculum and conducts its own examinations.",
  },
  {
    title: "AICTE approved",
    tag: "Govt. Approved",
    color: "var(--blue)",
    rgb: "63, 107, 181",
    glow: "rgba(63, 107, 181, 0.16)",
    text: "Approved by the All India Council for Technical Education, with the Extension of Approval on file for every year from 2020-21 through 2025-26.",
  },
  {
    title: "Anna University",
    tag: "Affiliated Degrees",
    color: "var(--gold)",
    rgb: "253, 185, 19",
    glow: "rgba(253, 185, 19, 0.18)",
    text: "Programmes are built on Anna University annexures and degrees are awarded through Anna University, Chennai.",
  },
  {
    title: "Since 2001",
    tag: "25+ Yrs Excellence",
    color: "var(--red)",
    rgb: "224, 31, 38",
    glow: "rgba(224, 31, 38, 0.14)",
    text: "Founded by the Ponmudi Muthusamy Gounder Trust, Tiruppur. A 10.61-acre campus at Vijayamangalam on the Coimbatore Bypass (NH544).",
  },
];

export default function Facts({ ready = true }) {
  return (
    <div
      className={`hero-facts hero-in${ready ? " go" : ""}`}
      style={{ "--delay": "0.95s" }}
      id="facts"
      aria-label="About the college"
    >
      <div className="container facts-grid">
        {facts.map((f, i) => (
          <div
            key={f.title}
            className={`fact fact-item${ready ? " is-ready" : ""}`}
            style={{
              "--i": i,
              "--delay": `${1.05 + i * 0.12}s`,
              "--c": f.color,
              "--rgb": f.rgb,
              "--glow": f.glow,
            }}
          >
            <div className="fact-badge">
              <span className="fact-beacon" aria-hidden="true" />
              <span>{f.tag}</span>
            </div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
