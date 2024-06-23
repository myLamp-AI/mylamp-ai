"use client";
import Image from 'next/image'
import Link from 'next/link';
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
            <div className={`flex justify-between gap-4 ${!scroll ? "bg-primary-foreground" : "bg-[#ffffff20]"} backdrop-blur-sm transition px-8 py-2 sticky top-0 w-full z-50`}>
                <Link href={"/"}><Image src={"/home/logo.svg"} height={100} width={100} alt='logo' className='w-[130px] drop-shadow-md '></Image></Link>
                <div className='flex justify-between bg-[#ffffff90] items-center w-full max-w-[600px] gap-2 pr-2 pl-4 py-2 backdrop-blur-md font-medium rounded-full shadow-sm'>
                    <Link href={"/"} className='hover:bg-primary-foreground transition-all py-2 px-4 rounded-full'>Home</Link>
                    <Link href={"/"} className='hover:bg-primary-foreground transition-all py-2 px-4 rounded-full'>Community</Link>
                    <Link href={"/"} className='hover:bg-primary-foreground transition-all py-2 px-4 rounded-full'>Resources</Link>
                    <Link href={"/"} className='hover:bg-primary-foreground transition-all py-2 px-4 rounded-full'>Company</Link>
                    <button className='flex items-center bg-[#8C52FF] text-white pl-4 pr-2 py-2 gap-2 rounded-full'>Sign In
                        <Image src={"/home/userNavbar.svg"} alt='' height={25} width={25}></Image>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeNavbar