import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface SphereProps {
    currentColor: THREE.Color;
    position: [number, number, number];
};

const Sphere: React.FC<SphereProps> = ({ currentColor, position }) => {
    const { scene } = useGLTF('assets/3dModels/sphere.glb') as any;
    const meshRef = useRef<THREE.Mesh>();

    useLayoutEffect(() => {
        if (meshRef.current) {
            const material = new THREE.MeshStandardMaterial({
                roughness: 0,
                metalness: 0.25,
                emissive: new THREE.Color(0x000000),
                color: currentColor,
                envMapIntensity: 0.5
            });

            meshRef.current.material = material;
        }
    }, [currentColor]);

    return (
        <primitive
            ref={meshRef}
            object={scene.children[0]}
            position={position}
        />
    );
};

export default Sphere;