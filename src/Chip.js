import React from 'react';
import './Chip.css';

const Chip = ({ theme, color, name, number }) => {
  const chipClassName = `chip ${theme || ''}`; // Conditionally apply theme class

  return (
    <div className={chipClassName}>
      <div className="color-bar" style={{ backgroundColor: color }}></div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="number">{number}</div>
      </div>
    </div>
  );
}

export default Chip;
