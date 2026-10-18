"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LAYERS } from "@/lib/layers";
import { TowerLayers } from "./Tower";
import Magnetic from "./Magnetic";
import { Lines, Words } from "./Reveal";
import Drift from "./Drift";
import { onLoaded } from "@/lib/loaded";
import { heroBoldVar } from "@/lib/heroFont";

const RIPPLES = Array.from({ length: 8 }, (_, i) => i + 1);

// Soft rays that fan up from the top edge of the logo card. x is the position along the edge (%), a the lean (deg),
// d the delay: the middle rays start first and the rest follow outward.
const RAYS = [8, 20, 32, 44, 56, 68, 80, 92].map((x, i) => ({
  x,
  a: Math.round((x - 50) * 0.85),
  c: ["var(--red)", "var(--gold)", "var(--blue)"][i % 3],
  d: (2.4 + (Math.abs(x - 50) / 42) * 1.4).toFixed(2),
}));

export default function Hero() {
  const root = useRef(null);
  const visual = useRef(null);
  const [ready, setReady] = useState(false);
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    return onLoaded(() => setReady(true));
  }, []);

  // The arrow climbs on its own: a hop passes up the four layers, foundation first, and repeats. Moving
  // the cursor over the hero makes it climb faster.
  useEffect(() => {
    const sec = root.current;
    const vis = visual.current;
    if (!sec || !vis) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const byLevel = [];
    vis.querySelectorAll(".tw-par").forEach((el) => (byLevel[Number(el.dataset.level)] = el));
    const K = 80, Z = 0.55, C = 2 * Z * Math.sqrt(K);
    const st = [0, 1, 2, 3].map(() => ({ y: 0, vy: 0, s: 1, vs: 0 })); // level 0 is the foundation, 3 the career tip
    let t = 0, energy = 0, sy = 0, raf = 0, last = 0, lx = null, ly = null;

    const step = (now) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      energy = Math.max(0, energy - 0.9 * dt);
      t += dt * (1 + Math.min(energy, 2));
      const n = Math.max(1, Math.ceil(dt / (1 / 120)));
      const h = dt / n;
      for (let lv = 0; lv < 4; lv++) {
        const q = st[lv];
        const p = (((t / 4.8 - lv * 0.16) % 1) + 1) % 1;
        const bump = p < 0.45 ? Math.sin((Math.PI * p) / 0.45) ** 2 : 0;
        const ty = -30 * bump + (lv - 1.5) * sy * -50 * (lv === 0 ? 0.4 : 1);
        const ts = 1 + 0.05 * bump - Math.min(0.06, Math.abs(q.vy) * 0.0004) * (lv === 0 ? 0.2 : 1);
        for (let i = 0; i < n; i++) {
          q.vy += (-K * (q.y - ty) - C * q.vy) * h;
          q.y += q.vy * h;
          q.vs += (-90 * (q.s - ts) - 2 * 0.3 * Math.sqrt(90) * q.vs) * h;
          q.s += q.vs * h;
        }
        if (byLevel[lv]) byLevel[lv].style.transform = `translate(0px, ${q.y.toFixed(2)}px) scale(${(2 - q.s).toFixed(4)}, ${q.s.toFixed(4)})`;
      }
      raf = requestAnimationFrame(step); // the loop never stops, so the climb is always running
    };
    const run = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };
    const onMove = (e) => {
      if (lx !== null) energy = Math.min(2.4, energy + Math.min(Math.hypot(e.clientX - lx, e.clientY - ly), 80) * 0.002);
      lx = e.clientX;
      ly = e.clientY;
    };
    const onLeave = () => (lx = ly = null);
    const onScroll = () => {
      sy = Math.max(0, Math.min(1, window.scrollY / ((sec.offsetHeight || 1) * 0.9)));
      run();
    };

    sec.addEventListener("pointermove", onMove);
    sec.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    run();
    return () => {
      sec.removeEventListener("pointermove", onMove);
      sec.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const opacities = [0, 1, 2, 3].map((lv) => (focus === null || focus === lv ? 1 : 0.22));

  return (
    <section className={`hero ${heroBoldVar}`} id="top" ref={root}>
      <Drift />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Lines as="h1" className="hero-title" waitForLoad lines={["Engineers are", "built in layers."]} />
          <Words
            className="lede"
            waitForLoad
            delay={0.55}
            text="Sasurie College of Engineering (Autonomous) takes you from strong fundamentals to a career you chose, one layer at a time, at Vijayamangalam on the Coimbatore Bypass."
          />
          <div className={`cta-row hero-in${ready ? " go" : ""}`} style={{ "--delay": "1s" }}>
            <Magnetic>
              <a className="btn btn-primary" href="#admissions">
                Apply now
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href="#layers">
                See the four layers
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="hero-side">
        <div className={`hero-brand hero-in${ready ? " go" : ""}`} style={{ "--delay": "1.6s" }}>
          {RAYS.map((r, i) => (
            <span className="ray" key={i} aria-hidden="true" style={{ "--x": `${r.x}%`, "--a": `${r.a}deg`, "--c": r.c, "--d": `${r.d}s` }} />
          ))}
          <Image src="/brand/engg-clear.png" alt="Sasurie College of Engineering (Autonomous)" width={1100} height={268} />
        </div>
        <div className={`hero-visual${ready ? " go" : ""}`} ref={visual}>
          <svg
            className="hero-svg"
            viewBox="-300 -300 600 640"
            role="img"
            aria-label="Four stacked layers rising like an arrow: foundation, skills, industry and career"
          >
            <defs>
              <clipPath id="ripple-clip">
                <rect x="-300" y="-300" width="600" height="294" />
              </clipPath>
            </defs>
            <g clipPath="url(#ripple-clip)" aria-hidden="true">
              {RIPPLES.map((k) => {
                const apex = -k * 44 - 6;
                return (
                  <polyline
                    key={k}
                    className="ripple"
                    points={`-300,${apex + 270} 0,${apex} 300,${apex + 270}`}
                    style={{ "--i": k, "--o": (1 - k / 9).toFixed(2) }}
                  />
                );
              })}
            </g>
            <TowerLayers
              animate
              opacities={opacities}
              onEnter={setFocus}
              onLeave={() => setFocus(null)}
            />
          </svg>

          <ul className="hero-labels">
            {LAYERS.map((l) => (
              <li
                key={l.key}
                style={{
                  left: `${((l.anchor.x + 16 + 300) / 600) * 100}%`,
                  top: `${((l.anchor.y + 300) / 640) * 100}%`,
                  "--c": l.fill,
                  "--i": 3 - l.level,
                }}
              >
                <a
                  href={`#${l.key}`}
                  onMouseEnter={() => setFocus(l.level)}
                  onMouseLeave={() => setFocus(null)}
                  onFocus={() => setFocus(l.level)}
                  onBlur={() => setFocus(null)}
                >
                  <i aria-hidden="true" />
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        </div>

        <ul className="legend">
          {LAYERS.map((l) => (
            <li key={l.key} style={{ "--c": l.fill }}>
              <a href={`#${l.key}`}>{l.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <a className="scroll-cue" href="#facts" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
