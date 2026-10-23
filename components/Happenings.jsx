"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TowerLayers } from "./Tower";
import { LAYERS } from "@/lib/layers";
import { EVENTS, CHAPTERS } from "@/lib/happenings";

// The Happenings stage. One tall section with a pinned viewport inside it. Scrolling scrubs a single
// progress value p (0 to 1), and everything on stage is a function of p:
//   - the big Sasurie arrow lifts and lights the layer that the current happening belongs to,
//   - each happening's photo and card travel along the arrow's diagonal, at different speeds,
//   - a beam is drawn from the lit layer to the card,
//   - the rail at the bottom fills, one segment per happening.
// With reduced motion (or no scripting) the stage falls back to a plain stack; see .hp-stage in globals.css.

const N = EVENTS.length;
const LEVEL_COLOR = Object.fromEntries(LAYERS.map((l) => [l.level, l.fill]));
const ANCHOR = Object.fromEntries(LAYERS.map((l) => [l.level, l.anchor]));
const VB = { x: -170, y: -6, w: 340, h: 340 };
const pad2 = (n) => String(n).padStart(2, "0");
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t) => t * t * (3 - 2 * t);
// Dwell: a happening holds still for the first 30% of its distance from centre, hands over during the next 40%,
// and is gone by 70%. u runs from -1 (waiting below) to +1 (gone above).
const dwell = (u) => Math.sign(u) * ease(clamp((Math.abs(u) - 0.3) / 0.4));

