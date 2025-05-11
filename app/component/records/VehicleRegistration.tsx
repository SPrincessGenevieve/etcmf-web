import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Profile from "@/images/profile.png";

export default function VehicleRegistration() {
  return (
    <div className="w-full flex gap-4  text-[12px]">
      <div className="w-full flex flex-col gap-4  ">
        <div className="flex gap-2 w-full driver-detail ">
          <div className="w-full">
            <p>C.R. No.</p>
            <Input className="text-[12px]" disabled value={"10200293"}></Input>
          </div>
          <div className="w-full">
            <p>Plate No.</p>
            <Input className="text-[12px]" disabled value={"K01-233"}></Input>
          </div>
          <div className="w-full">
            <p>Make</p>
            <Input className="text-[12px]" disabled value={"TOYOTA"}></Input>
          </div>
        </div>
        <div className="flex gap-2 w-full driver-detail ">
          <div className="w-full">
            <p>Color</p>
            <Input className="text-[12px]" disabled value={"BLACK"}></Input>
          </div>
          <div className="w-full">
            <p>Owner's Name</p>
            <Input
              className="text-[12px]"
              disabled
              value={"JAYDE MIKE ENGRACIA"}
            ></Input>
          </div>
          <div className="w-full">
            <p>Owner's Address</p>
            <Input
              className="text-[12px]"
              disabled
              value={"ZONE 9, CUGMAN, CAGAYAN DE ORO CITY"}
            ></Input>
          </div>
        </div>
      </div>
    </div>
  );
}
