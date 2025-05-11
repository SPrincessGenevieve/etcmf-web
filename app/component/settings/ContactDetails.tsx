import { Button } from "@/components/ui/button";
import Textfield from "@/components/ui/text-field";
import { X } from "lucide-react";
import React from "react";

export default function ContactDetails() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div>
        <p className="text-[14px] font-semibold">Contact Details</p>
        <p className="text-[12px] text-gray-500">
          Setup your contact information.
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="py-4 flex flex-col">
          <p className="text-[12px] font-semibold">Contact Number</p>
          <p className="text-[12px] text-gray-600">
            Phone number a user have owned.
          </p>
        </div>
        <div className="flex items-center">
          <Textfield label="Contact Number"></Textfield>
          <Button className="p-0 m-0" variant={"ghost"}>
            <X></X>
          </Button>
        </div>
        <div className="py-4 flex flex-col">
          <p className="text-[12px] font-semibold">Email Address</p>
          <p className="text-[12px] text-gray-600">
            Email address a user have owned.
          </p>
        </div>
        <div className="flex items-center">
          <Textfield label="Email Address"></Textfield>
          <Button className="p-0 m-0" variant={"ghost"}>
            <X></X>
          </Button>
        </div>
      </div>
      <Button className="text-[12px] bg-[#0B6540] rounded-3xl">
        Update Information
      </Button>
    </div>
  );
}
