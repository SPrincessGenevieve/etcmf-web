import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Check, EllipsisVertical, Text } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown_menu";
import { NotificationMockdata } from "@/lib/mock-data/notification_mockdata";

export default function ToggleNotif() {
  return (
    <Tabs defaultValue="all" className="w-[400px]">
      <TabsList className="w-full flex">
        <TabsTrigger value="all" className="w-auto">
          All
        </TabsTrigger>
        <TabsTrigger value="unread" className="w-auto">
          Unread
        </TabsTrigger>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <EllipsisVertical></EllipsisVertical>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Check></Check>
                <p>Mark as all read</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Text></Text>
                <p>Clear notification</p>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </TabsList>
      <TabsContent value="all" className="border-none shadow-none">
        <Card className="shadow-none border-none overflow-y-auto">
          <CardContent className="p-0 m-0 border-none shadow-none">
            {NotificationMockdata.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`${
                    item.read ? "" : "border border-green-500"
                  } my-1 cursor-pointer w-full h-auto py-2 flex gap-2 hover:bg-gray-200 transition rounded-xl px-2`}
                >
                  <div>
                    <Icon size={40} className="text-gray-900" />
                  </div>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-[12px] text-gray-600 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
          <CardFooter className="p-0 m-0 w-full">
            <Button className="w-full  hover:text-white bg-[#D9D9D9] text-black">
              See previous notification
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="unread" className="border-none shadow-none">
        <Card className="shadow-none border-none">
          <CardContent className="p-0 m-0 border-none shadow-none">
            {NotificationMockdata.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={` ${
                    item.read ? "hidden" : "border border-green-500"
                  } my-1 cursor-pointer w-full h-auto py-2 flex gap-2  hover:bg-gray-200 transition rounded-xl px-2`}
                >
                  <div>
                    <Icon size={40} className="text-gray-900" />
                  </div>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-[12px] text-gray-600 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
          <CardFooter className="p-0 m-0 w-full">
            <Button className="w-full bg-[#D9D9D9] text-black hover:text-white">
              See previous notification
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
