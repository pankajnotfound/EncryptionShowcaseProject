import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="app-header">
      <div className="logo">
        Secure<span>Comm</span>
      </div>
      <div className="header-right">
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/key-generation" className={({ isActive }) => (isActive ? 'active' : '')}>Keys</NavLink></li>
            <li><NavLink to="/encryption" className={({ isActive }) => (isActive ? 'active' : '')}>Encrypt</NavLink></li>
            <li><NavLink to="/decryption" className={({ isActive }) => (isActive ? 'active' : '')}>Decrypt</NavLink></li>
            <li><NavLink to="/performance-metrics" className={({ isActive }) => (isActive ? 'active' : '')}>Metrics</NavLink></li>
            <li><NavLink to="/audit-logs" className={({ isActive }) => (isActive ? 'active' : '')}>Logs</NavLink></li>
          </ul>
        </nav>
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                <div className="slider round"></div>
            </label>
        </div>
      </div>
    </header>
  );
};

export default Header;

