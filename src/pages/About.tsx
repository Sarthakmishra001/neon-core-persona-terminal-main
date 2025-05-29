
import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import CircuitBackground from '../components/CircuitBackground';
import ParticleField from '../components/ParticleField';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'MongoDB/SQL', level: 80 },
    { name: 'Java', level: 88 },
    { name: 'Python', level: 75 },
    { name: 'AWS/Cloud', level: 70 },
    { name: 'Docker/DevOps', level: 78 }
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
              &lt;ABOUT_ME/&gt;
            </h1>
            <div className="w-32 h-px bg-cyber-green mx-auto shadow-[0_0_10px_#39ff14]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Bio Section */}
            <div 
              ref={aboutRef}
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="hologram-panel p-8 rounded-lg">
                <h2 className="text-2xl font-tech text-cyber-violet mb-6 neon-text">
                  NEURAL PROFILE
                </h2>
                <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
                  <p>
                    &gt; Initializing developer consciousness...
                  </p>
                  <p>
                    I am a Full Stack Developer specializing in cutting-edge web technologies 
                    and algorithmic problem solving. My passion lies in creating immersive 
                    digital experiences that push the boundaries of what's possible on the web.
                  </p>
                  <p>
                    With expertise in the MERN stack and Java, I build scalable applications 
                    that bridge the gap between complex backend logic and intuitive user interfaces. 
                    My approach combines technical precision with creative innovation.
                  </p>
                  <p className="text-cyber-green">
                    &gt; Status: Ready to revolutionize digital landscapes_
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Projects', value: '50+' },
                  { label: 'Experience', value: '3+ YRS' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'Coffee Consumed', value: '∞' }
                ].map((stat, index) => (
                  <div key={index} className="hologram-panel p-4 text-center">
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

            {/* Skills Section */}
            <div className="space-y-8">
              <div className="hologram-panel p-8 rounded-lg">
                <h2 className="text-2xl font-tech text-cyber-green mb-6 neon-text">
                  SKILL_MATRIX
                </h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm font-mono">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyber-blue">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-green shadow-[0_0_10px_#00d4ff] transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="hologram-panel p-8 rounded-lg">
                <h2 className="text-2xl font-tech text-cyber-pink mb-6 neon-text">
                  TIMELINE_LOG
                </h2>
                <div className="space-y-6">
                  {[
                    { year: '2024', event: 'Advanced Full Stack Development', tech: 'React, Node.js, MongoDB' },
                    { year: '2023', event: 'Algorithmic Mastery Phase', tech: 'Java, Data Structures' },
                    { year: '2022', event: 'Web Development Initiation', tech: 'HTML, CSS, JavaScript' },
                    { year: '2021', event: 'Programming Genesis', tech: 'Python, C++' }
                  ].map((item, index) => (
                    <div key={index} className="flex space-x-4 border-l-2 border-cyber-blue/30 pl-4">
                      <div className="text-cyber-blue font-tech font-bold">{item.year}</div>
                      <div className="flex-1">
                        <div className="text-gray-300 font-mono">{item.event}</div>
                        <div className="text-cyber-green text-sm font-mono">{item.tech}</div>
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

export default About;
