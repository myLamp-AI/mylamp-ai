"use client";
import Image from "next/image";
import React, { useState, useRef } from 'react';
import { FaStar } from "react-icons/fa";
import Exdata from "@/app/data/Assessment.json";
import Alldata from "@/app/data/Allassessment.json";
import codingdata from "@/app/data/codingassmnt.json";
import Carousel from "@/components/practice/MyCarousel";

export default function Practice() {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (25 / 100) * circumference;
    const items = Array(3).fill(null);
    const sets = Array(30).fill(null);
    const [asmtVisible, setAsmtVisible] = useState(false);
    function toggleAsmtVisible() {
        setAsmtVisible(!asmtVisible);
    }
    const ExdataLen = Exdata.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);


    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -200, // Adjust the scroll distance as needed
                behavior: 'smooth'
            });
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 200, // Adjust the scroll distance as needed
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className="w-full flex justify-center">
            <div className="bg-[#F1EAFF] w-full max-w-[1200px] max-h-[720px] flex flex-wrap lg:flex-nowrap" >
                <div className="w-full h-full flex flex-col gap-3 pl-4 pt-3 overflow-y-auto scrollbar-hide">
                    <div className=" text-[#737373] font-semibold flex flex-col gap-2.5">
                        <div className="font-bold">Let&apos;s Rock!</div>
                        <span className="text-[#A6A6A6]">Practice regularly to achieve perfection</span>
                        <div className="relative">
                            <input type="text" className="pl-10 pr-4 py-2 w-11/12 border rounded-lg" placeholder="Search Problems" />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Image src="/practice/search-lens.svg" alt="search" width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    <Carousel/>
                    <div className="flex flex-col gap-3 overflow-x-clip">
                        <div className="flex flex-row justify-between">
                            <span className="text-base font-semibold">All Assessments</span>
                            <button className="text-sm font-semibold text-[#8c52ff]">See All</button>
                        </div>
                        <div>
                            <div className="grid grid-cols-2  gap-4 ">
                                {
                                    Alldata.map((item, index) => (
                                        <>
                                            <div key={item.id} className="bg-[#ffffff] rounded-lg flex flex-row justify-between h-32">
                                                <div className="w-1/2  ml-4 flex flex-col gap-y-6 justify-center text-base font-semibold ">
                                                    {item.name}
                                                    <button className="w-20 bg-[#8c52ff] rounded-2xl flex flex-row justify-between items-center shadow shadow-[#737373]" onClick={toggleAsmtVisible}>
                                                        <span className="ml-2 text-[#ffffff] font-medium" >Start</span>
                                                        <Image src="/practice/conarrow.svg" alt="arrow" width={25} height={25} />
                                                    </button>
                                                </div>
                                                <div>
                                                    <Image src={`${item.svg}`} alt={`svg${index + 1}`} width={184.18} height={150.64} />
                                                </div>
                                            </div>
                                            {
                                                index % 2 === 1 &&
                                                <div className={`col-span-2 w-full bg-[#fff] flex justify-center rounded-lg ${asmtVisible ? 'flex' : 'hidden'}`}>
                                                    <div className="w-10/12 flex flex-col gap-3 mt-6 mb-6 ">
                                                        {
                                                            codingdata.map((item, index) => (
                                                                <div key={index} className="flex flex-row w-full h-10 gap-8" >
                                                                    <div className="flex flex-row w-9/12 h-full bg-[#F1EAFF] rounded-full gap-4 items-center">
                                                                        <div><Image src={codingdata[index].svg} alt="img" height={10} width={10} className="h-10 w-10"/></div>
                                                                        <div className="text-[#737373] text-md font-semibold">{codingdata[index].name}</div>
                                                                    </div>
                                                                    <button className="w-4/12 h-10 border-2 border-[#8C52FF] rounded-full text-[#2561A1] font-semibold flex justify-center items-center shadow-lg">Start Now</button>
                                                                </div>
                                                            ))
                                                        }

                                                    </div>
                                                </div>
                                            }
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[550px] flex flex-col gap-2 p-3 mt-1 lg:mt-0">
                    <div className="h-1/2 flex flex-col m-2 mt-3 bg-[#ffffff] rounded-xl">
                        <div className="flex flex-row justify-around h-1/2 m-2">
                            <div className="w-40 h-40 relative">
                                <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                                    <circle className="text-gray-200" cx="50" cy="50" r="40" fill="transparent" stroke="#f0e9fe" strokeWidth="8" />
                                    <circle className="text-blue-500" cx="50" cy="50" r="40" fill="transparent" stroke="#8C52FF" strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 items-center justify-center flex flex-col">
                                    <span className="text-lg font-semibold">6</span>
                                    <span className="text-base font-medium">Assessment</span>
                                    <span className="text-base font-medium">Taken</span>
                                </div>
                            </div>
                            <div className="w-40 h-40 relative">
                                <svg className="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                                    <circle className="text-gray-200" cx="50" cy="50" r="40" fill="transparent" stroke="#f0e9fe" strokeWidth="8" />
                                    <circle className="text-blue-500" cx="50" cy="50" r="40" fill="transparent" stroke="#8C52FF" strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 items-center justify-center flex flex-col">
                                    <span className="text-lg font-semibold">27</span>
                                    <span className="text-base font-medium">Questions</span>
                                    <span className="text-base font-medium">Solved</span>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-row justify-around h-1/2 m-5 gap-4">
                            <div className="h-32 border-2 rounded-md border-[#ebedf1] w-full text-lg font-semibold"><span className="ml-2 mt-2">Badges</span></div>
                            <div className="h-32 border-2 rounded-md border-[#ebedf1] w-full text-lg font-semibold"><span className="ml-2 mt-2">Focused Area</span></div>
                        </div>
                    </div>
                    <div className="bg-[#ffffff] h-1/2 m-3  flex flex-col gap-y-3 rounded-xl pb-4">
                        <div className="flex flex-row justify-around h-1/5">
                            <span className="text-lg font-semibold mt-3">Apr 2024-June 2024</span>
                            <div className="flex flex-row mt-3">
                                <div className="w-9 h-9 rounded-full border-[#F1EAFF] border-2 flex items-center justify-center"><Image src="/practice/lfarw.svg" alt="lft" width={7.89} height={14.99} /></div>
                                <div className="w-9 h-9 rounded-full border-[#F1EAFF] border-2 flex items-center justify-center"><Image src="/practice/rfarw.svg" alt="rft" width={7.89} height={14.99} /></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 place-items-center">
                            {
                                items.map((items, itemindex) => (
                                    <div key={itemindex} className="container grid grid-cols-5 gap-2 place-content-center">
                                        {
                                            sets.map((item, setindex) => (
                                                <div className="h-4 w-4 bg-[#ebedf1] rounded " key={setindex}></div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className="h-1/5 flex flex-col gap-4">
                            <div className="flex flex-row gap-4 justify-center mt-3">
                                <div className="flex flex-row gap-3">
                                    <div className="flex flex-row">
                                        <div className="bg-[#94e4bd] h-6 w-6 border-2 rounded-md"></div>
                                        <div className="bg-[#03c165] h-6 w-6 border-2 rounded-md"></div>
                                        <div className="bg-[#038747] h-6 w-6 border-2 rounded-md"></div>
                                        <div className="bg-[#014926] h-6 w-6 border-2 rounded-md"></div>
                                    </div>
                                    <span className="text-[#727272] font-medium">Questions</span>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="flex justify-center items-center border-2 rounded border-[#dadce0] w-6 h-6 "><FaStar style={{ color: 'rgb(3, 193, 101)' }} /></div>
                                    <span className="text-[#727272] font-medium">POTD question</span>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center gap-4">
                                <span className="text-[#727272] font-medium">Current Streak:0</span>
                                <span className="text-[#727272] font-medium">Max Streak:0</span>
                                <span className="text-[#727272] font-medium">Global Max Streak:45</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
