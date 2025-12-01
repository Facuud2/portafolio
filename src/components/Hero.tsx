import { motion, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowDownCircleIcon, CodeBracketIcon, CursorArrowRaysIcon, SparklesIcon } from '@heroicons/react/24/solid';

// Elementos de tarot con animaciones
const tarotElements = [
  { id: 1, icon: '⭐', name: 'La Estrella', size: 'text-4xl', top: '15%', left: '10%', delay: 0.5 },
  { id: 2, icon: '🌙', name: 'La Luna', size: 'text-5xl', top: '80%', left: '85%', delay: 1 },
  { id: 3, icon: '🔮', name: 'El Mago', size: 'text-6xl', top: '20%', left: '85%', delay: 1.5 },
  { id: 4, icon: '✨', name: 'Brillo', size: 'text-3xl', top: '70%', left: '15%', delay: 0.8 },
  { id: 5, icon: '🌠', name: 'Deseo', size: 'text-2xl', top: '30%', left: '20%', delay: 1.2 }
];

// Animación de flotar
const floatAnimation = (delay: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4 + Math.random() * 3,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      delay,
      ease: 'easeInOut'
    }
  }
});


export const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start('visible');
      await controls.start('hover');
    };
    sequence();
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
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 text-white"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      }}
    >
      {/* Fondo con textura de pergamino */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/old-map.png')",
          backgroundSize: 'cover'
        }} 
      />
      
      {/* Efecto de velas iluminando */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`light-${i}`}
            className="absolute rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 2
            }}
            style={{
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0) 70%)',
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </div>
      {/* Elementos de tarot flotantes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {tarotElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute ${element.size} select-none pointer-events-none`}
            initial="initial"
            animate="animate"
            variants={floatAnimation(element.delay)}
            style={{
              top: element.top,
              left: element.left,
              filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.3))',
            }}
            title={element.name}
          >
            {element.icon}
          </motion.div>
        ))}

        {/* Elementos de fondo animados */}
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 8 + 4;
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full bg-primary-500/20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 5,
              }}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${size * 2}px ${size * 0.5}px rgba(139, 92, 246, 0.3)`,
              }}
            />
          );
        })}
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={item} 
            className="mb-2"
          >
            <span className="text-primary-400 font-mono text-sm md:text-base tracking-widest">
              <SparklesIcon className="inline-block w-4 h-4 mr-2 mb-1" />
              Hola, mi nombre es
            </span>
          </motion.div>

          <motion.div className="relative">
            <motion.h1 
              variants={item}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Maia Avalos
            </motion.h1>
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-xl -z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <motion.div 
            variants={item}
            className="relative inline-block mb-8"
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-medium text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <CodeBracketIcon className="inline w-6 h-6 mr-2 text-primary-500" />
              </motion.span>
              Desarrolladora de Software
            </motion.h2>
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Transformo ideas en experiencias digitales mágicas con código limpio y diseño cautivador.
          </motion.p>

          <motion.div 
            variants={item} 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#proyectos"
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-primary-900/30 hover:shadow-primary-900/50"
            >
              <CursorArrowRaysIcon className="w-5 h-5" />
              Ver mis proyectos
              <ArrowDownCircleIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#contacto"
              className="px-6 py-3 bg-dark-700/80 hover:bg-dark-600/90 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 border border-dark-600 hover:border-primary-500/50 shadow-lg shadow-dark-900/30 hover:shadow-primary-900/20"
            >
              <span className="relative">
                <span className="absolute -left-1 -top-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                ✉️
              </span>
              Contáctame
            </motion.a>
          </motion.div>

          <motion.div 
            variants={item}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-gray-700 text-sm text-gray-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Actualmente trabajando en algo increíble...
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        >
          <a
            href="#sobre-mi"
            className="inline-flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors"
          >
            <span className="text-sm mb-2">Desplázate</span>
            <div className="w-8 h-12 border-2 border-gray-700 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-primary-500 rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
