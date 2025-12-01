import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CyberpunkBackground } from './components/CyberpunkBackground';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Componente que maneja la clase del tema en el elemento raíz
const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    // Asegurarse de que el tema se aplique al elemento raíz
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemeWrapper>
          <div className="min-h-screen bg-void-950 text-void-100 transition-colors duration-500">
            <CyberpunkBackground />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
        </ThemeWrapper>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
