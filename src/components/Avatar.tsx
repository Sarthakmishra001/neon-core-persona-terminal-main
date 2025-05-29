import React from 'react';
import ModelViewer from './ModelViewer';

interface AvatarProps {
  mousePosition: { x: number; y: number };
}

const Avatar = ({ mousePosition }: AvatarProps) => {
  return (
    <div className="relative w-full h-full">
      <ModelViewer />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="inline-flex items-center space-x-2 text-cyber-green font-mono text-sm">
          <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse-glow" />
          <span>MODEL_LOADED</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;

