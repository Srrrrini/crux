import React from 'react';
import './Sidebar.css';

const icons = [
  // Replace with your icon file paths or components
  // require('./icon/cruxlogo.jpg'),
  require('./images/sidebar.jpg'),

];

const profilePicture = require('./icon/cruxlogo.jpg'); // Replace with your image path

function Sidebar() {
  return (
    <div className="sidebar">
      <div >
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={`Icon ${index + 1}`} className="sidebar" />
        ))}
      </div>
      {/* <div className="profile-picture-container">
        <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
      </div> */}
    </div>
  );
}

export default Sidebar;
