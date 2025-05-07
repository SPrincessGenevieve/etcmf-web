"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Records = {
  ticket_no: string;
  violation_title: string;
  level: string;
  license_no: string;
  fines: number;
  offender: string;
  officer: string;
  location: string;
  time_stamp: string;
  status: string;
};

export const columns: ColumnDef<Records>[] = [
  {
    accessorKey: "ticket_no",
    header: "Ticket No.",
  },
  {
    accessorKey: "violation_title",
    header: "Violation",
  },
  {
    accessorKey: "level",
    header: "Level",
    cell: ({ row }) => {
      const level = row.original.level; // e.g. "1st offense"
      const levelNumber = parseInt(level) || 1;
      const progress = (levelNumber / 4) * 100; // 4 is max offense level

      return (
        <div className="flex flex-col gap-1">
          <div className="w-[50%]">
            <Progress value={progress} className="h-2" />
          </div>
          <span>{level}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "offender",
    header: "Offender",
  },
  {
    accessorKey: "license_no",
    header: "License No.",
    cell: ({ row }) => {
      return (
        <div className="">
          <p className="text-[12px] text-green-600">
            {row.original.license_no}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "fines",
    header: "Fines",
    cell: ({ row }) => {
      return (
        <div className="">
          <p className="text-[12px]">₱{row.original.fines.toLocaleString()}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className="border rounded-full p-1 flex gap-2 items-center">
          <div
            className={`h-2 w-2 ${
              status === "pending"
                ? "bg-[#008CFF]"
                : status === "resolved"
                ? "bg-[#3DBB69]"
                : status === "overdue"
                ? "bg-[#DF0004]"
                : status === "raised"
                ? "bg-[#DF00B6]"
                : status === "community service"
                ? "bg-[#1A00FF]"
                : status === "dropped"
                ? "bg-[#FF9500]"
                : ""
            } rounded-full`}
          ></div>
          <p className="text-[12px] capitalize">{row.original.status}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "officer",
    header: "Officer",
  },
  {
    accessorKey: "time_stamp",
    header: "Time-stamp",
  },
  {
    accessorKey: "location",
    header: "Location",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.ticket_no)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
