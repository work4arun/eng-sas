const COLORS = ["#94C93D", "#3F6BB5", "#FDB913", "#E01F26"];

// Fixed values for deterministic SSR & CSR:
// [leftPercent, sizePx, riseDurSec, riseDelSec, swayDistancePx, swayDurSec, swayDelSec, tiltDeg]
const ITEMS = [
  [6, 22, 24, 4, 26, 4.4, 0.5, 11],
  [19, 28, 22, 16, 32, 4.8, 2.2, 12],
  [33, 20, 27, 9, 24, 4.0, 1.1, 10],
  [48, 26, 23, 20, 30, 4.6, 3.0, 12],
  [62, 22, 26, 6, 26, 4.2, 1.8, 11],
  [74, 28, 21, 14, 34, 5.0, 0.8, 13],
  [86, 20, 28, 22, 22, 3.9, 2.5, 9],
  [94, 24, 25, 11, 28, 4.5, 1.5, 11],
];

/**
 * Clean, subtle ambient flying arrow chevrons drifting upward across the whole page,
 * with gentle sine-wave sway and aerodynamic angle banking.
 */
export default function Drift({ rise = "125vh", count = ITEMS.length }) {
  return (
    <div className="drift" aria-hidden="true" style={{ "--rise": rise }}>
      {ITEMS.slice(0, count).map(([left, size, dur, del, sway, sDur, sDel, tilt], i) => (
        <div
          key={i}
          className="drift-cell"
          style={{
            left: `${left}%`,
            "--dur": `${dur}s`,
            "--del": `-${del}s`,
          }}
        >
          <svg
            className="drift-chev"
            viewBox="0 0 40 28"
            style={{
              "--s": size,
              "--sway": `${sway}px`,
              "--s-dur": `${sDur}s`,
              "--s-del": `-${sDel}s`,
              "--tilt": `${tilt}deg`,
              "--c": COLORS[i % 4],
            }}
          >
            <path d="M3 24L20 5L37 24" />
          </svg>
        </div>
      ))}
    </div>
  );
}
