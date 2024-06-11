import HeroSection from "@/components/home/HeroSection";
import AboutWize from '@/components/home/AboutWize';
import WizeCamp from '@/components/home/WizeCamp';
import WhyWize from '@/components/home/WhyWize';
import BackedByBest from '@/components/home/BackedByBest';
import PowerOfWize from '@/components/home/PowerOfWize';
import RecentAdvances from '@/components/home/RecentAdvances';
import CommunitySection from '@/components/home/Community';
import Footer from '@/components/home/Footer';
import HomeSlider from '@/components/home/HomeSlider';
import HomeNavbar from "@/components/home/HomeNavbar";

export default function Page() {
  return (
    <>
      <main className='h-full bg-[#f5f5f5]'>
        <HomeNavbar />
        <HeroSection />
        <AboutWize />
        <WizeCamp />
        <HomeSlider />
        <WhyWize />
        <BackedByBest />
        <PowerOfWize />
        <RecentAdvances />
        <CommunitySection />
        <Footer />
      </main>
    </>
  )
}