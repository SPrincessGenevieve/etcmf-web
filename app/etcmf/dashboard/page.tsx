

'use client'

import React from "react";
import { ChartNoAxesColumnDecreasing, Sun } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TicketsPlane } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import Overdue from "../overdue/page";
import RadialChart from "@/components/ui/dashboard/radial_chart";


const chartData = [
  { ticket: "Total Tickets", drivers: 275, fill: "#08442B" },
  { ticket: "Pending Tickets", drivers: 200, fill: "#13905D" },
  { ticket: "Dispute Tickets", drivers: 187, fill: "#3DBB69" },
  { ticket: "Pending Tickets", drivers: 173, fill: "#64EC94" },
]

const distribution = [
  { month: "January", Pending: 200, Done: 180, Dispute: 60, Overdue: 35 },
  { month: "February", Pending: 205, Done: 100, Dispute: 70, Overdue: 10 },
  { month: "March", Pending: 237, Done: 120, Dispute: 65, Overdue: 28 },
  { month: "April", Pending: 73, Done: 190, Dispute: 55, Overdue: 35 },
  { month: "May", Pending: 209, Done: 130, Dispute: 60, Overdue: 52 },

]

const distributionConfig = {
  Pending: {
    label: "Pending",
    color: " #FFAAAA",
  },
  Done: {
    label: "Done",
    color: "#3DBB69",
  },
  Dispute: {
    label: "Dispute",
    color: "#FFAA00",
  },
  Overdue: {
    label: "Overdue",
    color: "#FF0000",
  },
} satisfies   ChartConfig

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



const barChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const barConfig = {
  visitors: {
    label: "Visitors",
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
    
    <div className="w-full absolute top-20">

  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div className="grid gap-4 md:grid-cols-4">
      <div className="col-span-1 md:col-span-1 ">
        <RadialChart />
      </div>

      <div className="md:col-span-3">
        <Card className="h-[260px]">
          <CardHeader>
            <div className="flex item-center gap-3">
              <div>
                <TicketsPlane />
              </div>
              <p className="font-bold">Ticket Distribution</p>
            </div>
          </CardHeader>
          <CardContent>
          <ChartContainer  config={distributionConfig} className="m-0 p-0 h-[170px] w-full">
          <AreaChart
            accessibilityLayer
            data={distribution}
            margin={{
              left: 12,
              right: 12,
            }}
            
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="Done"
              type="natural"
              fill="var(--color-Done)"
              fillOpacity={0.4}
              stroke="var(--color-Done)"
              stackId="a"
            />
            <Area
              dataKey="Pending"
              type="natural"
              fill="var(--color-Pending)"
              fillOpacity={0.4}
              stroke="var(--color-Pending)"
              stackId="a"
            />

            <Area
              dataKey="Dispute"
              type="natural"
              fill="var(--color-Dispute)"
              fillOpacity={0.4}
              stroke="var(--color-Dispute)"
              stackId="a"
            />

            <Area
              dataKey="Overdue"
              type="natural"
              fill="var(--color-Overdue)"
              fillOpacity={0.4}
              stroke="var(--color-Overdue)"
              stackId="a"
            />
            
          </AreaChart>
          </ChartContainer>


          </CardContent>
          <CardFooter>
            
            </CardFooter>

        </Card>
      </div>
    </div>
  </div>

  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div className="grid gap-4 md:grid-cols-4">

      <div className="col-span-1">
        <Card>
          <CardHeader>
            <div className="flex item-center gap-3">
              <div>
                <Sun />
              </div>
              <p className="font-bold">Daily Violation</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>Heat Map Here!</p>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-2">
        <Card>
          <CardHeader>
            <div className="flex item-center gap-3">
              <div>
                <TrendingUp />
              </div>
              <p className="font-bold">Ticket Status</p>
            </div>
          </CardHeader>
          <CardContent>
            <Overdue />
          </CardContent>
        </Card>
      </div>

      <div className="col-span-1">
        <Card>
          <CardHeader>
            <div className="flex item-center gap-3">
              <div>
                <TrendingUp />
              </div>
              <p className="font-bold">Ticket Status</p>
            </div>
          </CardHeader>
          <CardContent>
            <Overdue />
          </CardContent>
        </Card>
      </div>

    </div>

  </div>

</div>
  );
}
