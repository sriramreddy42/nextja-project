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
    axios.get('http://127.0.0.1:8000/charts/candlestick/?format=json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  axios.get('http://127.0.0.1:8000/charts/line/?format=json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  axios.get('http://127.0.0.1:8000/charts/bar/?format=json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  axios.get('http://127.0.0.1:8000/charts/pie/?format=json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
      
      

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
