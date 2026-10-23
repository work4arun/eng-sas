"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal, { Lines, Words } from "./Reveal";
import { PROGRAMMES, PG_PROGRAMMES, GOALS } from "@/lib/programmes";
import { DEPARTMENT_BY_PROGRAMME, DEPARTMENT_BY_SLUG } from "@/lib/departments";

// A compact finder: pick what you want to do, see only the programmes that lead there. Every card links to its
// department page (/departments/[slug]); the slug comes from lib/departments.js, not from here, so the two stay in step.

const UG = PROGRAMMES.filter((p) => p.group !== "foundation").map((p) => {
  const d = DEPARTMENT_BY_PROGRAMME[p.short];
  return { ...p, slug: d.slug, since: d.since, credential: d.credential };
});
const PG = PG_PROGRAMMES.map((p) => {
  const d = DEPARTMENT_BY_SLUG[p.slug];
  return { ...p, since: d.since, credential: d.credential };
});
const ITEMS = [...UG, ...PG];
const FOUNDATION = PROGRAMMES.find((p) => p.group === "foundation");
const FOUNDATION_DEPT = DEPARTMENT_BY_PROGRAMME[FOUNDATION.short];

const BY_GOAL = Object.fromEntries(GOALS.map((g) => [g.key, ITEMS.filter((p) => p.group === g.key)]));

const STATS = [
  { n: UG.length, label: "Undergraduate departments" },
  { n: PG.length, label: "Postgraduate programmes" },
  { n: 1, label: "Common first year" },
];

// "B.E. · four years" -> "Four years"; adds the founding year where the college states one.
const duration = (p) => {
  const part = (p.credential.split("·")[1] || "").trim();
  const d = part ? part.charAt(0).toUpperCase() + part.slice(1) : "";
  return [d, p.since ? `since ${p.since}` : ""].filter(Boolean).join(" · ");
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Chevrons = () => (
  <svg className="pf-mark" viewBox="0 0 28 26" width="28" height="26" aria-hidden="true">
    <path d="M2 10L14 2L26 10" />
    <path d="M2 18L14 10L26 18" />
    <path d="M2 26L14 18L26 26" />
  </svg>
);

export default function Programmes() {
  const [goal, setGoal] = useState(GOALS[0].key);
  const g = GOALS.find((x) => x.key === goal);
  const items = BY_GOAL[goal];

  return (
    <section className="pf section" id="programmes">
      <div className="pf-bar" aria-hidden="true" />
      <div className="container">
        <div className="pf-head">
          <div className="pf-title">
            <p className="pf-eyebrow">
              <Chevrons />
              Programmes
            </p>
            <Lines lines={["Choose the programme", "that fits your goals."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Eight B.E. and B.Tech. departments, a common first year, and two postgraduate programmes. Start with what you want to do."
            />
          </div>
          <dl className="pf-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{String(s.n).padStart(2, "0")}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal className="pf-finder">
          <div className="pf-goals" role="group" aria-label="I want to…">
            <p className="pf-goals-label">I want to…</p>
            {GOALS.map((x) => (
              <button
                key={x.key}
                type="button"
                className="pf-goal"
                aria-pressed={goal === x.key}
                onClick={() => setGoal(x.key)}
                style={{ "--c": x.color, "--rgb": x.rgb }}
              >
                <i aria-hidden="true" />
                <b>{x.label}</b>
                <em>{BY_GOAL[x.key].length}</em>
                <small>{BY_GOAL[x.key].map((p) => p.short).join(" · ")}</small>
              </button>
            ))}
          </div>

          <div className="pf-panel" key={goal} style={{ "--c": g.color, "--rgb": g.rgb }} aria-live="polite">
            <header className="pf-panel-head">
              <h3>{g.short}</h3>
              <p>{g.blurb}</p>
            </header>
            <ul className={`pf-grid${items.length < 3 ? " is-wide" : ""}`}>
              {items.map((p, i) => (
                <li key={p.slug} className="pf-item" style={{ "--i": i }}>
                  <article className="pf-card">
                    <div className="pf-main">
                      <div className="pf-card-top">
                        <span className="pf-degree">{p.degree}</span>
                        <span className="pf-goal-tag">{duration(p)}</span>
                      </div>
                      <h4 className="pf-name">
                        <Link href={`/departments/${p.slug}`} className="pf-link">
                          {p.name}
                        </Link>
                      </h4>
                      <p className="pf-line">{p.line}</p>
                    </div>
                    <div className="pf-side">
                      <ul className="pf-tags">
                        {p.tags.slice(0, 3).map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <span className="pf-go" aria-hidden="true">
                        <Arrow />
                      </span>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="pf-foot-row">
          <Link className="pf-found" href={`/departments/${FOUNDATION_DEPT.slug}`}>
            <span className="pf-found-tag">
              <Chevrons />
              Every branch starts here
            </span>
            <b>{FOUNDATION.name}</b>
            <span className="pf-found-text">{FOUNDATION.line}</span>
            <span className="pf-found-go" aria-hidden="true">
              <Arrow />
            </span>
          </Link>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/departments">
              Compare all departments
            </Link>
            <Link className="btn pf-ghost" href="/admissions">
              Admissions and eligibility
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
