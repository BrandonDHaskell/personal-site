import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="flex dark:text-sky-400 mt-2">
            <span className="xs:text-xl sm:text-2xl md:text-3xl text-yellow-600">{'{'}</span>
            <ul className="flex">
                <li className="flex-auto mx-4 pt-1 xs:text-md sm:text-lg md:text-xl">
                    <Link to="/">Home</Link>
                </li>
                <li className="flex-auto mx-4 pt-1 xs:text-md sm:text-lg md:text-xl">
                    <Link to="/bio">About</Link>
                </li>
                <li className="flex-auto mx-4 pt-1 xs:text-md sm:text-lg md:text-xl">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="flex-auto mx-4 pt-1 xs:text-md sm:text-lg md:text-xl">
                    <Link to="/emailme">Contact</Link>
                </li>
            </ul>
            <span className="xs:text-xl sm:text-2xl md:text-3xl text-yellow-600 pr-4">{'}'}</span>
        </nav>
    );
};

export default Navbar;
