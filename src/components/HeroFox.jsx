import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const HeroFox = () => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/fox_multi.glb');
  const { actions } = useAnimations(animations, group);
  const alreadyGone = useRef(false);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const action = actions['hit'];
    if (action) {
      action.reset().fadeIn(0.5).play();
    }

    const initialX = isMobile ? 0 : -12;
    const initialZ = isMobile ? -1 : 5;
    const initialY = isMobile ? -4 : -0.2;

    if (group.current) {
      group.current.position.set(initialX, initialY, initialZ);
    }

    alreadyGone.current = false;
  }, [actions, isMobile]);

  useFrame(() => {
    if (group.current && !alreadyGone.current) {
      const speed = 0.08;
      group.current.position.x += speed;
      group.current.position.z -= speed * 0.5;

      const exitX = isMobile ? 0 : 14;
      const exitZ = isMobile ? -1 : 1;

      if (
        group.current.position.x > exitX &&
        group.current.position.z < exitZ
      ) {
        alreadyGone.current = true;
      }
    }
  });

  return (
    <group
      ref={group}
      scale={isMobile ? [0.7, 0.7, 0.7] : [1, 1, 1]}
      position={[-12, -0.2, 5]}
      rotation={[0, Math.PI / 4, 0]}
    >
      <primitive object={scene} />
    </group>
  );
};

export default HeroFox;
