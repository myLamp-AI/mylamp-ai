"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';

const HomeNavbar = () => {
    const [scroll, setScroll] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div className={`flex justify-between gap-4 ${!scroll ? "bg-[#E9DEFF]" : ""} transition px-8 py-2 sticky top-0 w-full z-50`}>
                <Image src={"/home/logo.svg"} height={100} width={100} alt='logo' className='w-[130px] drop-shadow-md '></Image>
                <div className='flex bg-[#ffffff90] items-center gap-8 px-8 py-2 backdrop-blur-md font-medium rounded-full shadow-sm'>
                    <div>Home</div>
                    <div>Community</div>
                    <div>Resources</div>
                    <div>Company</div>
                    <button className='bg-[#8C52FF] text-white px-6 py-1 rounded-full'>Sign In</button>
                </div>
            </div>
        </>
    )
}

export default HomeNavbar