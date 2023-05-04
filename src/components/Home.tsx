import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Sphere from '../components/Sphere';
import { ObjectRenderMenu } from '../components/ObjectRenderMenu';
import { OrbitControls } from '@react-three/drei';
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
                <OrbitControls autoRotate enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8} />
                <Sphere position={[0, 0, 0]} currentColor={colorMap[currentColor]} />
            </Canvas>
        </div>
    );
};

export default Home;