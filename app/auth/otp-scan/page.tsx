"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
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

export default function OTPScan() {
  const router = useRouter();

  const NavigateSignIn = () => {
    router.push("/");
  };

  const NavigateToDashboard = () => {
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
                        "https://scontent.fmnl14-1.fna.fbcdn.net/v/t39.30808-1/464115817_3669993786645187_3329516257053704408_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE25rlhBG6vtaeITU36P4l0yjfTumkzSqzKN9O6aTNKrEqQCV91fZFZzDnTm-8J_F12wqy7Ws72BuDKp0-yGdDI&_nc_ohc=s-OGCxNLAiYQ7kNvwHj0fbp&_nc_oc=AdnPdm8Y3wZvQEi5N_edzGIYqIZVZCt7dj9dsVUbzNegTCPwSRW0MWD4Wba7ZQxW7-U&_nc_zt=24&_nc_ht=scontent.fmnl14-1.fna&_nc_gid=CDnyRWLvAOXLx4ABoVLpmQ&oh=00_AfEjPQcWog2PMWOXnFdx5Et28aO1EBN_lTMfbRAJll0qkg&oe=681BAC50"
                      }
                    ></AvatarImage>
                    <AvatarFallback></AvatarFallback>
                  </Avatar>{" "}
                  <p>user1@example.com</p>
                </div>
              </SelectItem>
              <SelectItem value="user2@example.com">
                <div className="w-full flex gap-2 justify-center items-center">
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src={
                        "https://scontent.fmnl14-1.fna.fbcdn.net/v/t39.30808-1/453482117_1511268309474073_8564418274478349089_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFfFtLFzLX7uGOOE4DlQc-kAYmqPWAqVuwBiao9YCpW7NDwfMdIdXNYKUQ-y0dQG_ZETYAGm2eUAhiEg63gUAxl&_nc_ohc=2Emq9wARupoQ7kNvwGItiX7&_nc_oc=Adk3wDXQA3Z7_07tLNmfvBXzwYhgKuzpYzURdB7OO3DYgiyP8eq8J8G0kTit1FtU3Ig&_nc_zt=24&_nc_ht=scontent.fmnl14-1.fna&_nc_gid=BI2NmJiK9snvCle59oh-3g&oh=00_AfGs-x1PteVxmWvl_kM9NUvBejtNCDGt2yw2zGsF9U97wA&oe=681B9710"
                      }
                    ></AvatarImage>
                    <AvatarFallback></AvatarFallback>
                  </Avatar>{" "}
                  <p>user2@example.com</p>
                </div>
              </SelectItem>
              <SelectItem value="admin@yourdomain.com">
                <div className="w-full flex gap-2 justify-center items-center">
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src={
                        "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-1/483804629_122179551212055425_1581859817356305622_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGbRVw41M4CMKtzK0eX-XMb7gAF6ZHCGeLuAAXpkcIZ4rtUjby7cKCfoLOgM9brlccLeMLNQSmd8RR5cAz9wisC&_nc_ohc=LqBJEO7A7SYQ7kNvwFe61dT&_nc_oc=AdnXXMdjDIF_2I8RaRImdjens-hBMb9oZtL0Pv7XVGAOF1IG2r5kYb_EvjkHoGJd6Qk&_nc_zt=24&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=uU_0ploRiyDH7W_rhbOaaQ&oh=00_AfHY5pZhzHZcGdzwGOifaVxhsJJDINWwp2e7iDoKca736Q&oe=681BB93A"
                      }
                    ></AvatarImage>
                    <AvatarFallback></AvatarFallback>
                  </Avatar>{" "}
                  <p>user3@example.com</p>
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
          <Dialog>
            <DialogTrigger className="text-white font-light text-[12px] flex w-full">
              Do you need help?
            </DialogTrigger>
            <DialogContent className="max-h-[90%] overflow-y-auto">
              <DialogTitle>
                How to Set Up OTP Using Google Authenticator for Added Security
              </DialogTitle>
              <DialogDescription>
                Google Authenticator provides an extra layer of security by
                generating a unique One-Time Password (OTP) for you to use
                during login. Follow these steps to set it up:
              </DialogDescription>
              <OTPHelp></OTPHelp>
            </DialogContent>
          </Dialog>

          <Button
            onClick={NavigateToDashboard}
            className="cursor-pointer bg-white text-[#3e7c1f] hover:bg-transparent hover:text-white border border-white"
          >
            Login
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
