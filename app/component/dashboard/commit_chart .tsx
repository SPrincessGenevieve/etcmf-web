"use client";

import React from "react";
import { format, subDays, startOfWeek, addDays } from "date-fns";
import { reportData } from "@/lib/mock-data/records_mockdata";
import { useEffect, useState, useRef } from "react";
import { Sun } from "lucide-react";
import "@/app/globals.css";

const DAYS_IN_WEEK = 7;
const WEEKS_TO_SHOW = 15; // ~3.5 months

// Fake data generator based on reportData
const generateViolationData = () => {
  const data = new Map<string, number>();

  // Iterate through reportData and extract the date part from time_stamp
  reportData.forEach((item) => {
    const date = new Date(item.time_stamp);
    const key = format(date, "yyyy-MM-dd"); // Format the date as yyyy-MM-dd
    const count = data.get(key) ?? 0;
    data.set(key, count + 1); // Increment count for that day
  });

  return data;
};

const getColorClass = (count: number) => {
  if (count === 0) return "bg-[#BEF8E1]";
  if (count === 1) return "bg-[#21E797]";
  if (count === 2) return "bg-[#0B6540]";
  if (count === 3) return "bg-[#0B6540]";
  return "bg-green-600";
};

function useContainerWidth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, width };
}

const CommitChart: React.FC = () => {
  const { ref, width } = useContainerWidth<HTMLDivElement>();
  const data = generateViolationData();
  const today = new Date();

  // Calculate how many weeks to show based on width (each box ~18px including margin)
  const boxSize = 18;
  const weeksToShow = Math.floor((width - 50) / boxSize); // minus margin, labels

  const startDate = startOfWeek(subDays(today, weeksToShow * DAYS_IN_WEEK), {
    weekStartsOn: 1,
  });

  const weeks = Array.from({ length: weeksToShow }, (_, wIdx) => {
    return Array.from({ length: DAYS_IN_WEEK }, (_, dIdx) => {
      const date = addDays(startDate, wIdx * DAYS_IN_WEEK + dIdx);
      const key = format(date, "yyyy-MM-dd");
      return {
        date,
        count: data.get(key) ?? 0,
      };
    });
  });

  // Get unique month labels
  const monthLabels: { index: number; label: string }[] = [];
  let lastMonth = "";
  weeks.forEach((week, idx) => {
    const firstDay = week[0]?.date;
    const month = format(firstDay, "MMM");
    if (month !== lastMonth) {
      monthLabels.push({ index: idx, label: month });
      lastMonth = month;
    }
  });

  const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div ref={ref} className="w-full h-full">
      <div className="flex items-center gap-3">
        <Sun />
        <p className="font-bold">Daily Violation</p>
      </div>
      <div className="flex flex-col ] w-full mt-2">
        {/* Month Labels */}
        <div className="flex ml-4 h-6 w-[90%] justify-evenly text-xs text-gray-600">
          {weeks.map((_, idx) => {
            const labelObj = monthLabels.find((m) => m.index === idx);
            return <p key={idx}>{labelObj ? labelObj.label : ""}</p>;
          })}
        </div>

        {/* Grid */}
        <div className="flex w-full ]">
          <div className="flex flex-col text-xs text-gray-500 gap-[8px] mr-2 week-cont">
            {weekdayLabels.map((day, i) => (
              <div key={i} className="h-4 w-6 text-right">
                {day}
              </div>
            ))}
          </div>

          <div className="flex gap-[2px] rounded-full w-full">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[8px]">
                {week.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    title={`${format(item.date, "MMMM d, yyyy")}: ${
                      item.count
                    } violations`}
                    className={`border w-4 h-4 rounded-[2px] ${getColorClass(
                      item.count
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitChart;
