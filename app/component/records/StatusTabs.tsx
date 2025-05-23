"use client";
import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import Table from "./DataTable";
import DateTabs from "./DateTabs";
import RangeCalendar from "@/components/ui/calendar-custom-range";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { reportData } from "@/lib/mock-data/records_mockdata";

export default function StatusTabs() {
  const [activeTab, setActiveTab] = useState("All Violations");
  const status = reportData.map((item) => item.status);

  const resolvedCount = reportData.filter(
    (item) => item.status === "resolved"
  ).length;
  const overdueCount = reportData.filter(
    (item) => item.status === "overdue"
  ).length;
  const raisedCount = reportData.filter(
    (item) => item.status === "raised"
  ).length;
  const pendingCount = reportData.filter(
    (item) => item.status === "pending"
  ).length;
  const droppedCount = reportData.filter(
    (item) => item.status === "dropped"
  ).length;
  const communityCount = reportData.filter(
    (item) => item.status === "community service"
  ).length;

  return (
    <div className="w-full ">
      <div className="flex w-full justify-between filter_cont gap-2">
        <div className="flex gap-2 w-full status-tabs-cont flex-wrap">
          {[
            "All Violations",
            "Pending",
            "Resolved",
            "Overdue",
            "Raised",
            "Dropped",
            "Community Service",
          ].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-auto min-w-[130px] p-3 m-0 justify-start h-[75px] border transition ease-in-out duration-200 hover:bg-[white] hover:text-black hover:border-2  
               ${
                 activeTab === tab
                   ? ""
                   : tab === "All Violations"
                   ? "hover:border hover:border-[#0B6540]"
                   : tab === "Pending"
                   ? "hover:border hover:border-[#FFD68F]"
                   : tab === "Resolved"
                   ? "hover:border hover:border-[#95F2AC]"
                   : tab === "Overdue"
                   ? "hover:border hover:border-[#FF8A8A]"
                   : tab === "Dropped"
                   ? "hover:border hover:border-[#FF9500]"
                   : tab === "Raised"
                   ? "hover:border hover:border-[#F37ACA]"
                   : tab === "Community Service"
                   ? "hover:border hover:border-[#98BDF7]"
                   : ""
               } ${
                activeTab === tab
                  ? tab === "All Violations"
                    ? "bg-[#0B6540] text-white"
                    : tab === "Pending"
                    ? "bg-[#FFD68F] text-white"
                    : tab === "Resolved"
                    ? "bg-[#95F2AC] text-white"
                    : tab === "Overdue"
                    ? "bg-[#FF8A8A] text-white"
                    : tab === "Dropped"
                    ? "bg-[#FF9500] text-white"
                    : tab === "Raised"
                    ? "bg-[#F37ACA] text-white"
                    : tab === "Community Service"
                    ? "bg-[#98BDF7] text-white"
                    : ""
                  : "bg-white text-black"
              }`}
            >
              <div className="text-[12px] gap-2 flex flex-col items-start">
                <p className="text-[12px]">{tab}</p>
                <div className="flex gap-2 justify-center">
                  <p className="text-[12px]">Total:</p>
                  <p
                    className={`text-black w-[40px] rounded-full text-[12px]  ${
                      activeTab === tab
                        ? "bg-white text-black"
                        : tab === "All Violations"
                        ? "bg-[#0B6540] text-white"
                        : tab === "Pending"
                        ? "bg-[#FFD68F] text-white"
                        : tab === "Resolved"
                        ? "bg-[#95F2AC] text-white"
                        : tab === "Overdue"
                        ? "bg-[#FF8A8A] text-white"
                        : tab === "Dropped"
                        ? "bg-[#FF9500] text-white"
                        : tab === "Raised"
                        ? "bg-[#F37ACA] text-white"
                        : tab === "Community Service"
                        ? "bg-[#98BDF7] text-white"
                        : ""
                    } `}
                  >
                    {tab === "Pending"
                      ? pendingCount
                      : tab === "Resolved"
                      ? resolvedCount
                      : tab === "Overdue"
                      ? overdueCount
                      : tab === "Dropped"
                      ? droppedCount
                      : tab === "Raised"
                      ? raisedCount
                      : tab === "Community Service"
                      ? communityCount
                      : status.length}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
        <div className="flex flex-col range_cont w-full max-w-[600px] gap-2">
          <div className="w-full flex justify-end gap-2 flex-wrap">
            <DateTabs></DateTabs>
            <RangeCalendar />
          </div>
          <div className="search-record-cont w-full   justify-end flex">
            <div className="relative w-full max-w-[40vh]">
              <Search
                className="absolute search-record left-0 flex items-center h-full ml-2"
                size={15}
                color="#c5c5c5"
              ></Search>
              <Input
                className="rounded-full w-full text-[12px]  p-1 px-4 pl-7 border bg-white"
                placeholder="search"
              ></Input>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-[12px] w-full h-full ">
        {activeTab === "All Violations" && (
          <div className="w-full h-full ">
            <Table filterStatus={activeTab} />
          </div>
        )}
        {activeTab === "Pending" && (
          <div className="w-full h-full ">
            <Table filterStatus={activeTab} />
          </div>
        )}
        {activeTab === "Resolved" && (
          <div className="w-full h-full ">
            <Table filterStatus={activeTab} />
          </div>
        )}
        {activeTab === "Overdue" && (
          <div className="w-full h-full ">
            <Table filterStatus={activeTab} />
          </div>
        )}
        {activeTab === "Raised" && (
          <div className="w-full h-full ">
            <Table filterStatus={activeTab} />
          </div>
        )}
        {activeTab === "Dropped" && (
          <div className="w-full h-full ">
            <Table filterStatus={activeTab} />
          </div>
        )}
        {activeTab === "Community Service" && (
          <div className="w-full h-full ">
            <Table filterStatus={activeTab} />
          </div>
        )}
      </div>
    </div>
  );
}
