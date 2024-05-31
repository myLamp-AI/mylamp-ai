import Image from "next/image";
import Link from "next/link";

export default function NewSidebar() {
    return (
        <div className="p-2 h-screen fixed bg-[#f5f5f5] top-0 left-0 shadow-md shadow-[#08080870] overflow-y-auto">
            <div className="h-full w-full flex flex-col ml-5 gap-5">
                <div className="flex flex-row transition w-full h-7 ml-1 mt-2 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/home.svg" alt="home" height={20} width={20} className="object-cover" /></div>
                    <Link href="/">Home</Link>
                </div>
                <div className="flex flex-row transition w-full h-7 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/explore.svg" alt="explore" height={20} width={20} /></div>
                    <Link href="/explore">Explore</Link>
                </div>
                <div className="flex flex-row transition w-full h-6 gap-4 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div className="mt-1"><Image src="/learn.svg" alt="learn" height={20} width={20} /></div>
                    <Link href="/learn">Learn</Link>
                </div>
                <div className="flex flex-row transition w-full h-7 gap-4 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div className="mt-1"><Image src="/achieve.svg" alt="achieve" height={20} width={20} /></div>
                    <Link href="/">Achieve</Link>
                </div>
                <div className="flex flex-row transition items-center w-full h-10 gap-4 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/practice.svg" alt="practice" height={20} width={20} /></div>
                    <Link className="mt-2" href="/practice">Practice</Link>
                </div>
                <div className="flex flex-row transition w-full h-9 gap-3 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/projects.svg" alt="projects" height={20} width={20} /></div>
                    <Link className="mt-1" href="/">Projects</Link>
                </div>
                <div className="flex flex-row transition w-full h-7 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/career.svg" alt="career" height={20} width={20} /></div>
                    <Link href="/">Career</Link>
                </div>
                <div className="flex flex-row transition w-full h-7 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div className="flex items-center"><Image src="/mentorship.svg" alt="mentorship" height={20} width={20} /></div>
                    <Link href="/">Mentorship</Link>
                </div>
                <div className="flex flex-row transition w-full h-6 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/blogs.svg" alt="Communitylogs" height={20} width={20} /></div>
                    <Link href="/">Blogs</Link>
                </div>
                <div className="flex flex-row transition w-full h-6 gap-7 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/community.svg" alt="community" height={20} width={20} /></div>
                    <Link href="/community">Community</Link>
                </div>
                <div><Image src="/purplebox.svg" alt="box" width={186} height={110} /></div>
                <div className="w-10/12 h-20 bg-[#E8E2F4] rounded text-base font-medium flex flex-col justify-center items-center gap-2">
                    <div><span>Connect with us</span></div>
                    <div className="flex flex-row gap-1">
                        <div><Image src="/whatsapp.svg" alt="whatsapp" height={30} width={30} /></div>
                        <div><Image src="/linkedin.svg" alt="linkedin" height={30} width={30} /></div>
                        <div><Image src="/instagram.svg" alt="instagram" height={30} width={30} /></div>
                        <div><Image src="/discord.svg" alt="discord" height={30} width={30} /></div>
                        <div><Image src="/youtube.svg" alt="youtube" height={40} width={30} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}