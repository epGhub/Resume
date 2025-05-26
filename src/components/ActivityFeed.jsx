import React from 'react';
import './ActivityFeed.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const data = {
  Mon: [
    { height: 30, color: '#0ea5e9' },
    { height: 50, color: '#38bdf8' },
    { height: 20, color: '#0369a1' },
    { height: 60, color: '#0284c7' },
  ],
  Tue: [
    { height: 45, color: '#0ea5e9' },
    { height: 70, color: '#38bdf8' },
    { height: 35, color: '#0284c7' },
    { height: 50, color: '#0369a1' },
  ],
  Wed: [
    { height: 25, color: '#0284c7' },
    { height: 60, color: '#0ea5e9' },
    { height: 40, color: '#36bdf8' },
    { height: 20, color: '#0369a1' },
  ],
  Thu: [
    { height: 80, color: '#0ea5e9' },
    { height: 40, color: '#38bdf8' },
    { height: 60, color: '#0284c7' },
    { height: 35, color: '#0369a1' },
  ],
  Fri: [
    { height: 55, color: '#36bdf8' },
    { height: 30, color: '#0ea5e9' },
    { height: 75, color: '#0284c7' },
    { height: 50, color: '#0369a1' },
  ],
  Sat: [
    { height: 70, color: '#0ea5e9' },
    { height: 90, color: '#0284c7' },
    { height: 65, color: '#38bdf8' },
    { height: 40, color: '#0369a1' },
  ],
  Sun: [
    { height: 45, color: '#0ea5e9' },
    { height: 35, color: '#38bdf8' },
    { height: 55, color: '#0284c7' },
    { height: 25, color: '#0369a1' },
  ],
};

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <div className="activity-title">Activity</div>
        <div className="appointments-week">3 appointments on this week</div>
      </div>

      <div className="bar-chart">
        {days.map((day, index) => (
          <div key={index} className="bar-container">
            <div className="bars-row">
              {data[day].map((bar, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{
                    height: `${bar.height}px`,
                    backgroundColor: bar.color,
                  }}
                  title={`${day} bar ${i + 1}: ${bar.height}px`}
                ></div>
              ))}
            </div>
            <p className="day-label">{day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;

