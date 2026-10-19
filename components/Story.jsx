"use client";

import { useEffect, useRef, useState } from "react";
import Tower from "./Tower";
import Reveal, { Words } from "./Reveal";
import { LAYERS } from "@/lib/layers";

const PANELS = [
  {
    key: "foundation",
    years: "Years 1 and 2",
    title: "Foundation",
    lead: "Get the fundamentals right.",
    text: "Mathematics, physics, chemistry and programming decide how far you can go later. The first two years run through the Science and Humanities department, with problem practice and add-on courses alongside the Anna University syllabus, so a different school background never holds anyone back.",
    points: ["Programming from the first week", "Core science and mathematics with problem practice", "Add-on and value-added courses alongside the syllabus"],
  },
  {
    key: "skills",
    years: "Years 2 and 3",
    title: "Skills",
    lead: "Learn by building.",
    text: "Labs and project work move from demonstrations to things you design yourself — departmental laboratories, the computer centre with high-speed internet, and the Central Library, which holds more than 46,000 volumes and DELNET databases of papers.",
    points: ["Lab-first teaching in every department", "Mini projects that grow into your final-year project", "Electives, certifications and library research access"],
  },
  {
    key: "industry",
    years: "Years 3 and 4",
    title: "Industry",
    lead: "Meet the people who will hire you.",
    text: "Tiruppur's knitwear industry and Coimbatore's manufacturing and IT belt are on your doorstep. The Institution–Industry Cell keeps the college's 350+ industry partners and 100+ MoUs within reach, and Centres of Excellence in Industry 4.0, automation, smart manufacturing and IoT bring that work onto the campus.",
    points: ["Internships and industrial visits", "Guest sessions from working engineers", "Industry-linked project work in the Centres of Excellence"],
  },
  {
    key: "career",
    years: "Final year",
    title: "Career",
    lead: "Leave with options.",
    text: "The Department of Placement and Career Development runs from a dedicated block with full-time trainers for aptitude and soft skills, so campus drives, higher studies, government examinations and starting your own venture are all open to you on graduation day.",
    points: ["Aptitude, communication and interview training", "Campus and off-campus placement drives", "Support for GATE, higher studies and start-ups"],
  },
];

const colorOf = Object.fromEntries(LAYERS.map((l) => [l.key, l.fill]));

export default function Story() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const panelsRef = useRef(null);

  // fills the vertical rail as you scroll through the layers
  useEffect(() => {
    const el = panelsRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      const p = Math.max(0, Math.min(1, (mid - r.top) / r.height));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-42% 0px -48% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const opacities = [0, 1, 2, 3].map((lv) => (lv <= active ? 1 : 0.13));
  const current = PANELS[active];

  return (
    <section className="story section" id="layers">
      <div className="container">
        <div className="section-head">
          <Words
            className="lede"
            delay={0.2}
            text="Look at the Sasurie mark and you will see four layers stacked into an arrow. That is how we teach: each layer sits on the one below, and none is skipped."
          />
        </div>

        <div className="story-grid">
          <div className="story-sticky">
            <Reveal variant="scale" className="story-tower">
              <Tower opacities={opacities} current={active} />
            </Reveal>
            <div className="story-meter" aria-live="polite">
              <div className="meter-dots" aria-hidden="true">
                {PANELS.map((p, i) => (
                  <span key={p.key} className={i <= active ? "on" : ""} style={{ "--c": colorOf[p.key] }} />
                ))}
              </div>
              <p key={current.key} className="meter-text">
                Layer {active + 1} of 4: <strong>{current.title}</strong>
              </p>
            </div>
          </div>

          <div className="story-panels" ref={panelsRef}>
            {PANELS.map((p, i) => (
              <article
                key={p.key}
                id={p.key}
                className={`panel${i === active ? " is-active" : ""}`}
                data-index={i}
                ref={(el) => (refs.current[i] = el)}
                style={{ "--c": colorOf[p.key] }}
              >
                <Reveal className="panel-inner">
                  <p className="panel-years">
                    <i aria-hidden="true" />
                    {p.years}
                  </p>
                  <h3 className="panel-title">{p.title}</h3>
                  <p className="panel-lead">{p.lead}</p>
                  <p className="panel-text">{p.text}</p>
                  <ul className="panel-points">
                    {p.points.map((pt, j) => (
                      <li key={pt} style={{ "--i": j }}>
                        <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
                          <path d="M2 11L10 3L18 11" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
