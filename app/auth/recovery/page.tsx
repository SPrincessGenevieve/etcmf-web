"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import Key from "@/images/Key.svg";
import { useRouter } from "next/navigation";
import Loading from "@/app/component/Loading";

export default function Recovery() {
  const router = useRouter();
  const [loading, setLoading] = useState({
    request: false,
    back: false,
  });
  const NavigateSignIn = () => {
    setLoading((prev) => ({ ...prev, back: true }));
    router.push("/");
  };

  const NavigateUpdatePassword = () => {
    setLoading((prev) => ({ ...prev, request: true }));
    router.push("/auth/password-update");
  };

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
        <p className="font-medium text-white text-2xl">Account Recovery</p>
        <p className="text-white font-light">
          Input your Email Address to request password reset
        </p>
      </div>

      {/* FOOTER */}
      <div className="mt-[10%] flex flex-col gap-10 h-[70%] justify-center">
        <div className="relative flex flex-col gap-2">
          <Label className="font-light text-white text-[12px]">Email</Label>
          <Input className="bg-[#03301d3d] text-white"></Input>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Button
            onClick={NavigateUpdatePassword}
            className="cursor-pointer bg-white text-[#3e7c1f] hover:bg-transparent hover:text-white border border-white"
          >
            {loading.request && <Loading strokeColor="green"></Loading>}
            Request Reset
          </Button>
          <Button
            onClick={NavigateSignIn}
            variant={"ghost"}
            className="hover:bg-[transparent] cursor-pointer w-auto p-0 m-0 flex justify-center text-center text-white font-light"
          >
            {loading.back && <Loading strokeColor="white"></Loading>} Sign in
            Instead
          </Button>
        </div>
        <div className="w-full h-full border-t border-white flex py-6 mt-[7%]">
          <Button className="cursor-pointer bg-[#ffffff31] text-[white] hover:bg-transparent hover:text-white border border-white w-full">
            Try Another Way
          </Button>
        </div>
      </div>
    </div>
  );
}
