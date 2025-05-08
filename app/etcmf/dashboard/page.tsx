

'use client'

import React from "react";
import { ChartNoAxesColumnDecreasing } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TicketsPlane } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"


const chartData = [
  { ticket: "Total Tickets", drivers: 275, fill: "#08442B" },
  { ticket: "Pending Tickets", drivers: 200, fill: "#13905D" },
  { ticket: "Dispute Tickets", drivers: 187, fill: "#3DBB69" },
  { ticket: "Pending Tickets", drivers: 173, fill: "#64EC94" },
]

const distribution = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
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


export default function Dashboard() {
  return (
    <div className="w-full absolute top-20   ">

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4 md:grid-cols-3">

          {/* first card */}
          <div >
            <Card>
              <CardHeader>
                <div className=" flex item-center gap-3">
                  <div className="border-black border-2">
                    <ChartNoAxesColumnDecreasing />
                  </div>
                  <p className="font-bold">Ticket Summary</p> 
                </div>
              </CardHeader>
              <CardContent>
              <ChartContainer
                  config={chartConfig}
                  className="m-0 p-0"
                >
            <RadialBarChart  data={chartData} innerRadius={30} outerRadius={100}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="ticket" />}
              />
              <RadialBar dataKey="drivers" fill="#8884d8" />
            </RadialBarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex flex-col gap-6">
  <div className="grid gap-6 md:grid-cols-2">
    {chartData.map((item, index) => (
      <div key={index} className="flex items-center gap-2">
        <div
          className="w-5 h-5 rounded"
          style={{ backgroundColor: item.fill }}
        />
        <p className="text-[12px]" >{item.ticket}</p>
        <p className="text-[12px] font-bold" >{item.drivers}</p>
      </div>
    ))}
  </div>
</CardFooter>

            </Card>
          </div>

          <div className="col-span-2">
            <Card>
              <CardHeader>
                <div className=" flex item-center gap-3">
                  <div >
                    <TicketsPlane />
                  </div>
                  <p className="font-bold">Ticket Distribution</p> 
                </div>
              </CardHeader>

            </Card>
          </div>

          
        </div>

        <div className="card border-gray border-1 col-span-2" />

        </div>





        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <h1>Hello World</h1>
        </div> 


    </div>
  );
}
