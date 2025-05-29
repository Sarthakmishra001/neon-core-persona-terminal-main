import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, mousePosition, hoveredPanel }: { 
  url: string; 
  mousePosition: { x: number; y: number };
  hoveredPanel: number | null;
}) {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  // Track mouse position and update model rotation
  useFrame(() => {
    if (modelRef.current) {
      let targetRotationY = mousePosition.x * 0.5; // Reduced rotation amount
      let targetRotationX = -mousePosition.y * 0.2; // Reduced tilt amount

      // If a panel is hovered, rotate towards it
      if (hoveredPanel !== null) {
        const panelPositions = [
          { x: -1.2, y: 0.8 },  // Top Left
          { x: 1.2, y: 0.8 },   // Top Right
          { x: -1.2, y: -0.8 }, // Bottom Left
          { x: 1.2, y: -0.8 }   // Bottom Right
        ];
        
        const targetPanel = panelPositions[hoveredPanel];
        targetRotationY = targetPanel.x * 0.5;
        targetRotationX = -targetPanel.y * 0.2;
      }

      // Smooth follow rotation using lerp
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotationY,
        0.1
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetRotationX,
        0.1
      );
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={[1.8, 1.8, 1.8]}
      position={[0, -0.5, 0]}
    />
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

interface ModelViewerProps {
  hoveredPanel?: number | null;
}

export default function ModelViewer({ hoveredPanel = null }: ModelViewerProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate mouse position relative to window size
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    // Add event listener to window instead of container
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-end justify-center">
      <div className="relative w-[350px] h-[500px] mb-[20vh]">
        {/* Glittering border */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/30 via-cyber-violet/30 to-cyber-green/30 animate-pulse-glow" />
          <div className="absolute inset-[1px] rounded-xl bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-sm" />
        </div>

        {/* Model container */}
        <div className="relative w-full h-full pt-[4vh] px-4">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={<LoadingFallback />}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <directionalLight position={[-5, 5, -5]} intensity={0.5} />
              
              <Model 
                url="/models/mymodel.glb" 
                mousePosition={mousePosition}
                hoveredPanel={hoveredPanel}
              />
              
              <OrbitControls 
                enableZoom={false}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 2.9}
                maxAzimuthAngle={Math.PI / 6}
                minAzimuthAngle={-Math.PI / 6}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Status indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex items-center space-x-2 text-cyber-green font-mono text-sm">
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse-glow" />
            <span>MODEL_LOADED</span>
          </div>
        </div>
      </div>
    </div>
  );
} 