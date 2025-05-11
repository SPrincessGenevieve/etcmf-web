import React from "react";
import { format, subDays, startOfWeek, addDays } from "date-fns";
import { reportData } from "@/lib/mock-data/records_mockdata";

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

const CommitChart: React.FC = () => {
  const data = generateViolationData();
  const today = new Date();

  // Start the week on Monday (1)
  const startDate = startOfWeek(subDays(today, WEEKS_TO_SHOW * DAYS_IN_WEEK), {
    weekStartsOn: 1, // Ensure the week starts on Monday
  });

  const weeks = Array.from({ length: WEEKS_TO_SHOW }, (_, wIdx) => {
    return Array.from({ length: DAYS_IN_WEEK }, (_, dIdx) => {
      const date = addDays(startDate, wIdx * DAYS_IN_WEEK + dIdx);
      const key = format(date, "yyyy-MM-dd");
      return {
        date,
        count: data.get(key) ?? 0,
      };
    });
  });

  // Get unique months for top axis
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

  // Monday to Sunday
  const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Violation Heatmap</h2>

      <div className="flex flex-col">
        {/* Month Labels */}
        <div className="flex gap-1 ml-8 h-6 text-xs text-gray-600 w-full">
          {weeks.map((_, idx) => {
            const labelObj = monthLabels.find((m) => m.index === idx);
            return (
              <div key={idx} className="w-4 text-center">
                {labelObj ? labelObj.label : ""}
              </div>
            );
          })}
        </div>

        {/* Grid */}
        <div className="flex">
          {/* Y-Axis (Weekday initials) */}
          <div className=" flex flex-col mr-2 text-xs text-gray-500 gap-[8px]">
            {weekdayLabels.map((day, i) => (
              <div key={i} className="h-4 w-6 text-right ">
                {day}
              </div>
            ))}
          </div>

          {/* Heatmap */}
          <div className="flex gap-[5px] rounded-full">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className=" flex flex-col gap-[8px]">
                {week.map((item, dIdx) => {
                  return (
                    <div
                      key={dIdx}
                      title={`${format(item.date, "MMMM d, yyyy")}: ${
                        item.count
                      } violations`}
                      className={`border w-4 h-4 rounded-[2px] ${getColorClass(
                        item.count
                      )}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitChart;
