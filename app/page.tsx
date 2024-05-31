import SideBar from '@/components/Sidebar'
import HeroSection from "@/components/home/HeroSection";

export default function Page() {
  return (
    <>
      <div className="flex flex-col bg-blue-300  ">
        <SideBar />
        <HeroSection />
      </div>
    </>
  )
}