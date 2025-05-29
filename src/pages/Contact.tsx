
import { useState } from 'react';
import Navigation from '../components/Navigation';
import CircuitBackground from '../components/CircuitBackground';
import ParticleField from '../components/ParticleField';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    // Here you would typically send the form data to a backend
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com', color: 'cyber-blue' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'cyber-green' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', color: 'cyber-violet' },
    { icon: Mail, label: 'Email', url: 'mailto:dev@cyberportfolio.com', color: 'cyber-pink' }
  ];

  return (
    <div className="min-h-screen bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <CircuitBackground />
      <ParticleField />
      <div className="absolute inset-0 scan-lines pointer-events-none" />

      <Navigation />

      <main className="relative z-10 pt-20">
        <div className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-tech font-bold text-cyber-blue neon-text mb-4">
              &lt;CONTACT/&gt;
            </h1>
            <p className="text-gray-400 font-mono text-lg">
              Initiate secure communication protocol
            </p>
            <div className="w-32 h-px bg-cyber-green mx-auto mt-4 shadow-[0_0_10px_#39ff14]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="hologram-panel p-8 rounded-lg">
              <h2 className="text-2xl font-tech text-cyber-green neon-text mb-6">
                SEND_MESSAGE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyber-blue font-mono text-sm mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-blue/30 rounded text-white font-mono focus:border-cyber-blue focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyber-blue font-mono text-sm mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-blue/30 rounded text-white font-mono focus:border-cyber-blue focus:outline-none transition-colors"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cyber-blue font-mono text-sm mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-blue/30 rounded text-white font-mono focus:border-cyber-blue focus:outline-none transition-colors"
                    placeholder="Project collaboration, job opportunity, etc."
                  />
                </div>

                <div>
                  <label className="block text-cyber-blue font-mono text-sm mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-blue/30 rounded text-white font-mono focus:border-cyber-blue focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-cyber-blue to-cyber-green text-cyber-darker font-tech font-bold rounded hover:shadow-[0_0_30px_#00d4ff] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>TRANSMIT_MESSAGE</span>
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="hologram-panel p-8 rounded-lg">
                <h2 className="text-2xl font-tech text-cyber-violet neon-text mb-6">
                  CONNECTION_NODES
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border border-cyber-blue flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <div>
                      <div className="text-gray-300 font-mono text-sm">Email Protocol</div>
                      <div className="text-cyber-blue font-mono">dev@cyberportfolio.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border border-cyber-green flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse-glow" />
                    </div>
                    <div>
                      <div className="text-gray-300 font-mono text-sm">Status</div>
                      <div className="text-cyber-green font-mono">Available for hire</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border border-cyber-pink flex items-center justify-center">
                      <div className="w-3 h-3 border border-cyber-pink rounded-full animate-pulse" />
                    </div>
                    <div>
                      <div className="text-gray-300 font-mono text-sm">Response Time</div>
                      <div className="text-cyber-pink font-mono">&lt; 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="hologram-panel p-8 rounded-lg">
                <h2 className="text-2xl font-tech text-cyber-orange neon-text mb-6">
                  SOCIAL_NETWORKS
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 border border-gray-700/50 rounded-lg hover:border-${link.color}/50 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center`}
                    >
                      <link.icon className={`w-8 h-8 text-${link.color} mb-2 group-hover:animate-pulse`} />
                      <span className="text-gray-300 font-mono text-sm">{link.label}</span>
                      
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-${link.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="hologram-panel p-8 rounded-lg">
                <h2 className="text-2xl font-tech text-cyber-blue neon-text mb-6">
                  SYSTEM_METRICS
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Uptime', value: '99.9%' },
                    { label: 'Projects Active', value: '8' },
                    { label: 'Coffee Level', value: '85%' },
                    { label: 'Motivation', value: 'MAX' }
                  ].map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-tech text-cyber-green neon-text">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
