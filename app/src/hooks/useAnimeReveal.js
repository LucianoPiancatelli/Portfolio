import { useEffect } from 'react';

export function useAnimeReveal() {
  useEffect(() => {
    const reveal = (target) => {
      target.classList.add('is-visible');
      target.querySelectorAll('.draw-on-view').forEach((node) => {
        node.classList.add('is-drawn');
      });
      if (target.classList.contains('draw-on-view')) {
        target.classList.add('is-drawn');
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    const drawObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-drawn');
            drawObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    const revealElements = document.querySelectorAll('.anime-reveal');
    revealElements.forEach((element) => observer.observe(element));

    const standaloneDraws = document.querySelectorAll(
      '.draw-on-view:not(.anime-reveal):not(.anime-reveal *)',
    );
    standaloneDraws.forEach((element) => {
      let parent = element.parentElement;
      let insideReveal = false;
      while (parent) {
        if (parent.classList && parent.classList.contains('anime-reveal')) {
          insideReveal = true;
          break;
        }
        parent = parent.parentElement;
      }
      if (!insideReveal) {
        drawObserver.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      drawObserver.disconnect();
    };
  }, []);
}
