"use client";

import { useEffect, useState } from "react";
import { Records, columns } from "@/app/etcmf/records/columns";
import { DataTable } from "@/app/etcmf/records/data-table";
import { reportData } from "@/lib/mock-data/records_mockdata";

interface TableProps {
  filterStatus: string;
}

export default function Table({ filterStatus }: TableProps) {
  const [data, setData] = useState<Records[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result: Records[] = reportData;

      // Filtering logic
      const filteredData =
        filterStatus === "All Violations"
          ? result
          : result.filter(
              (item) => item.status.toLowerCase() === filterStatus.toLowerCase()
            );

      setData(filteredData);
    }
    fetchData();
  }, [filterStatus]);

  return (
    <div className="w-full bg-white rounded-2xl border">
      <DataTable columns={columns} data={data} />
      <div className="flex justify-between p-2 text-[12px] text-gray-500">
        <p>
          TICKET COUNT: {data.length} out of {reportData.length} entries
        </p>
        <p>PAGE 1</p>
      </div>
    </div>
  );
}
