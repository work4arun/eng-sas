"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";
import { ROUTES } from "@/lib/site";

export default function Nav({
  links = ROUTES,
  logoHref = "/",
  ctaHref = "/admissions",
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
        <Link className="nav-logo" href={logoHref} aria-label="Sasurie Group of Institutions, home">
          <Image src="/brand/group-clear.png" alt="Sasurie Group of Institutions" width={1100} height={241} priority />
        </Link>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Magnetic>
            <Link className="btn btn-primary btn-sm" href={ctaHref}>
              {ctaLabel}
            </Link>
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
          <Link key={l.href} href={l.href} style={{ "--i": i }} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link className="btn btn-primary" href={ctaHref} style={{ "--i": links.length }} onClick={() => setOpen(false)}>
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
