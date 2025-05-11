"use client";

import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

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

export default function ViolationDetails({
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
  const [formData, setFormData] = useState({
    record_ticketNum: "",
    record_fullName: "",
    record_bday: "",
    record_sex: "",
    record_driversLicenseNum: "",
    record_address: "",
    record_violation: "",
    record_fine: "",
    record_level: "",
    record_date: "",
    record_time: "",
    record_status: "",
    record_location: "",
    record_officer: "",
    record_email: "",
  });

  useEffect(() => {
    setFormData({
      record_ticketNum: ticketNum || "",
      record_fullName: fullName || "",
      record_bday: bday || "",
      record_sex: sex || "",
      record_driversLicenseNum: driversLicenseNum || "",
      record_address: address || "",
      record_violation: violation || "",
      record_fine: fine || "",
      record_level: level || "",
      record_date: date || "",
      record_time: time || "",
      record_status: status || "",
      record_location: location || "",
      record_officer: officer || "",
      record_email: email || "",
    });
  }, [
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
  ]); // or just [] if props never change dynamically

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <div className="border-b p-2 border-[#525252] w-full flex">
          <div className="w-full">
            <p className="flex text-[14px] font-semibold">
              {formData.record_ticketNum}
            </p>
            <p className="flex text-[12px]">TICKET ID</p>
          </div>
        </div>

        <div className="flex gap-4 w-full py-4">
          <div className="w-full flex flex-col gap-2">
            <p className="text-[12px]">FULL NAME</p>
            <Input
              disabled
              className="text-[12px]"
              type="text"
              name="record_fullName"
              value={formData.record_fullName}
              onChange={handleChange}
              placeholder="Ticket Number"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-[12px]">BIRTHDATE</p>
            <Input
              className="text-[12px]"
              type="text"
              name="record_bday"
              disabled
              value={formData.record_bday}
              onChange={handleChange}
              placeholder="Ticket Number"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-[12px]">SEX</p>
            <Input
              disabled
              className="text-[12px]"
              type="text"
              name="record_sex"
              value={formData.record_sex}
              onChange={handleChange}
              placeholder="Ticket Number"
            />
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="w-full flex flex-col gap-2">
            <p className="text-[12px]">DRIVER'S LICENSE NO.</p>
            <Input
              disabled
              className="text-[12px]"
              type="text"
              name="record_driversLicenseNum"
              value={formData.record_driversLicenseNum}
              onChange={handleChange}
              placeholder="Ticket Number"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-[12px]">EMAIL</p>
            <Input
              disabled
              className="text-[12px]"
              type="text"
              name="record_email"
              value={formData.record_email}
              onChange={handleChange}
              placeholder="Ticket Number"
            />
          </div>
        </div>
        <div className="flex gap-4 w-full mt-4">
          <div className="w-full flex flex-col gap-2">
            <p className="text-[12px]">ADDRESS</p>
            <Input
              disabled
              className="text-[12px]"
              type="text"
              name="record_address"
              value={formData.record_address}
              onChange={handleChange}
              placeholder="Ticket Number"
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="border-b border-[#525252] w-full">
            <p className="flex text-[15px] font-bold py-2">
              VIOLATION INFORMATION
            </p>
          </div>
          <div className="w-full">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="w-[100px] text-[12px] font-semibold">
                    Violation
                  </TableCell>
                  <TableCell className="text-[12px]">
                    <p>{formData.record_violation}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[100px] text-[12px] font-semibold">
                    Fine
                  </TableCell>
                  <TableCell className="text-[12px]">
                    <p>{formData.record_fine}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[100px] text-[12px] font-semibold">
                    Level
                  </TableCell>
                  <TableCell className="text-[12px]">
                    <p>{formData.record_level}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[100px] text-[12px] font-semibold">
                    Date
                  </TableCell>
                  <TableCell className="text-[12px]">
                    <p>May 10, 2025</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[100px] text-[12px] font-semibold">
                    Due Date
                  </TableCell>
                  <TableCell className="text-[12px]">
                    <p className="text-[12px]">May 12, 2025</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[100px] text-[12px] font-semibold">
                    Status
                  </TableCell>
                  <TableCell className="text-[12px] capitalize">
                    <p>{formData.record_status}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-[100px] text-[12px] font-semibold">
                    Location
                  </TableCell>
                  <TableCell className="text-[12px]">
                    <p className="text-[12px]">{formData.record_location}</p>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="w-[100px] text-[12px] font-semibold">
                    Officer
                  </TableCell>
                  <TableCell className="text-[12px]">
                    <p>{formData.record_officer}</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
