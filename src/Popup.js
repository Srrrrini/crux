import React from 'react';
import './Popup.css';
import patternBackground from './images/pattern.svg';
import popup from './images/popup.svg';
import graph from './images/graph.svg';
import history from './icon/history.svg';
import cross from './icon/cross.svg';
const Popup = ({ onClose }) => {
    
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-navbar">
          <div className="navbar-text-container">
            <span className="navbar-text">Create widget</span>
            <span className="navbar-subtext">Manage the glossary of terms of your Database.</span>
          </div>
          <input type="text" className="input-bar" placeholder="Reusability Scores" />
        </div>
        <button className="close-button" onClick={onClose}><img src={cross}></img></button>
        <div className='below'>
        <div className="image-container">
          <img src={popup}></img>
        </div>
        <div className="component-buttons">
          <p>COMPONENTS</p>
          <div className='contain1' style={{"width":'310px',"height":'60px'}}>Data<span className="navbar-subtext">Random description</span></div>
          <div className='contain2' style={{"height":'90px'}}>Graph<span className="navbar-subtext">Random description</span><img src={graph} style={{width:'149px'}}></img></div>
          <div className='contain2' style={{"height":'60px'}}>Summary<span className="navbar-subtext">Random description</span></div>
          <div className='contain3'style={{"width":'325px'}}>
          <div className='b1' ><img src={history}></img></div>
          <div className='b2' >Cancel</div>
          <div className='b3' >Save</div>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
