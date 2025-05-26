import React from "react";
import humanBodyImage from '../assets/human-body-frontal.jpg';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="image-wrapper">
        <img
          src={humanBodyImage}
          alt="Human Anatomy"
          className="anatomy-image"
        />

        <div className="popup heart"> ❤️ Healthy Heart</div>
        <div className="popup leg">🦵Healthy Leg</div>
      </div>
    </div>
  );
};

export default AnatomySection;

