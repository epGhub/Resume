import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import './DashboardMainContent.css';
import SearchIcon from '@mui/icons-material/Search';
import FaceIcon from '@mui/icons-material/Face';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';


const DashboardMainContent = () => {
  return (
    <div className="dashboard-grid">

      {/* Left section */}
      <div className="dashboard-left">
        <div className="search-row">
         <span className="search-icon-pic"> <SearchIcon/></span> <input type="text" placeholder="Search..." className="search-bar" />
          <span className="bell-icon"><NotificationsSharpIcon/></span>
        </div>

        <div className="dashboard-title-row">
          <span className="section-title-txt">Dashboard</span>
          <div className="this-week">
            <p>This Week</p>
            <span className="arrow"><KeyboardArrowDownSharpIcon/></span>
          </div>
        </div>

        <div className="top-section">
          <AnatomySection />
          <HealthStatusCards />
        </div>

        <ActivityFeed />
      </div>

      {/* Right section */}
      <div className="dashboard-right">
        <div className="user-bar">
          <div className="user-avatar-sec">
          <div className="avatar"><FaceIcon/></div> 
          </div>
          <button className="add-button">+</button>
        </div>

        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
