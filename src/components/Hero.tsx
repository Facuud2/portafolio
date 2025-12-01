import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useMemo, useCallback } from 'react';
import { ArrowDownCircleIcon, CursorArrowRaysIcon, SparklesIcon } from '@heroicons/react/24/solid';

// Minimal horror symbols - Performance optimized
const horrorSymbols = [
  { id: 1, symbol: '☽', name: 'Moon', size: 'text-lg', delay: 0.5 }
];

// Minimal wonderland elements
const wonderlandElements = [
  { id: 1, symbol: '♥', name: 'Heart', size: 'text-lg', delay: 0.3 }
];

// Minimal particles - Drastically reduced
const createHorrorParticles = (count: number) => {
  const colors = ['#ef5350', '#b71c1c']; // Only blood colors
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5, // Very small
    color: colors[Math.floor(Math.random() * colors.length)],
    duration: Math.random() * 8 + 4, // Faster
    delay: Math.random() * 2
  }));
};

export const Hero = () => {
  const controls = useAnimation();
  const particles = useMemo(() => createHorrorParticles(3), []); // Only 3 particles
  
  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const sequence = async () => {
      await controls.start('visible');
      await controls.start('hover');
    };
    sequence();
  }, [controls]);
  
  useEffect(() => {
    // Initialize controls after mount
    controls.start('visible');
  }, [controls]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -5,
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 text-void-text-100 transition-colors duration-500"
      style={{
        background: `radial-gradient(ellipse at top, #000000 0%, #000000 40%, #000000 100%)`,
        backgroundSize: '300% 300%',
        animation: 'hauntingGradient 20s ease infinite'
      }}
    >
      {/* Blood drip effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-blood-500 to-transparent opacity-60 animate-blood-drip"></div>
        <div className="absolute top-0 right-1/3 w-1 h-24 bg-gradient-to-b from-blood-500 to-transparent opacity-50 animate-blood-drip" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-0 left-1/2 w-1 h-28 bg-gradient-to-b from-blood-500 to-transparent opacity-55 animate-blood-drip" style={{animationDelay: '4s'}}></div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes hauntingGradient {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes horrorFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-5px); opacity: 0.4; }
        }
        @keyframes bloodPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes nightmareGlitch {
          0% { opacity: 0.2; transform: translateX(-1px); }
          50% { opacity: 0.4; transform: translateX(1px); }
          100% { opacity: 0.2; transform: translateX(-1px); }
        }
        @keyframes staticNoise {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes horrorAura {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        `
      }} />
      {/* Horror grid pattern - más oscuro */}
      <div className="absolute inset-0 bg-grid-blood-900/[0.02] bg-[length:60px_60px]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horror particles - rojo sangre */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: '#ff0000',
                boxShadow: `0 0 ${particle.size * 2}px #ff0000`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Floating horror symbols - rojo sangre */}
        <div className="absolute inset-0">
          {horrorSymbols.map((item, i) => (
            <motion.div
              key={item.id}
              className={`absolute ${item.size} opacity-40 text-blood-500`}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay
              }}
              style={{
                left: `${10 + (i * 15) % 80}%`,
                top: `${10 + (i * 18) % 80}%`,
                filter: 'blur(0.5px)',
              }}
            >
              {item.symbol}
            </motion.div>
          ))}
        </div>

        {/* Floating wonderland elements - rojo sangre */}
        <div className="absolute inset-0">
          {wonderlandElements.map((item, i) => (
            <motion.div
              key={`wonder-${item.id}`}
              className={`absolute ${item.size} opacity-30 text-blood-600`}
              animate={{
                opacity: [0, 0.3, 0.4, 0.1, 0.3],
                scale: [0.9, 1, 1.1, 0.95, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: item.delay
              }}
              style={{
                left: `${5 + (i * 20) % 90}%`,
                top: `${5 + (i * 16) % 90}%`,
                filter: 'blur(0.3px)',
              }}
            >
              {item.symbol}
            </motion.div>
          ))}
        </div>
        
        {/* Horror gradient overlays - más oscuros */}
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-blood-900/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-void-950/80 via-transparent to-transparent" />
        
        {/* Psychological horror elements - más oscuros */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-16 h-16 bg-blood-600/40 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-12 h-12 bg-blood-600/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            variants={item} 
            className="text-5xl md:text-7xl font-bold horror-title mb-6 relative"
          >
            <div className="relative">
              <span className="text-void-text-100">MAIA</span>
              <motion.span 
                className="text-blood-400 font-bold drop-shadow-[0_0_20px_rgba(239,83,80,0.8)]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {' '}AVALOS
              </motion.span>
            </div>
            {/* Creepy subtitle */}
            <motion.div 
              className="text-lg md:text-xl text-void-text-200 mt-4 font-light tracking-wider"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Programadora Full Stack
            </motion.div>
            
            {/* Eliminados ojos de horror para más seriedad */}
          </motion.h1>
          <motion.h2 
            variants={item} 
            className="text-2xl md:text-3xl font-light mb-8 text-void-text-200"
          >
            <span className="relative">
              <span className="text-blood-400">⚰</span>
              <span className="ml-3">Desarrolladora Full Stack</span>
              <span className="text-blood-400 ml-3">⚰</span>
            </span>
          </motion.h2>

          <motion.p 
            variants={item} 
            className="text-lg md:text-xl text-void-text-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            <span className="text-blood-400 font-medium">"</span>
            Especializada en desarrollo full stack, creando soluciones completas desde aplicaciones web hasta móviles. 
            Con 1 año de experiencia transformando ideas en productos digitales robustos y escalables.
            <span className="text-blood-400 font-medium">"</span>
          </motion.p>
          <motion.div 
            variants={item} 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleScroll}
              className="px-8 py-3.5 bg-blood-900/30 hover:bg-blood-900/40 text-void-text-100 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 group border border-blood-800/40 hover:border-blood-700/50 shadow-lg shadow-blood-900/20 hover:shadow-blood-900/30 backdrop-blur-sm"
            >
              <CursorArrowRaysIcon className="w-5 h-5" />
              <span className="group-hover:text-blood-300 transition-colors">Ver Proyectos</span>
              <ArrowDownCircleIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
            
                <a
                  href="https://focuse-ar.vercel.app/"
                  className="px-8 py-3.5 bg-transparent hover:bg-abyss-900/20 text-void-text-100 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 border border-abyss-800/30 hover:border-abyss-700/40 backdrop-blur-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SparklesIcon className="w-5 h-5" />
                  <span className="group-hover:text-abyss-300 transition-colors">Ver Focusear</span>
                </a>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-abyss-900/20 backdrop-blur-sm rounded-full border border-blood-800/30 text-sm text-void-text-200 animate-breathe-shadow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blood-400/30 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blood-500"></span>
              </span>
              <span className="font-mono text-xs tracking-wider">✦ DISPONIBLE PARA TRABAJAR</span>
            </div>
            
            {/* Status indicator */}
            <div className="mt-4 text-xs text-void-text-400 opacity-60 font-mono">
              Abierta a oportunidades
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
