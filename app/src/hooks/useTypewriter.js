import { useEffect } from 'react';

const PER_CHAR_MS = 55;
const MAX_TOTAL_DELAY_MS = 3200;

function splitText(node) {
  if (node.dataset.twInit === '1') return Number(node.dataset.twTotal || 0);

  const original = node.textContent ?? '';
  if (!original.trim()) {
    node.dataset.twInit = '1';
    node.dataset.twTotal = '0';
    return 0;
  }

  if (!node.getAttribute('aria-label')) {
    node.setAttribute('aria-label', original);
  }

  const chars = Array.from(original);
  const fragment = document.createDocumentFragment();
  const perChar = Math.max(8, Math.min(PER_CHAR_MS, Math.floor(MAX_TOTAL_DELAY_MS / chars.length)));

  let visibleIndex = 0;
  chars.forEach((char) => {
    const span = document.createElement('span');
    span.className = 'tw-char';
    span.setAttribute('aria-hidden', 'true');
    span.textContent = char;
    if (char !== ' ' && char !== '\u00a0') {
      span.style.setProperty('--tw-d', `${visibleIndex * perChar}ms`);
      visibleIndex += 1;
    } else {
      span.style.setProperty('--tw-d', `${visibleIndex * perChar}ms`);
    }
    fragment.appendChild(span);
  });

  const cursor = document.createElement('span');
  cursor.className = 'tw-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  fragment.appendChild(cursor);

  node.textContent = '';
  node.appendChild(fragment);
  node.dataset.twInit = '1';
  const total = visibleIndex * perChar + 200;
  node.dataset.twTotal = String(total);
  return total;
}

export function useTypewriter() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nodes = Array.from(document.querySelectorAll('.typewriter'));
    if (!nodes.length) return;

    const totals = new Map();
    nodes.forEach((node) => {
      const total = splitText(node);
      totals.set(node, total);
      if (prefersReduced) {
        node.classList.add('tw-done', 'tw-finished');
      }
    });

    if (prefersReduced) return;

    const timers = new WeakMap();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          if (node.classList.contains('tw-running') || node.classList.contains('tw-done')) {
            observer.unobserve(node);
            return;
          }
          node.classList.add('tw-running');
          const total = totals.get(node) ?? 0;
          const t = window.setTimeout(() => {
            node.classList.add('tw-done');
            const t2 = window.setTimeout(() => {
              node.classList.add('tw-finished');
            }, 1400);
            timers.set(node, t2);
          }, total);
          timers.set(node, t);
          observer.unobserve(node);
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      nodes.forEach((node) => {
        const t = timers.get(node);
        if (t) window.clearTimeout(t);
      });
    };
  }, []);
}
