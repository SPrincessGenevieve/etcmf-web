'use client';
import React from "react";

import { TrendingUp } from "lucide-react"

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"
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
import { vi } from "date-fns/locale";
const chartData = [
  { ID: "1", drivers: 186, violation: 'Illegal Parking' },
  { ID: "2", drivers: 305, violation: 'Reckless Driving' },
  { ID: "3", drivers: 237, violation: 'Speeding' },
  { ID: "4", drivers: 73, violation: 'Running Red Light' },
  { ID: "5", drivers: 209, violation: 'Seatbelt Violation' },
  { ID: "6", drivers: 214, violation: 'Driving Under Influence' },
  { ID: "7", drivers: 173, violation: "Driving without vaild driver's license/ conductor's permit " },
]

const chartConfig = {
  drivers: {
    label: "drivers",
    color: "#0B6540",
  },
} satisfies ChartConfig


export default function Barchart() {
    return (
    <div>
        <ChartContainer config={chartConfig} className="md:h-[180px] md:w-full">
            <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{
                left: -20,
                }}
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
                <Bar barSize={40} dataKey="drivers" fill="var(--color-drivers)" radius={5}>
                <LabelList
                dataKey="violation"
                position="insideLeft"
                offset={8}
                fill="white"
                fontSize={12}
              />
            <LabelList
                dataKey="drivers"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
                </Bar>
            </BarChart>
        </ChartContainer>
    </div>
    )
}