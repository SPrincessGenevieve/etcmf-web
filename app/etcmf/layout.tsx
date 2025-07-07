"use client";
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";

import Header from "@/components/ui/header";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppSidebar } from "@/app/component/dashboard/app_sidebar";
import ProtectedRoute from "../component/ProtectedRoute";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useUser();
  const [children_visibiliti, setChildrenVisibility] = useState("");

  useEffect(() => {
    // if (isOpen === false) {
    //   setChildrenVisibility("blur-[5px]");
    // } else {
    //   setChildrenVisibility("");
    // }
  }, [isAuthenticated]);

  return (
    <ProtectedRoute requireAuth={true}>
      <SidebarProvider className="relative bg-[#F6F6F6] flex">
        <div className="flex overflow-hidden w-full bg-[#F6F6F6]">
        <div className="flex h-full overflow-hidden">
        <AppSidebar />
        </div>
        <div
          className={`w-full h-full flex items-center flex-col overflow-auto ${children_visibiliti}`}
        >
          <div className="w-full h-[55px] bg-white">
            <Header></Header>
          </div>
          <div className={`p-2 w-full h-full overflow-y-auto bg-[#F6F6F6]`}>
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
