import { useEffect, useState } from 'react';

// Altura do header fixo (h-16), descontada do topo da área observada.
const HEADER_HEIGHT = 64;

// Seção do menu que está na tela (docs/design.md 5 e 10.1). A área observada vai do fim do
// header até o meio da janela; se duas seções estiverem nela, vale a de baixo, que acabou de
// entrar. No Início, nenhuma seção do menu está na área e o retorno é `null`.
// `ids` precisa ser estável (constante de módulo), para o efeito não reiniciar a cada render.
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActive(ids.findLast((id) => visible.has(id)) ?? null);
      },
      { rootMargin: `-${HEADER_HEIGHT}px 0px -50% 0px` },
    );

    for (const id of ids) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
