import React, { useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface SphereProps {
    currentColor: THREE.Color;
    position: [number, number, number];
};

const Sphere: React.FC<SphereProps> = ({ currentColor, position }) => {
    const { scene, materials } = useGLTF('assets/3dModels/sphere.glb') as any;

    useLayoutEffect(() => {
        if (materials.Material) {
            Object.assign(materials.Material, {
                roughness: 0,
                metalness: 0.25,
                emissive: new THREE.Color(0x000000),
                color: currentColor,
                envMapIntensity: 0.5
            });
        }
    }, [scene, materials, currentColor]);

    return <primitive object={scene} />;
};

export default Sphere;