export default function Happenings() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scenes = [...stage.querySelectorAll(".hp-scene")];
    const layerEls = [];
    stage.querySelectorAll(".tw-par").forEach((n) => (layerEls[Number(n.dataset.level)] = n));
    const segs = [...stage.querySelectorAll(".hp-seg i")];
    const countEl = stage.querySelector(".hp-count-n");
    const layerEl = stage.querySelector(".hp-now-layer");
    const nameEl = stage.querySelector(".hp-now-name");
    const sticky = stage.querySelector(".hp-sticky");
    const tower = stage.querySelector(".hp-tower");
    const right = stage.querySelector(".hp-right");
    const beamSvg = stage.querySelector(".hp-beam");
    const beam = beamSvg.querySelector("path");
    const dot = beamSvg.querySelector("circle");
    const arrowBox = stage.querySelector(".hp-arrow");

    let geo = null;
    const measure = () => {
      const s = sticky.getBoundingClientRect();
      const t = tower.getBoundingClientRect();
      const r = right.getBoundingClientRect();
      geo = { s, t, r };
      beamSvg.setAttribute("viewBox", `0 0 ${s.width} ${s.height}`);
    };

    let target = 0, p = 0, raf = 0, visible = false, last = performance.now(), t = 0, idx = -1;
    const readTarget = () => {
      const r = stage.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      target = total > 0 ? clamp(-r.top / total) : 0;
    };

    const levels = EVENTS.map((e) => e.level);
    const render = () => {
      const Q = p * (N - 1);

      // happenings: position, clip and fade as a function of distance from the centre
      const nearest = Math.min(N - 1, Math.max(0, Math.round(Q)));
      scenes.forEach((el, i) => {
        const u = dwell(Q - i);
        const a = Math.abs(u);
        if (a >= 0.999) {
          if (el._on !== false) { el.style.visibility = "hidden"; el._on = false; }
          return;
        }
        if (el._on !== true) { el.style.visibility = "visible"; el._on = true; }
        el.style.setProperty("--u", u.toFixed(4));
        el.style.setProperty("--e", Math.max(0, -u).toFixed(4));
        el.style.setProperty("--x", Math.max(0, u).toFixed(4));
        el.style.setProperty("--o", (1 - Math.pow(a, 1.7)).toFixed(3));
        el.style.setProperty("--oc", Math.max(0, 1 - a * 1.4).toFixed(3));
      });

      // the arrow: a continuous "level" that glides between the layers the happenings belong to
      const i0 = Math.min(N - 1, Math.floor(Q));
      const i1 = Math.min(N - 1, i0 + 1);
      const f = ease(clamp((Q - i0 - 0.3) / 0.4));
      const Lc = levels[i0] * (1 - f) + levels[i1] * f;
      for (let lv = 0; lv < 4; lv++) {
        const el = layerEls[lv];
        if (!el) continue;
        const near = Math.max(0, 1 - Math.abs(Lc - lv));
        const lift = -34 * near + Math.sin(t * 1.3 - lv * 0.8) * 2.2;
        el.style.transform = `translate(0px, ${lift.toFixed(2)}px)`;
        el.style.opacity = (0.14 + 0.86 * clamp(Lc - lv + 1)).toFixed(3);
        el.style.filter = near > 0.02 ? `drop-shadow(0 0 ${(22 * near).toFixed(1)}px ${LEVEL_COLOR[lv]}99)` : "none";
      }

      // the beam from the lit layer to the card
      if (geo && window.innerWidth > 900) {
        const { s, t: tw, r } = geo;
        const lo = Math.floor(Lc), hi = Math.min(3, lo + 1), lf = Lc - lo;
        const ax = ANCHOR[lo].x * (1 - lf) + ANCHOR[hi].x * lf;
        const ay = ANCHOR[lo].y * (1 - lf) + ANCHOR[hi].y * lf;
        const k = tw.width / VB.w;
        const sx = tw.left - s.left + (ax - VB.x) * k + 10;
        const sy = tw.top - s.top + (ay - VB.y) * k - 34 * Math.max(0, 1 - Math.abs(Lc - Math.round(Lc))) * k;
        const ex = r.left - s.left - 6;
        const ey = r.top - s.top + r.height * 0.8;
        const mx = sx + (ex - sx) * 0.55;
        beam.setAttribute("d", `M${sx.toFixed(1)} ${sy.toFixed(1)} C${mx.toFixed(1)} ${sy.toFixed(1)} ${mx.toFixed(1)} ${ey.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`);
        dot.setAttribute("cx", ex.toFixed(1));
        dot.setAttribute("cy", ey.toFixed(1));
        const d = Math.abs(dwell(Q - nearest));
        beam.style.strokeDashoffset = clamp(d * 1.5).toFixed(3);
        dot.style.opacity = clamp(1 - d * 2.5).toFixed(2);
      }

      // rail
      segs.forEach((s, i) => (s.style.transform = `scaleX(${clamp(Q - i + 0.5).toFixed(3)})`));

      if (nearest !== idx) {
        idx = nearest;
        const ev = EVENTS[idx];
        const ch = CHAPTERS.find((c) => c.level === ev.level);
        countEl.textContent = pad2(idx + 1);
        layerEl.textContent = `${ch.layer} · layer ${ev.level + 1} of 4`;
        nameEl.textContent = ch.name;
        stage.style.setProperty("--c", LEVEL_COLOR[ev.level]);
        beam.setAttribute("stroke", LEVEL_COLOR[ev.level]);
        dot.setAttribute("fill", LEVEL_COLOR[ev.level]);
      }
    };

    const frame = (now) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;
      t += dt;
      p += (target - p) * (1 - Math.exp(-9 * dt));
      if (Math.abs(target - p) < 0.00004) p = target;
      render();
      raf = visible ? requestAnimationFrame(frame) : 0;
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) {
          arrowBox.classList.add("in");
          measure();
          readTarget();
          if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
        }
      },
      { rootMargin: "100px 0px 100px 0px" }
    );
    io.observe(stage);

    const onScroll = () => readTarget();
    const onResize = () => { measure(); readTarget(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    measure();
    readTarget();
    p = target;
    render();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const first = EVENTS[0];
  const firstChapter = CHAPTERS.find((c) => c.level === first.level);

  return (
    <section
      className="hp-stage"
      ref={stageRef}
      style={{ "--n": N, "--c": LEVEL_COLOR[first.level] }}
      aria-label="Happenings at SAS, shown as you scroll"
    >
      <div className="hp-sticky">
        <div className="hp-left">
          <p className="hp-now">
            <span className="hp-now-layer">{`${firstChapter.layer} · layer ${first.level + 1} of 4`}</span>
            <span className="hp-now-name">{firstChapter.name}</span>
          </p>
          <div className="hp-arrow">
            <svg className="hp-tower" viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`} role="img" aria-label="The Sasurie arrow, four layers climbing as the happenings change">
              <TowerLayers animate />
            </svg>
          </div>
        </div>

        <div className="hp-right">
          {EVENTS.map((e, i) => (
            <article
              className="hp-scene"
              key={e.id}
              style={{ "--c": LEVEL_COLOR[e.level], "--rgb": hexRgb(LEVEL_COLOR[e.level]), "--u": i === 0 ? 0 : 1, "--o": i === 0 ? 1 : 0, "--oc": i === 0 ? 1 : 0, "--e": 0, "--x": 0 }}
            >
              <span className="hp-ghost" aria-hidden="true">{pad2(i + 1)}</span>
              <div className="hp-photo">
                <Image src={e.image} alt={e.alt} fill sizes="(max-width: 900px) 100vw, 56vw" priority={i === 0} />
              </div>
              <div className="hp-card">
                <p className="hp-card-top">
                  <span className="hp-chip">{e.kicker}</span>
                  <span className="hp-when">{e.when}</span>
                </p>
                <h2>{e.title}</h2>
                <p>{e.text}</p>
                <p className="hp-links">
                  {e.links.map((l) =>
                    l.external ? (
                      <a key={l.href} className="to-top" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    ) : (
                      <Link key={l.href} className="to-top" href={l.href}>{l.label}</Link>
                    )
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>

        <svg className="hp-beam" aria-hidden="true">
          <path d="M0 0" pathLength="1" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1" strokeDashoffset="1" stroke={LEVEL_COLOR[first.level]} />
          <circle r="6" cx="0" cy="0" fill={LEVEL_COLOR[first.level]} />
        </svg>

        <div className="hp-rail" aria-hidden="true">
          <p className="hp-count"><b className="hp-count-n">01</b><span>/ {pad2(N)}</span></p>
          <div className="hp-segs">
            {EVENTS.map((e) => (
              <span className="hp-seg" key={e.id} style={{ "--c": LEVEL_COLOR[e.level] }}><i /></span>
            ))}
          </div>
          <p className="hp-scroll">Keep scrolling</p>
        </div>
      </div>
    </section>
  );
}

function hexRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}
