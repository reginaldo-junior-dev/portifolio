import { useEffect, useState } from 'react';
import { content } from '../content';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { Container } from './ui/Container';

const { header, a11y } = content;

// Ids das seções do menu, na ordem ("#sobre" vira "sobre").
const sectionIds = header.nav.map((item) => item.href.slice(1));

const navLinkClass =
  'inline-flex min-h-11 items-center text-small font-medium transition-colors duration-150 ease-out hover:text-text';

// Sublinhado de 2px em --accent embaixo do texto do item ativo (docs/design.md 5 e 10).
// Cresce com scaleX em 200ms; com movimento reduzido, aparece direto.
const underlineClass =
  'relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-200 after:ease-out motion-reduce:after:transition-none';

function navLinkProps(id: string, activeId: string | null) {
  const isActive = id === activeId;
  return {
    className: `${navLinkClass} ${isActive ? 'text-text' : 'text-text-muted'}`,
    underline: `${underlineClass} ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}`,
    'aria-current': isActive ? ('location' as const) : undefined,
  };
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 border-b bg-bg transition-colors duration-150 ease-out ${scrolled ? 'border-border' : 'border-transparent'}`}
    >
      <a
        href="#conteudo"
        className="sr-only rounded-sm bg-accent px-5 text-button text-on-accent focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:inline-flex focus:min-h-11 focus:items-center"
      >
        {a11y.skipToContent}
      </a>

      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href={header.homeHref}
          aria-label={header.homeLabel}
          className="inline-flex min-h-11 items-center font-medium text-text"
        >
          {header.name}
        </a>

        <nav aria-label={header.navLabel} className="relative">
          <ul className="hidden items-center gap-8 md:flex">
            {header.nav.map((item, index) => {
              const { className, underline, ...aria } = navLinkProps(sectionIds[index], activeId);
              return (
                <li key={item.href}>
                  <a href={item.href} className={className} {...aria}>
                    <span className={underline}>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex min-h-11 items-center rounded-sm border border-border-strong px-4 text-button text-text transition-colors duration-150 ease-out hover:border-text-muted hover:bg-surface-2 md:hidden"
          >
            {menuOpen ? header.menuClose : header.menuOpen}
          </button>

          {/* Lista em coluna logo abaixo do botão, alinhada à direita, sem ocupar a largura da tela. */}
          <div
            id="menu-mobile"
            hidden={!menuOpen}
            className="absolute top-full right-0 mt-2 w-max rounded-lg border border-border bg-surface px-4 py-2 md:hidden"
          >
            <ul className="flex flex-col">
              {header.nav.map((item, index) => {
                const { className, underline, ...aria } = navLinkProps(sectionIds[index], activeId);
                return (
                  <li key={item.href} className="border-b border-border last:border-b-0">
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={`${className} w-full`}
                      {...aria}
                    >
                      <span className={underline}>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}
