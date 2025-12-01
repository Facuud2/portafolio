import { useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useOnClickOutside } from '../hooks';

interface NavLink {
  key: string;
  href: string;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { } = useTheme(); // Solo mantenemos theme, eliminamos toggleTheme
  const navRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú móvil al hacer clic fuera
  useOnClickOutside(navRef, () => setIsOpen(false));

  // Cerrar el menú móvil al cambiar de sección
  const handleNavClick = () => {
    if (isOpen) setIsOpen(false);
  };

  const navLinks: NavLink[] = [
    { key: 'Inicio', href: '#home' },
    { key: 'Sobre Mí', href: '#about' },
    { key: 'Habilidades', href: '#skills' },
    { key: 'Proyectos', href: '#projects' },
    { key: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-500 bg-void-950/90">
      {/* Analog distortion overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-blood-600"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-blood-600"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#" 
            className="text-2xl font-bold hover:opacity-80 transition-all duration-300"
            aria-label="Inicio"
          >
            MAIA
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link: NavLink) => (
              <a
                key={link.key}
                href={link.href}
                onClick={handleNavClick}
                className="text-void-text-300 hover:text-blood-400 font-medium transition-all duration-300 px-4 py-2 rounded-md hover:bg-blood-900/30 border border-transparent hover:border-blood-800/40"
                aria-label={link.key}
              >
                <span className="relative">
                  {link.key}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blood-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-blood-900/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blood-500 focus:ring-offset-2 focus:ring-offset-void-900"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="text-2xl text-void-text-300">{isOpen ? '✟' : '☽'}</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            id="mobile-menu"
            ref={navRef}
            className={`md:hidden absolute top-20 left-0 right-0 bg-void-950/98 backdrop-blur-md shadow-xl shadow-blood-900/30 rounded-b-lg overflow-hidden transition-all duration-500 ease-in-out border-b border-blood-800/40 ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            <div className="relative flex flex-col p-2 space-y-1">
              {navLinks.map((link: NavLink) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 text-void-text-300 hover:bg-blood-900/30 rounded-md transition-all duration-300 border border-transparent hover:border-blood-800/30 font-mono text-sm"
                  aria-label={link.key}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-blood-400">⚰</span>
                    {link.key}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
