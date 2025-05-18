"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown_menu";
import { CalendarRangeIcon } from "lucide-react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import type { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CalendarCustomRange() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <div className="flex flex-col flex-wrap items-start gap-2 @md:flex-row">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex gap-2 bg-gray-200 h-full rounded-[10px] p-[1px] justify-center items-center">
            <div className="flex gap-2 bg-[white] p-1 m-1 rounded-[10px] justify-center items-center">
              <CalendarRangeIcon size={20} />
              <p className="text-[12px] ">Date Range</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DayPicker
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
            showOutsideDays
            classNames={{
              months:
                "transition ease-in-ease-out flex gap-8 p-2 w-full flex-col justify-center items-center  text-[12px]",
              selected: "transition ease-in-ease-out text-[#2a492a]",
              range_start:"transition ease-in-ease-out bg-[#d3f3d3] rounded-l-xl font-bold text-[12px]",
              range_end: "transition ease-in-ease-out bg-[#d3f3d3] rounded-r-xl font-bold text-[12px]",
              range_middle:"transition ease-in-ease-out bg-[#d3f3d3] font-bold text-[12px]",
            }}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

CalendarCustomRange;
