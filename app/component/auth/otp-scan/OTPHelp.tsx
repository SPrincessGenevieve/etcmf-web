import React from "react";
import { OTPGuide } from "@/lib/auth/otp-scan/otp_guide";
import Image from "next/image";

export default function OTPHelp() {
  return (
    <div>
      {OTPGuide.map((item, index) => (
        <div className="flex flex-col gap-2 mb-10" key={index}>
          <p className="font-bold text-[14px]">{item.step}</p>
          <p className="text-[14px] text-justify">{item.instruction}</p>
          <Image src={item.picture} alt=""></Image>
        </div>
      ))}
    </div>
  );
}
