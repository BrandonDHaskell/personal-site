import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmailMe from './components/EmailMe';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/emailme" element={<EmailMe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
