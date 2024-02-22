import React from 'react';
import './WidgetWhite.css';
import './WidgetBlue.css';
import './WidgetBlack.css';
import BarChart from './components/BarChart.js';
import PieChart from './components/PieChart.js';
import LineChart from './components/LineChart.js';
import Chip from './Chip.js';

import options from './icon/options.svg';
const GraphWidget = ({ title, data,no }) => {
  const { navbarOptions, chartType, chartData, size, colour ,legend} = data; // Destructure with a default value for navbarOptions
  const {series}=chartData
  let chartComponent;

  // Render the appropriate chart component based on chartType
  switch (chartType) {
    case 'bar':
      chartComponent = <BarChart data={chartData} />;
      break;
    case 'pie':
      chartComponent = <PieChart data={chartData} />;
      break;
    case 'line':
      chartComponent = <LineChart data={chartData} />;
      break;
    default:
      chartComponent = null; // If chartType is not recognized, render nothing
  }
  if(no==3){
    return (
      <div className={"widget graph-widget-" + colour+3} style={{ width: size.width, height: size.height }}>
  
        <div className={"navbar-" + colour} style={{ width: '100%', height: '30px' }}>
          {navbarOptions.map((option, index) => (
            <button key={index}>{option}</button>
          ))}
          <img src={options} className='options'/> {/* Down arrow button */}
        </div>
  
        <div className={"chart-container-" + colour} style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        {chartType==='bar'&&<BarChart chartData={chartData} colour={colour}/>}
        {chartType==='line'&&<LineChart chartData={chartData} colour={colour}/>}
        {chartType==='pie'&&<PieChart chartData={chartData} colour={colour}/>}
        </div>
        {legend === 'true' && (<div className={'legend-'+colour}>
          
            {series.map((item, index) => (
              <Chip key={index} theme={colour} color={item.color || "#FF5733"} name={item.name} number={item.value} />
            ))}
          
        </div>)}
  
      </div>
    );
  }
  return (
    <div className={"widget graph-widget-" + colour} style={{ width: size.width, height: size.height }}>

      <div className={"navbar-" + colour} style={{ width: '100%', height: '30px' }}>
        {navbarOptions.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
        <img src={options} className='options'/> {/* Down arrow button */}
      </div>

      <div className={"chart-container-" + colour} style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
      {chartType==='bar'&&<BarChart chartData={chartData} colour={colour}/>}
      {chartType==='line'&&<LineChart chartData={chartData} colour={colour}/>}
      {chartType==='pie'&&<PieChart chartData={chartData} colour={colour}/>}
      </div>
      {legend === 'true' && (<div className={'legend-'+colour}>
        
          {series.map((item, index) => (
            <Chip key={index} theme={colour} color={item.color || "#FF5733"} name={item.name} number={item.value} />
          ))}
        
      </div>)}

    </div>
  );
}

export default GraphWidget;
