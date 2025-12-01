import { useState, useEffect } from 'react';

export const useScrollMorph = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getMorphStyle = (sectionIndex: number) => {
    const scrollFactor = scrollY / 1500; // Ajustado para más visibilidad
    const mouseFactorX = (mousePosition.x - window.innerWidth / 2) / window.innerWidth / 2; // Aumentado a 1/2
    const mouseFactorY = (mousePosition.y - window.innerHeight / 2) / window.innerHeight / 2; // Aumentado a 1/2

    return {
      transform: `
        perspective(1000px)
        rotateY(${mouseFactorX * 5 + scrollFactor * sectionIndex * 2}deg) // Aumentado para visibilidad
        rotateX(${-mouseFactorY * 3 + scrollFactor * sectionIndex * 1}deg) // Aumentado para visibilidad
        translateZ(${Math.sin(scrollFactor + sectionIndex) * 8}px) // Aumentado para visibilidad
        skewY(${Math.sin(scrollFactor * 0.5 + sectionIndex) * 1}deg) // Aumentado para visibilidad
      `,
      filter: `
        hue-rotate(${scrollFactor * 15 + sectionIndex * 5}deg) // Aumentado para visibilidad
        contrast(${1 + Math.sin(scrollFactor * 0.3 + sectionIndex) * 0.08}) // Aumentado para visibilidad
        brightness(${1 + Math.cos(scrollFactor * 0.2 + sectionIndex) * 0.08}) // Aumentado para visibilidad
      `,
      clipPath: `
        polygon(
          ${Math.sin(scrollFactor * 0.5 + sectionIndex) * 2}% 0%, // Aumentado para visibilidad
          ${100 - Math.cos(scrollFactor * 0.3 + sectionIndex) * 2}% 0%, // Aumentado para visibilidad
          ${100 + Math.sin(scrollFactor * 0.4 + sectionIndex) * 1}% 100%, // Aumentado para visibilidad
          ${Math.cos(scrollFactor * 0.6 + sectionIndex) * 1}% 100% // Aumentado para visibilidad
        )
      `
    };
  };

  const getGlitchStyle = (intensity: number = 1) => {
    const glitchOffset = Math.sin(scrollY * 0.1) * intensity;
    const glitchHue = Math.sin(scrollY * 0.05) * 180;

    return {
      position: 'relative' as const,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(90deg, transparent, rgba(255, 0, 255, 0.3), transparent)`,
        transform: `translateX(${glitchOffset}px)`,
        mixBlendMode: 'screen' as const,
        animation: 'glitch 0.3s infinite'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent)`,
        transform: `translateX(${-glitchOffset}px)`,
        mixBlendMode: 'screen' as const,
        animation: 'glitch 0.4s infinite reverse'
      },
      filter: `hue-rotate(${glitchHue}deg) contrast(1.2)`
    };
  };

  return {
    scrollY,
    mousePosition,
    getMorphStyle,
    getGlitchStyle
  };
};

export default useScrollMorph;
