"use client";

import React, { useState } from "react";
import { DataTable } from "../data-table";
import { userManagementColumns } from "@/app/etcmf/user-management/columns";
import { UserManagementProps } from "@/lib/type/type";
import { user_management_mockdata } from "@/lib/mock-data/user_management_mockdata";

export default function UserManagementTable() {
  const [data, setData] = useState<UserManagementProps[]>(user_management_mockdata);
  return (
    <div className="w-full bg-white rounded-2xl border">
      <DataTable pageSize={10} columns={userManagementColumns} data={data}></DataTable>
      <div className="flex justify-between p-2 text-[12px] text-gray-500">
        <p>
          TICKET COUNT: {data.length} out of {data.length} entries
        </p>
      </div>
    </div>
  );
}
