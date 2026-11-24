"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type CarouselSlide = { src: string; alt: string; caption: string };

export function Carousel({ label, slides }: { label: string; slides: CarouselSlide[] }) {
  const [active, setActive] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const move = (direction: -1 | 1) => setActive((index) => Math.min(slides.length - 1, Math.max(0, index + direction)));

  return (
    <section
      aria-label={label}
      aria-roledescription="carousel"
      className="local-carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}
      onPointerDown={(event) => { pointerStart.current = event.clientX; }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const delta = event.clientX - pointerStart.current;
        pointerStart.current = null;
        if (Math.abs(delta) > 48) move(delta > 0 ? -1 : 1);
      }}
      onPointerCancel={() => { pointerStart.current = null; }}
      tabIndex={0}
    >
      <div className="local-carousel__viewport">
        {slides.map((slide, index) => (
          <figure aria-hidden={index !== active} className="local-carousel__slide" hidden={index !== active} key={slide.src}>
            <Image alt={slide.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 80vw, 1000px" src={slide.src} />
            <figcaption>{slide.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="local-carousel__controls">
        <p aria-live="polite" className="local-carousel__status">{slides[active].caption} <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></p>
        <div>
          <button aria-label={`Previous slide in ${label}`} disabled={active === 0} onClick={() => move(-1)} type="button">←</button>
          <button aria-label={`Next slide in ${label}`} disabled={active === slides.length - 1} onClick={() => move(1)} type="button">→</button>
        </div>
      </div>
    </section>
  );
}
