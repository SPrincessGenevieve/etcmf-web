"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import Key from "@/images/Key.svg";
import { useRouter } from "next/navigation";

export default function UpdatePassword() {
  const router = useRouter();
  const [isStrong, setIsStrong] = useState<boolean | null>(null);
  const [isMatched, setIsMatched] = useState(true);

  const [newPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    setIsStrong(strongPasswordRegex.test(newPassword));

    if (newPassword !== ConfirmPassword) {
      setIsMatched(false);
    } else {
      setIsMatched(true);
    }
  }, [newPassword, ConfirmPassword]);

  console.log(isStrong ? "STRONG" : "UNSECURE");

  const NavigateSignIn = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col gap-8">
      <Image
        src={Key}
        width={400}
        height={400}
        className="w-[50px] h-auto"
        alt=""
      ></Image>

      {/* HEADER TITLE */}
      <div className="flex flex-col gap-2">
        <p className="font-medium text-white text-2xl">Change Password</p>
        <p className="text-white font-light">
          Create new password you can remember
        </p>
        <p
          className={`h-[20px] font-light italic flex items-center text-[12px] ${
            newPassword.length === 0
              ? "text-[white]"
              : isStrong
              ? isMatched
                ? "text-green-500"
                : "text-red-500"
              : "text-red-500"
          }`}
        >
          {newPassword.length === 0
            ? "Must be 8+ characters, upper/lowercase, number, and symbol"
            : isStrong
            ? isMatched
              ? "Your password is secure!"
              : "Your password do not match"
            : "Password is too weak."}
        </p>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col gap-10 h-[70%] justify-center">
        <div className="flex flex-col gap-4">
          <div className="relative flex flex-col gap-2">
            <Label className="font-light text-white text-[12px]">
              New Password
            </Label>
            <Input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              className="bg-[#03301d3d] text-white"
            ></Input>
          </div>
          <div className="relative flex flex-col gap-2">
            <Label className="font-light text-white text-[12px]">
              Confirm New Password
            </Label>
            <Input
              type="password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-[#03301d3d] text-white"
            ></Input>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 mt-[10%]">
          <Button
            onClick={NavigateSignIn}
            className="cursor-pointer bg-white text-[#3e7c1f] hover:bg-transparent hover:text-white border border-white"
          >
            Update Password
          </Button>
          <Button
            onClick={NavigateSignIn}
            variant={"ghost"}
            className="hover:bg-[transparent] cursor-pointer w-auto p-0 m-0 flex justify-center text-center text-white font-light"
          >
            Sign in Instead
          </Button>
        </div>
      </div>
    </div>
  );
}
