"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import LockIcon from "@/images/lock-icon.png";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default function LostOTP() {
  const router = useRouter();

  const NavigateSignIn = () => {
    router.push("/");
  };

  const NavigateToDashboard = () => {
    router.push("/etcmf");
  };

  return (
    <div className="">
      {/* HEADER TITLE */}
      <div className="mt-[10%] flex flex-col gap-5 h-[70%] justify-center">
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            src={LockIcon}
            width={400}
            height={400}
            className="w-[100px] h-auto"
            alt=""
          ></Image>
          <p className="w-full flex items-center justify-center text-2xl font-semibold text-white">
            OTP Authentication
          </p>
        </div>
        <div className="relative flex flex-col gap-2">
          <Label className="font-light text-white text-[12px]">Email</Label>
          <Input type="" className="bg-[#03301d3d] text-white"></Input>
        </div>
        <div className="w-full flex flex-col gap-4">
          <Button
            onClick={NavigateToDashboard}
            className="cursor-pointer bg-white text-[#3e7c1f] hover:bg-transparent hover:text-white border border-white"
          >
            Send
          </Button>
          <Button
            onClick={NavigateSignIn}
            variant={"ghost"}
            className="hover:bg-[transparent] cursor-pointer w-auto p-0 m-0 flex justify-center text-center text-white font-light"
          >
            Back to Sign-in
          </Button>
        </div>
      </div>
    </div>
  );
}
