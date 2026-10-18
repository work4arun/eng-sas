"use client";

import { useEffect, useRef, useState } from "react";
import { onLoaded } from "@/lib/loaded";

/**
 * Adds `.in` once the element scrolls into view. All the motion lives in CSS
 * (see .rv-* in globals.css) so it can be switched off for reduced-motion users.
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
  once = true,
  waitForLoad = false,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (waitForLoad) onLoaded(() => setOn(true));
          else setOn(true);
          if (once) io.disconnect();
        } else if (!once) setOn(false);
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, waitForLoad]);

  return (
    <Tag
      ref={ref}
      className={`rv rv-${variant}${on ? " in" : ""}${className ? " " + className : ""}`}
      style={{ "--delay": `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Headline whose lines slide up out of a mask, one after the other. */
export function Lines({ lines, as = "h2", className = "", delay = 0, waitForLoad = false }) {
  return (
    <Reveal as={as} variant="lines" className={className} delay={delay} waitForLoad={waitForLoad}>
      {lines.map((line, i) => (
        <span className="line" key={i}>
          <span className="line-in" style={{ "--i": i }}>
            {line}
          </span>
        </span>
      ))}
    </Reveal>
  );
}

/** Paragraph whose words rise and un-blur one after another. */
export function Words({ text, as = "p", className = "", delay = 0, waitForLoad = false }) {
  return (
    <Reveal as={as} variant="words" className={className} delay={delay} waitForLoad={waitForLoad}>
      {text.split(" ").map((w, i) => (
        <span className="word-w" key={i}>
          <span style={{ "--i": i }}>{w}</span>
        </span>
      ))}
    </Reveal>
  );
}
