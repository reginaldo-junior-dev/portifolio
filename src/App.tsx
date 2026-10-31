import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

// Todas as seções da página (docs/spec.md, seção 3), na ordem da spec.
export function App() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="min-h-screen pt-16 focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
