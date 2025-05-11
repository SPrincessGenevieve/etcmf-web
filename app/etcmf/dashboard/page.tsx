

'use client'

import React from "react";
import { ChartNoAxesColumn, ChartNoAxesColumnDecreasing, ChartPie, MapPinned, PhilippinePeso, Sun } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TicketsPlane } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import Overdue from "../overdue/page";
import RadialChart from "@/app/component/dashboard/radial_chart";
import Areachart from "@/app/component/dashboard/area_chart";
import CommitChart from "@/app/component/dashboard/CommitChart ";
import Barchart from "@/app/component/dashboard/bar_chart";
import Mapchart from "@/app/component/dashboard/map_chart";
import Piechart from "@/app/component/dashboard/pie_chart";



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
            <CommitChart />
          </CardContent>
        </Card>
      </div>

      <div className="col-span-2 ">
        <Card>
          <CardHeader>
            <div className="flex item-center gap-3">
              <div>
                <ChartNoAxesColumn />
              </div>
              <p className="font-bold">Top Related Violations</p>
            </div>
          </CardHeader>
          <CardContent>
            <Barchart />
          </CardContent>
        </Card>
      </div>

      <div className="col-span-1">
        <Card>
          <CardHeader>
            <div className="flex item-center gap-3">
              <div>
                <MapPinned />
              </div>
              <p className="font-bold">High Violation Area</p>
            </div>
          </CardHeader>
          <CardContent  >
            <Mapchart />
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
                <ChartPie />
              </div>
              <p className="font-bold">Violations Today</p>
            </div>
          </CardHeader>
          <CardContent>
            <Piechart />
          </CardContent>
        </Card>
      </div>

      <div className="col-span-2">
        <Card>
          <CardHeader>
            <div className="flex item-center gap-3">
              <div>
                <PhilippinePeso />
              </div>
              <p className="font-bold">Revenue of Fines</p>
            </div>
          </CardHeader>
          <CardContent>
            <p>Coming Soon!</p>
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
