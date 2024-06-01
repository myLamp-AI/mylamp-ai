import SideBar from '@/components/Sidebar'
import HeroSection from "@/components/home/HeroSection";
import AboutWize from '@/components/home/AboutWize';
import WizeCamp from '@/components/home/WizeCamp';
import WhyWize from '@/components/home/WhyWize';

export default function Page() {
  return (
    <>
      <div className='h-full bg-[#f5f5f5]'>

        <div className="flex flex-col bg-blue-300  ">
          {/* <SideBar /> */}
          <HeroSection />
        </div>
        <AboutWize />
        <WizeCamp />
        <WhyWize />
        <div className="min-h-screen"></div>
      </div>
    </>
  )
}