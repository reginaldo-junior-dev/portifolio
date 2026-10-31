import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

// Liga a animação de entrada das seções (src/index.css). Sem JS, nada fica escondido.
document.documentElement.classList.add('js-reveal');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
