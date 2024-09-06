import React from 'react';
import { Chart, CategoryScale, LinearScale, TimeScale, Tooltip } from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import { Chart as ChartJS } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import 'chartjs-adapter-moment';

Chart.register(CategoryScale, LinearScale, TimeScale, Tooltip, CandlestickController, CandlestickElement);

const CandlestickChart = () => {
  const data = {
    datasets: [
      {
        label: 'Candlestick Data',
        data: [
          { x: new Date('2023-01-01'), o: 100, h: 110, l: 90, c: 105 },
          { x: new Date('2023-01-02'), o: 105, h: 115, l: 95, c: 110 },
          // Add more data points as needed
        ],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };

  // Ensure the return is inside the function
  return <ChartJS type="candlestick" data={data} options={options} />;
};

export default CandlestickChart;
