import { useEffect, useState } from 'react';

// Indica se a página já saiu do topo (borda do header, docs/design.md 6 e 10.1).
export function useScrolled(): boolean {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}
