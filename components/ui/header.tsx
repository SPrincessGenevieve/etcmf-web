"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown_menu";
import { Bell, ChevronDown, CircleAlert, LogOut, Settings } from "lucide-react";
import ToggleNotif from "@/app/component/header/ToggleNotif";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MunicipalIcon from "@/images/rta-logo.png";
import "@/app/globals.css";
import { useUser } from "@/app/context/UserContext";

export default function Header() {
  const router = useRouter();
  const { user, logout } = useUser();

  const navigateSettings = () => {
    router.push("/etcmf/settings");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="pl-2 w-full h-auto flex justify-between items-center pr-2 py-2 cont-header ">
      <div className="flex gap-2 w-full items-center municipality_cont">
        <Image
          className="w-[40] h-[40] rounded-full"
          src={MunicipalIcon}
          alt=""
        ></Image>
        <p className="font-bold municipality text-[12px] w-full max-w-[200px]">
          MANOLO FORTICH MUNICIPALITY
        </p>
      </div>
      <div className="w-full flex gap-8 justify-end items-center avatar-cont">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <div className="flex gap-2 items-center">
              <div className="rounded-full p-2">
                <Bell color="black"></Bell>
              </div>
              <ChevronDown size={17} color="gray"></ChevronDown>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full max-w-[400px] h-full ml-[2%] mr-0  notif-cont">
            <DropdownMenuLabel>Notification</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <div className="px-2 py-1">
                <ToggleNotif />
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="w-auto flex gap-2 justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="border-none text-[12px] w-auto text-white flex gap-2 justify-center items-center">
                <div className="w-full flex gap-2 justify-center items-center">
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src={user?.picture || ""} />
                    <AvatarFallback>
                      {user?.firstname?.charAt(0)}{user?.lastname?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>{" "}
                  <div>
                    <p className="text-[14px] font-semibold greetings-name text-[black]">
                      Hey, {user?.firstname}!
                    </p>
                    <p className="text-[#6c6c6c]">{new Date().toLocaleDateString('en-US', { 
                      day: '2-digit', 
                      month: 'long', 
                      year: 'numeric' 
                    })}</p>
                  </div>
                </div>
                <ChevronDown color="gray"></ChevronDown>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                <div className="w-full flex gap-2 items-center">
                  <Avatar className="w-[17] h-[17]">
                    <AvatarImage src={user?.picture || ""} />
                    <AvatarFallback>
                      {user?.firstname?.charAt(0)}{user?.lastname?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>{" "}
                  <p>{user?.firstname} {user?.lastname}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={navigateSettings}
                  className="flex gap-2 "
                >
                  <div className="">
                    <Settings></Settings>
                  </div>
                  <p>Settings & Privacy</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-2 ">
                  <div className="">
                    <CircleAlert></CircleAlert>
                  </div>
                  <p>Help & Support</p>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleLogout}
                  className="flex gap-2 cursor-pointer"
                >
                  <div className="">
                    <LogOut></LogOut>
                  </div>
                  <p>Logout</p>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
