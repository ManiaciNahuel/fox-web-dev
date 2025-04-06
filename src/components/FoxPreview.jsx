// src/components/FoxPreview.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FoxModel from './FoxModel';

const animaciones = [
  "hit",
  "idle",
  "walk",
  "walk.left"
];


const FoxPreview = () => {
  const [currentAnim, setCurrentAnim] = useState(animaciones[0]);

  return (
    <>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1} />
        <FoxModel currentAnim={currentAnim} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 20,
        background: '#1f1f1fdd',
        padding: '1rem',
        borderRadius: '12px',
        color: '#fff',
        fontFamily: 'Ubuntu, sans-serif'
      }}>
        <strong>Animaciones disponibles:</strong>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {animaciones.map((name) => (
            <li key={name}>
              <button
                onClick={() => setCurrentAnim(name)}
                style={{
                  background: currentAnim === name ? '#f6511d' : '#333',
                  color: '#fff',
                  border: 'none',
                  padding: '0.4rem 0.8rem',
                  margin: '0.3rem 0',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FoxPreview;
