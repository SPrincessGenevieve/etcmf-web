'use client';

import React from "react";
import { ChartNoAxesColumnDecreasing, Sun } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TicketsPlane } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import RadialChart from "@/app/component/dashboard/radial_chart";

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



export default function Areachart() {
    return (
        <div >
        <Card className="md:h-[265px]">
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
    )
}