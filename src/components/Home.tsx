import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '../components/Box';

const Home: React.FC = () => {
    return (
        <div>
            <h2>Home</h2>
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
};

export default Home;