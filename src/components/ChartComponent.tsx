import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "White",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "      RecentChart",
        color: "White",
      },
    },
    scales: {
      x: {
        display: false, // Скрыть метки оси X (месяцы)
      },
      y: {
        display: false, // Скрыть метки оси X (месяцы)
        grid: {
          display: false, // Отключить сетку на фоне графика
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
