"use client";
import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [candlestickData, setCandlestickData] = useState([]);
  const [lineChartData, setLineChartData] = useState({});
  const [barChartData, setBarChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});

  useEffect(() => {
    // Set local data for candlestick chart
    setCandlestickData([
      { time: '2024-09-01', open: 100, high: 110, low: 90, close: 105 },
      { time: '2024-09-02', open: 105, high: 115, low: 95, close: 110 },
      // Add more data points here...
    ]);

    // Set local data for line chart
    setLineChartData([
      { time: '2024-09-01', value: 50 },
      { time: '2024-09-02', value: 75 },
      // Add more data points here...
    ]);

    // Set local data for bar chart
    setBarChartData([
      { category: 'Category A', value: 30 },
      { category: 'Category B', value: 50 },
      // Add more categories here...
    ]);

    // Set local data for pie chart
    setPieChartData([
      { label: 'Slice A', value: 40 },
      { label: 'Slice B', value: 60 },
      // Add more slices here...
    ]);
  }, []);


  return (
    <div>
      <h1>Dashboard</h1>
      <CandlestickChart data={candlestickData} />
      <LineChart data={lineChartData} />
      <BarChart data={barChartData} />
      <PieChart data={pieChartData} />
    </div>
  );
}
