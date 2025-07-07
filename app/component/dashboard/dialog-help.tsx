import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import OTPHelp from "../auth/otp-scan/OTPHelp";

export default function DialogHelp() {
  return (
    <Dialog>
      <DialogTrigger className="text-white font-light text-[12px] flex w-full">
        Do you need help?
      </DialogTrigger>
      <DialogContent className="max-h-[90%] overflow-y-auto">
        <DialogTitle>
          How to Set Up OTP Using Google Authenticator for Added Security
        </DialogTitle>
        <DialogDescription>
          Google Authenticator provides an extra layer of security by generating
          a unique One-Time Password (OTP) for you to use during login. Follow
          these steps to set it up:
        </DialogDescription>
        <OTPHelp></OTPHelp>
      </DialogContent>
    </Dialog>
  );
}
