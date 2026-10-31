import { useEffect, useRef } from 'react';

// Entrada de seção (docs/design.md 10.1): quando o elemento entra na tela, marca
// `data-revealed` direto nele e para de observar. Acontece uma vez só e não causa re-render.
// O estado escondido e a transição ficam no CSS (`[data-reveal]` em `src/index.css`), que só
// se aplica com a classe `js-reveal` no <html> e sem `prefers-reduced-motion: reduce`.
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      element.dataset.revealed = '';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.dataset.revealed = '';
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
