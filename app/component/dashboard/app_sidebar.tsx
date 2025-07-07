"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { sidebar_items } from "@/lib/route/sidebar-items";
import { useRouter, usePathname } from "next/navigation";
import Loading from "../Loading";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Sidebar() {
  const [isClose, setIsClose] = useState(false);
  const [collapse, setCollapse] = useState(0);
  const router = useRouter();
  const pathname = usePathname(); // ✅ Get current path
  const [activeLoadingLink, setActiveLoadingLink] = useState<string | null>(
    null
  );

  const handleSidebar = () => {
    setIsClose(!isClose);
  };

  useEffect(() => {
    const handleResize = () => {
      setCollapse(window.innerWidth <= 580 ? 1 : 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveLoadingLink(null);
  }, [pathname]);

  const handleNavigate = (link: string) => {
    setActiveLoadingLink(link); // ✅ Show spinner only for this item
    router.push(link);
  };

  return (
    <div>
      <div
        className={`transition-all duration-300 ease-in-out w-[30vh] ${isClose || collapse ? "w-[62px]" : "w-[30vh]"}`}
      ></div>
      <div
        className={`bg-[#0B6540] fixed z-50 left-0 top-0 flex flex-col items-end h-full transition-all duration-300 ease-in-out ${
          isClose || collapse ? "w-[62px]" : "w-[30vh]"
        }`}
      >
        <div className="relative bg-[#0B6540] w-full h-12">
          {!collapse && (
            <div
              onClick={handleSidebar}
              className="absolute top-0 -right-3 z-20 mt-2 cursor-pointer bg-[#0B6540] rounded-full w-10 h-10 flex items-center justify-center"
            >
              {isClose ? (
                <CircleArrowLeft style={{ color: "white", fontSize: 25 }} />
              ) : (
                <CircleArrowRight style={{ color: "white", fontSize: 25 }} />
              )}
            </div>
          )}
        </div>
        <div className="w-full flex flex-col items-center justify-center p-2">
          <Image
            src={
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2F51%2Fc2%2Fda51c26fe3398b0f8314fee17a98e0e7.jpg&f=1&nofb=1&ipt=137f15e31469c1debd9a629244c389445f83f68eb0bdcc3e4cf919cc9b649223"
            }
            className="rounded-full"
            alt=""
            width={200}
            height={400}
          ></Image>
          {collapse !== 1 && !isClose && (
            <>
              <h1 className="font-semibold text-white">Jayde Mike Engracia</h1>
              <p className="font-light text-white">Treasurer</p>
            </>
          )}
        </div>
        <Separator></Separator>

        <div className="h-auto mt-2 w-full flex flex-col gap-2 px-2">
          {sidebar_items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.link;
            const isLoading = activeLoadingLink === item.link;

            return (
              <div key={item.id} className="relative">
                {isLoading && (
                  <div className="absolute inset-0 flex justify-center items-center bg-[#ffffff38] rounded-[5px]">
                    <Loading strokeColor="white"></Loading>
                  </div>
                )}
                <div
                  onClick={() => handleNavigate(item.link)}
                  className={`cursor-pointer flex transition-all ease-in-out p-2 rounded-[5px] hover:bg-[#0000002f] ${
                    isActive ? "bg-[#0000002f]" : ""
                  }`}
                >
                  <div className="flex gap-2 pl-1 text-white items-center">
                    <Icon className="w-5 h-5 text-white" />
                    <p className={`${collapse || isClose ? "hidden" : ""}`}>
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
