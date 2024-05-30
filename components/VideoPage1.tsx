"use client"
import React,{useEffect, useState} from "react";
import Image from 'next/image'
export default function VideoPage1(){

    const [page,setPage] = useState(1);
    const setDiv = Array(4).fill(null);
    const renderSlideDiv = Array(4).fill(null);
    const renderQnDiv = Array(2).fill(null);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (25 / 100) * circumference;
 
    const prevSlide = () => {
       
        if (page > 1){
            setPage(page-1);
        }
    };
    const nextSlide = () => {
    
        if (page < 24){
            setPage(page+1)
        }
    };
    return (
        <div className="bg-[#E8E2F4]">
            <div className="h-32 w-full flex flex-row justify-center items-center ">
                <div className="hidden lg:flex justify-center items-center gap-9 ">
                    {
                        setDiv.map((items,index) =>(
                            <div className="flex gap-9">
                                <div className="flex flex-row gap-3">
                                {
                                    renderSlideDiv.map((slideitem,slideindex) =>(
                                    <div className={`w-6 h-1 rounded-md ${index*6 + slideindex + 1 <= page ? 'bg-[#000]' : 'bg-[#fff]'}`}></div>
                                    ))
                                }
                                </div>
                                <div className="flex flex-row gap-3">
                                    {
                                    renderQnDiv.map((qnitems,qnindex)=>(
                                        <div className="w-6 h-1 bg-[#8C52FF] rounded-md"></div>
                                    ))
                                    }
                                </div>
                            </div>
                        ))
                    }   
                </div>
            </div>
            <div className="h-96  flex flex-row justify-between items-center">
                <div className="hidden md:flex items-center ml-8"><Image src="/lfarw.svg" alt="arrow" height={20} width={20} onClick={prevSlide}/></div>
                
                <div className="hidden md:flex items-center mr-8"><Image src="/rfarw.svg" alt="invarrow"  height={20} width={20} onClick={nextSlide}/></div>
            </div>
            <div className="h-52 flex justify-between items-center ml-8">
                    <div className="flex flex-row gap-6">
                        <div>
                            <div className="w-40 h-40 relative">
                                <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                                <circle className="text-white" cx="50" cy="50" r="40" fill="transparent" stroke="#f0e9fe" strokeWidth="8"/>
                                <circle className="text-blue-500" cx="50" cy="50" r="40" fill="transparent" stroke="#8C52FF" strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"/>
                                </svg>
                                <div className="absolute inset-0 items-center justify-center flex flex-col">
                                    <Image src="/play bar.svg" alt="playbar" height={100} width={100}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-md md:text-3xl font-medium">Data Analytics</span>
                            <span className="text-md md:text-xl font-medium text-[#737373]">BYTE {page}/24</span>
                        </div>
                    </div>
                    <div className="w-24 h-24 bg-[#ffffff] rounded-full mr-8 flex justify-center items-center"><Image src="/robot icon.svg" alt="bot" height={40} width={40}/></div>
            </div>
        </div>
    );
}