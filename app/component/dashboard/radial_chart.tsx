"use client";

import React from "react";
import { ChartNoAxesColumnDecreasing } from "lucide-react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { ticket: "Total Tickets", drivers: 275, fill: "#08442B" },
  { ticket: "Pending Tickets", drivers: 200, fill: "#13905D" },
  { ticket: "Dispute Tickets", drivers: 187, fill: "#3DBB69" },
  { ticket: "Overdue", drivers: 173, fill: "#64EC94" },
];

const chartConfig = {
  drivers: {
    label: "Tickets",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function RadialChart() {
  return (
    <div className="w-full">
      <div className="w-full  flex item-center gap-3">
        <div className="border-black border-2">
          <ChartNoAxesColumnDecreasing size={18} />
        </div>
        <p className="font-bold">Ticket Summary</p>
      </div>

      <div>
        <ChartContainer config={chartConfig} title="Ticket Summary">
          <ResponsiveContainer>
            <RadialBarChart
              data={chartData}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <RadialBar dataKey="drivers" />
            </RadialBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full">
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: item.fill }}
            />
            <p className="text-[12px]">{item.ticket}</p>
            <p className="text-[12px] font-bold">{item.drivers}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
