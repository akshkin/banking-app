"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ accounts }: DoughnutChartProps) {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [24500, 54633, 67553],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91f8"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"]
  };
  return <Doughnut data={data} options={{ cutout: "60%", plugins: {legend: { display: false}}}} />;
}

export default DoughnutChart;