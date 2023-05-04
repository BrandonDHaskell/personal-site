import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/bio">Bio</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/emailme">Email Me</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;