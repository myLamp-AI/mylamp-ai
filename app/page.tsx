"use client"

import SideBar from '@/components/Sidebar'

import HeroSection from "@/components/home/HeroSection";



const page = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-300  ">
        <SideBar />
        <HeroSection />
        
      </div>
    </>
  )
}

export default page;