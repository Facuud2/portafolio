import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Focusear',
    description: 'Aplicación móvil de productividad y enfoque diseñada para mejorar la concentración y gestión del tiempo. Disponible en iOS y Android.',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    demoUrl: 'https://focuse-ar.vercel.app/',
    codeUrl: '#'
  },
  {
    id: 2,
    title: 'Gestor de Tareas',
    description: 'Aplicación web para gestión de proyectos con drag & drop, notificaciones y dashboard en tiempo real.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 3,
    title: 'Portfolio Personal',
    description: 'Sitio web personal moderno con animaciones, sistema de contacto y diseño responsive.',
    tags: ['React', 'Framer Motion', 'Next.js'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    demoUrl: '#',
    codeUrl: '#'
  },
];

const Projects = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section 
      id="projects" 
      className="pt-28 pb-20 -mt-20 bg-void-950/90 backdrop-blur-md relative z-10 transition-all duration-500"
      style={{
        border: '1px solid rgba(239, 83, 80, 0.3)',
        boxShadow: '0 0 60px rgba(239, 83, 80, 0.2)',
        clipPath: 'polygon(0 2%, 100% 0, 100% 98%, 0 100%)'
      }}
    >
      
      {/* Psychological horror elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-blood-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-20 h-20 bg-abyss-600/10 rounded-full blur-2xl" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-void-text-100 mb-4">Proyectos</h2>
          <p className="text-lg text-void-text-300 max-w-2xl mx-auto">
            <span className="text-blood-400 font-medium">"</span>
            Una selección de proyectos destacados que demuestran mis habilidades técnicas y creativas
            <span className="text-blood-400 font-medium">"</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blood-500 to-abyss-400 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ 
                y: -2, 
                boxShadow: '0 10px 30px rgba(239, 83, 80, 0.3)',
                borderColor: 'rgba(239, 83, 80, 0.5)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.99 }}
              className="bg-void-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-blood-800/40 hover:border-blood-700/60 transition-all duration-300 group relative"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 filter sepia-[0.3] hue-rotate-[280deg]"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-void-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-void-text-100 mb-2">{project.title}</h3>
                <p className="text-void-text-300 mb-4 font-mono text-sm">
                  <span className="text-blood-400 font-medium">"</span>
                  {project.description}
                  <span className="text-blood-400 font-medium">"</span>
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 bg-blood-900/30 text-blood-400 rounded-full border border-blood-800/40 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-blood-800/30">
                  <a 
                    href={project.demoUrl}
                    className="flex items-center text-sm text-void-text-300 hover:text-blood-400 transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-1" />
                    <span className="font-mono">Ver Demo</span>
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="flex items-center text-sm text-void-text-400 hover:text-blood-400 transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CodeBracketIcon className="w-4 h-4 mr-1" />
                    <span className="font-mono">Ver Código</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
