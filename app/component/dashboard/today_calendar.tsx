"use client";

import "leaflet/dist/leaflet.css";
import { Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function TodayCalendar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const day = currentTime.getDate();
  const weekday = currentTime.toLocaleDateString("en-US", { weekday: "short" }); // e.g., Sun
  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }); // e.g., 11:45 AM
  const dateStr = currentTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }); // e.g., October 24, 2025

  return (
    <div className="h-full w-full bg-white p-4 rounded-2xl flex flex-col gap-4 items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <Sun color="#FEA50B" size={80} />
        <p className="text-[17px] font-semibold">Today</p>
      </div>
      <div className="flex w-full justify-center gap-2">
        <div className="border-r p-2 pr-4">
          <p className="text-[25px] font-bold">{day}</p>
          <p className="text-[#8C0000] font-semibold">{weekday}</p>
        </div>
        <div className="p-2">
          <p className="text-[25px] font-bold">{time}</p>
          <p className="text-[#6B7280]">{dateStr}</p>
        </div>
      </div>
    </div>
  );
}
