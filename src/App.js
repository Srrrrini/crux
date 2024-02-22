import React, { useState } from 'react';
import Sidebar from './Sidebar';
import HorizontalBar from './HorizontalBar';
import Dashboard from './Dashboard';
import BarChart from './components/BarChart';
import Popup from './Popup'; // Import the Popup component

function App() {
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <HorizontalBar togglePopup={togglePopup} /> {/* Pass the togglePopup function to the HorizontalBar */}
      <Dashboard />
      {/* Rest of your app content */}
      {showPopup && <Popup onClose={closePopup} />} {/* Render the Popup component conditionally based on showPopup state */}
    </div>
  );
}

export default App;
