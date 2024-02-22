import React from 'react';
import Chart from 'react-apexcharts';

class LineChart extends React.Component {
  render() {
    const { chartData,colour } = this.props;
    const { labels, series, inter ,legend ,graphheight} = chartData;
    const options = {
      chart: {
        type: 'line',
        toolbar: {
          show: false // Hide the toolbar
        }
      },
      dataLabels: {
        enabled: false // Disable data labels
      },
      stroke: {
        curve: 'straight',
        lineCap: 'round',
        width:3,
      },
      // markers: {
      //   strokeWidth: 0, // Remove marker stroke
      //   size: 1.5, // Adjust marker size as needed
      //   fillColors: colour, // Ensure consistent marker color
      //   shape: 'circle', // Optional: Set marker shape
      // },
      title: {
        text: '', // Empty title to save space
        align: 'left'
      },
      grid: {
        show: true,
        borderColor: colour==="black"?'#363636':'#4646461A', // Specify border color
        strokeDashArray: 0, // Specify stroke dash array for grid lines
        position: 'back', // Position the grid behind the data points
        xaxis: {
          lines: {
            show: true // Show vertical grid lines for x-axis labels
          }
        },
        yaxis: {
          lines: {
            show: false // Hide horizontal grid lines for y-axis labels
          }
        }
      },
      xaxis: {
        categories: labels,
        
        axisBorder: {
          show: false // Hide y-axis border
        },
        axisTicks: {
          show: false // Hide y-axis ticks
        },
        labels: {
          show: legend==='False'?false:true,
          rotate: -90,
          offsetY: 3,
          offsetX: -2,
          style: {
            fontSize: '11px',
            fontFamily: 'Inter',
            colors: colour==="black"?'#939393':'#47474766',
            fontWeight: 500,
            lineHeight: '18px',
            letterSpacing: '0em',
            textAlign: 'center',
            transform: 'rotate(-90deg)'
          }
        }
      },
      yaxis: {
        min:0,
        max:40000,
        
        stepSize: inter,
        show:true,
        labels: {
          formatter: function (value, index) {
            if (value >= 10000) {
              return (value / 1000).toFixed(0) + 'k';
            }
            return value;
          },
          style: {
            fontSize: '11px',
            fontFamily: 'Inter',
            colors: colour==='black'?'#939393':'#47474766',
            fontWeight: 500,
            lineHeight: '18px',
            letterSpacing: '0em',
            textAlign: 'right'
          }
        },
        axisBorder: {
          show: false // Hide y-axis border
        },
        axisTicks: {
          show: false // Hide y-axis ticks
        }
      },
      legend: {
        show: false
      }
    };
    
    

    return (
 
        <Chart options={options} series={series} type="line" height={graphheight||"100%"} style={{ flex: '1'}}/>

    );
  }
}

export default LineChart;
