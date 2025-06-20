"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { record_user_mangement } from "@/lib/mock-data/user-management/records";
import { Textarea } from "@/components/ui/textarea";

export default function RecordUserManagement() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const header = ["Shift", "Post", "Duties Performed"];
  return (
    <div className="w-full flex flex-col gap-2 py-4">
      <Label>Traffic Enforcer Logbook</Label>
      <div className="flex gap-2 w-full">
        <Table>
          <TableHeader className="border">
            <TableRow>
              {header.map((item) => (
                <TableCell>
                  <Label>{item}</Label>
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {record_user_mangement.map((item) => (
              <TableRow>
                <TableCell className="text-[12px]">
                  {item.date}
                  <br></br>
                  {item.time_in} - {item.time_out}
                </TableCell>
                <TableCell className="text-[12px] w-10">
                  <div className="h-full">
                    <Textarea
                      disabled
                      className="p-0 rounded-none text-[10px] border-none resize-none"
                    >
                      {item.post}
                    </Textarea>
                  </div>
                </TableCell>
                <TableCell className="text-[12px]">
                  <Textarea
                    disabled
                    className="p-0 rounded-none text-[10px] border-none resize-none"
                  >
                    {item.duties_performed}
                  </Textarea>
                </TableCell>
                <TableCell className="text-[12px]">{item.remarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
