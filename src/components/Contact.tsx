import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Aquí iría la lógica real de envío
    alert('Mensaje enviado con éxito. Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: '✉',
      title: 'Email',
      content: 'avalosmaiamagali@gmail.com',
      href: 'mailto:avalosmaiamagali@gmail.com'
    },
    {
      icon: '📱',
      title: 'Teléfono',
      content: '+54 11 44709661',
      href: 'tel:+541144709661'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      content: 'Argentina',
      href: '#'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-4 bg-void-950/90 backdrop-blur-md relative z-10 transition-all duration-500"
      style={{
        border: '1px solid rgba(239, 83, 80, 0.3)',
        boxShadow: '0 0 60px rgba(239, 83, 80, 0.2)',
        clipPath: 'polygon(0 0, 100% 2%, 100% 100%, 0 98%)'
      }}
    >
      
      {/* Psychological horror elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blood-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-abyss-600/10 rounded-full blur-2xl" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-void-text-100 mb-4">Contacto</h2>
          <p className="text-xl text-void-text-300 mb-8 max-w-2xl mx-auto">
            <span className="text-blood-400 font-medium">"</span>
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y colaborar contigo
            <span className="text-blood-400 font-medium">"</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blood-500 to-abyss-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-void-text-100 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blood-900/40 backdrop-blur-sm rounded-lg flex items-center justify-center text-blood-400 border border-blood-800/40">
                      <span className="text-xl">{info.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-void-text-100 mb-1 font-mono group-hover:text-blood-400 transition-colors">
                        {info.title}
                      </h4>
                      {info.href.startsWith('#') ? (
                        <p className="text-void-text-300 font-mono text-sm">{info.content}</p>
                      ) : (
                        <a 
                          href={info.href}
                          className="text-void-text-300 font-mono text-sm hover:text-blood-400 transition-all duration-300 group"
                        >
                          {info.content}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-void-text-100 mb-4">Redes Sociales</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: '🐙', href: '#' },
                  { name: 'LinkedIn', icon: '💼', href: '#' },
                  { name: 'Twitter', icon: '🐦', href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-void-900/40 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blood-900/30 transition-all duration-300 group border border-blood-800/40"
                    aria-label={social.name}
                  >
                    <span className="text-xl text-blood-400 group-hover:scale-105 group-hover:text-blood-300 transition-all duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-void-900/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blood-800/40 animate-breathe-shadow">
            <h3 className="text-2xl font-semibold text-void-text-100 mb-6">Formulario de Contacto</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-void-text-300 mb-2 font-mono">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blood-800/40 rounded-lg focus:ring-2 focus:ring-blood-500 focus:border-transparent bg-void-800/50 text-void-text-100 font-mono transition-all duration-300 placeholder-void-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-void-text-300 mb-2 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blood-800/40 rounded-lg focus:ring-2 focus:ring-blood-500 focus:border-transparent bg-void-800/50 text-void-text-100 font-mono transition-all duration-300 placeholder-void-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-void-text-300 mb-2 font-mono">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-blood-800/40 rounded-lg focus:ring-2 focus:ring-blood-500 focus:border-transparent bg-void-800/50 text-void-text-100 font-mono transition-all duration-300 placeholder-void-500 resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blood-500 to-abyss-500 text-void-text-100 font-medium py-3 px-6 rounded-lg hover:from-blood-600 hover:to-abyss-600 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed border border-blood-800/40"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-void-100 border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-mono">Enviando...</span>
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    <span className="font-mono">Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
