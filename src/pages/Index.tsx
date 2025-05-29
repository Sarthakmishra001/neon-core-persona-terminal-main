
import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Avatar from '../components/Avatar';
import HolographicPanels from '../components/HolographicPanels';
import ParticleField from '../components/ParticleField';
import CircuitBackground from '../components/CircuitBackground';
import ScrollPrompt from '../components/ScrollPrompt';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-cyber-darker relative overflow-hidden"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <CircuitBackground />
      <ParticleField />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-lines pointer-events-none" />
      
      {/* Main Content */}
      <Navigation />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          {/* Hero Section */}
          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-tech font-bold text-white neon-text glitch-text" data-text="CYBER DEV">
                <span className="text-cyber-blue">CYBER</span>{' '}
                <span className="text-cyber-green">DEV</span>
              </h1>
              <p className="text-xl md:text-2xl text-cyber-blue font-mono tracking-wider">
                &gt; Initializing Neural Interface...
              </p>
            </div>

            {/* Avatar Section */}
            <div className="flex justify-center my-16">
              <Avatar mousePosition={mousePosition} />
            </div>

            {/* Subtitle */}
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-cyber-violet font-mono">
                [ FULL STACK DEVELOPER ]
              </p>
              <p className="text-sm md:text-base text-gray-400 font-mono">
                Crafting digital realities in the quantum realm
              </p>
            </div>
          </div>

          {/* Holographic Skill Panels */}
          <HolographicPanels />
        </div>
      </main>

      {/* Scroll Prompt */}
      <ScrollPrompt />
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-cyber-green text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="opacity-80">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
