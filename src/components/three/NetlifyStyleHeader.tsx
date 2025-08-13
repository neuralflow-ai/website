import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NetlifyStyleHeaderProps {
  intensity?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  height?: string;
}

const FloatingHeaderElements = ({ 
  intensity = 0.6, 
  primaryColor = "#00c2ff", 
  secondaryColor = "#ff0080",
  accentColor = "#8b5cf6"
}: Omit<NetlifyStyleHeaderProps, 'height'>) => {
  const groupRef = useRef<THREE.Group>(null);
  const elementsRef = useRef<THREE.Mesh[]>([]);

  // Create fewer floating elements for header
  const elements = useMemo(() => {
    const items = [];
    const count = Math.floor(8 * intensity);
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 0.5 + 0.1;
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 15;
      
      // Simpler shapes for header
      const shapeType = Math.floor(Math.random() * 3);
      let geometry;
      
      switch (shapeType) {
        case 0:
          geometry = new THREE.SphereGeometry(size, 12, 12);
          break;
        case 1:
          geometry = new THREE.BoxGeometry(size, size, size);
          break;
        default:
          geometry = new THREE.OctahedronGeometry(size);
      }
      
      // Random colors from our palette
      const colors = [primaryColor, secondaryColor, accentColor];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      items.push({
        geometry,
        position: [x, y, z],
        color,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        floatSpeed: (Math.random() - 0.5) * 0.008,
        scale: size,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
    
    return items;
  }, [intensity, primaryColor, secondaryColor, accentColor]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
    }
    
    elementsRef.current.forEach((mesh, index) => {
      if (mesh) {
        const element = elements[index];
        mesh.rotation.x += element.rotationSpeed;
        mesh.rotation.y += element.rotationSpeed * 0.7;
        mesh.position.y += Math.sin(state.clock.elapsedTime + index) * element.floatSpeed;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {elements.map((element, index) => (
        <mesh
          key={index}
          ref={(ref) => {
            if (ref) elementsRef.current[index] = ref;
          }}
          position={element.position as [number, number, number]}
          scale={element.scale}
        >
          <primitive object={element.geometry} />
          <meshBasicMaterial
            color={element.color}
            transparent
            opacity={element.opacity}
          />
        </mesh>
      ))}
    </group>
  );
};

const NetlifyStyleHeader: React.FC<NetlifyStyleHeaderProps> = ({ 
  intensity = 0.6, 
  primaryColor = "#00c2ff", 
  secondaryColor = "#ff0080",
  accentColor = "#8b5cf6",
  height = "300px"
}) => {
  return (
    <div 
      className="absolute inset-x-0 top-0 w-full overflow-hidden"
      style={{ height }}
    >
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, ${primaryColor}12 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, ${secondaryColor}12 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, ${accentColor}08 0%, transparent 50%),
            linear-gradient(180deg, 
              rgba(15, 23, 42, 0.8) 0%, 
              rgba(30, 41, 59, 0.6) 50%,
              transparent 100%
            )
          `
        }}
      />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 50% 30%, ${primaryColor}15 0%, transparent 60%)
          `,
          animation: 'netlify-pulse 10s ease-in-out infinite'
        }}
      />
      
      {/* Three.js floating elements */}
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[8, 8, 8]} intensity={0.3} color={primaryColor} />
        <pointLight position={[-8, -8, -8]} intensity={0.2} color={secondaryColor} />
        <FloatingHeaderElements 
          intensity={intensity}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          accentColor={accentColor}
        />
      </Canvas>
      
      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%, 
              rgba(15, 23, 42, 0.3) 50%,
              rgba(15, 23, 42, 0.8) 100%
            )
          `
        }}
      />
    </div>
  );
};

export default NetlifyStyleHeader;