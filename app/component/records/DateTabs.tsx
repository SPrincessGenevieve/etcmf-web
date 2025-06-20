"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DateTabs() {

  return (
    <div>
      <Tabs defaultValue="All" className="border rounded-[10px]">
        <TabsList className=" bg-gray-200 text-[12px] p-[1px]">
          {["All", "12 Months", "30 Days", "7 Days", "24 Hours"].map((tab) => (
            <TabsTrigger value={tab} key={tab} className="text-[12px]">{tab}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
