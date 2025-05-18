"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";

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
const Mapchart = dynamic(() => import("@/app/component/dashboard/map_chart"), {
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => updateWidth());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full" ref={containerRef}>
      {width > 0 &&
        (width < 1200 ? (
          <div className="w-full h-full flex flex-col gap-2">
            <div className="chart_group w-full h-full max-h-[300px] flex gap-2">
              <RadialChart />
              <CommitChart />
              <ViolationToday />
            </div>
            <Areachart />
            <div className="w-full max-h-[300px] ">
              <Barchart />
            </div>
            <div className="map_calendar w-full h-full flex gap-2">
              <Mapchart />
              <TodayCalendar />
              <RevenueFines />
            </div>
          </div>
        ) : (
          <>
            <div className="w-full max-h-[300px]  h-full flex gap-2">
              <div className="h-full max-w-[350px] w-full">
                <RadialChart />
              </div>
              <div className="w-full h-full">
                <Areachart />
              </div>
            </div>
            <div className="w-full max-h-[300px]  h-full flex gap-2 mt-2">
              <div className="h-full max-w-[350px] w-full">
                <CommitChart />
              </div>
              <div className="w-full flex gap-2">
                <div className="w-full h-full">
                  <Barchart />
                </div>
                <div className="w-full max-w-[400px] h-full">
                  <Mapchart />
                </div>
              </div>
            </div>
            <div className="w-full max-h-[270px]  h-full flex gap-2 mt-2">
              <div className="h-full max-w-[350px] w-full">
                <ViolationToday />
              </div>
              <div className="w-full flex gap-2">
                <div className="w-full h-full">
                  <RevenueFines />
                </div>
                <div className="w-full max-w-[400px] h-full">
                  <TodayCalendar />
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}
