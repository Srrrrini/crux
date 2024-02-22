import React from 'react';
import Chart from 'react-apexcharts';

class BarChart extends React.Component {
  render() {
    const { chartData,colour } = this.props;

    // Check if chartData is undefined or null
    if (!chartData) {
      return <div>No chart data available.</div>;
    }

    const { labels, data,colours,inter,horizontal_grid } = chartData;

    // Convert data values to 'k' format if they are in the thousands
    const formattedData = data.map(value => {
      if (value >= 1000) {
        return (value / 1000) + 'k';
      }
      return value;
    });

    const series = [
      {
        name: "Desktops",
        data: formattedData
      }
    ];

    const options = {
      chart: {
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      fill: {
        colors: colours
      },
      dataLabels: {
        enabled: false,

      },
      title: {
        text: '', // Empty title to hide it
        align: 'left'
      },
      xaxis: {
        categories: labels || [], // Use labels if available, or an empty array as default
        labels: {
          show: false // Hide x-axis labels
        },
        axisBorder: {
          show: false // Hide x-axis border
        },
        axisTicks: {
          show: false // Hide x-axis ticks
        },
        tooltip: {
          enabled: false // Disable x-axis tooltip
        }
      },
      yaxis: {
        stepSize: inter/1000,
        show: true, // Show y-axis labels
        labels: {// Show only y-axis labels
          style: {
            fontFamily: 'Inter',
            colors: colour === 'black' ? '#ffffff89' : '#47474766',
            fontSize: '11px',
            fontWeight: 500,
            lineHeight: '18px',
            textAlign: 'right',
          },
          
      formatter: function (value,index) {
        if (value) {
          return (value).toFixed(0) + 'k';
        }
        return value;
      }

        },
        axisBorder: {
          show: false // Hide y-axis border
        },
        axisTicks: {
          show: false // Hide y-axis ticks
        }
      },
      grid: {
        show: true,
        borderColor: colour === 'black' ? '#ffffff89' : '#F4F4F4', // Specify border color
        strokeDashArray: 0, // Specify stroke dash array for grid lines
        position: 'back', // Position the grid behind the data points
        xaxis: {
          lines: {
            show: false // Show vertical grid lines for x-axis labels
          }
        },
        yaxis: {
          lines: {
            show: horizontal_grid // Hide horizontal grid lines for y-axis labels
          }
        }
      },
      plotOptions: {
        bar: {
          distributed:true,
          borderRadius: 1.7,
          barHeight: '100%',
          borderRadiusApplication: 'around',
          columnWidth: 6,
          opacity: 0.8
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      legend:{
        show:false
      }
    };

    return (
      <div style={{ height: '100%' }}>
        <Chart options={options} series={series} type="bar" height="100%" />
      </div>
    );
  }
}

export default BarChart;
