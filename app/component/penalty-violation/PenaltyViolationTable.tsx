"use client";

import { useEffect, useState } from "react";
import React from "react";
import { PenaltyProps } from "@/lib/type/type";
import { columnsPenalty } from "@/app/etcmf/penalty-violation-management/columns";
import { penalty } from "@/lib/mock-data/penalty_mockdata";
import { DataTable } from "../data-table";

export default function PenaltyViolationTable() {
  const [data, setData] = useState<PenaltyProps[]>([]);

  return (
    <div className="w-full bg-white rounded-2xl border">
      <DataTable columns={columnsPenalty} data={penalty} />
      <div className="flex justify-between p-2 text-[12px] text-gray-500">
        <p>
          TICKET COUNT: {data.length} out of {data.length} entries
        </p>
      </div>
    </div>
  );
}
