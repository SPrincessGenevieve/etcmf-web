"use client"

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


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

export default function Piechart() {
  return (
   <div>
        <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
        >
        <PieChart>
        <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
        />
        <Pie
            data={chartData}
            dataKey="drivers"
            nameKey="browser"
            innerRadius={50}
            strokeWidth={5}
            activeIndex={0}
            activeShape={({
            outerRadius = 0,
            ...props
            }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 10} />
            )}
        />
        </PieChart>
        </ChartContainer>
        <div className="grid gap-x-25 gap-y-2 md:grid-cols-2">
            {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
                <div
                className="w-5 h-5 rounded"
                style={{ backgroundColor: item.fill }}
                />
                <p className="text-[12px] text-black">{item.ticket}</p>
                <p className="text-[12px] font-bold">{item.drivers}</p>
            </div>
            ))}
        </div>
   </div>
  )
}
