import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Fox = () => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/low_poly_fox_by_pixelmannen_animated.glb');
  const { actions } = useAnimations(animations, group);
  const alreadyGone = useRef(false);

  useEffect(() => {
    const animName = animations[0]?.name;
    if (animName && actions[animName]) {
      const action = actions[animName];
      action.reset().fadeIn(0.2).play();
      action.time = 4; // arrancar desde la parte en la que corre
      action.paused = false;
    }
  }, [actions, animations]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (group.current && !alreadyGone.current) {
      let speed = 0;

      if (time >= 3.5) {
        const steps = [
          0.01, 0.02, 0.03, 0.04, 0.05,
          0.06, 0.07, 0.08, 0.09, 0.1,
          0.2, 0.3, 0.4, 0.5, 0.6,
          0.75, 0.9, 1
        ];

        const index = Math.floor((time - 3.5) * 2); // cada 0.5 segundos avanza 1
        speed = steps[Math.min(index, steps.length - 1)];
      }

      // Movimiento 3D diagonal con profundidad
      group.current.position.x -= speed * 1.6;
      group.current.position.z -= speed * 0.3;
      group.current.position.y -= speed * 0.2;


      // Escalado progresivo
      const grow = Math.min(0.03 + time * 0.0025, 0.12);
      group.current.scale.set(grow, grow, grow);

      // Ocultarse si sale del campo visual
      if (
        group.current.position.x < -8 &&
        group.current.position.z < -3
      ) {
        alreadyGone.current = true;
      }
    }
  });

  return (
    !alreadyGone.current && (
      <group
        ref={group}
        scale={[0.02, 0.02, 0.02]}
        position={[8, 1, 7]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <primitive object={scene} />
      </group>
    )
  );
};

export default Fox;
