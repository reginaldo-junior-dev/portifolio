import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

// Página temporária de aprovação visual. Só existe em desenvolvimento:
// no build de produção este ramo é removido e o arquivo nem entra no bundle.
const StyleGuide = import.meta.env.DEV ? lazy(() => import('./style-guide/StyleGuide')) : null;
const showStyleGuide = StyleGuide !== null && window.location.pathname === '/style-guide';

// Liga a animação de entrada das seções (src/index.css). Sem JS, nada fica escondido.
document.documentElement.classList.add('js-reveal');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {showStyleGuide ? (
      <Suspense fallback={null}>
        <StyleGuide />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
);
