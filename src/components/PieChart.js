import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ chartData }) => {
  const options = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      }
    },
    labels: chartData.labels,
    title: {
      text: '',
      align: 'center'
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        startAngle: 90,
        endAngle: 450,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              formatter: function (w) {
                const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return total;
              },
              label: 'Orders',
            }
          }
        }
      }
    }
  };

  return (
    <Chart options={options} series={chartData.data} type="donut" height="100%"/>
  );
};

export default PieChart;
