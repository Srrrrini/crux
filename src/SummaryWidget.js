import React from 'react';
import './WidgetWhite.css';
import './WidgetBlue.css';
import './WidgetBlack.css';

import downpurple from './icon/down+purple.svg';

import options from './icon/options.svg';
const SummaryWidget = ({ title, data,no}) => {
  const { navbarOptions,colour,size} = data; // Destructure with a default value for navbarOptions
  const showTodayIcon = navbarOptions.length === 1 && navbarOptions[0] === "Today";
  if(no===3){
    return (
      <div className={"widget summary-widget-"+colour+3}  style={{ width: size.width, height: size.height }}>
        <div className={"navbar-"+colour} style={{ width: '100%', height: '30px' }}>
          {navbarOptions.map((option, index) => (
            <button key={index}>{option}</button>
          ))}
          {showTodayIcon && <img src={downpurple} alt="Today" className="today-icon" />}
          <div className='options'><img src={options}/></div> {/* Down arrow button */}
        </div>
        <p className='summary'>{data.summary}</p>
      </div>
    );
  }
  return (
    <div className={"widget summary-widget-"+colour}  style={{ width: size.width, height: size.height }}>
      <div className={"navbar-"+colour} style={{ width: '100%', height: '30px' }}>
        {navbarOptions.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
        <div className='options'><img src={options}/></div> {/* Down arrow button */}
      </div>
      <p className='summary'>{data.summary}</p>
    </div>
  );
}

export default SummaryWidget;
