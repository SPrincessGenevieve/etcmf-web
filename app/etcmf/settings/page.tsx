"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, Edit, FingerprintIcon } from "lucide-react";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ShieldIcon from "@mui/icons-material/Shield";
import PersonalInfo from "@/app/component/settings/PersonalInfo";
import "@/app/globals.css";
import ContactDetails from "@/app/component/settings/ContactDetails";
import PasswordSecurity from "@/app/component/settings/PasswordSecurity";
import TwoFactorAuth from "@/app/component/settings/TwoFactorAuth";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import UpdateProfile from "@/app/component/settings/UpdateProfile";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Settings() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Personal Information");

  const navigateBack = () => {
    router.back();
  };

  const tabGeneral = [
    {
      icon: PersonIcon,
      name: "Personal Information",
    },
    {
      icon: LocalPhoneIcon,
      name: "Contact Details",
    },
  ];

  const tabSecurity = [
    {
      icon: PersonIcon,
      name: "Password and Security",
    },
    {
      icon: FingerprintIcon,
      name: "Two-factor Authentication",
    },
  ];

  return (
    <div className="w-full h-full p-4 flex gap-4 justify-center setting_l1">
      <div className="max-w-[300px] p-4 bg-white flex gap-8 rounded-2xl setting_l2">
        <div className="flex flex-col gap-4">
          <div
            onClick={navigateBack}
            className="flex gap-2 text-[12px] items-center cursor-pointer setting_back"
          >
            <ChevronLeft size={20} color="#3E7C1F"></ChevronLeft>
            <p className="text-[#3E7C1F] setting_text">Go Back</p>
          </div>

          <div className="">
            <p className="text-[14px] font-semibold setting_text">
              Welcome to Settings
            </p>
            <p className="text-[12px] text-justify setting_text">
              Manage settings and privacy of your own account. If you want
              assistance click here to{" "}
              <span className="text-[#3E7C1F] cursor-pointer font-semibold">
                Learn more.
              </span>
            </p>
          </div>
          <div className="w-full flex justify-center items-center relative">
            <div className="absolute z-30 top-0 right-0">
              <UpdateProfile></UpdateProfile>
            </div>
            <Avatar className="w-50 h-auto shadow border">
              <AvatarImage
                src={
                  "https://i.pinimg.com/236x/b4/22/27/b42227b55bae72b1d3894db148b44c55.jpg"
                }
              ></AvatarImage>
            </Avatar>
          </div>

          <div className="gap-2 flex flex-col">
            <p className="text-[12px] font-semibold setting_text">General</p>

            {tabGeneral.map((tab) => (
              <Button
                key={tab.name}
                variant={"ghost"}
                className="flex gap-2 text-left justify-start"
                onClick={() => setActiveTab(tab.name)}
              >
                <tab.icon
                  sx={{
                    fontSize: 20,
                    color: activeTab === tab.name ? "#3E7C1F" : "black",
                  }}
                />
                <p
                  className={` setting_text text-[12px] font-semibold ${
                    activeTab === tab.name ? "text-[#3E7C1F]" : "text-[black]"
                  }`}
                >
                  {tab.name}
                </p>
              </Button>
            ))}
          </div>

          <div className="gap-2 flex flex-col">
            <p className="text-[12px] font-semibold setting_text">
              Security & Privacy
            </p>

            {tabSecurity.map((tab) => (
              <Button
                key={tab.name}
                variant={"ghost"}
                className="flex gap-2 text-left justify-start"
                onClick={() => setActiveTab(tab.name)}
              >
                <tab.icon
                  sx={{
                    fontSize: 20,
                    color: activeTab === tab.name ? "#3E7C1F" : "black",
                  }}
                />
                <p
                  className={` setting_text text-[12px] font-semibold ${
                    activeTab === tab.name ? "text-[#3E7C1F]" : "text-[black]"
                  }`}
                >
                  {tab.name}
                </p>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[700px] w-full p-4 bg-white rounded-2xl overflow-y-auto">
        {activeTab === "Personal Information" && <PersonalInfo></PersonalInfo>}
        {activeTab === "Contact Details" && <ContactDetails></ContactDetails>}
        {activeTab === "Password and Security" && (
          <PasswordSecurity></PasswordSecurity>
        )}
        {activeTab === "Two-factor Authentication" && (
          <TwoFactorAuth></TwoFactorAuth>
        )}
      </div>
    </div>
  );
}
