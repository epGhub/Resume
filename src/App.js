import React, { useState } from 'react';
import './styles/global.css';
import Sidebar from './components/Sidebar';
import DashbordMainContent from './components/DashboardMainContent';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <MenuIcon/>
      </button>

      <div className="app-container">
        <Sidebar isOpen={sidebarOpen} />
        <div className="main-content">
          <DashbordMainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
