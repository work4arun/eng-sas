"use client";

import { useRef } from "react";

/** Nudges its child toward the pointer. Pure delight, no function. */
export default function Magnetic({ children, strength = 0.28 }) {
  const ref = useRef(null);

  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span className="mag" ref={ref} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </span>
  );
}
