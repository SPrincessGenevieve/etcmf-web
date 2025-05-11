import { Button } from "@/components/ui/button";
import Textfield from "@/components/ui/text-field";
import React from "react";

export default function PasswordSecurity() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div>
        <p className="text-[14px] font-semibold">Password and Security</p>
        <p className="text-[12px] text-gray-500">
          Setup your password credentials. Details input here will be use for
          logging-in user account in the Login Page. Enhance your account
          security by using a strong password.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Textfield type="password" label="Current Password"></Textfield>
        <Textfield type="password" label="New Password"></Textfield>
        <Textfield type="password" label="Confirm New Password"></Textfield>
        <Button className="text-[12px] bg-[#0B6540] rounded-3xl">
          Update Password
        </Button>
        <Button className="text-[12px] bg-white hover:text-white text-[#0B6540] border border-[#0B6540] rounded-3xl">
          Forgot Password Instead
        </Button>
      </div>
    </div>
  );
}
