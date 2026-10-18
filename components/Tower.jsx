import { LAYERS } from "@/lib/layers";

const DEPTH = { 0: 3, 1: 7, 2: 12, 3: 19 }; // parallax travel per level, in svg units
const DELAY = { 0: 0.15, 1: 0.32, 2: 0.49, 3: 0.66 }; // green lands first, red last

/** The stacked-arrow mark as svg groups. Render inside an <svg>. */
export function TowerLayers({ opacities = [1, 1, 1, 1], animate = false, current = -1, onEnter, onLeave }) {
  return (
    <>
      {LAYERS.map((l) => (
        <g
          key={l.key}
          className={`tw-par${current === l.level ? " is-current" : ""}`}
          data-level={l.level}
          style={{ "--d": DEPTH[l.level], "--lv": l.level, opacity: opacities[l.level] }}
          onMouseEnter={onEnter ? () => onEnter(l.level) : undefined}
          onMouseLeave={onLeave}
        >
          <g className={animate ? "tw-rise" : undefined} style={{ "--delay": `${DELAY[l.level]}s` }}>
            <g className="tw-float">
              <path d={l.left} fill={l.fill} />
              <path d={l.right} fill={l.fillDark} />
            </g>
          </g>
        </g>
      ))}
    </>
  );
}

/** Stand-alone tower used beside the story. */
export default function Tower({ opacities, label, current }) {
  return (
    <svg
      className="tower"
      viewBox="-170 -6 340 340"
      role="img"
      aria-label={label || "Four stacked layers: foundation, skills, industry and career"}
    >
      <TowerLayers opacities={opacities} current={current} />
    </svg>
  );
}
