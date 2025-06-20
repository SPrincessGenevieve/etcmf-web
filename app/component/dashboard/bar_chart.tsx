"use client";

import React from "react";
import { ChartBar } from "lucide-react";
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const chartData = [
  { ID: "1", drivers: 186, violation: "Illegal Parking" },
  { ID: "2", drivers: 305, violation: "Reckless Driving" },
  { ID: "3", drivers: 237, violation: "Speeding" },
  { ID: "4", drivers: 73, violation: "Running Red Light" },
  { ID: "5", drivers: 209, violation: "Seatbelt Violation" },
  { ID: "6", drivers: 214, violation: "Driving Under Influence" },
  {
    ID: "7",
    drivers: 173,
    violation: "Driving without vaild driver's license/ conductor's permit ",
  },
];

const chartConfig = {
  drivers: {
    label: "drivers",
    color: "#CEEED9",
  },
} satisfies ChartConfig;

export default function Barchart() {
  const truncate = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  const truncatedChartData = chartData.map((entry) => ({
    ...entry,
    truncatedViolation: truncate(entry.violation, 30), // You can adjust 20 as needed
  }));

  return (
    <div className="w-full">
      <div className="flex item-center gap-3 w-full">
        <div>
          <ChartBar></ChartBar>
        </div>
        <p className="font-bold">Top Reported Violation</p>
      </div>
      <ChartContainer config={chartConfig} className="w-full h-full p-4">
        <BarChart
          layout="vertical"
          data={truncatedChartData}
          margin={{ left: -20 }}
          className="w-full text-[#518934]"
        >
          <XAxis type="number" dataKey="drivers" hide />
          <YAxis
            dataKey="ID"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar barSize={30} dataKey="drivers" radius={20} fill="#CEEED9">
            {chartData.map((entry, index) => {
              const maxDrivers = Math.max(...chartData.map((d) => d.drivers));
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.drivers === maxDrivers ? "#3DBB69" : "#CEEED9"}
                />
              );
            })}

            {chartData.map((entry, index) => {
              const maxDrivers = Math.max(...chartData.map((d) => d.drivers));
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.drivers === maxDrivers ? "#3DBB69" : "#CEEED9"}
                />
              );
            })}
            {chartData.map((entry, index) => (
              <LabelList
                key={index}
                dataKey="truncatedViolation"
                position="insideLeft"
                fill="black"
                fontSize={10}
              />
            ))}
            <LabelList
              dataKey="drivers"
              position="right"
              offset={8}
              fill="#518934"
              fontSize={10}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
