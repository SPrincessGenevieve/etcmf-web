"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { AlignJustify, Check, EllipsisVertical } from "lucide-react";

export default function Notification() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="flex w-full">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="unread">Unread</TabsTrigger>
        <Menubar className="border-0 bg-transparent">
          <MenubarMenu>
            <MenubarTrigger className="">
              <EllipsisVertical></EllipsisVertical>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Check></Check>Mark as all read
              </MenubarItem>
              <MenubarItem>
                <AlignJustify></AlignJustify> Clear notification
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </TabsList>
      <TabsContent value="all">
        <div className="p-2">
          <p>All</p>
        </div>
      </TabsContent>
      <TabsContent value="unread">
        <div className="p-2">
          <p>Unread</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
