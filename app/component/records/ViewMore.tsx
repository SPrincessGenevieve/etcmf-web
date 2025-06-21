import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import "@/app/globals.css"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ViolationDetails from "./ViolationDetails";
import DriverLicense from "./DriverLicense";
import VehicleRegistration from "./VehicleRegistration";

interface DetailsProps {
  ticketNum?: string;
  fullName?: string;
  bday?: string;
  sex?: string;
  driversLicenseNum?: string;
  address?: string;
  violation?: string;
  fine?: string;
  level?: string;
  date?: string;
  time?: string;
  status?: string;
  location?: string;
  officer?: string;
  email?: string;
}

export default function ViewMore({
  ticketNum,
  fullName,
  bday,
  sex,
  driversLicenseNum,
  address,
  violation,
  fine,
  level,
  date,
  time,
  status,
  location,
  officer,
  email,
}: DetailsProps) {
  return (
    <div className="flex flex-col gap-5 w-full h-[700px]">
      <Tabs defaultValue="violation" className="full">
        <TabsList className="grid grid-cols-3 w-full my-4">
          <TabsTrigger className="text-[12px] text-size w-auto" value="violation">
            Violation Details
          </TabsTrigger>
          <TabsTrigger className="text-[12px] text-size w-auto" value="id">
            Driver&apos;s License
          </TabsTrigger>
          <TabsTrigger className="text-[12px] text-size w-auto" value="cor">
            Vehicle Registration
          </TabsTrigger>
        </TabsList>
        <TabsContent value="violation" className="w-full">
          <ViolationDetails
            ticketNum={ticketNum}
            fullName={fullName}
            bday={bday}
            sex={sex}
            driversLicenseNum={driversLicenseNum}
            address={address}
            violation={violation}
            fine={fine}
            level={level}
            date={date}
            time={time}
            status={status}
            location={location}
            officer={officer}
            email={email}
          ></ViolationDetails>
        </TabsContent>
        <TabsContent value="id" className="w-full">
          <DriverLicense></DriverLicense>
        </TabsContent>
        <TabsContent value="cor" className="w-full">
          <VehicleRegistration></VehicleRegistration>
        </TabsContent>
      </Tabs>
    </div>
  );
}
