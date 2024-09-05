// CandlestickChart.js
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, CandlestickController, TimeScale, Tooltip } from 'chart.js';
import { Financial } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(CategoryScale, LinearScale, CandlestickController, TimeScale, Tooltip);

const CandlestickChart = () => {
    const data = {
        datasets: [{
            label: 'Candlestick Chart',
            data: [
                { t: '2023-08-25', o: 130, h: 132, l: 128, c: 131 },
                { t: '2023-08-26', o: 131, h: 134, l: 129, c: 133 },
                { t: '2023-08-27', o: 133, h: 136, l: 132, c: 135 },
                // Add more data here...
            ],
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderColor: 'rgba(0, 0, 0, 1)',
        }]
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day'
                },
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Price'
                }
            }
        }
    };

    return <Chart type='candlestick' data={data} options={options} />;
};

export default CandlestickChart;
