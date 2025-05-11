"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Profile from "@/images/profile.png";
import "@/app/globals.css";

export default function DriverLicense() {
  return (
    <div className="w-full flex driver-cont gap-4 text-[12px]">
      <div className="w-full flex flex-col  gap-4">
        <div className="flex gap-2 w-full driver-detail">
          <div className="w-full">
            <p className="">Last Name</p>
            <Input className="text-[12px]" disabled value={"SAGRADO"}></Input>
          </div>
          <div className="w-full">
            <p>First Name</p>
            <Input
              className="text-[12px]"
              disabled
              value={"PRINCESS GENEVIEVE"}
            ></Input>
          </div>
          <div className="w-full">
            <p>Middle Name</p>
            <Input className="text-[12px]" disabled value={"GABULE"}></Input>
          </div>
        </div>
        <div className="flex gap-2 w-full   driver-detail">
          <div className="w-full">
            <p>Nationality</p>
            <Input className="text-[12px]" disabled value={"PHIL"}></Input>
          </div>
          <div className="w-full">
            <p>Sex</p>
            <Input className="text-[12px]" disabled value={"F"}></Input>
          </div>
          <div className="w-full">
            <p>Weight</p>
            <Input className="text-[12px]" disabled value={"60"}></Input>
          </div>
        </div>
        <div className="flex gap-2 w-full   driver-detail">
          <div className="w-full">
            <p>Date of Birth</p>
            <Input
              className="text-[12px]"
              disabled
              value={"12/12/2000"}
            ></Input>
          </div>
          <div className="w-full">
            <p>License No.</p>
            <Input
              className="text-[12px]"
              disabled
              value={"K10-12-1220"}
            ></Input>
          </div>
          <div className="w-full">
            <p>Expiration Date</p>
            <Input
              className="text-[12px]"
              disabled
              value={"12/12/2026"}
            ></Input>
          </div>
        </div>
        <div className="flex gap-2 w-full  driver-detail ">
          <div className="w-full">
            <p>Agency Code</p>
            <Input className="text-[12px]" disabled value={"K10"}></Input>
          </div>
          <div className="w-full">
            <p>DL Codes</p>
            <Input className="text-[12px]" disabled value={"A, A1"}></Input>
          </div>
          <div className="w-full">
            <p>Condition</p>
            <Input className="text-[12px]" disabled value={"1"}></Input>
          </div>
        </div>
        <div className="flex gap-2 w-full  driver-detail ">
          <div className="w-full">
            <p>Address</p>
            <Input
              disabled
              className="text-[12px]"
              value={"ST. JOSEPH VILLAGE, POBLACION, MAMBAJAO, CAMAIGUIN"}
            ></Input>
          </div>
        </div>
      </div>
      <div className="h-full">
        <Image className="rounded-2xl" alt="profile" src={Profile}></Image>
      </div>
    </div>
  );
}
