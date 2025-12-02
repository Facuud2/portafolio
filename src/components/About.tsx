import { motion } from 'framer-motion';

export const About = () => {

  return (
    <section 
      id="about" 
      className="py-20 px-4 bg-void-950/90 backdrop-blur-md relative overflow-hidden transition-all duration-500"
      style={{
        border: '1px solid rgba(239, 83, 80, 0.3)',
        boxShadow: '0 0 60px rgba(239, 83, 80, 0.2)'
      }}
    >
      
      {/* Psychological horror elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blood-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-abyss-600/10 rounded-full blur-2xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blood-600/5 rounded-full blur-4xl animate-horror-flicker"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-void-text-100 mb-4">Sobre Mí</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blood-500 to-abyss-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-void-text-300 leading-relaxed">
                <span className="text-blood-400 font-medium">"</span>
                Soy una desarrolladora web apasionada por crear experiencias digitales únicas y memorables.
                <span className="text-blood-400 font-medium">"</span>
              </p>
              <p className="text-lg text-void-text-300 leading-relaxed">
                <span className="text-blood-400 font-medium">"</span>
                Me especializo en combinar diseño creativo con desarrollo robusto para llevar ideas a la realidad.
                <span className="text-blood-400 font-medium">"</span>
              </p>
              <p className="text-lg text-void-text-300 leading-relaxed">
                <span className="text-blood-400 font-medium">"</span>
                Cada proyecto es una oportunidad para innovar y superar límites.
                <span className="text-blood-400 font-medium">"</span>
              </p>
            </div>
            
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-void-text-100 mb-4">Información Personal</h3>
              <div className="space-y-4 bg-void-900/30 p-4 rounded-lg border border-blood-800/20">
                <div className="flex items-center space-x-3 group">
                  <span className="text-void-text-400 font-mono text-sm">Ubicación:</span>
                  <span className="text-void-text-100 font-medium font-mono text-sm group-hover:text-blood-400 transition-colors">Argentina</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <span className="text-void-text-400 font-mono text-sm">Idiomas:</span>
                  <span className="text-void-text-100 font-medium font-mono text-sm group-hover:text-blood-400 transition-colors">Español, Inglés</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <span className="text-void-text-400 font-mono text-sm">Experiencia:</span>
                  <span className="text-blood-400 font-medium font-mono text-sm">1 año</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <span className="text-void-text-400 font-mono text-sm">Especialidad:</span>
                  <span className="text-blood-400 font-medium font-mono text-sm">Full Stack</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <span className="text-void-text-400 font-mono text-sm">Estado:</span>
                  <span className="text-blood-400 font-medium font-mono text-sm">Disponible para trabajar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-blood-800/40">
              <div className="w-full h-full bg-gradient-to-br from-blood-950 via-abyss-950 to-nightmare-950 flex items-center justify-center relative">
                {/* Analog TV static effect */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blood-600/20 to-transparent animate-horror-flicker"></div>
                </div>
                
                <div className="text-center text-void-text-100 relative z-10">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blood-900/40 backdrop-blur-sm flex items-center justify-center border border-blood-800/60 animate-breathe-shadow overflow-hidden">
                    <img 
                      src="/foto_profesional.jpeg" 
                      alt="Maia Avalos" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-xl font-medium text-void-text-200 font-mono">Foto Profesional</p>
                  
                  {/* Status indicator */}
                  <div className="mt-4 text-xs text-void-text-400 opacity-60 font-mono">
                    En construcción
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blood-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-abyss-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-void-900/40 backdrop-blur-sm rounded-xl shadow-lg border border-blood-800/30 group">
            <div className="text-3xl font-bold text-blood-400 mb-2">2+</div>
            <div className="text-void-text-300 font-mono text-sm">Años de Experiencia</div>
            <div className="mt-2 text-xs text-void-text-400 opacity-60 font-mono">Desarrollo web</div>
          </div>
          <div className="text-center p-6 bg-void-900/40 backdrop-blur-sm rounded-xl shadow-lg border border-abyss-800/30 group">
            <div className="text-3xl font-bold text-abyss-400 mb-2">10+</div>
            <div className="text-void-text-300 font-mono text-sm">Proyectos Completados</div>
            <div className="mt-2 text-xs text-void-text-400 opacity-60 font-mono">Clientes satisfechos</div>
          </div>
          <div className="text-center p-6 bg-void-900/40 backdrop-blur-sm rounded-xl shadow-lg border border-nightmare-800/30 group">
            <div className="text-3xl font-bold text-nightmare-400 mb-2">100%</div>
            <div className="text-void-text-300 font-mono text-sm">Compromiso</div>
            <div className="mt-2 text-xs text-void-text-400 opacity-60 font-mono">Con cada proyecto</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
