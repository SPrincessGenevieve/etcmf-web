"use client";
import React, { useState } from "react";
import { columnsServiceLogs } from "@/app/etcmf/dtr/columns";
import { service_log_mockdata } from "@/lib/mock-data/service_log_mockdata";
import { DataTable } from "../data-table";
import { ServiceLogsProps } from "@/lib/type/type";

export default function ServiceLogTable() {
  const [data, setData] = useState<ServiceLogsProps[]>(service_log_mockdata);

  return (
    <div className="w-full bg-white rounded-2xl border">
      <DataTable
        pageSize={15}
        columns={columnsServiceLogs}
        data={service_log_mockdata}
      ></DataTable>
      <div className="flex justify-between p-2 text-[12px] text-gray-500">
        <p>
          TICKET COUNT: {data.length} out of {data.length} entries
        </p>
      </div>
    </div>
  );
}
