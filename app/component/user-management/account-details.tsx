"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Button } from "@/components/ui/button";

export default function AccountDetails() {

  return (
    <div className="w-full flex flex-col gap-2 py-4">
      <Label>Privilege Setup</Label>
      <div className="flex gap-2 w-full">
        <div className="w-full">
          <p className="text-[12px] font-thin">Position</p>
          <Input className="w-full"></Input>
        </div>
        <div className="w-auto">
          <p className="text-[12px] font-thin">Role</p>
          <Select defaultValue="Admin">
            <SelectTrigger className="min-w-[120px]">
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Treasurer">Treasurer</SelectItem>
              <SelectItem value="Officer">Officer</SelectItem>
              <SelectItem value="Offender">Offender</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full">
        <Label className="py-2 mt-4">Account Security</Label>
        <div className="mb-2">
          <p className="text-[12px] font-thin">Email</p>
          <Input></Input>
        </div>
        <div className=" flex gap-2">
          <div className="w-full">
            <p className="text-[12px] font-thin">New Password</p>
            <Input className="w-full" type="password"></Input>
          </div>
          <div className="w-full">
            <p className="text-[12px] font-thin">Confirm Password</p>
            <Input className="w-full" type="password"></Input>
          </div>
        </div>
        <div className="w-full flex justify-end">
            <div>
                <Button className="text-[12px] p-0 rounded-none  h-5 transition ease-in-out hover:text-red-900 hover:border-b-2 hover:border-red-900 text-red-900" variant={"ghost"}>Reset Password</Button>
            </div>
        </div>
      </div>
    </div>
  );
}
