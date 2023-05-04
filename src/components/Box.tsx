import React, { useRef } from 'react';
import { Mesh } from 'three';
import { MeshProps, useFrame } from '@react-three/fiber';

interface BoxProps extends MeshProps {
    boxColor: string;
}

export const Box: React.FC<BoxProps> = (props) => {
    const ref = useRef<Mesh | null>(null);
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={props.boxColor} />
        </mesh >
    )
}