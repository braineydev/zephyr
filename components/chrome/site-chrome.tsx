"use client";

import { useEffect, useRef, useState } from "react";

const destinations = [
  ["Home", "main-home"],
  ["Sunken Sanctuary", "sanctuary"],
  ["Amenities", "amenities"],
  ["Interiors", "interiors"],
  ["Executive Lounge", "executive-lounge"],
  ["Rooftop Club", "rooftop-club"],
  ["Floor Plans", "floor-plans"],
  ["Location", "location"],
  ["Team", "team"],
] as const;

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstFocusable = menuRef.current?.querySelector<HTMLElement>("button, a[href]");
    firstFocusable?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = [...menuRef.current.querySelectorAll<HTMLElement>(
        'button:not(:disabled):not([tabindex="-1"]), a[href]:not([tabindex="-1"])',
      )];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  };

  const navigateTo = (id: string) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    target.setAttribute("tabindex", "-1");
    requestAnimationFrame(() => target.focus({ preventScroll: true }));
  };

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#main-home" aria-label="Zephyr Westlands, home">ZEPHYR</a>
        <button
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          aria-haspopup="dialog"
          className="menu-trigger"
          onClick={() => setMenuOpen((open) => !open)}
          ref={triggerRef}
          type="button"
        >
          <span aria-hidden="true" className="menu-icon">{menuOpen ? "×" : "☰"}</span>
          <span>Menu</span>
        </button>
      </header>
      <div aria-label="Page scroll progress" aria-valuemax={100} aria-valuemin={0} aria-valuenow={Math.round(progress)} className="progress-rail" role="progressbar">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div
        aria-label="Site navigation"
        aria-modal={menuOpen ? "true" : undefined}
        className="menu-overlay"
        hidden={!menuOpen}
        id="site-menu"
        ref={menuRef}
        role="dialog"
      >
        <div className="menu-overlay__panel">
          <div className="menu-overlay__topline"><span>ZEPHYR WESTLANDS</span><button className="menu-close" onClick={closeMenu} type="button">Close <span aria-hidden="true">×</span></button></div>
          <nav aria-label="Primary navigation">
            <ol>{destinations.map(([label, id], index) => <li key={id}><a href={`#${id}`} onClick={() => navigateTo(id)}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a></li>)}</ol>
          </nav>
          <p className="menu-overlay__footnote">Independent reconstruction preview</p>
        </div>
        <div aria-hidden="true" className="menu-backdrop" />
      </div>
    </>
  );
}
