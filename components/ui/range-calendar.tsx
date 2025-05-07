"use client";

import { useState } from "react";
import { type DateRange } from "react-day-picker";
import { Calendar } from "./calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { CalendarRangeIcon } from "lucide-react";
import { addDays } from "date-fns";

export default function RangeCalendar() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 12),
    to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
  });
  const [date_from, setDateFrom] = useState(
    new Date(new Date().getFullYear(), 0, 12)
  );
  const [date_to, setDateTo] = useState(
    addDays(new Date(new Date().getFullYear(), 0, 12), 30)
  );

  console.log("FROM : ", date_from);
  console.log("TP : ", date_to);

  return (
    <div className="flex flex-col flex-wrap items-start gap-2 @md:flex-row">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex gap-2 bg-gray-200  h-full rounded-[10px] p-[1px] justify-center items-center">
            <div className="flex gap-2 bg-[white] p-1 m-1 rounded-[10px] justify-center items-center">
              <CalendarRangeIcon size={20}></CalendarRangeIcon>
              <p className="text-[12px]">Date Range</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Calendar
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={(range) => {
              setDateRange(range);
              if (range?.from) setDateFrom(range.from);
              if (range?.to) setDateTo(range.to);
            }}
            numberOfMonths={2}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            className="rounded-md border shadow-sm"
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
