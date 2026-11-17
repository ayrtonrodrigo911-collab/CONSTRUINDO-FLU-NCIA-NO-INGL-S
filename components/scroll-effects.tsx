"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollEffects() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Smooth scroll animation state
  const scrollState = useRef<{
    currentY: number;
    targetY: number;
    rafId: number | null;
    isAnimating: boolean;
  }>({
    currentY: 0,
    targetY: 0,
    rafId: null,
    isAnimating: false,
  });

  useEffect(() => {
    const state = scrollState.current;
    state.currentY = window.scrollY;
    state.targetY = window.scrollY;

    const getMaxScroll = () =>
      Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    // Direct, zero-delay progress bar update using GPU transform scaleX
    const updateProgress = (scrollY: number) => {
      const max = getMaxScroll();
      const progress = Math.min(1, Math.max(0, scrollY / max));
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      const shouldShow = scrollY > 340;
      setShowBackToTop((prev) => (prev !== shouldShow ? shouldShow : prev));
    };

    // Initial progress sync
    updateProgress(window.scrollY);

    // High performance smooth interpolation loop (60fps/120fps)
    const tick = () => {
      const diff = state.targetY - state.currentY;

      // When difference is tiny, snap to target and stop loop to consume 0% CPU
      if (Math.abs(diff) < 0.5) {
        state.currentY = state.targetY;
        window.scrollTo(0, state.currentY);
        state.isAnimating = false;
        state.rafId = null;
        updateProgress(state.currentY);
        return;
      }

      // Responsive lerp: 0.14 provides immediate response with silky smooth deceleration
      state.currentY += diff * 0.14;
      window.scrollTo(0, state.currentY);
      updateProgress(state.currentY);

      state.rafId = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (!state.isAnimating) {
        state.isAnimating = true;
        state.rafId = requestAnimationFrame(tick);
      }
    };

    // 1. Smooth Wheel Interception
    const onWheel = (e: WheelEvent) => {
      // Respect user's motion preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Do not intercept inside scrollable sub-elements (dropdowns, textareas, etc.)
      let node = e.target as HTMLElement | null;
      while (node && node !== document.body && node !== document.documentElement) {
        const style = window.getComputedStyle(node);
        const overflow = style.overflowY;
        if (
          (overflow === "auto" || overflow === "scroll") &&
          node.scrollHeight > node.clientHeight
        ) {
          return;
        }
        node = node.parentElement;
      }

      e.preventDefault();

      let delta = e.deltaY;

      // Handle Firefox / line-based scrolling
      if (e.deltaMode === 1) delta *= 38;
      else if (e.deltaMode === 2) delta *= window.innerHeight;

      // Detect precision trackpad (continuous small fractional values)
      const isTrackpad = !Number.isInteger(delta) && Math.abs(delta) < 40;
      const stepMultiplier = isTrackpad ? 1 : 1.15;

      const max = getMaxScroll();
      if (!state.isAnimating) {
        state.currentY = window.scrollY;
        state.targetY = window.scrollY;
      }

      state.targetY = Math.max(0, Math.min(max, state.targetY + delta * stepMultiplier));
      startLoop();
    };

    // Only apply on non-touch (mouse / trackpad) devices
    const isTouchOnly =
      window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(pointer: fine)").matches;

    if (!isTouchOnly) {
      window.addEventListener("wheel", onWheel, { passive: false });
    }

    // 2. Keyboard Navigation (Page Up, Page Down, Space, Arrow Keys)
    const onKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement as HTMLElement)?.tagName;
      if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") {
        return;
      }

      const max = getMaxScroll();
      let delta = 0;

      if (e.key === "ArrowDown") delta = 90;
      else if (e.key === "ArrowUp") delta = -90;
      else if (e.key === "PageDown" || (e.key === " " && !e.shiftKey)) delta = window.innerHeight * 0.75;
      else if (e.key === "PageUp" || (e.key === " " && e.shiftKey)) delta = -window.innerHeight * 0.75;
      else if (e.key === "Home") delta = -state.targetY;
      else if (e.key === "End") delta = max - state.targetY;

      if (delta !== 0) {
        e.preventDefault();
        if (!state.isAnimating) {
          state.currentY = window.scrollY;
          state.targetY = window.scrollY;
        }
        state.targetY = Math.max(0, Math.min(max, state.targetY + delta));
        startLoop();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    // 3. Anchor Click Handler (Smooth gliding to sections)
    const handleAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          const rect = element.getBoundingClientRect();
          const targetOffset = window.scrollY + rect.top - 24;
          const max = getMaxScroll();

          state.currentY = window.scrollY;
          state.targetY = Math.max(0, Math.min(max, targetOffset));
          startLoop();

          // Highlight form input if target is form
          if (href === "#cadastro" || href === "#inicio") {
            setTimeout(() => {
              const input = document.querySelector<HTMLInputElement>(
                `${href} input, #cadastro input`,
              );
              if (input) {
                input.focus();
                input.classList.add("input-highlight-pulse");
                setTimeout(() => input.classList.remove("input-highlight-pulse"), 1400);
              }
            }, 550);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // 4. Native scroll sync (e.g. user drags the scrollbar thumb with cursor or on touch devices)
    const onNativeScroll = () => {
      if (!state.isAnimating) {
        state.currentY = window.scrollY;
        state.targetY = window.scrollY;
        updateProgress(window.scrollY);
      }
    };

    window.addEventListener("scroll", onNativeScroll, { passive: true });

    return () => {
      if (!isTouchOnly) {
        window.removeEventListener("wheel", onWheel);
      }
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onNativeScroll);
      document.removeEventListener("click", handleAnchorClick);
      if (state.rafId !== null) cancelAnimationFrame(state.rafId);
    };
  }, []);

  const scrollToTop = () => {
    const state = scrollState.current;
    state.currentY = window.scrollY;
    state.targetY = 0;
    if (!state.isAnimating) {
      state.isAnimating = true;
      const tick = () => {
        const diff = state.targetY - state.currentY;
        if (Math.abs(diff) < 0.5) {
          state.currentY = 0;
          window.scrollTo(0, 0);
          state.isAnimating = false;
          setShowBackToTop(false);
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = "scaleX(0)";
          }
          return;
        }
        state.currentY += diff * 0.14;
        window.scrollTo(0, state.currentY);
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${Math.max(0, state.currentY / max)})`;
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  };

  return (
    <>
      {/* Top red scroll progress line: ultra-thin (2px), 0-delay, GPU-accelerated */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#c8102e] shadow-[0_0_8px_rgba(200,16,46,0.85)] z-50 origin-left pointer-events-none will-change-transform"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      {/* Floating Back to Top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao início da página"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#1a377f] text-white shadow-xl border border-white/20 transition-all duration-300 hover:bg-[#c8102e] hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 animate-bounce-subtle" />
      </button>
    </>
  );
}
