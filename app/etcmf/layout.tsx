"use client";
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";

import { Navbar } from "@/components/ui/navbar";
import { useUserContext } from "../context/UserContext";
import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Sidebar from "@/app/component/dashboard/app_sidebar";
import ProtectedRoute from "@/app/middleware/ProtectedRoute";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen } = useUserContext();
  const [children_visibiliti, setChildrenVisibility] = useState("");

  useEffect(() => {
    if (isOpen === false) {
      setChildrenVisibility("blur-[5px]");
    } else {
      setChildrenVisibility("");
    }
  }, [isOpen]);

  return (
    <ProtectedRoute>
      <SidebarProvider className="relative bg-[#F6F6F6] flex">
        <div className="flex overflow-hidden w-full bg-[#F6F6F6]">
          <div className="flex w-full max-w-15 h-full overflow-hidden relative">
            <div className="w-15 h-full max-w-50 left-0 top-0 z-50 fixed">
              <Sidebar></Sidebar>
            </div>
          </div>
          <div
            className={`w-full h-full flex items-center flex-col overflow-auto ${children_visibiliti}`}
          >
            <div className="w-full relative h-[55px] bg-white">
              <div className="z-40 w-full pl-15 fixed right-0 bg-white h-[55px] ">
                <Navbar></Navbar>
              </div>
            </div>
            <div
              className={`p-2 pt-3 w-full h-full overflow-y-auto bg-[#F6F6F6]`}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {children}
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
