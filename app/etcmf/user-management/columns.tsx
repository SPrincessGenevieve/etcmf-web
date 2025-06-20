"use client";
import ProfileDetails from "@/app/component/user-management/profile-details";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown_menu";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { UserManagementProps } from "@/lib/type/type";
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis, MoreHorizontal, MoreVertical } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const userManagementColumns: ColumnDef<UserManagementProps>[] = [
  {
    accessorKey: "account_no",
    header: "Account No.",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "middle_name",
    header: "Middle Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role;

      return (
        <div className="flex">
          <div className="flex gap-2 items-center rounded-2xl border px-2">
            <div
              className={`${
                role === "Admin"
                  ? "bg-[#1b7751]"
                  : role === "Treasurer"
                  ? "bg-[#DEB870]"
                  : role === "Officer"
                  ? "bg-[#7A9BE0]"
                  : "bg-[#DA6E6E]"
              } w-2 h-2 rounded-full `}
            ></div>
            <p>{row.original.role}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const CellSwitch = () => {
        const [isEnabled, setIsEnabled] = useState(row.original.status);

        return (
          <div className="">
            <Switch
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
              className="data-[state=checked]:bg-[#349F59] data-[state=checked]:text-white"
            />{" "}
            <div className="w-15">
              <p
                className={
                  isEnabled ? "text-[#349F59] font-medium" : "text-neutral-400"
                }
              >
                {isEnabled ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        );
      };

      return <CellSwitch />;
    },
  },
  {
    id: "actions",
    header: "",

    cell: ({ row }) => {
      const CellSwitch = () => {
        const [open, setOpen] = useState(false);
        const first_name = row.original.first_name;
        const middle_name = row.original.middle_name;
        const last_name = row.original.last_name;
        const role = row.original.role;

        return (
          <div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <MoreVertical className="h-4 w-4" />
              </DialogTrigger>
              <DialogContent className="p-0 overflow-y-auto h-[90%]">
                <ProfileDetails
                  role={role}
                  first_name={first_name}
                  middle_name={middle_name}
                  last_name={last_name}
                ></ProfileDetails>
              </DialogContent>
            </Dialog>
          </div>
        );
      };

      return <CellSwitch />;
    },
  },
];
