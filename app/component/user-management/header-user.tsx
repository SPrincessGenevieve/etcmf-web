import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  CarFront,
  Laptop,
  ListFilter,
  ShieldUser,
  UserCog,
  UserPlus,
} from "lucide-react";
import React from "react";

export default function HeaderUser() {
  return (
    <>
      <div className="w-full">
        <p className="text-[18px] font-medium">User Management</p>
        <p className="text-[12px] text-gray-500 font-medium">
          Manage all accounts registerd in the system.
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex w-full max-w-160 flex-wrap gap-2">
          <div className="border-r-3 border-neutral-300  flex w-full px-2 max-w-37 gap-2 items-center">
            <div>
              <UserCog
                size={35}
                color="white"
                className="bg-[#1b7751] rounded-full p-1.5"
              ></UserCog>
            </div>
            <div className="w-full p-2 h-15 max-w-30">
              <p className="text-[12px]">Admin</p>
              <p className="text-[14px] font-semibold">4 accounts</p>
            </div>
          </div>
          <div className="flex border-r-3 border-neutral-300  w-full px-2 max-w-37 gap-2 items-center">
            <div>
              <Laptop
                size={35}
                color="white"
                className="bg-[#DEB870] rounded-full p-1.5"
              ></Laptop>
            </div>
            <div className="w-full p-2 h-15 max-w-30">
              <p className="text-[12px]">Treasurer</p>
              <p className="text-[14px] font-semibold">4 accounts</p>
            </div>
          </div>
          <div className="flex border-r-3 border-neutral-300  w-full px-2 max-w-37 gap-2 items-center">
            <div>
              <ShieldUser
                size={35}
                color="white"
                className="bg-[#7A9BE0] rounded-full p-1.5"
              ></ShieldUser>
            </div>
            <div className="w-full p-2 h-15 max-w-30">
              <p className="text-[12px]">Officer</p>
              <p className="text-[14px] font-semibold">4 accounts</p>
            </div>
          </div>
          <div className="flex border-neutral-300  w-full px-2 max-w-37 gap-2 items-center">
            <div>
              <CarFront
                size={35}
                color="white"
                className="bg-[#DA6E6E] rounded-full p-1.5"
              ></CarFront>
            </div>
            <div className="w-full p-2 h-15 max-w-30">
              <p className="text-[12px]">Offender</p>
              <p className="text-[14px] font-semibold">4 accounts</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[350px] flex gap-1">
          <Button className="bg-[#0B6540]">
            <UserPlus></UserPlus>
          </Button>
          <Input className="bg-white rounded-2xl w-full"></Input>
          <Select>
            <SelectTrigger className="bg-white">
              <ListFilter></ListFilter>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="treasurer">Treasurer</SelectItem>
              <SelectItem value="officer">Officer</SelectItem>
              <SelectItem value="offender">Offender</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
