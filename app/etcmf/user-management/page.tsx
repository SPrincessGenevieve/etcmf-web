import {
  CarFront,
  Laptop,
  ListFilter,
  ShieldUser,
  UserCog,
  UserPlus,
} from "lucide-react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // pick a similar free icon
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import HeaderUser from "@/app/component/user-management/header-user";
import UserManagementTable from "@/app/component/user-management/user-management-table";

export default function UserManagement() {
  return (
    <div className="px-4 flex flex-col gap-4">
      <HeaderUser></HeaderUser>
      <div>
        <UserManagementTable></UserManagementTable>
      </div>
    </div>
  );
}
