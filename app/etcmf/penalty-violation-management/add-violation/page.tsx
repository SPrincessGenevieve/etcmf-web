"use client";
import AddViolationTable from "@/app/component/penalty-violation/AddViolationTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SpinnerIcon from "@/images/Spinner";

export default function AddViolation() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    setLoading(true)
    router.push("/etcmf/penalty-violation-management");
  };

  return (
    <div className="w-full h-full">
      <Card className="h-full">
        <CardContent className="flex flex-col gap-4">
          <div>
            <Button onClick={handleBack} variant={"ghost"}>
              {loading && <SpinnerIcon strokeColor="#0B6540"></SpinnerIcon>}
              <ArrowLeft></ArrowLeft>Penalty & Violation Management
            </Button>
          </div>
          <div className="flex justify-end">
            <Button className="bg-[#1b7751]">Create Violation</Button>
          </div>
          <Separator></Separator>
          <div className="w-full flex gap-2  max-w-[800px] flex-wrap">
            <div className="flex flex-col gap-2 w-full">
              <Label>Ordinance</Label>
              <Input disabled></Input>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label>Creator</Label>
              <Input disabled></Input>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label>Date Issued</Label>
              <Input disabled></Input>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-w-[800px]">
            <Label>Description</Label>
            <Textarea className="min-h-20"></Textarea>
          </div>
          <div className="w-full">
            <AddViolationTable></AddViolationTable>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
