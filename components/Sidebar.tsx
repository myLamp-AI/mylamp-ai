"use client"
import { useState, useRef, useEffect } from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavLinks from '@/components/navbar/NavItems'
import navData from '@/components/navbar/navLinks.json'
import smData from '@/app/data/navsocialicon.json'

export default function NewSidebar() {
    const pathname = usePathname();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navLen = navData.length;
    const socialLen = smData.length;
    const navRender = Array(navLen).fill(null);
    const smRender = Array(socialLen).fill(null);
    const sidebarRef = useRef(null);
    const arrowRef = useRef(null);
    const handleClickOutside = (event: any) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            arrowRef.current &&
            !arrowRef.current.contains(event.target)
        ) {
            setIsSidebarVisible(false);
        }
    };

    const handleArrowClick = () => {
        setIsSidebarVisible(true);
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sidebarRef} className="flex flex-row absolute top-0">
            <div className={` h-[100vh] fixed bg-[#f5f5f5] top-0 left-0 shadow-md shadow-[#08080870] pt-16 gap-1 transition-transform duration-300  ${isSidebarVisible || isHovered ? 'transform-none' : '-translate-x-full'} z-10 flex flex-col`}
            >
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
            <div ref={arrowRef} className="flex h-[100vh] items-center fixed animate-bounce" onMouseEnter={handleArrowClick}><Image src="/rfarw.svg" alt="arw" height={10} width={10} className='w-8 h-8 rounded-full bg-[#766f6f66]' onClick={handleArrowClick} /></div>
        </div>
    );
}