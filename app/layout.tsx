"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from '@/components/Sidebar'
const openSans = Open_Sans({ subsets: ["latin"] });
import React, { useState, useRef, useEffect } from 'react';


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
        <Navbar />         
        <div className="flex h-full">
          {/* Sidebar */}
          <div className={`${isSidebarOpen ? 'w-48' : 'w-0'} transition-all duration-300 flex flex-row `}>
            <div className="fixed flex flex-row items-center transition-all duration-300">
              {
                isSidebarOpen &&
                <Sidebar
                  togglesidebar={toggleSidebar}
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              }
              <div className='h-[100vh] rounded-lg w-6 flex items-center' onClick={toggleSidebar}><img src="/sidebar/pparw.svg" className={`w-6 h-6 ${isSidebarOpen ?'rotate-180':''}`}/></div>
            </div>
          </div>
          {/* Main Content */}
          <div className=" flex-1 transition-all duration-300">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}