import DateTabs from "@/app/component/records/DateTabs";
import ServiceLogTable from "@/app/component/service-log/service-log-table";
import { Button } from "@/components/ui/button";
import CalendarCustomRange from "@/components/ui/calendar-custom-range";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DiamondPlus, ListFilter, Search } from "lucide-react";
import React from "react";

export default function ServiceLogs() {
  return (
    <div className="w-full px-2 flex flex-col gap-2">
      <div className="w-full min-h-[60px] gap-2 flex flex-col h-auto violation-search-cont">
        <div className="w-full">
          <p className="text-[18px] font-medium">Service Log</p>
          <p className="text-[12px] text-gray-500 font-medium">
            View and track assigned shifts and locations
          </p>
        </div>
        <div className="w-full">
          <div className=" flex flex-wrap w-full justify-end items-center gap-2">
            <div className="relative  flex flex-wrap gap-2">
              <DateTabs></DateTabs>
              <CalendarCustomRange></CalendarCustomRange>
            </div>
            <div className="flex  items-end justify-end gap-2">
              <div>
                <Select>
                  <SelectTrigger className="bg-white">
                    <ListFilter></ListFilter>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="treasurer">Treasurer</SelectItem>
                    <SelectItem value="officer">Officer</SelectItem>
                    <SelectItem value="offender">Offender</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-[#1b7751]">
                <Search></Search>
              </Button>
              <div className="w-full max-w-[400px]">
                <Input className="w-full bg-white rounded-2xl"></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceLogTable></ServiceLogTable>
    </div>
  );
}
