"use client";

import { useState } from "react";
import Reveal, { Lines, Words } from "./Reveal";
import { PROGRAMMES } from "@/lib/programmes";

const colors = ["#E01F26", "#FDB913", "#3F6BB5", "#94C93D"];


export default function Programmes() {
  const [open, setOpen] = useState(0);

  return (
    <section className="programmes section" id="programmes">
      <div className="container prog-grid">
        <div className="prog-head">
          <Lines lines={["Pick the field", "you want to build in."]} />
          <Words
            className="lede"
            delay={0.2}
            text="Four-year undergraduate programmes, with M.E. Computer Science and Engineering and MBA on top of them. Open any row to see what you will make, not just what you will study."
          />
        </div>

        <ul className="prog-list">
          {PROGRAMMES.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={p.name} className={`prog${isOpen ? " is-open" : ""}`} delay={i * 0.06} style={{ "--c": colors[i % 4] }}>
                <button
                  className="prog-btn"
                  aria-expanded={isOpen}
                  aria-controls={`prog-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <svg className="prog-chev" viewBox="0 0 40 28" width="40" height="28" aria-hidden="true">
                    <path d="M3 24L20 5L37 24" />
                  </svg>
                  <span className="prog-name">{p.name}</span>
                  <span className="prog-degree">{p.degree}</span>
                  <span className="prog-plus" aria-hidden="true" />
                </button>
                <div className="prog-body" id={`prog-${i}`} role="region">
                  <div className="prog-body-in">
                    <p className="prog-line">{p.line}</p>
                    <p className="prog-build">
                      <strong>You will build</strong> {p.build}
                    </p>
                    <ul className="prog-tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
