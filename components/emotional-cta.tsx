"use client";

import { useEffect, useRef } from "react";

export default function EmotionalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const updateParallax = () => {
      const section = sectionRef.current;
      if (!section || !bgLayerRef.current) return;

      // Read the current position so lazy-loaded content above cannot leave stale measurements.
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.bottom > -150 && rect.top < viewportHeight + 150) {
        const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
        const progress = Math.max(-1, Math.min(1, centerOffset / (viewportHeight * 0.75)));
        const widthScale = Math.max(0.55, Math.min(1, window.innerWidth / 1400));
        const bgY = progress * 18 * widthScale;

        bgLayerRef.current.style.transform = `translate3d(0, ${bgY}px, 0) scale(1.002)`;
      }
    };

    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    const onResize = onScroll;

    updateParallax();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="cta-title" className="emotional-cta" id="impacto">
      {/* Parallax background layer */}
      <div ref={bgLayerRef} aria-hidden="true" className="cta-parallax-bg">
        <img alt="" className="cta-art cta-art-left" src="/img/cta-professora.png" />
        <img alt="" className="cta-art cta-art-right" src="/img/cta-estatua-liberdade.png" />
      </div>

      <div className="cta-copy">
        <h2 id="cta-title">O ano da realização de um sonho</h2>
        <p>
          Falar inglês vai muito além de aprender um novo idioma. O inglês te abre um mundo de possibilidades.
          <strong> Falar inglês é conquistar a sua liberdade!</strong>
        </p>
        <a className="button-primary button-shine" href="#cadastro">
          Quero ter acesso ao e-book
        </a>
      </div>
    </section>
  );
}
