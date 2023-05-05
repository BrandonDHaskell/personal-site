import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial, Color } from 'three';

interface SphereProps {
    currentColor: Color;
    position: [number, number, number];
    scale: number;
};

const Sphere: React.FC<SphereProps> = ({ currentColor, position, scale }) => {
    const { scene } = useGLTF('assets/3dModels/sphere.glb') as any;
    const meshRef = useRef<Mesh>();
    const [ready, setReady] = useState<boolean>(false);

    // track when the mesh is ready
    useEffect(() => {
        if (scene.children[0]) {
            const mesh = scene.children[0] as Mesh;
            meshRef.current = mesh;
            setReady(true);
        }
    }, [scene]);

    // track when the material is ready or updated
    useEffect(() => {
        if (ready && meshRef.current) {
            const material = new MeshStandardMaterial({
                roughness: 0,
                metalness: 0.25,
                emissive: new Color(0x000000),
                color: currentColor,
                envMapIntensity: 0.5
            });
            meshRef.current.material = material;
        }
    }, [ready, currentColor]);

    return ready ? (
        <primitive
            ref={meshRef}
            object={scene.children[0]}
            position={position}
            scale={[scale, scale, scale]}
        />
    ) : null;
};

export default Sphere;