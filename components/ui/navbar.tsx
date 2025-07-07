"use client";
import "@/app/globals.css"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Bell,
  Headset,
  LogOut,
  Settings,
} from "lucide-react";
import Notification from "@/app/component/Notification";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export const Navbar = () => {

  const router = useRouter()

  const navSetting = () =>{
    router.push("/etcmf/settings")
  }

  return (
    <Card className="rounded-none  py-2">
      <CardContent className="flex items-center justify-between gap-2 py-0">
        <div className="flex gap-2 items-center">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Municipality_of_Leganes_Official_Seal_Logo.png"></AvatarImage>
            <AvatarFallback>AW</AvatarFallback>
          </Avatar>
          <p className="municipal font-semibold whitespace-nowrap text-black">
            MANOLO FORTICH BUKIDNON
          </p>
        </div>

        <div className="h-full flex gap-2">
          <Menubar className="border-none bg-transparent shadow-none">
            <MenubarMenu>
              <MenubarTrigger className=" bg-transparent">
                <Bell></Bell>
              </MenubarTrigger>
              <MenubarContent className="w-[40vh]">
                <Notification></Notification>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Menubar className="border-none bg-transparent shadow-none">
            <MenubarMenu>
              <MenubarTrigger className="flex gap-2">
                <div>
                  <Avatar className="border h-10 w-10">
                    <AvatarImage
                      src={
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2F51%2Fc2%2Fda51c26fe3398b0f8314fee17a98e0e7.jpg&f=1&nofb=1&ipt=137f15e31469c1debd9a629244c389445f83f68eb0bdcc3e4cf919cc9b649223"
                      }
                    ></AvatarImage>
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <Label className="text-[11px]">Hey, Jayde</Label>
                  <Label className="text-[11px]">04, April 2025</Label>
                </div>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="w-full flex flex-col">
                  <div className="flex w-full items-center gap-2">
                    <div>
                      <Avatar className="border h-10 w-10">
                        <AvatarImage
                          src={
                            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2F51%2Fc2%2Fda51c26fe3398b0f8314fee17a98e0e7.jpg&f=1&nofb=1&ipt=137f15e31469c1debd9a629244c389445f83f68eb0bdcc3e4cf919cc9b649223"
                          }
                        ></AvatarImage>
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="w-full flex flex-col">
                      <Label className="text-[11px]">Jayde Mike Engracia</Label>
                      <Label onClick={navSetting} className="cursor-pointer text-[11px] text-green-700 font-light">
                        View Profile
                      </Label>
                    </div>
                  </div>

                  {/* <ProfileMenu></ProfileMenu> */}
                </MenubarItem>
                <MenubarSeparator></MenubarSeparator>
                <MenubarItem>
                  <Settings></Settings> Settings & Privacy
                </MenubarItem>
                <MenubarItem>
                  <Headset></Headset> Help & Support
                </MenubarItem>
                <MenubarItem>
                  <LogOut></LogOut> Logout
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </CardContent>
    </Card>
  );
};
