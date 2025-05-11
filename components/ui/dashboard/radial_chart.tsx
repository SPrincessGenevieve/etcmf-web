'use client';

import React from "react";
import { ChartNoAxesColumnDecreasing } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardFooter, CardHeader  } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
    { ticket: "Total Tickets", drivers: 275, fill: "#08442B" },
    { ticket: "Pending Tickets", drivers: 200, fill: "#13905D" },
    { ticket: "Dispute Tickets", drivers: 187, fill: "#3DBB69" },
    { ticket: "Pending Tickets", drivers: 173, fill: "#64EC94" },
  ]

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
  } satisfies ChartConfig

export default function RadialChart() {
  return (
    <Card className="">  
      <CardHeader className="w-full h-[10px]"> 
        <div className=" flex item-center gap-3">
          <div className="border-black border-2">
            <ChartNoAxesColumnDecreasing size={18} />
          </div>
          <p className="font-bold">Ticket Summary</p> 
        </div>
      </CardHeader>

      <CardContent className="h-[110px]" >
      <ChartContainer
          config={chartConfig}
          title="Ticket Summary"
          className="m-0 p-0 h-[120px] w-full"

        >
          <RadialBarChart data={chartData} innerRadius={5} outerRadius={65}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel nameKey="ticket" />}
          />
          <RadialBar dataKey="drivers" fill="#8884d8" />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

          <CardFooter className="flex flex-col md:gap-12 ">
            <div className="grid gap-x-25 gap-y-2 md:grid-cols-2">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded"
                    style={{ backgroundColor: item.fill }}
                  />
                  <p className="text-[12px]">{item.ticket}</p>
                  <p className="text-[12px] font-bold">{item.drivers}</p>
                </div>
              ))}
            </div>
          </CardFooter>

    </Card>
  );
}