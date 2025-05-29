
import { useEffect, useState } from 'react';

const HolographicPanels = () => {
  const [activePanel, setActivePanel] = useState(0);

  const skills = [
    {
      title: 'FULL STACK DEVELOPER',
      description: 'End-to-end digital solutions',
      color: 'cyber-blue',
      icon: '⚡'
    },
    {
      title: 'MERN STACK',
      description: 'MongoDB | Express | React | Node',
      color: 'cyber-green',
      icon: '🚀'
    },
    {
      title: 'JAVA + DSA',
      description: 'Algorithmic problem solving',
      color: 'cyber-violet',
      icon: '🧠'
    },
    {
      title: 'CYBER DEV',
      description: 'Security-first development',
      color: 'cyber-pink',
      icon: '🛡️'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePanel((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="mt-20 relative">
      {/* Central Hub */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="w-4 h-4 bg-cyber-blue rounded-full animate-pulse-glow shadow-[0_0_20px_#00d4ff]" />
          <div className="absolute inset-0 w-4 h-4 border border-cyber-blue rounded-full animate-ping" />
        </div>
      </div>

      {/* Floating Panels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`relative group cursor-pointer transition-all duration-500 ${
              activePanel === index ? 'scale-105' : ''
            }`}
            onMouseEnter={() => setActivePanel(index)}
          >
            {/* Panel Container */}
            <div className={`hologram-panel p-6 rounded-lg h-40 flex flex-col justify-center items-center text-center transform transition-all duration-500 hover:scale-105 ${
              activePanel === index ? 'animate-pulse-glow' : ''
            }`}>
              {/* Icon */}
              <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className={`text-${skill.color} font-tech font-bold text-lg mb-2 neon-text`}>
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm font-mono opacity-80">
                {skill.description}
              </p>

              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyber-blue opacity-50" />
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyber-blue opacity-50" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyber-blue opacity-50" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyber-blue opacity-50" />
            </div>

            {/* Connection Lines */}
            <div className={`absolute top-1/2 left-1/2 w-px h-12 bg-${skill.color} transform -translate-x-1/2 -translate-y-6 opacity-30 transition-opacity duration-500 ${
              activePanel === index ? 'opacity-80' : ''
            }`} />

            {/* Data Flow Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-px h-full bg-gradient-to-b from-transparent via-${skill.color} to-transparent opacity-20 animate-pulse`}
                  style={{
                    left: `${25 + i * 25}%`,
                    animationDelay: `${i * 0.7}s`
                  }}
                />
              ))}
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-${skill.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
          </div>
        ))}
      </div>

      {/* Status Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => setActivePanel(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activePanel === index 
                ? 'bg-cyber-blue shadow-[0_0_10px_#00d4ff]' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HolographicPanels;
