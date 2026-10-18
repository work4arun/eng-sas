"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const NAV_LINKS = [
  { href: "#layers", label: "The four layers" },
  { href: "#programmes", label: "Programmes" },
  { href: "#admissions", label: "Admissions" },
  { href: "#group", label: "Sasurie group" },
];

export default function Nav({
  links = NAV_LINKS,
  logoHref = "#top",
  ctaHref = "#admissions",
  ctaLabel = "Apply now",
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="container nav-row">
        <a className="nav-logo" href={logoHref} aria-label="Sasurie Group of Institutions, home">
          <Image src="/brand/group-clear.png" alt="Sasurie Group of Institutions" width={1100} height={241} priority />
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <Magnetic>
            <a className="btn btn-primary btn-sm" href={ctaHref}>
              {ctaLabel}
            </a>
          </Magnetic>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu">
        {links.map((l, i) => (
          <a key={l.href} href={l.href} style={{ "--i": i }} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-primary" href={ctaHref} style={{ "--i": links.length }} onClick={() => setOpen(false)}>
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
