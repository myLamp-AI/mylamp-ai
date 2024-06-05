import SideBar from '@/components/Sidebar'
import HeroSection from "@/components/home/HeroSection";
import AboutWize from '@/components/home/AboutWize';
import WizeCamp from '@/components/home/WizeCamp';
import WhyWize from '@/components/home/WhyWize';
import BackedByBest from '@/components/home/BackedByBest';
import PowerOfWize from '@/components/home/PowerOfWize';
import RecentAdvances from '@/components/home/RecentAdvances';
import CommunitySection from '@/components/home/Community';
import Footer from '@/components/home/Footer';

export default function Page() {
  return (
    <>

      <div className='h-full bg-[#f5f5f5]'>
        <HeroSection />
        <AboutWize />
        <WizeCamp />
        <WhyWize />
        <BackedByBest />
        <PowerOfWize />
        <RecentAdvances />
        <CommunitySection />
        <Footer />
      </div>
    </>
  )
}