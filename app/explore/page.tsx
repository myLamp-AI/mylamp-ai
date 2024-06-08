"use client"
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavLinks from '@/components/navbar/NavItems'
import navData from '@/components/navbar/navLinks.json'
import smData from '@/app/data/navsocialicon.json'
import Explore1 from '@/components/explore/Explore'
export default function Explore() {
    // sidebar consts
    const pathname = usePathname();
    const navLen = navData.length;
    const socialLen = smData.length;
    const navRender = Array(navLen).fill(null);
    const smRender = Array(socialLen).fill(null);
    //practice consts
    //Dummy consts
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const mainContentRef = useRef(null);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    useEffect(() => {
        if (mainContentRef.current) {
            mainContentRef.current.style.width = isSidebarOpen ? 'calc(100% - 200px)' : '100%';
        }
    }, [isSidebarOpen]);

    return (
        <div className="flex h-full">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-56' : 'w-8'} transition-all duration-300 flex flex-row `}>
                <div className={`${isSidebarOpen ? 'w-48' : 'w-0'} transition-all duration-500`}>
                    {
                        isSidebarOpen &&
                        <div className={`gap-1 flex flex-col bg-[#fff] fixed`}>
                            <div className="w-fit h-[500px] flex flex-col gap-7 overflow-x-clip overflow-y-auto scrollbar-hide mr-6">
                                {
                                    navRender.map((item, navindex) => {
                                        const isActive = pathname === navData[navindex].Link;
                                        return (
                                            <div key={navindex}>
                                                <NavLinks name={navData[navindex].name} icon={navData[navindex].icon} Link={navData[navindex].Link} index={navindex} />
                                            </div>
                                        );
                                    })

                                }
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <div className="w-12 h-12 border-4 rounded-full border-[#f5f5f5] absolute z-10">
                                    <Image src="/avtar.svg" alt="pfp" height={50} width={50} />
                                </div>
                                <div className="w-11/12 h-24 border-2 bg-[#8c52ff] rounded-xl relative top-5"></div>
                            </div>
                            <div className="w-full h-20 bg-[#E8E2F4] text-lg font-medium flex flex-col justify-center items-center gap-2 mt-6 rounded-lg">
                                <div className="flex flex-row gap-1.5 font-semibold">
                                    {
                                        smRender.map((item, smindex) => (
                                            <div key={smindex}>
                                                <div className="w-7 h-7"><Image src={smData[smindex].icon} alt={smData[smindex].name} height={100} width={100} /></div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <span>Connect with us</span>
                            </div>

                        </div>
                    }
                </div>
                <div className='h-[90vh] rounded-lg flex items-center justify-center w-8 relative left-0'><Image src="/sidebar/whiterfarw.svg" height={10} width={10} alt='img' className={`w-8 h-8 bg-[#8c52ff] rounded-full ${isSidebarOpen ? 'rotate-180 delay-300' : ''}`} onClick={toggleSidebar} /></div>

            </div>
            {/* Main Content */}
            <div ref={mainContentRef} className="bg-gray-200 flex-1 transition-all duration-300">
                <Explore1 />
            </div>
        </div>
    );
};
