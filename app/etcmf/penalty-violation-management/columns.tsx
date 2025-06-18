"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown_menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { PenaltyProps } from "@/lib/type/type";
import { Switch } from "@/components/ui/switch";

function ActionsCell({ row }: { row: any }) {
  const [viewMore, setViewMore] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const handleOpenViewMore = () => {
    setViewMore(true);
  };

  const handleUpdateStatus = () => {
    setUpdateStatus(true);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleOpenViewMore}>
            View More
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleUpdateStatus}>
            Update Status
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export const columnsPenalty: ColumnDef<PenaltyProps>[] = [
  {
    accessorKey: "ordinance_code",
    header: "Ordinance",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "creator",
    header: "Creator",
  },
  {
    accessorKey: "date_issues",
    header: "Date Issues",
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const CellSwitch = () => {
        const [isEnabled, setIsEnabled] = useState(row.original.status);

        return (
          <div className="rounded-full h-7 flex gap-2 items-center justify-center">
            <div className="w-15">
              <p
                className={
                  isEnabled ? "text-[#349F59] font-medium" : "text-neutral-400"
                }
              >
                {isEnabled ? "Active" : "Inactive"}
              </p>
            </div>
            <Switch
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
              className="data-[state=checked]:bg-[#349F59] data-[state=checked]:text-white"
            />
          </div>
        );
      };

      return <CellSwitch />;
    },
  },

  // {
  //   id: "actions",
  //   cell: ({ row }) => <ActionsCell row={row} />,
  // },
];
