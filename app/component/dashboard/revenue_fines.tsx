"use client";

import React, { useState } from "react";
import { ChevronUp, PhilippinePeso } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import "@/app/globals.css"

// Define allowed tabs as a union type
type TabType = "Yearly" | "Monthly" | "Weekly" | "Daily";

const tabButton: TabType[] = ["Yearly", "Monthly", "Weekly", "Daily"];

type DataPoint = { month: string; value: number };

// Use typed object with specific keys
const dataMap: Record<TabType, DataPoint[]> = {
  Yearly: [
    { month: "2019", value: 300 },
    { month: "2020", value: 1440 },
    { month: "2021", value: 200 },
    { month: "2022", value: 800 },
    { month: "2023", value: 1500 },
  ],
  Monthly: [
    { month: "January", value: 186 },
    { month: "February", value: 305 },
    { month: "March", value: 237 },
    { month: "April", value: 73 },
    { month: "May", value: 209 },
    { month: "June", value: 214 },
  ],
  Weekly: [
    { month: "Week 1", value: 80 },
    { month: "Week 2", value: 120 },
    { month: "Week 3", value: 95 },
    { month: "Week 4", value: 130 },
  ],
  Daily: [
    { month: "Mon", value: 30 },
    { month: "Tue", value: 50 },
    { month: "Wed", value: 45 },
    { month: "Thu", value: 20 },
    { month: "Fri", value: 60 },
  ],
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function RevenueFines() {
  // Type the activeTab state as TabType
  const [activeTab, setActiveTab] = useState<TabType>("Monthly");
  const chartData = dataMap[activeTab];
  const maxValue = Math.max(...chartData.map((d: DataPoint) => d.value));

  return (
    <div className="w-full h-full flex flex-col p-4 bg-white rounded-2xl">
      
      <div className="flex justify-between w-full max-h-[30px] h-full header_revenue">
        <div className="flex items-center gap-3 w-full">
          <div className="border-2 border-black rounded-full w-6 h-6 flex justify-center items-center">
            <PhilippinePeso size={15} />
          </div>
          <p className="font-bold">Revenue of Fines</p>
        </div>
        <div className="w-auto h-[30px] p-1 bg-[#EDEEF1] flex gap-2 justify-end rounded-[5px]">
          {tabButton.map((item: TabType) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              className={`p-2 text-[12px] h-[25px] rounded-[5px] ${
                activeTab === item
                  ? "bg-white text-black font-semibold"
                  : "bg-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full h-[70%] justify-between">
        <ChartContainer className="h-full w-full" config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" radius={8}>
              {chartData.map((entry: DataPoint, index: number) => {
                const isMax = entry.value === maxValue;
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={isMax ? "#0B6540" : "#C4E3CF"}
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ChartContainer>
        <div className="w-full flex flex-col items-end">
          <p className="text-[12px]">Total: ₱245, 934.60</p>
          <div className="flex gap-2">
            <ChevronUp size={10} color="green"></ChevronUp>
            <p className="text-[8px]">18.4% last year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
