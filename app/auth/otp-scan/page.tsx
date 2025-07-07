"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import Key from "@/images/Key.svg";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import QRCode from "@/images/QR Code.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import OTPHelp from "@/app/component/auth/otp-scan/OTPHelp";
import DialogHelp from "@/app/component/dashboard/dialog-help";
import Loading from "@/app/component/Loading";

export default function OTPScan() {
  const router = useRouter();
  const [loading, setLoading] = useState({
    login: false,
    back: false,
  });

  const NavigateSignIn = () => {
    setLoading((prev) => ({ ...prev, back: true }));
    router.push("/");
  };

  const NavigateToDashboard = () => {
    setLoading((prev) => ({ ...prev, login: true }));
    router.push("/etcmf/dashboard");
  };

  const index = [0, 1, 2, 3, 4, 5];

  return (
    <div className="">
      <Image
        src={Key}
        width={400}
        height={400}
        className="w-[50px] h-auto"
        alt=""
      ></Image>

      {/* HEADER TITLE */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-white text-2xl">Verify if it’s you</p>
        <div className="w-full max-w-sm">
          <Select>
            <SelectTrigger className="border-none p-0 m-0 rounded-full">
              <div className="border text-[12px] w-auto rounded-full text-white px-1 py-1 flex gap-2 justify-center items-center">
                <SelectValue placeholder="Choose an email..." />
              </div>
              <p className="text-white font-medium">Not You?</p>
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="" value="user1@example.com">
                <div className="w-full flex gap-2 justify-center items-center">
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src={
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F009%2F749%2F751%2Foriginal%2Favatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg&f=1&nofb=1&ipt=f6ad8ec45e8e7a90610593dd005bb803d60fbf22e89929aeeb3172afb30a7c13"
                      }
                    ></AvatarImage>
                    <AvatarFallback>VA</AvatarFallback>
                  </Avatar>{" "}
                  <p>user1@example.com</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-[10%] flex flex-col gap-5 h-[70%] justify-center">
        <p className="w-full text-center text-white font-light text-xl">
          Please scan or input OTP
        </p>
        <div className="w-full flex items-center justify-center">
          <Image
            src={QRCode}
            alt=""
            width={400}
            height={400}
            className="w-[120px] h-[120px]"
          ></Image>
        </div>
        <div className="w-full flex items-center justify-center">
          <InputOTP maxLength={6} className="">
            <InputOTPGroup className="text-white flex gap-2">
              {index.map((item, index) => (
                <InputOTPSlot
                  index={item}
                  key={index}
                  className="border border-white text-[20px] bg-[#00000043] rounded-none"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="w-full flex flex-col gap-4">
          <DialogHelp></DialogHelp>

          <Button
            onClick={NavigateToDashboard}
            className="cursor-pointer bg-white text-[#3e7c1f] hover:bg-transparent hover:text-white border border-white"
          >
            {loading.login && <Loading strokeColor="green" />}
            Login
          </Button>
          <Button
            onClick={NavigateSignIn}
            variant={"ghost"}
            className="hover:bg-[transparent] cursor-pointer w-auto p-0 m-0 flex justify-center text-center text-white font-light"
          >
            {loading.back && <Loading strokeColor="white" />}
            Back to Sign-in
          </Button>
        </div>
      </div>
    </div>
  );
}
