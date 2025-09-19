import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import KeyGeneration from './pages/KeyGeneration.jsx';
import Encryption from './pages/Encryption.jsx';
import Decryption from './pages/Decryption.jsx';
import PerformanceMetrics from './pages/PerformanceMetrics.jsx';
import AuditLogs from './pages/AuditLogs.jsx';
import './App.css';

function App() {
  // State to manage the current theme, defaulting to the user's preference or 'dark'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Effect to apply the theme to the root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className="App">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/key-generation" element={<KeyGeneration />} />
            <Route path="/encryption" element={<Encryption />} />
            <Route path="/decryption" element={<Decryption />} />
            <Route path="/performance-metrics" element={<PerformanceMetrics />} />
            <Route path="/audit-logs" element={<AuditLogs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

