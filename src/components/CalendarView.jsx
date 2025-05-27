import React from 'react';
import './CalendarView.css';
import { appointmentCards } from '../data/appointments';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const calendarData = {
  Mon: [
    { time: '10:00', status: 'none' },
    { time: '11:00', status: 'none' },
    { time: '12:00', status: 'none' },
  ],
  Tue: [
    { time: '08:00', status: 'none' },
    { time: '09:00', status: 'highlighted' },
    { time: '10:00', status: 'none' },
  ],
  Wed: [
    { time: '12:00', status: 'none' },
    { time: '--', status: 'none' },
    { time: '13:00', status: 'none' },
  ],
  Thu: [
    { time: '10:00', status: 'none' },
    { time: '11:00', status: 'secondary' },
    { time: '--', status: 'none' },
  ],
  Fri: [
    { time: '--', status: 'none' },
    { time: '14:00', status: 'none' },
    { time: '16:00', status: 'none' },
  ],
  Sat: [
    { time: '12:00', status: 'secondary' },
    { time: '14:00', status: 'none' },
    { time: '15:00', status: 'none' },
  ],
  Sun: [
    { time: '09:00', status: 'secondary' },
    { time: '10:00', status: 'disabled' },
    { time: '11:00', status: 'disabled' },
  ],
};

const days = Object.keys(calendarData);

const dates = {
  Mon: 25,
  Tue: 26,
  Wed: 27,
  Thu: 28,
  Fri: 29,
  Sat: 30,
  Sun: 31,
};

const CalendarView = () => {
  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <h4>June 2025</h4>
        <div className="calendar-nav">
          <span className='calendar-nav-left'><WestIcon /></span>
          <span className='calendar-nav-right'><EastIcon /></span>
        </div>
      </div>

      <div className="calendar-columns">
        {days.map((day, dayIndex) => (
          <div
            key={dayIndex}
            className={`calendar-column 
              ${day === 'Tue' ? 'column-highlight' : ''} 
              ${day === 'Sun' ? 'sunday-column' : ''}
            `}
          >
            <div className="day-header">
              <p className="day-name">{day}</p>
              <p className="day-date">{dates[day]}</p>
            </div>

            {calendarData[day].map((slot, i) => {
              let className = 'time-cell';
              if (slot.status === 'highlighted') className += ' highlighted';
              else if (slot.status === 'secondary') className += ' secondary';
              else if (slot.status === 'disabled') className += ' disabled';
              else if (slot.status === 'no-slot') className += ' no-slot';

              return (
                <div key={i} className={className}>
                  {slot.status === 'no-slot' ? '--' : slot.time}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="appointment-tags">
        {appointmentCards.map((a, i) => (
          <div
            key={i}
            className="appointment-card"
            style={{
              backgroundColor: a.bg,
              color: a.textColor
            }}
          >
            <div className="card-header">
              <strong className="card-label">{a.label}</strong>
              <span className="card-icon">{a.icon}</span>
            </div>
            <p className="card-time">{a.time}</p>
            <p className="card-doctor">{a.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
