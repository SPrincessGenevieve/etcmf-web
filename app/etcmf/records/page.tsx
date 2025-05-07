"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import RangeCalendar from "@/components/ui/range-calendar";
import { Search } from "lucide-react";
import StatusTabs from "@/app/component/records/StatusTabs";
import DateTabs from "@/app/component/records/DateTabs";

export default function Record() {
  return (
    <div className="w-full h-full p-4 pt-[5rem]">
      <div className="flex flex-col justify-between gap-2 h-full">
        <div className="w-full">
          <p className="text-[18px] font-medium">Traffic Violation Records</p>
          <p className="text-[12px] text-gray-500 font-medium">
            Records of all the tickets issued by our traffic enforcer.
          </p>
        </div>
        <div className="flex gap-2 w-full h-full  justify-between relative">
          <div className="w-full">
            <StatusTabs></StatusTabs>
          </div>
          <div className="flex flex-col items-end gap-1 absolute right-0">
            <div className="flex gap-2">
              <DateTabs></DateTabs>
              <RangeCalendar />
            </div>
            <div className="w-[70%] relative justify-end flex">
              <Search
                className="absolute left-0 flex items-center h-full ml-2"
                size={15}
                color="#c5c5c5"
              ></Search>
              <Input
                className="rounded-full text-[12px] p-1 px-4 pl-7 border bg-white"
                placeholder="search"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
