import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Textarea } from "@/components/ui/textarea";
import { MenuItem } from "@mui/material";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";

interface DetailsProps {
  ticketNum?: string;
  status?: string;
}

export default function UpdateStatus({ ticketNum, status }: DetailsProps) {
  const [record_ticketNum, setRecordTicketNum] = useState("");
  const [record_status, setStatus] = useState("");
  const status_option = [
    "overdue",
    "pending",
    "raised",
    "dropped",
    "community service",
    "resolved",
  ];

  useEffect(() => {
    setRecordTicketNum(ticketNum || "");
    setStatus(status || "");
  }, [ticketNum, status]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="border-b p-2 border-[#525252] w-full flex">
        <div className="w-full">
          <p className="flex text-[14px] font-semibold">{record_ticketNum}</p>
          <p className="flex text-[12px]">TICKET ID</p>
        </div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="uppercase w-[200px] flex justify-between">
                <p>{record_status}</p> <ChevronDown></ChevronDown>
              </MenubarTrigger>
              <MenubarContent>
                <div className="w-full">
                  {status_option
                    .filter((item) =>
                      status === "raised"
                        ? ["dropped", "overdue"].includes(item)
                        : true
                    )
                    .map((item, index) => (
                      <MenubarItem
                        className="uppercase"
                        key={index}
                        onClick={() => setStatus(item)}
                      >
                        {item}
                      </MenubarItem>
                    ))}
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[12px]">Remarks</p>
        <Textarea className="w-full text-[12px] min-h-[100px]"></Textarea>
      </div>
      <div className="w-full flex justify-end">
        <Button className="bg-[#0B6540]">SAVE</Button>
      </div>
    </div>
  );
}
