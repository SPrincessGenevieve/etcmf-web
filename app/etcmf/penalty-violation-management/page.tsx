'use client'
import { DataTable } from "@/app/component/data-table";
import PenaltyViolationTable from "@/app/component/penalty-violation/PenaltyViolationTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DiamondPlus, Filter, Search } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function PennaltyViolationManagement() {
  const router = useRouter()

  const handleAddViolation = () =>{
    router.push("/etcmf/penalty-violation-management/add-violation")
  }

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full min-h-[60px] flex h-auto">
        <div className="w-full">
          <p className="text-[18px] font-medium">Violation Management</p>
          <p className="text-[12px] text-gray-500 font-medium">
            Total Users: 30
          </p>
        </div>
        <div className="w-full">
          <div className="search-record-cont w-full justify-end flex gap-2">
            <Button onClick={handleAddViolation} className="bg-[#1b7751]">
              <DiamondPlus></DiamondPlus>
            </Button>

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
      <div className="w-full min-h-[12%] h-auto">
        <PenaltyViolationTable></PenaltyViolationTable>
      </div>
    </div>
  );
}
