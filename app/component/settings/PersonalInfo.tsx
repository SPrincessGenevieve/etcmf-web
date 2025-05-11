import { Button } from "@/components/ui/button";
import Textfield from "@/components/ui/text-field";
import React from "react";

export default function PersonalInfo() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div>
        <p className="text-[14px] font-semibold">Personal Information</p>
        <p className="text-[12px] text-gray-500">
          Setup your personal information. The provided information will be used
          as part of the audit logs.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[12px] font-semibold">Full Name</p>
        <Textfield label="First Name"></Textfield>
        <Textfield label="Middle Name (Optional)"></Textfield>
        <Textfield label="Last Name"></Textfield>
        <p className="text-[12px] font-semibold ">Other Details</p>
        <Textfield label="Sex"></Textfield>
        <Textfield label="Birthdate"></Textfield>
        <Textfield label="Address"></Textfield>
        <div className="py-2 flex flex-col">
          <p className="text-[12px] font-semibold">Privileges</p>
          <p className="text-[12px] text-gray-600">Position and role details</p>
        </div>
        <Textfield label="Position"></Textfield>
        <Textfield label="Role"></Textfield>
        <Textfield label="Address"></Textfield>
        <Button className="text-[12px] bg-[#0B6540] rounded-3xl">Update Information</Button>
      </div>
    </div>
  );
}
