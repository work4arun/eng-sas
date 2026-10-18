"use client";

import { useEffect, useRef } from "react";

/** A soft ring that trails the pointer and swells over anything clickable. */
export default function Cursor() {
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ring.current, d = dot.current;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, shown = false;

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      r.style.transform = `translate(${rx}px, ${ry}px)`;
      d.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      if (!shown) { shown = true; rx = x; ry = y; r.classList.add("on"); d.classList.add("on"); }
      const hot = e.target.closest?.("a, button, select, input, label, .prog-btn, .tw-par");
      r.classList.toggle("hot", !!hot);
      d.classList.toggle("hot", !!hot);
    };
    const down = () => r.classList.add("down");
    const up = () => r.classList.remove("down");
    const leave = () => { shown = false; r.classList.remove("on"); d.classList.remove("on"); };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  );
}
