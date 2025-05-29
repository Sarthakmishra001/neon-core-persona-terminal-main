
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import CircuitBackground from '../components/CircuitBackground';
import ParticleField from '../components/ParticleField';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('FRONTEND');

  const skillCategories = {
    FRONTEND: {
      title: 'Frontend Arsenal',
      color: 'cyber-blue',
      skills: [
        { name: 'React.js', level: 95, description: 'Component-based UI development' },
        { name: 'Next.js', level: 90, description: 'Full-stack React framework' },
        { name: 'TypeScript', level: 88, description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework' },
        { name: 'Three.js', level: 75, description: '3D graphics and animations' },
        { name: 'Redux', level: 85, description: 'State management solution' }
      ]
    },
    BACKEND: {
      title: 'Backend Infrastructure',
      color: 'cyber-green',
      skills: [
        { name: 'Node.js', level: 90, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 88, description: 'Web application framework' },
        { name: 'Java', level: 85, description: 'Enterprise-grade applications' },
        { name: 'Spring Boot', level: 80, description: 'Java application framework' },
        { name: 'Python', level: 78, description: 'Versatile programming language' },
        { name: 'GraphQL', level: 72, description: 'Query language for APIs' }
      ]
    },
    DATABASE: {
      title: 'Data Management',
      color: 'cyber-violet',
      skills: [
        { name: 'MongoDB', level: 85, description: 'NoSQL document database' },
        { name: 'PostgreSQL', level: 80, description: 'Relational database system' },
        { name: 'Redis', level: 75, description: 'In-memory data structure store' },
        { name: 'MySQL', level: 78, description: 'Popular relational database' },
        { name: 'Firebase', level: 70, description: 'Backend-as-a-Service platform' },
        { name: 'Supabase', level: 68, description: 'Open source Firebase alternative' }
      ]
    },
    TOOLS: {
      title: 'Development Tools',
      color: 'cyber-pink',
      skills: [
        { name: 'Git/GitHub', level: 92, description: 'Version control system' },
        { name: 'Docker', level: 75, description: 'Containerization platform' },
        { name: 'AWS', level: 70, description: 'Cloud computing services' },
        { name: 'Webpack', level: 78, description: 'Module bundler' },
        { name: 'Jest', level: 80, description: 'JavaScript testing framework' },
        { name: 'Figma', level: 85, description: 'Interface design tool' }
      ]
    }
  };

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
              &lt;SKILL_MATRIX/&gt;
            </h1>
            <p className="text-gray-400 font-mono text-lg">
              Neural pathways optimized for digital creation
            </p>
            <div className="w-32 h-px bg-cyber-green mx-auto mt-4 shadow-[0_0_10px_#39ff14]" />
          </div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 font-tech text-sm border-2 transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? `border-${skillCategories[category as keyof typeof skillCategories].color} bg-${skillCategories[category as keyof typeof skillCategories].color}/20 text-${skillCategories[category as keyof typeof skillCategories].color} neon-text shadow-[0_0_20px_var(--tw-shadow-color)]`
                    : 'border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="max-w-6xl mx-auto">
            <div className="hologram-panel p-8 rounded-lg">
              <h2 className={`text-3xl font-tech mb-8 neon-text text-${skillCategories[activeCategory as keyof typeof skillCategories].color}`}>
                {skillCategories[activeCategory as keyof typeof skillCategories].title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative p-6 border border-gray-700/50 rounded-lg hover:border-cyber-blue/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-tech text-white">{skill.name}</h3>
                      <span className={`text-sm font-mono text-${skillCategories[activeCategory as keyof typeof skillCategories].color}`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${skillCategories[activeCategory as keyof typeof skillCategories].color} to-${skillCategories[activeCategory as keyof typeof skillCategories].color}/70 shadow-[0_0_10px_currentColor] transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 font-mono text-xs leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-${skillCategories[activeCategory as keyof typeof skillCategories].color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                    
                    {/* Corner Accents */}
                    <div className={`absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-${skillCategories[activeCategory as keyof typeof skillCategories].color} opacity-50`} />
                    <div className={`absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-${skillCategories[activeCategory as keyof typeof skillCategories].color} opacity-50`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { label: 'Languages Mastered', value: '8+', icon: '💻' },
                { label: 'Frameworks Known', value: '15+', icon: '⚛️' },
                { label: 'Years of Experience', value: '3+', icon: '🚀' },
                { label: 'Projects Completed', value: '50+', icon: '🎯' }
              ].map((stat, index) => (
                <div key={index} className="hologram-panel p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-tech text-cyber-blue neon-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
