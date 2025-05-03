"use client";
import Image from "next/image";
import Lines from "@/images/abstract.png";
import Lines2 from "@/images/abstract_top.png";
import Footer from "@/images/login_footer.png";
import "@/app/globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#0B6540] w-full h-screen flex items-center justify-center login_container">
      <Image
        width={400}
        height={400}
        className="w-[70vh] h-[50vh] absolute top-0 left-0"
        src={Lines2}
        alt=""
      ></Image>
      <Image
        width={400}
        height={400}
        className="w-[70vh] h-[50vh] absolute bottom-0 right-0"
        src={Lines}
        alt=""
      ></Image>

      <div
        style={{ boxShadow: "2px 2px 24px rgba(0, 0, 0, 0.3)" }}
        className="login_container_2 relative max-w-[430px] max-h-[600px] w-full h-full rounded-xl bg-transparent shadow-2xl"
      >
        <Image
          width={1000}
          height={1000}
          className="w-[70vh] h-auto absolute z-10 bottom-0 rounded-b-xl"
          src={Footer}
          alt=""
        ></Image>

        <div className="p-6 z-20 relative h-full">{children}</div>
      </div>
      <p className="text-white flex justify-center items-center absolute bottom-10">
        eTCMF | 2025
      </p>
    </div>
  );
}
