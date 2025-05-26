import React from 'react';
import { healthCards } from '../data/healthData';
import './HealthStatusCards.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HealthStatusCards = () => {
  return (
    <>
    <div className="health-cards">
      {healthCards.map((card, index) => (
        <div key={index} className="card">
         <div className="card-header">
             <img src={card.icon} alt={card.title} className="card-icon" />
             <h4>{card.title}</h4>
          </div>

          <p>Date: {card.date}</p>
          <div className="status-bar">
            <div
              className="status-fill"
              style={{ backgroundColor: card.color }}
            ></div>
          </div>
        </div>
      ))}
       <div className='details-title'>Details <ArrowForwardIcon/></div>
    </div>
   
    </>
  );
};

export default HealthStatusCards;
