import { useEffect } from 'react';

/**
 * useReveal — attaches the IntersectionObserver that adds `.on`
 * to every element with class `.r`, `.r-left`, or `.r-right`,
 * triggering the CSS reveal transitions defined in index.css.
 *
 * Call once at the top of your page component (or in App).
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.r, .r-left, .r-right');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('on'), i * 70);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}