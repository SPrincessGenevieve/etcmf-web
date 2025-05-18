"use client";

import React from "react";
import { ChartPie } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import "@/app/globals.css";

const getColorClass = (count: number) => {
  if (count === 0) return "#BEF8E1";
  if (count === 1) return "#21E797";
  if (count === 2) return "#0B6540";
  if (count === 3) return "#0B6540";
  return "#059669"; // Tailwind green-600 hex value
};

export default function ViolationToday() {
  const chartData = [
    { browser: "Driving without helmet", visitors: 275, fill: "#21E797" },
    { browser: "Reckless Driving", visitors: 200, fill: "#0B6540" },
    { browser: "Speeding", visitors: 187, fill: "#059669" },
    { browser: "Driving without license", visitors: 173, fill: "#BEF8E1" },
    { browser: "Seatbelt Violation", visitors: 90, fill: "#10B981" },
  ];

  const chartConfig: ChartConfig = chartData.reduce((acc, item) => {
    acc[item.browser] = {
      label: item.browser,
      color: getColorClass(item.visitors),
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col">
      <div className="flex item-center gap-3">
        <div>
          <ChartPie></ChartPie>
        </div>
        <p className="font-bold">Violation Today</p>
      </div>
      <div className="relative flex flex-col w-full h-full justify-between">
        <div className="w-full h-full">
          <ChartContainer config={chartConfig} className="">
            <div className="p-0 m-0 flex h-full justify-center items-center">
              <PieChart className="" width={150} height={150}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={10}
                  cornerRadius={4}
                />
              </PieChart>
            </div>
          </ChartContainer>
        </div>
        <div className="violation_today w-full min-h-[50px] grid grid-cols-2 ">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                style={{ backgroundColor: item.fill }}
                className={` w-[10px] h-[10px] rounded-[2px]`}
              ></div>
              <div className="flex">
                <p className="text-[12px]">{item.browser} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
