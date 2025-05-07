"use client";
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Header from "@/components/ui/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar></AppSidebar>
      {/* <SidebarTrigger></SidebarTrigger> */}
      <div className="w-full ml-14 h-screen relative flex items-center justify-center bg-[#F6F6F6]">
        <Header></Header>
        {children}
      </div>
    </SidebarProvider>
  );
}
