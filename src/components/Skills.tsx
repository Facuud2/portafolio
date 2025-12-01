import { motion } from 'framer-motion';

export const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '⚰',
      skills: [
        { name: 'React', level: 90, color: 'bg-blood-500' },
        { name: 'TypeScript', level: 85, color: 'bg-abyss-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-nightmare-500' },
        { name: 'Next.js', level: 80, color: 'bg-void-600' },
        { name: 'Vue.js', level: 75, color: 'bg-rust-500' },
      ]
    },
    {
      title: 'Backend',
      icon: '☽',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-blood-500' },
        { name: 'Python', level: 80, color: 'bg-abyss-500' },
        { name: 'PostgreSQL', level: 75, color: 'bg-nightmare-500' },
        { name: 'MongoDB', level: 70, color: 'bg-void-600' },
      ]
    },
    {
      title: 'Tools',
      icon: '✟',
      skills: [
        { name: 'Git', level: 90, color: 'bg-blood-500' },
        { name: 'Docker', level: 75, color: 'bg-abyss-500' },
        { name: 'AWS', level: 70, color: 'bg-nightmare-500' },
        { name: 'Figma', level: 85, color: 'bg-void-600' },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-void-950/90 backdrop-blur-md relative overflow-hidden transition-all duration-500"
      style={{
        border: '1px solid rgba(239, 83, 80, 0.2)',
        boxShadow: '0 0 50px rgba(239, 83, 80, 0.15)'
      }}
    >
      
      {/* Psychological horror elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-28 h-28 bg-blood-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-abyss-600/10 rounded-full blur-2xl" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-void-text-100 mb-4">Habilidades</h2>
          <p className="text-xl text-void-text-300 mb-8 max-w-2xl mx-auto">
            <span className="text-blood-400 font-medium">"</span>
            Tecnologías y herramientas que domino para crear experiencias excepcionales
            <span className="text-blood-400 font-medium">"</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blood-500 to-abyss-400 mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(239, 83, 80, 0.3)",
                borderColor: 'rgba(239, 83, 80, 0.5)'
              }}
              className="bg-void-900/40 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blood-800/30 animate-breathe-shadow"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3 text-blood-400">{category.icon}</span>
                <h3 className="text-xl font-semibold text-void-text-100">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-void-text-300 font-medium font-mono text-sm group-hover:text-blood-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-blood-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-void-800/50 rounded-full h-2 border border-blood-800/20">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Status indicator */}
              <div className="mt-4 text-xs text-void-text-400 opacity-60 font-mono text-center">
                Dominio técnico
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-void-text-100 mb-8">Habilidades Blandas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '☽', title: 'Trabajo en Equipo', desc: 'Colaboración efectiva con equipos multidisciplinarios' },
              { icon: '✟', title: 'Creatividad', desc: 'Soluciones innovadoras a problemas complejos' },
              { icon: '⚰', title: 'Aprendizaje', desc: 'Capacidad constante de aprender nuevas tecnologías' },
              { icon: '♥', title: 'Resolución', desc: 'Enfoque analítico para resolver desafíos técnicos' },
            ].map((softSkill, index) => (
              <div key={index} className="bg-void-900/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blood-800/30 group">
                <div className="text-3xl mb-3 text-blood-400">{softSkill.icon}</div>
                <h4 className="text-lg font-semibold text-void-text-100 mb-2">{softSkill.title}</h4>
                <p className="text-void-text-300 text-sm font-mono">{softSkill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
