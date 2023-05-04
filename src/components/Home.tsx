import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '../components/Box';
import { ObjectRenderMenu } from '../components/ObjectRenderMenu';

const Home: React.FC = () => {
    const [currentColor, setCurrentColor] = useState('orange');

    const handleColorChange = (event: React.MouseEvent<HTMLAnchorElement>, color: string) => {
        event.preventDefault();
        setCurrentColor(color);
    };

    return (
        <div>
            <h2>Home</h2>
            <ObjectRenderMenu handleColorChange={handleColorChange} />
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[0, 0, 0]} boxColor={currentColor} />
            </Canvas>
        </div>
    );
};

export default Home;