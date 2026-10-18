const COLORS = ["#94C93D", "#3F6BB5", "#FDB913", "#E01F26"];

/**
 * Bullet list in the site's own mark: the four-layer chevron, one colour per row.
 * Inline styles only — the shared stylesheet is left alone.
 */
export default function PointList({ items, className = "" }) {
  return (
    <ul className={className} style={{ display: "grid", gap: 14, maxWidth: "62ch", marginTop: 18 }}>
      {items.map((text, i) => (
        <li key={`${i}-${text.slice(0, 24)}`} style={{ display: "grid", gridTemplateColumns: "26px 1fr", gap: 14, alignItems: "start" }}>
          <svg viewBox="0 0 40 28" width="26" height="19" aria-hidden="true" style={{ marginTop: 4 }}>
            <path d="M3 24L20 5L37 24" fill="none" stroke={COLORS[i % 4]} strokeWidth="7" strokeLinejoin="miter" />
          </svg>
          <span style={{ lineHeight: 1.55 }}>{text}</span>
        </li>
      ))}
    </ul>
  );
}
