// src/components/FoxModel.jsx
import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const FoxModel = ({ currentAnim }) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/fox_multi.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    console.log("Animaciones disponibles:", names);
  }, [names]);

  useEffect(() => {
    if (!actions || !currentAnim) return;

    // 🔇 Detener todas las animaciones anteriores
    Object.values(actions).forEach((action) => {
      action.stop();
    });

    // ▶️ Ejecutar la animación actual
    const action = actions[currentAnim];
    if (action) {
      action.reset().fadeIn(0.5).play();
    }
  }, [currentAnim, actions]);

  return (
    <group ref={group} scale={[0.1, 0.1, 0.1]}>
      <primitive object={scene} />
    </group>
  );
};

export default FoxModel;
