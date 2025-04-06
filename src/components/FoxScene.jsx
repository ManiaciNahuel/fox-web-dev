import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import HeroFox from './HeroFox';


const FoxScene = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.floor(window.scrollY / window.innerHeight);
      setSectionIndex(index);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 4, 18], fov: 45 }}
      style={{ height: '100vh' }}
    >
      {/* Fondo oscuro y niebla */}
      <color attach="background" args={["#1f1f1f"]} />
      <fog attach="fog" args={["#1f1f1f", 15, 40]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      {/* ✨ Luz sutil para el zorro sentado */}
      <pointLight position={[-6, 2, 3]} intensity={0.9} color="#f6511d" />

      <Suspense fallback={null}>
        <HeroFox />

        <Environment preset="sunset" />
      </Suspense>
    </Canvas>

  );
};

export default FoxScene;
