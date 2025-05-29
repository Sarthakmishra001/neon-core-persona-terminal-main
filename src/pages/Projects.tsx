
import { useState } from 'react';
import Navigation from '../components/Navigation';
import CircuitBackground from '../components/CircuitBackground';
import ParticleField from '../components/ParticleField';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: 'CyberCommerce Platform',
      description: 'Full-stack e-commerce solution with AI-powered recommendations',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'AI'],
      category: 'FULLSTACK',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Quantum Task Manager',
      description: 'Real-time collaborative project management with quantum-inspired UI',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop',
      tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      category: 'FRONTEND',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing and training neural networks',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
      tags: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
      category: 'ALGORITHM',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Crypto Trading Bot',
      description: 'Automated trading system with advanced algorithms and risk management',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop',
      tags: ['Java', 'Spring Boot', 'Redis', 'WebSocket'],
      category: 'BACKEND',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Holographic Dashboard',
      description: '3D data visualization dashboard with immersive UI components',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      tags: ['Three.js', 'React', 'WebGL', 'TypeScript'],
      category: 'FRONTEND',
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Distributed Cache System',
      description: 'High-performance caching solution with intelligent data distribution',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop',
      tags: ['Java', 'Redis', 'Docker', 'Kubernetes'],
      category: 'BACKEND',
      github: '#',
      live: '#'
    }
  ];

  const filters = ['ALL', 'FULLSTACK', 'FRONTEND', 'BACKEND', 'ALGORITHM'];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              &lt;PROJECTS/&gt;
            </h1>
            <p className="text-gray-400 font-mono text-lg">
              Digital constructs from the quantum realm
            </p>
            <div className="w-32 h-px bg-cyber-green mx-auto mt-4 shadow-[0_0_10px_#39ff14]" />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-mono text-sm border transition-all duration-300 ${
                  activeFilter === filter
                    ? 'border-cyber-blue bg-cyber-blue/20 text-cyber-blue neon-text shadow-[0_0_20px_#00d4ff]'
                    : 'border-gray-600 text-gray-400 hover:border-cyber-violet hover:text-cyber-violet'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group hologram-panel rounded-lg overflow-hidden hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      className="p-3 bg-cyber-darker/80 rounded-full text-cyber-blue hover:text-cyber-green transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 bg-cyber-darker/80 rounded-full text-cyber-blue hover:text-cyber-green transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-tech text-cyber-green neon-text">
                      {project.title}
                    </h3>
                    <Code className="w-5 h-5 text-cyber-blue" />
                  </div>
                  
                  <p className="text-gray-400 font-mono text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-mono bg-cyber-violet/20 text-cyber-violet border border-cyber-violet/30 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Circuit Border Effect */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyber-blue opacity-50" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyber-blue opacity-50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyber-blue opacity-50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyber-blue opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
