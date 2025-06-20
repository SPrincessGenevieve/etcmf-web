"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import AboutMe from "./about-me";
import RecordUserManagement from "./records";
import AccountDetails from "./account-details";

interface ProfileDetailsProps {
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
}

export default function ProfileDetails({
  first_name,
  middle_name,
  last_name,
  role,
}: ProfileDetailsProps) {
  const tabs = ["About Me", "Records", "Account Details"];
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="w-full min-h-[650px] overflow-auto">
      <div className="w-full h-40 relative">
        <div className="w-full h-28 rounded-t-[10px] bg-[#F2F7F5]">
          <div className="absolute mx-4 bottom-0 h-25 w-25 rounded-2xl bg-[red] flex">
            <Image
              className="w-auto h-auto rounded-2xl"
              width={400}
              height={400}
              src={
                "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              }
              alt=""
            ></Image>
          </div>
          <div className="absolute right-0 bottom-0 flex gap-2 px-3">
            <Button
              variant={"ghost"}
              className="border border-red-700 text-red-700"
            >
              Deactivate
            </Button>
            <Button className="bg-[#1b7751]">Edit Profile</Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Label className="text-[20px] py-2">
          {first_name} {middle_name} {last_name}
        </Label>
        <div className="w-full flex flex-col">
          <div className="border-b flex justify-between">
            {tabs.map((item) => {
              if (item === "Records" && role !== "Officer") return null;

              return (
                <div className="w-full" key={item}>
                  <Button
                    onClick={() => setActiveTab(item)}
                    className={`w-full bg-transparent font-normal text-[#9E9E9E] border-[#9E9E9E] transition ease-in-out rounded-none hover:bg-transparent hover:border-b-2 hover:text-[#1b7751] hover:border-[#1b7751] border-b-2 ${
                      activeTab === item &&
                      "bg-transparent text-[#1b7751] font-semibold border-[#1b7751]"
                    }`}
                  >
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>

          {activeTab === "About Me" && <AboutMe></AboutMe>}
          {role === "Officer" && activeTab === "Records" && (
            <RecordUserManagement></RecordUserManagement>
          )}
          {activeTab === "Account Details" && <AccountDetails></AccountDetails>}
        </div>
      </div>
    </div>
  );
}
