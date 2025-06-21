"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { user_status } from "@/lib/mock-data/user_status";
import { Dot, Sun, User } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ServiceLog from "@/app/component/dashboard/service_log";

const RadialChart = dynamic(
  () => import("@/app/component/dashboard/radial_chart"),
  { ssr: false }
);
const Areachart = dynamic(
  () => import("@/app/component/dashboard/area_chart"),
  { ssr: false }
);
const CommitChart = dynamic(
  () => import("@/app/component/dashboard/commit_chart "),
  { ssr: false }
);
const Barchart = dynamic(() => import("@/app/component/dashboard/bar_chart"), {
  ssr: false,
});
const ViolationToday = dynamic(
  () => import("@/app/component/dashboard/violation_today"),
  { ssr: false }
);
const RevenueFines = dynamic(
  () => import("@/app/component/dashboard/revenue_fines"),
  { ssr: false }
);
const TodayCalendar = dynamic(
  () => import("@/app/component/dashboard/today_calendar"),
  { ssr: false }
);

export default function Dashboard() {
  const router = useRouter();

 

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full hidden flex-col gap-2 dash-cont-1">
        <div className="w-full  h-auto grid grid-cols-2 gap-2 row-one">
          <Card className="w-full">
            <CardContent className="w-full flex">
              <RadialChart />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="">
              <CommitChart />
            </CardContent>
          </Card>
          <Card className="w-full h-full">
            <CardContent className="w-full h-full flex">
              <ViolationToday />
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="overflow-y-auto  flex flex-col gap-4">
              <ServiceLog></ServiceLog>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex w-full gap-2 sub-dash-cont">
            <Card className="w-full max-h-[350px]">
              <CardContent className="w-full flex h-full">
                <TodayCalendar />
              </CardContent>
            </Card>
            <Card className="w-full max-h-[350px]">
              <CardContent className="w-full flex h-full">
                <Areachart />
              </CardContent>
            </Card>
          </div>
          <Card className="w-full flex max-h-[350px]">
            <CardContent className="flex h-full">
              <Barchart />
            </CardContent>
          </Card>
          <Card className="w-full flex max-h-[500px]">
            <CardContent className="w-full flex h-full">
              <RevenueFines />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full h-full dash-cont-2  flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <div className="w-full max-h-[300px] flex gap-2">
              <Card className="min-w-[300px]">
                <CardContent>
                  <RadialChart />
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent className="w-full flex h-full">
                  <Areachart />
                </CardContent>
              </Card>
            </div>
            <div className="w-full h-full max-h-[300px] flex gap-2">
              <Card className="w-full h-full min-w-[300px] max-w-[300px]  ">
                <CardContent className="w-full h-full">
                  <CommitChart />
                </CardContent>
              </Card>
              <Card className="w-full flex">
                <CardContent className="w-full flex h-full">
                  <Barchart />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="w-full max-w-[300px] h-full">
            <Card className="h-full">
              <CardContent className="overflow-y-auto flex flex-col gap-4">
                <ServiceLog></ServiceLog>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="w-full h-full max-h-[300px] flex gap-2">
          <Card className="w-full h-full min-w-[300px] max-w-[300px]  ">
            <CardContent className="w-full h-full">
              <ViolationToday />
            </CardContent>
          </Card>
          <Card className="w-full flex">
            <CardContent className="w-full flex h-full">
              <RevenueFines />
            </CardContent>
          </Card>
          <Card className="w-full h-full min-w-[300px] max-w-[300px]  ">
            <CardContent className="w-full h-full">
              <TodayCalendar />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
