// HorizontalBar.js
import React from 'react';
import './HorizontalBar.css';
import homeIcon from './icon/home.svg'; // Import the image
import cross from './icon/cross.png';
import plus from './icon/plus.svg';
import settings from './icon/settings.svg';

const HorizontalBar = ({ togglePopup }) => {
  return (
    <div className="horizontal-bar">
      <img key="home" src={homeIcon} alt="home" className="settings-icon" style={{ width: '20.8px', height: '20.8px' }} />
      <div className="box">
        <p className="box-text">Overview</p>
      </div>
      <div className="customer-box">
        <p className="box-text">Customer <img key="home" src={cross} alt="cross" className="cross" style={{ width: '12px', height: '12px' }} /></p>
      </div>
      <div className="box">
        <p className="box-text">Products</p>
      </div>
      <div className="box">
        <p className="box-text">Settings</p>
      </div>
      <div style={{
        width: '40px',
        height: '40px',
        backgroundColor: '#5E5ADB26',
        borderRadius: '8px',
        border: '1px solid #5E5ADB26',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }} onClick={togglePopup}>
        <img src={plus} alt="plus" />
      </div>
      <div className="add-widget" onClick={togglePopup}>
        <p className="box-text"><img src={plus} alt="plus" style={{width:'11px'}} /> Add widget</p>
      </div>
      <div className="settings-icon" onClick={togglePopup}>
        <p><img key="home" src={settings} alt="settings" className="cross" style={{ width: '20px', height: '22px' }} /></p>
      </div>
    </div>
  );
}

export default HorizontalBar;
