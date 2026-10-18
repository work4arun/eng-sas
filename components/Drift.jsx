const COLORS = ["#94C93D", "#3F6BB5", "#FDB913", "#E01F26"];
// fixed values so server and client render the same thing
const ITEMS = [
  [6, 26, 17, 0], [14, 14, 22, 5], [23, 34, 19, 9], [31, 18, 25, 2], [40, 28, 18, 12],
  [48, 12, 23, 7], [57, 30, 20, 3], [65, 16, 24, 10], [73, 36, 18, 6], [81, 20, 21, 1],
  [89, 28, 26, 8], [95, 14, 19, 11],
];

/** Small chevrons drifting upward, like the arrow in the logo, in the background. */
export default function Drift({ rise = "110vh", count = ITEMS.length }) {
  return (
    <div className="drift" aria-hidden="true" style={{ "--rise": rise }}>
      {ITEMS.slice(0, count).map(([left, size, dur, del], i) => (
        <svg key={i} className="drift-chev" viewBox="0 0 40 28" style={{ left: `${left}%`, "--s": size, "--dur": `${dur}s`, "--del": `-${del}s`, "--c": COLORS[i % 4] }}>
          <path d="M3 24L20 5L37 24" />
        </svg>
      ))}
    </div>
  );
}
