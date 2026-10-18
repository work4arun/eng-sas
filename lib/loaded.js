// The intro overlay sets data-loaded on <html> when it is done. Anything that should
// wait for it (hero text, nav) calls onLoaded().
export function onLoaded(cb) {
  if (typeof document === "undefined") return () => {};
  if (document.documentElement.dataset.loaded) {
    cb();
    return () => {};
  }
  const h = () => cb();
  window.addEventListener("sas:loaded", h, { once: true });
  return () => window.removeEventListener("sas:loaded", h);
}
