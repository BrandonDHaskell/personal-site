import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmailMe from './components/EmailMe';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/emailme" element={<EmailMe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
