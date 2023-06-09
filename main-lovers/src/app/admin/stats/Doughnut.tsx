"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ langs }: any) {
  const [chartData, setChartData] = useState({});
  // console.trace(langs);

  const defaultColors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];

  const languages: string[] = [];
  const numbers: number[] = [];
  const colors: string[] = [];

  langs.forEach((lang: any) => {
    console.log(lang._id);
    languages.push(lang._id);
    numbers.push(lang.count);
    colors.push(
      defaultColors[Math.floor(Math.random() * defaultColors.length)]
    );
  });

  const data = {
    labels: languages,
    datasets: [
      {
        label: "# of Votes",
        data: numbers,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
