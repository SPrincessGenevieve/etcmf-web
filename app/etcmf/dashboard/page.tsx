

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
import Areachart from "@/components/ui/dashboard/area_chart";

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
        <Areachart />
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
