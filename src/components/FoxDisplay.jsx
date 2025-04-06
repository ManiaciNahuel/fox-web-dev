// src/components/FoxDisplay.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import FoxSentado from './FoxSentado';

const FoxDisplay = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 3], fov: 45 }}
      style={{ height: '100%', width: '100%' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 2]} intensity={1} />
      <Suspense fallback={null}>
        <FoxSentado position={[0, 0, 0]} rotation={[0, -Math.PI / 5, 0]} />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate />
    </Canvas>
  );
};

export default FoxDisplay;
