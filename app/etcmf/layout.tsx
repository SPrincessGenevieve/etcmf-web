"use client";
import "@/app/globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, CircleAlert, LogOut, Settings } from "lucide-react";
import ToggleNotif from "../component/header/ToggleNotif";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar></AppSidebar>
      {/* <SidebarTrigger></SidebarTrigger> */}
      <div className="w-full h-screen relative flex items-center justify-center">
        <div className="w-full h-[60px] absolute top-0 flex justify-between items-center px-4">
          <p className="font-bold">MANOLO FORTICH MUNICIPALITY</p>
          <div className="flex gap-8 justify-center items-center">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-2 items-center">
                  <div className="rounded-full bg-[#0B6540]  p-2">
                    <Bell color="white"></Bell>
                  </div>
                  <ChevronDown size={17} color="gray"></ChevronDown>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuLabel>Notification</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <div className="px-2 py-1">
                    <ToggleNotif />
                  </div>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="w-full flex gap-4 justify-center items-center">
              <p className="text-[14px] font-semibold">Hey, Jan Paul!</p>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="border-none text-[12px] w-auto text-white flex gap-2 justify-center items-center">
                    <div className="w-full flex gap-2 justify-center items-center">
                      <Avatar className="w-[40px] h-[40px]">
                        <AvatarImage
                          src={
                            "https://scontent.fmnl14-1.fna.fbcdn.net/v/t39.30808-1/464115817_3669993786645187_3329516257053704408_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE25rlhBG6vtaeITU36P4l0yjfTumkzSqzKN9O6aTNKrEqQCV91fZFZzDnTm-8J_F12wqy7Ws72BuDKp0-yGdDI&_nc_ohc=s-OGCxNLAiYQ7kNvwHj0fbp&_nc_oc=AdnPdm8Y3wZvQEi5N_edzGIYqIZVZCt7dj9dsVUbzNegTCPwSRW0MWD4Wba7ZQxW7-U&_nc_zt=24&_nc_ht=scontent.fmnl14-1.fna&_nc_gid=CDnyRWLvAOXLx4ABoVLpmQ&oh=00_AfEjPQcWog2PMWOXnFdx5Et28aO1EBN_lTMfbRAJll0qkg&oe=681BAC50"
                          }
                        ></AvatarImage>
                        <AvatarFallback></AvatarFallback>
                      </Avatar>{" "}
                    </div>
                    <ChevronDown color="gray"></ChevronDown>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>
                    <div className="w-full flex gap-2 items-center">
                      <Avatar className="w-[17] h-[17]">
                        <AvatarImage
                          src={
                            "https://scontent.fmnl14-1.fna.fbcdn.net/v/t39.30808-1/464115817_3669993786645187_3329516257053704408_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE25rlhBG6vtaeITU36P4l0yjfTumkzSqzKN9O6aTNKrEqQCV91fZFZzDnTm-8J_F12wqy7Ws72BuDKp0-yGdDI&_nc_ohc=s-OGCxNLAiYQ7kNvwHj0fbp&_nc_oc=AdnPdm8Y3wZvQEi5N_edzGIYqIZVZCt7dj9dsVUbzNegTCPwSRW0MWD4Wba7ZQxW7-U&_nc_zt=24&_nc_ht=scontent.fmnl14-1.fna&_nc_gid=CDnyRWLvAOXLx4ABoVLpmQ&oh=00_AfEjPQcWog2PMWOXnFdx5Et28aO1EBN_lTMfbRAJll0qkg&oe=681BAC50"
                          }
                        ></AvatarImage>
                        <AvatarFallback></AvatarFallback>
                      </Avatar>{" "}
                      <p>Jan Paul Llatuna</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="flex gap-2 ">
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
                    <DropdownMenuItem className="flex gap-2 ">
                      <div className="">
                        <LogOut></LogOut>
                      </div>
                      <p>Help & Support</p>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>


          {children}
      </div>
    </SidebarProvider>
  );
}
