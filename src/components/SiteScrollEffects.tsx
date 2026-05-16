"use client";

import { useEffect, useState } from "react";

export default function SiteScrollEffects() {
  const [overlayHidden, setOverlayHidden] = useState(false);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setOverlayHidden(true);
    }, 650);

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-contrast]"),
    );

    if (!sections.length) {
      return () => {
        window.clearTimeout(hideTimer);
      };
    }

    let rafId = 0;

    const updateActiveSection = () => {
      const viewportTarget = window.innerHeight * 0.45;
      let activeSection: HTMLElement | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

        if (!isVisible) {
          continue;
        }

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportTarget);

        if (distance < bestDistance) {
          bestDistance = distance;
          activeSection = section;
        }
      }

      for (const section of sections) {
        section.classList.toggle("is-active", section === activeSection);
      }
    };

    const onScrollOrResize = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateActiveSection();
        rafId = 0;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.clearTimeout(hideTimer);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`site-enter-overlay${overlayHidden ? " is-hidden" : ""}`}
    />
  );
}
