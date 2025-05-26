import React from "react";
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-card">
      <div className="card-content">
        <div className="card-text">
          <p className="title">{title}</p>
          <p className="time">{time}</p>
        </div>
        <div className="card-icon">{icon}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
