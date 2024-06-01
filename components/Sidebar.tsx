"use client"
import Image from "next/image";
import React, { useState } from 'react';
import navData from '@/components/navbar/navLinks.json'
import smData from '@/app/data/navsocialicon.json'
import NavLinks from '@/components/navbar/NavItems'
export default function NewSidebar() {
    const navLen = navData.length;
    const socialLen = smData.length;
    const navRender = Array(navLen).fill(null);
    const smRender = Array(socialLen).fill(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleArrowClick = () => {
        setIsSidebarVisible(true);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsSidebarVisible(false);
    };
    return (
        <div className="flex flex-row z-10">
            <div className={`p-2 h-screen fixed bg-[#f5f5f5] top-0 left-0 shadow-md shadow-[#08080870] mt-16 gap-4 transition-transform duration-300 ${isSidebarVisible || isHovered ? 'transform-none' : '-translate-x-full'} `} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <div className="h-full w-full flex flex-col mr-6">
                    <div className="w-fit h-[500px] flex flex-col ml-5 gap-5 overflow-x-clip overflow-y-auto scrollbar-hide"> 
                        {
                            navRender.map((item,navindex)=>(
                                <NavLinks key={navindex} name={navData[navindex].name} icon={navData[navindex].icon} Link={navData[navindex].Link}/>
                            ))
    
                        }
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="w-12 h-12 border-4 rounded-full border-[#f5f5f5] absolute z-10">
                            <Image src="/avtar.svg" alt="pfp" height={50} width={50}/>
                        </div>
                        <div className="w-11/12 h-24 border-2 bg-[#8c52ff] rounded-xl relative top-5"></div>
                    </div>
                    <div className="w-full h-20 bg-[#E8E2F4] rounded text-base font-medium flex flex-col justify-center items-center gap-2 mt-7">
                        <div><span>Connect with us</span></div>
                        <div className="flex flex-row gap-1.5">
                            {
                                smRender.map((item,smindex) =>(
                                    <div key={index}>
                                        <div className="w-7 h-7"><img src={smData[smindex].icon} alt={smData[smindex].name} /></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-screen  items-center" onClick={handleArrowClick}><Image src="/rfarw.svg" alt="arw" height={10} width={10}/></div>
        </div>
    );
}