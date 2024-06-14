"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/oldmodules/Navbar";
import Sidebar from '@/components/Sidebar'
const openSans = Open_Sans({ subsets: ["latin"] });
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";


// export const metadata: Metadata = {
//   title: "MyLampAi - Home",
//   description: "MyLampAi - Home Page",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={`${openSans.className} bg-[#F1EAFF]`}>
        {/* <Navbar />          */}
        <div className="flex h-full transition-all duration-300 ">
          {/* Sidebar */}
          <div className={`${isSidebarOpen ? 'lg:w-48 ' : 'w-0'} md:wd-0 transition-all duration-300 flex flex-row `}>
            <div className="fixed flex flex-row items-center">
              {
                isSidebarOpen &&
                <Sidebar />
              }
              <div className='h-[100vh] rounded-lg w-6 flex items-center z-50' onClick={toggleSidebar}>
                <Image src="/sidebar/pparw.svg" className={`w-6 h-6 ${isSidebarOpen ? 'rotate-180' : ''}`} alt="arrow" width={100} height={100} />
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className=" flex-1 lg:transition-all lg:duration-300">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}