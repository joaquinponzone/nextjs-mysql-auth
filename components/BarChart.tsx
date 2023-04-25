'use client'
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface IChartData {
  labels: string[],
  datasets: {
    label: string,
    data: number[] | [],
    borderColor: string,
    backgroundColor: string
  }[]
}

interface IOption {
  plugins: {
    legend: {
        position: string,
    },
    title: {
        display: boolean,
        text: string
    }
  },
  maintainAspectRatio: boolean,
  responsive: boolean
}

export default function BarChart() {
  const [chartData, setChartData] = useState<ChartData<"bar", number[], unknown>>({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderColor: '',
        backgroundColor: '',
      } 
    ]
  });
  
  const [chartOptions, setChartOptions] = useState<ChartOptions>();

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          backgroundColor: 'rgb(53, 162, 235, 0.4)',
          borderColor: 'rgb(53, 162, 235)',
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
        } 
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue'
        }
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
