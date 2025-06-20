"use client";
import { useEffect, useState } from "react";
import {
  Archive,
  ArchiveX,
  Car,
  CircleDotDashed,
  History,
  LayoutDashboard,
  Logs,
  PanelRightDashed,
  Settings,
  SquareChartGantt,
  UserPlus,
} from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OfficerIcon from "@/images/officer_icon.svg";
import Image from "next/image";
import { useUserContext } from "@/app/context/UserContext";

const items = [
  { title: "Dashboard", url: "/etcmf/dashboard", icon: LayoutDashboard },
  { title: "Records", url: "/etcmf/records", icon: Archive },
  { title: "User Management", url: "/etcmf/user-management", icon: UserPlus },
  {
    title: "Penalty & Violation Management",
    url: "/etcmf/penalty-violation-management",
    icon: SquareChartGantt,
  },
  { title: "Service Logs", url: "/etcmf/service-logs", icon: CircleDotDashed },
  { title: "Logs", url: "/etcmf/logs", icon: History },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();
  const { setUserDetails, isOpen } = useUserContext();

  const handleCollapse = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
  };

  useEffect(() => {
    setUserDetails({
      isOpen: collapsed,
    });
  }, [isOpen, collapsed]);

  useEffect(() => {
    console.log("OPEN", isOpen);
  });
  return (
    <div
      className={`h-full pt-4 transition-all duration-300 ${
        collapsed ? "w-16" : "w-90 sidebar_width"
      } bg-[#0B6540] border-r`}
    >
      <div
        className={`flex w-full justify-between ${
          collapsed ? "flex-col" : "flex-row"
        }`}
      >
        <div className="pl-4 flex gap-2 items-center w-full">
          <Image src={OfficerIcon} alt=""></Image>
          <p
            className={`text-white w-full font-semibold ${
              collapsed ? "hidden transition ease-in-out" : ""
            }`}
          >
            Ticket Citation
          </p>
        </div>

        <div className="pl-2 flex justify-start cursor-pointer w-auto items-center p-1">
          <div
            className="group text-white flex items-center gap-2 p-2 transition ease-in-out hover:bg-[#ffffff54] rounded"
            onClick={handleCollapse}
          >
            <PanelRightDashed className="w-full h-full stroke-white" />
          </div>
        </div>
      </div>

      <SidebarContent className="">
        <SidebarGroup className="">
          <SidebarGroupContent className="">
            <SidebarMenu className="overflow-hidden">
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <Link
                    href={item.url}
                    key={item.url}
                    className={`text-white flex items-center gap-2 p-2 transition ease-in-out rounded-[5px] 
        ${isActive ? "bg-[#ffffff54]" : "hover:bg-[#00000054]"}`}
                  >
                    <div>
                      <item.icon
                        size={30}
                        className={`w-auto h-[25px] ${
                          isActive
                            ? "stroke-white"
                            : "stroke-white group-hover:stroke-[#0B6540]"
                        }`}
                      />
                    </div>
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </div>
  );
}
