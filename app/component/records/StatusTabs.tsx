"use client";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import Table from "./DataTable";

export default function StatusTabs() {
  const [activeTab, setActiveTab] = useState("All Violations");

  return (
    <div className="w-full">
      <div className="flex gap-2 w-full">
        {[
          "All Violations",
          "Pending",
          "Resolved",
          "Overdue",
          "Raised",
          "Community Service",
        ].map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-auto min-w-[140px] p-3 m-0 justify-start h-[75px] border hover:text-white hover:bg-[#1e322a] ${
              activeTab === tab
                ? "bg-[#0B6540] text-white"
                : "bg-white text-black"
            }`}
          >
            <div className="text-[12px] gap-2 flex flex-col items-start">
              <p className="text-[14px]">{tab}</p>
              <div className="flex gap-2 justify-center">
                <p>Total:</p>
                <p className="bg-white text-[#0B6540] w-[40px] rounded-full">
                  350
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      <div className="mt-4 text-sm w-full">
        {activeTab === "All Violations" && <Table></Table>}
        {activeTab === "Pending" && <p>Pending content.</p>}
        {activeTab === "Resolved" && <p>Resolved content.</p>}
        {activeTab === "Overdue" && <p>Overdue content.</p>}
        {activeTab === "Raised" && <p>Raised content.</p>}
        {activeTab === "Community Service" && <p>Community service content.</p>}
      </div>
    </div>
  );
}
