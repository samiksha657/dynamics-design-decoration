"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

const initials = (name) =>
  name.replace(/[\[\]]/g, "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() || "—";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const n = TESTIMONIALS.length;

  const go = useCallback((k) => setActive((k + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((x) => (x + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section className="bg-ink text-white" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="mx-auto grid max-w-page gap-12 px-6 py-20 lg:grid-cols-[1fr_1.7fr] lg:gap-20 lg:px-10 lg:py-28">
        <div data-aos="fade-right">
          <p className="eyebrow">Client stories</p>
          <h2 className="h-display mt-5 text-4xl lg:text-5xl">What UAE operators say about working with us.</h2>
          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center border border-white/25 transition-colors hover:border-gold hover:text-gold-light"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center border border-white/25 transition-colors hover:border-gold hover:text-gold-light"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 5l7 7-7 7" /></svg>
            </button>
            <p className="ml-2 font-display text-lg text-white/60">
              <span className="text-white">{String(active + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          <span aria-hidden className="pointer-events-none absolute -top-10 left-0 font-display text-[160px] leading-none text-gold/25">
            “
          </span>

          <div className="relative grid" aria-live={paused ? "polite" : "off"}>
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${n}`}
                aria-hidden={i !== active}
                className={`col-start-1 row-start-1 pt-16 transition-all duration-700 ${
                  i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <div className="flex items-center gap-1 text-gold" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.8-6.3 3.8 1.7-7L2 9.5l7.1-.6z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-display mt-6 text-2xl font-light leading-snug lg:text-[34px] lg:leading-[1.25]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/60 font-display text-lg text-gold-light">
                      {initials(t.name)}
                    </span>
                    <div>
                      <p className="font-semibold">{t.name} · <span className="font-normal text-white/70">{t.role}</span></p>
                      <p className="text-sm text-white/55">{t.company}</p>
                      <p className="eyebrow mt-1 !text-[10px]">{t.tag}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-4xl text-gold-light">{t.metric[0]}</p>
                    <p className="text-xs text-white/55">{t.metric[1]}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex gap-2" role="tablist" aria-label="Choose testimonial">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => go(i)}
                className={`h-1 transition-all duration-300 ${i === active ? "w-10 bg-gold" : "w-5 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
