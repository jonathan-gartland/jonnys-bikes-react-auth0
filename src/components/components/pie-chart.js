import React, { useEffect } from "react";
import * as echarts from "echarts";
import bikes from "../data/bikes";

const PieChart = ({ text, name, divname, queryname, subtext }) => {
  useEffect(() => {
    const chartDom = document.getElementById(divname);
    const myChart = echarts.init(chartDom);
    const data = bikes.reduce((acc, bike) => {
      const key = bike[queryname];
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.entries(data).map(([key, value]) => ({
      name: key,
      value,
    }));

    const option = {
      title: {
        text,
        subtext: subtext !== undefined ? subtext : "",
        left: "center",
        color: ""
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        right: 10,
        top: 0,
        textStyle: {
          color: "#ffffff", // Set title text color to white
        },
      },
      series: [
        {
          name,
          type: "pie",
          radius: "50%",
          data: chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  }, [text, name, divname, queryname, subtext]);

  return (
    <div
      id={divname}
      className="flex items-center justify-center"
      style={{ width: "650px", height: "400px"}}
    ></div>
  );
};

export default PieChart;
