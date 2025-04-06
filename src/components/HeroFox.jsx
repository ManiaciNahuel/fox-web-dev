import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const HeroFox = () => {
    const group = useRef();
    const { scene, animations } = useGLTF('/models/fox_multi.glb');
    const { actions } = useAnimations(animations, group);
    const alreadyGone = useRef(false);
    const cooldown = useRef(0);

    const startRunning = () => {
        const action = actions['hit'];
        if (action) {
            action.reset().fadeIn(0.5).play();
        }

        // Reiniciar posición
        if (group.current) {
            group.current.position.set(14, 1, 6); // posición inicial
        }

        alreadyGone.current = false;
    };

    useEffect(() => {
        startRunning();
    }, [actions]);

    useFrame(() => {
        if (group.current && !alreadyGone.current) {
            const speed = 0.08;
            group.current.position.z -= speed * 1;
            group.current.position.x -= speed * 1;

            // 🔥 NUEVA CONDICIÓN DE ESCAPE
            if (
                group.current.position.x < -10 &&  // se fue bien a la izquierda
                group.current.position.z < -3      // ya no se ve más en profundidad
            ) {
                alreadyGone.current = true;
            }
        }
    });


    return (
        <group
            ref={group}
            scale={[1, 1, 1]}
            position={[14, 1, 6]}
            rotation={[0, -Math.PI / 4, 0]}
        >
            <primitive object={scene} />
        </group>
    );
};

export default HeroFox;
