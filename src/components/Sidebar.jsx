import React from 'react';
import { generalLinks, toolsLinks } from '../data/navigationLinks';
import './Sidebar.css';

const Sidebar = ({isOpen}) => {
  return (
     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    
      <div className="sidebar-header">
        <h2 className="logo-text">
          Health<span className="care-text">care.</span>
        </h2>
      </div>
     <div className="nav-list-sec">
      <div className="sidebar-section">
        <p className="section-title">General</p>
        <ul className="nav-list">
          {generalLinks.map((link, index) => (
            <li
              key={index}
              className={`nav-item ${index === 0 ? 'active' : ''}`}
            >
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-label">{link.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Tools</p>
        <ul className="nav-list">
          {toolsLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <span className="nav-icon">{link.icon}</span>
              <span className="nav-label">{link.name}</span>
            </li>
          ))}
        </ul>
      </div>

      </div>

      <div className="sidebar-footer">
        <p className="nav-item">
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Setting</span>
        </p>
      </div>
    </div>
    
  );
};

export default Sidebar;
