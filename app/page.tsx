"use client"

import Sidebar from '@/components/Sidebar'
import Practice from '@/components/Practice'
import NewSidebar from '@/components/NewSidebar'
import VideoPage from '@/components/VideoPage'
import Explore from '@/components/Explore'
import Dummy from '@/components/Dummy'
import VideoPage1 from '@/components/VideoPage1'
import HeroSection from "@/components/home/HeroSection";



const page = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-300 ">
        <HeroSection />
        
        <VideoPage1/>
      </div>
    </>
  )
}

export default page;