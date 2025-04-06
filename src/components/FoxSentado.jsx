// src/components/FoxSentado.jsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const FoxSentado = ({ position = [2, 1, 5], rotation = [0, Math.PI / 2, 0] }) => {
  const { scene } = useGLTF('/models/FoxSentado.glb');
  const ref = useRef();

  return (
    <group ref={ref} scale={[0.5, 0.5, 0.5]} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
};

export default FoxSentado;
