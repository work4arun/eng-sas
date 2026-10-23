"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CATEGORIES, PHOTOS } from "@/lib/life";

const COUNT = Object.fromEntries(CATEGORIES.map((c) => [c.key, PHOTOS.filter((p) => p.cat === c.key).length]));

/** Filterable masonry gallery with a keyboard-friendly lightbox. */
export default function LifeGallery() {
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(-1);
  const shown = cat === "all" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);
  const opener = useRef(null);
  const closeBtn = useRef(null);

  const close = useCallback(() => {
    setOpen(-1);
    opener.current?.focus();
  }, []);
  const step = useCallback((d) => setOpen((i) => (i < 0 ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (open < 0) return;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeBtn.current?.focus();
    const key = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", key);
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", key);
    };
  }, [open, close, step]);

  const current = open >= 0 ? shown[open] : null;

  return (
    <div className="lf">
      <div className="lf-bar">
        <div className="lf-tabs" role="group" aria-label="Filter photographs">
          <button type="button" aria-pressed={cat === "all"} onClick={() => setCat("all")}>
            All <b>{PHOTOS.length}</b>
          </button>
          {CATEGORIES.map((c) => (
            <button key={c.key} type="button" aria-pressed={cat === c.key} onClick={() => setCat(c.key)}>
              {c.label} <b>{COUNT[c.key]}</b>
            </button>
          ))}
        </div>
      </div>

      <ul className="lf-grid" key={cat}>
        {shown.map((p, i) => (
          <li key={p.src} className="lf-tile" style={{ "--i": Math.min(i, 14) }}>
            <button
              type="button"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Open photograph: ${p.caption}`}
            >
              <Image src={p.src} alt={p.caption} width={p.w} height={p.h} sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 28vw" />
              <span className="lf-cap">{p.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div className="lf-box" role="dialog" aria-modal="true" aria-label={current.caption} onClick={close}>
          <button ref={closeBtn} type="button" className="lf-x" onClick={close} aria-label="Close">
            <span /><span />
          </button>
          <button type="button" className="lf-nav lf-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photograph">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <figure onClick={(e) => e.stopPropagation()} key={current.src}>
            <Image src={current.src} alt={current.caption} width={current.w} height={current.h} sizes="92vw" priority />
            <figcaption>
              <span>{current.caption}</span>
              <small>{open + 1} / {shown.length}</small>
            </figcaption>
          </figure>
          <button type="button" className="lf-nav lf-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photograph">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
