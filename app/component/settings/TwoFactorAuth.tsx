import { Button } from "@/components/ui/button";
import { Check, KeyRound, MessageSquareMore } from "lucide-react";
import React from "react";

export default function TwoFactorAuth() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div>
        <p className="text-[14px] font-semibold">Two-factor Authentication</p>
        <p className="text-[12px] text-gray-500">
          Two-factor authentication enhances your account`&apos;`s security by
          requiring more than just a password for signing in.
        </p>
      </div>
      <div className="w-full flex gap-4">
        <KeyRound></KeyRound>
        <div className="w-full">
          <p className="font-semibold text-[12px]">Authenticator App</p>
          <p className="text-[12px] text-gray-500">
            Use an authentication app or browser extension to get two-factor
            authentication codes when prompted.
          </p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <Check color="#3E7C1F"></Check>
          <p className="text-[12px] text-[#3E7C1F] font-semibold">Configured</p>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <MessageSquareMore></MessageSquareMore>
        <div className="w-full">
          <p className="font-semibold text-[12px]">SMS Code</p>
          <p className="text-[12px] text-gray-500">
            Use mobile number to get two-factor authentication codes texted in
            your mobile number.
          </p>
        </div>
        <Button className="flex bg-[#3E7C1F] gap-2 justify-center items-center">
          <p className="text-[12px] text-white font-semibold">Setup SMS</p>
        </Button>
      </div>
    </div>
  );
}
