import Image from "next/image";
export default function NewSidebar(){
    return(
        <div className="border-1 border-[#828282] w-60 h-full">
            <div className="h-full w-56 flex flex-col ml-5 gap-5">
                <div className="flex flex-row transition w-full h-7 ml-1 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/home.svg" alt="home" height={25} width={24} /></div>
                    <div><span>Home</span></div>
                </div>
                <div className="flex flex-row transition w-full h-7 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/explore.svg" alt="explore" height={26} width={26}/></div>
                    <div><span>Explore</span></div>
                </div>
                <div className="flex flex-row transition w-full h-6 gap-4 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div className="mt-1"><Image src="/learn.svg" alt="learn" height={18} width={36}/></div>
                    <div><span>Learn</span></div>
                </div>
                <div className="flex flex-row transition w-full h-7 gap-4 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div className="mt-1"><Image src="/achieve.svg" alt="achieve" height={25} width={36}/></div>
                    <div><span>Achieve</span></div>
                </div>
                <div className="flex flex-row transition items-center w-full h-10 gap-4 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/practice.svg" alt="practice" height={37} width={38}/></div>
                    <div className="mt-2"><span>Practice</span></div>
                </div>
                <div className="flex flex-row transition w-full h-9 gap-3 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/projects.svg" alt="projects" height={33} width={41}/></div>
                    <div className="mt-1"><span>Projects</span></div>
                </div>
                <div className="flex flex-row transition w-full h-7 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/career.svg" alt="career" height={29} width={29}/></div>
                    <div><span>Career</span></div>
                </div>
                <div className="flex flex-row transition w-full h-7 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div className="flex items-center"><Image src="/mentorship.svg" alt="mentorship" height={25} width={29}/></div>
                    <div><span>Mentorship</span></div>
                </div>
                <div className="flex flex-row transition w-full h-6 gap-6 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/blogs.svg" alt="Communitylogs" height={20} width={26}/></div>
                    <div><span>Blogs</span></div>
                </div>
                <div className="flex flex-row transition w-full h-6 gap-7 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
                    <div><Image src="/community.svg" alt="community" height={20} width={20}/></div>
                    <div><span>Community</span></div>
                </div>
                <div><Image src="/purplebox.svg" alt="box" width={186} height={110}/></div>
                <div className="w-10/12 h-20 bg-[#E8E2F4] rounded text-base font-medium flex flex-col justify-center items-center gap-2">
                    <div><span>Connect with us</span></div>
                    <div className="flex flex-row gap-1">
                        <div><Image src="/whatsapp.svg" alt="whatsapp" height={30} width={30}/></div>
                        <div><Image src="/linkedin.svg" alt="linkedin" height={30} width={30}/></div>
                        <div><Image src="/instagram.svg" alt="instagram" height={30} width={30}/></div>
                        <div><Image src="/discord.svg" alt="discord" height={30} width={30}/></div>
                        <div><Image src="/youtube.svg" alt="youtube" height={40} width={30}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}