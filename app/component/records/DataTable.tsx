"use client";

import { useEffect, useState } from "react";
import { Records, columns } from "@/app/etcmf/records/columns";
import { DataTable } from "@/app/etcmf/records/data-table";
import { reportData } from "@/lib/mock-data/records_mockdata";

export default function Table() {
  const [data, setData] = useState<Records[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result: Records[] = reportData;
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className=" w-full  bg-white rounded-2xl border">
      <DataTable columns={columns} data={data} />
      <div className="flex justify-between p-2 text-[12px] text-gray-500">
        <p>TICKET COUNT: 10 out 11402 entries</p>
        <p>PAGE 1</p>
      </div>
    </div>
  );
}
