"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal, { Lines, Words } from "./Reveal";
import { PROGRAMMES } from "@/lib/programmes";
import { DEPARTMENT_BY_PROGRAMME } from "@/lib/departments";

const colors = ["#E01F26", "#FDB913", "#3F6BB5", "#94C93D"];


export default function Programmes() {
  const [open, setOpen] = useState(0);

  return (
    <section className="programmes section" id="programmes">
      <div className="container prog-grid">
        <div className="prog-head">
          <Lines lines={["Choose the programme", "that fits your goals."]} />
          <Words
            className="lede"
            delay={0.2}
            text="Eight four-year B.E. and B.Tech. departments, a common first year in Science and Humanities, and postgraduate study in M.E. Computer Science and Engineering and MBA. Select a programme to see what it covers."
          />
          <div className="cta-row">
            <Link className="btn" href="/departments">View all programmes</Link>
          </div>
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
                    <p className="prog-build">{p.build}</p>
                    <ul className="prog-tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    {DEPARTMENT_BY_PROGRAMME[p.short] && (
                      <Link className="btn btn-ghost btn-sm" href={`/departments/${DEPARTMENT_BY_PROGRAMME[p.short].slug}`}>
                        Department details
                      </Link>
                    )}
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
