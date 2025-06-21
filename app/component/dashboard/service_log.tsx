import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { user_status } from "@/lib/mock-data/user_status";
import { Dot, User } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function ServiceLog() {
  const router = useRouter();

  const navigateServiceLog = () => {
    router.push("/etcmf/service-logs");
  };

  return (
    <div className="flex flex-col justify-between h-full gap-4">
      <div className="flex item-center gap-3">
        <div>
          <User />
        </div>
        <p className="font-bold">Service Log</p>
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Name</TableCell>
            <TableCell className="text-center">Status</TableCell>
          </TableRow>

          {user_status.slice(0, 10).map((item, index) => (
            <TableRow key={index || item.name}>
              <TableCell>
                <Avatar className="w-6.5 h-6.5">
                  <AvatarImage src={item.profile_pic} />
                  <AvatarFallback />
                </Avatar>
              </TableCell>
              <TableCell>
                <Label>{item.name}</Label>
              </TableCell>
              <TableCell className="">
                <div className="w-full flex justify-center items-center">
                  <Dot
                    color={item.status === false ? "red" : "#349F59"}
                    className="rounded-full"
                    strokeWidth={7}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className="w-full h-full flex flex-col gap-2">
        {user_status.map((item) => (
          <div className="flex gap-2 justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={item.profile_pic}></AvatarImage>
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Label>{item.name}</Label>
            </div>
            <div>
              <Dot
                color={`${item.status === false ? "red" : "#349F59"}`}
                className="rounded-full"
                strokeWidth={7}
              ></Dot>
            </div>
          </div>
        ))}
      </div> */}
      <Button onClick={navigateServiceLog} className="bg-[#1b7751]">
        View More
      </Button>
    </div>
  );
}
