import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import EmailMe from './components/EmailMe';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/emailme" element={<EmailMe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
