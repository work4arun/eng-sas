"use client";

import { useRef } from "react";

/** 3D tilt that follows the pointer, with a moving highlight. */
export default function Tilt({ children, max = 8, className = "" }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", ((0.5 - py) * max).toFixed(2));
    el.style.setProperty("--ry", ((px - 0.5) * max).toFixed(2));
    el.style.setProperty("--px", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--py", `${(py * 100).toFixed(1)}%`);
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", 0);
    el.style.setProperty("--ry", 0);
  };
  return (
    <div className={`tilt ${className}`} ref={ref} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </div>
  );
}
