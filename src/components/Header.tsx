import React from 'react';
import Navbar from '../components/Navbar';

const Header: React.FC = () => {
    return (
        <header className="container">
            <div className="flex flex-nowrap columns-3">
                <div className="flex">
                    <span className="float-left text-xs text-sky-600 py-3 pl-2 pr-1">const</span>
                    <div className="relative w-80 sm:w-70 py-4">
                        <a href="/" >
                            <img src="/personal-site/images/BrandonDHaskell.png" alt="Brandon D Haskell"></img>
                        </a>
                    </div>
                    <span className="text-2xl text-white sm:px-2 md:px-6 pt-3">=</span>
                </div>
                <Navbar />
            </div>
        </header>
    )
};

export default Header;