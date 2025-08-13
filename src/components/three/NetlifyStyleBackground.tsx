import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NetlifyStyleBackgroundProps {
  intensity?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

const FloatingElements = ({ 
  intensity = 1, 
  primaryColor = "#00c2ff", 
  secondaryColor = "#ff0080",
  accentColor = "#8b5cf6"
}: NetlifyStyleBackgroundProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const elementsRef = useRef<THREE.Mesh[]>([]);

  // Create floating geometric elements
  const elements = useMemo(() => {
    const items = [];
    const count = Math.floor(15 * intensity);
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 0.8 + 0.2;
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 20;
      
      // Different shapes
      const shapeType = Math.floor(Math.random() * 4);
      let geometry;
      
      switch (shapeType) {
        case 0:
          geometry = new THREE.SphereGeometry(size, 16, 16);
          break;
        case 1:
          geometry = new THREE.BoxGeometry(size, size, size);
          break;
        case 2:
          geometry = new THREE.ConeGeometry(size, size * 1.5, 8);
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
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        floatSpeed: (Math.random() - 0.5) * 0.01,
        scale: size,
        opacity: Math.random() * 0.6 + 0.2
      });
    }
    
    return items;
  }, [intensity, primaryColor, secondaryColor, accentColor]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
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

const NetlifyStyleBackground: React.FC<NetlifyStyleBackgroundProps> = ({ 
  intensity = 1, 
  primaryColor = "#00c2ff", 
  secondaryColor = "#ff0080",
  accentColor = "#8b5cf6"
}) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, ${primaryColor}15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${secondaryColor}15 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${accentColor}10 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(15, 23, 42, 0.95) 0%, 
              rgba(30, 41, 59, 0.9) 25%,
              rgba(51, 65, 85, 0.85) 50%,
              rgba(30, 41, 59, 0.9) 75%,
              rgba(15, 23, 42, 0.95) 100%
            )
          `
        }}
      />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, ${primaryColor}20 0%, transparent 70%)
          `,
          animation: 'netlify-pulse 8s ease-in-out infinite'
        }}
      />
      
      {/* Three.js floating elements */}
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color={primaryColor} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color={secondaryColor} />
        <FloatingElements 
          intensity={intensity}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          accentColor={accentColor}
        />
      </Canvas>
      
      {/* Subtle overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%, 
              rgba(15, 23, 42, 0.1) 50%, 
              transparent 100%
            )
          `
        }}
      />
    </div>
  );
};

export default NetlifyStyleBackground;