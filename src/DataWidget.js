import React from 'react';
import './WidgetWhite.css';
import './WidgetBlue.css';
import './WidgetBlack.css';
import options from './icon/options.svg';
import downwhite from './icon/down+white.svg';
import 'non.geist'

const DataWidget = ({ title, data, style ,no}) => {
  const { navbarOptions, tableData,colour,size } = data;
  const showTodayIcon = navbarOptions.length === 1 && navbarOptions[0] === "Today";
  if (no===3){
    return (
      <div className={"widget data-widget-"+colour+3}  style={{ width: size.width, height: size.height }}>
        <div className={"navbar-"+colour} style={{ width: '100%', height: '30px' }}>
          {navbarOptions.map((option, index) => (
            <button key={index}>{option}</button>
          ))}
          <img src={options} className='options'/> {/* Down arrow button */}
        </div>
        <div className={"data-table-container-"+colour} style={{ height: '165px' }}>
          <table className={"data-table-"+colour}>
            <thead>
              <tr>
                <th>PRODUCT</th>
                {tableData.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.product}</td>
                  {row.values.map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td>Total</td>
                {tableData.total.map((total, index) => (
                  <td key={index}>{total}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div className={"widget data-widget-"+colour}  style={{ width: size.width, height: size.height }}>
      <div className={"navbar-"+colour} style={{ width: '100%', height: '30px' }}>
        {navbarOptions.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
        {showTodayIcon && <img src={downwhite} alt="Today" className="today-icon" />}
        <img src={options} className='options'/> {/* Down arrow button */}
      </div>
      <div className={"data-table-container-"+colour} style={{ height: '165px' }}>
        <table className={"data-table-"+colour}>
          <thead>
            <tr>
              <th>PRODUCT</th>
              {tableData.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.product}</td>
                {row.values.map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
            <tr>
              <td>Total</td>
              {tableData.total.map((total, index) => (
                <td key={index}>{total}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataWidget;
