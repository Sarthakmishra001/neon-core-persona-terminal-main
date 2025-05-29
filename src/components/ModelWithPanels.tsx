import React, { useState } from 'react';
import ModelViewer from './ModelViewer';

const panels = [
  {
    icon: '⚡',
    title: 'FULL STACK DEVELOPER',
    description: 'End-to-end digital solutions',
    position: { x: -1.2, y: 0.8 }
  },
  {
    icon: '🎮',
    title: 'GAME DEVELOPER',
    description: 'Immersive gaming experiences',
    position: { x: 1.2, y: 0.8 }
  },
  {
    icon: '🤖',
    title: 'AI ENGINEER',
    description: 'Intelligent systems & automation',
    position: { x: -1.2, y: -0.8 }
  },
  {
    icon: '🌐',
    title: 'WEB DEVELOPER',
    description: 'Modern web applications',
    position: { x: 1.2, y: -0.8 }
  }
];

export default function ModelWithPanels() {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full">
      {/* 3D Model */}
      <div className="relative z-10">
        <ModelViewer hoveredPanel={hoveredPanel} />
      </div>

      {/* Holographic Panels */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[700px]">
          {panels.map((panel, index) => (
            <div
              key={index}
              className="absolute hologram-panel p-6 rounded-lg h-40 w-48 flex flex-col justify-center items-center text-center transform transition-all duration-500 hover:scale-105 pointer-events-auto"
              onMouseEnter={() => setHoveredPanel(index)}
              onMouseLeave={() => setHoveredPanel(null)}
              style={{
                left: `${50 + panel.position.x * 50}%`,
                top: `${50 + panel.position.y * 50}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="text-3xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {panel.icon}
              </div>
              <h3 className="text-cyber-blue font-tech font-bold text-lg mb-2 neon-text">
                {panel.title}
              </h3>
              <p className="text-gray-300 text-sm font-mono opacity-80">
                {panel.description}
              </p>
              
              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyber-blue opacity-50" />
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyber-blue opacity-50" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyber-blue opacity-50" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyber-blue opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 