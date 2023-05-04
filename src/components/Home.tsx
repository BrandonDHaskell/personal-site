import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '../components/Box';
import Sphere from '../components/Sphere';
import { ObjectRenderMenu } from '../components/ObjectRenderMenu';
import * as THREE from 'three';

const Home: React.FC = () => {
    const colorMap: { [key: string]: THREE.Color } = {
        orange: new THREE.Color(0xffa500),
        crimson: new THREE.Color(0xdc143c),
        teal: new THREE.Color(0x008080),
        steelblue: new THREE.Color(0x4682b4)
    };

    const [currentColor, setCurrentColor] = useState<string>('orange');

    const handleColorChange = (event: React.MouseEvent<HTMLAnchorElement>, color: string) => {
        event.preventDefault();
        console.log(color);
        if (colorMap[color]) {
            setCurrentColor(color);
        }
    };

    return (
        <div>
            <h2>Home</h2>
            <ObjectRenderMenu handleColorChange={handleColorChange} />
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <Sphere position={[0, 0, 0]} currentColor={new THREE.Color(currentColor)} />
            </Canvas>
        </div>
    );
};

export default Home;