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

export default function AboutMe() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 py-4">
      <Label>Basic Information</Label>
      <div className="flex gap-2 w-full">
        <div className="w-full">
          <p className="text-[12px] font-thin">First Name</p>
          <Input></Input>
        </div>
        <div className="w-full">
          <p className="text-[12px] font-thin">Middle Name</p>
          <Input></Input>
        </div>
        <div className="w-full">
          <p className="text-[12px] font-thin">Last Name</p>
          <Input></Input>
        </div>
      </div>
      <div className="flex gap-2 w-full">
        <div className="w-full">
          <p className="text-[12px] font-thin">Address</p>
          <Input className="w-full"></Input>
        </div>
        <div className="w-auto">
          <p className="text-[12px] font-thin">Sex</p>
          <Select defaultValue="Male">
            <SelectTrigger>
              <SelectValue></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-auto">
          <p className="text-[12px] font-thin">Birthdate</p>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-auto justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Label className="py-2 mt-4">Contact Details</Label>
      <div className="w-full">
        <p className="text-[12px] font-thin">Contact Number</p>
        <Input className="w-full"></Input>
      </div>
      <div className="w-full">
        <p className="text-[12px] font-thin">Email</p>
        <Input className="w-full"></Input>
      </div>
    </div>
  );
}
