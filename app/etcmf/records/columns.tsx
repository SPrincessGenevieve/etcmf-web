"use client";
import ViewMore from "@/app/component/records/ViewMore";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

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
function ActionsCell({ row }: { row: any }) {
  const [viewMore, setViewMore] = useState(false);
  const [settleDispute, setSettleDispute] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const ticketNum = row.original.ticket_no;
  const fullName = row.original.offender;
  const bday = "12/12/27";
  const sex = "Male";
  const driversLicenseNum = row.original.license_no;
  const address = "Lapasan A4, Cagayan de Oro City";
  const violation = row.original.violation_title;
  const fine = row.original.fines;
  const level = row.original.level;
  const date = row.original.time_stamp;
  const time = "12:23 PM";
  const email = "example@gmail.com";
  const status = row.original.status;
  const location = row.original.location;
  const officer = row.original.officer;

  const handleOpen = () => {
    setViewMore(true);
  };

  return (
    <div>
      <Dialog open={viewMore} onOpenChange={setViewMore}>
        <DialogContent className="flex flex-col max-w-[90%] md:max-w-[700px] lg:max-w-[1000px] max-h-[90%] overflow-y-auto">
          <DialogTitle className="font-bold">DETAIL INFORMATION</DialogTitle>
          <ViewMore
            ticketNum={ticketNum}
            fullName={fullName}
            bday={bday}
            sex={sex}
            driversLicenseNum={driversLicenseNum}
            address={address}
            violation={violation}
            fine={fine.toString()}
            level={level}
            date={date}
            time={time}
            status={status}
            location={location}
            officer={officer}
            email={email}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={settleDispute}>
        <DialogContent>
          <DialogTitle className="font-bold">SETTLE DISPUTE</DialogTitle>
        </DialogContent>
      </Dialog>

      <Dialog open={updateStatus}>
        <DialogContent>
          <DialogTitle className="font-bold">UPDATE STATUS</DialogTitle>
        </DialogContent>
      </Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleOpen}>View More</DropdownMenuItem>
          <DropdownMenuItem>Settle Dispute</DropdownMenuItem>
          <DropdownMenuItem>Update Status</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

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
      const status = row.original.status;

      return (
        <div className="flex flex-col gap-1">
          <div className="w-[50%]">
            <Progress
              color={`${
                status === "pending"
                  ? "bg-[#FFD68F]"
                  : status === "resolved"
                  ? "bg-[#95F2AC]"
                  : status === "overdue"
                  ? "bg-[#FF8A8A]"
                  : status === "dropped"
                  ? "bg-[#FF9500]"
                  : status === "raised"
                  ? "bg-[#F37ACA]"
                  : status === "community service"
                  ? "bg-[#98BDF7]"
                  : ""
              }`}
              value={progress}
              className="h-2"
            />
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
                ? "bg-[#FFD68F]"
                : status === "resolved"
                ? "bg-[#95F2AC]"
                : status === "overdue"
                ? "bg-[#FF8A8A]"
                : status === "raised"
                ? "bg-[#F37ACA]"
                : status === "community service"
                ? "bg-[#98BDF7]"
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
    cell: ({ row }) => <ActionsCell row={row} />,
  },
];
