"use client";
import "@/app/globals.css";
import React from "react";
import StatusTabs from "@/app/component/records/StatusTabs";

export default function Record() {
  return (
    <div className="w-full h-full flex flex-col gap-2 px-4">
      <div className="w-full min-h-[60px] h-auto">
        <p className="text-[18px] font-medium">Traffic Violation Records</p>
        <p className="text-[12px] text-gray-500 font-medium">
          Records of all the tickets issued by our traffic enforcer.
        </p>
      </div>
      <div className="w-full min-h-[12%] h-auto">
        <div className="w-full">
          <StatusTabs></StatusTabs>
        </div>
      </div>
    </div>
  );
}
