"use client"
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import data from "../data/data.json"


export default function Explore() {
    const [value, setValue] = useState([...data])
    const [number, setNumber] = useState(0);
    const renderData = Array(8).fill(value);

    return (
            <div className="w-full scrollbar-hide flex flex-row justify-center">
                <div className="w-full max-w-[1300px] h-full flex flex-col gap-3 scrollbar-hide shadow-xl ">
                    <div className="w-full flex flex-row  mt-5 gap-4">
                        <div className="h-full w-full lg:w-8/12 bg-white border rounded-xl flex flex-row">
                            <div className="flex flex-col gap-1 p-2 sm:w-2/3">
                                <div className="text-2xl font-medium font-sans mt-4 ml-4">Journey through GenAI and LLMS</div>
                                <div className="mt-4 flex justify-center md:hidden"><Image src="/person.svg" alt="person" height={300} width={300} /></div>
                                <div className="h-7 w-full gap-x-4 flex flex-row mt-5 ">
                                    <div className="h-7 w-28 ml-2.5 border bg-[#e8e2f4] flex justify-center items-center text-[#0166C8] rounded-md text-md">3 Weeks</div>
                                    <div className="h-7 w-28 bg-[#e8e2f4] border rounded-md flex justify-center items-center text-[#0166C8] text-md">Online</div>
                                </div>
                                <div className="h-7 gap-x-4 flex flex-row flex-wrap items-center mt-5 ml-6 text-md font-semibold text-[#737373]">
                                    <div className="flex flex-row items-center gap-x-2.5"><Image src="/domain.svg" alt="domain" height={20} width={20} /><span >Domain</span></div>
                                    <div>Bootcamp: Data Science</div>
                                </div>
                                <div className="h-7 gap-x-4 flex flex-row mt-7 ml-6 text-md font-semibold text-[#737373]">
                                    <div className="flex flex-row gap-x-2.5"><Image src="/venue.svg" alt="domain" height={20} width={20} /><span>Venue</span></div>
                                    <div>Online, Zoom</div>
                                </div>
                                <div className="h-11 gap-x-4 flex flex-row mt-6 text-md text-[#737373]">
                                    <div className="flex flex-row items-center bg-[#e8e2f4] border rounded-3xl gap-x-4 ml-2 w-64"><Image src="/time.svg" alt="domain" width={30} height={30} /><span>3-5 June, 2024 5.00PM</span></div>
                                    <div className="flex items-center">7 days to go</div>
                                </div>
                                <div className="h-11 gap-x-4 flex flex-row mt-5 ml-6 text-base">
                                    <button className="h-11 w-40 border-2 border-purple-700 rounded-xl bg-white">Past Workshops</button>
                                    <button className="h-11 w-40 rounded-xl bg-purple-700 text-white" >Join Workshop</button>
                                </div>
                            </div>
                            <div className="w-full h-full mb-2 hidden md:flex justify-end">
                                <Image src="/person.svg" alt="person" width={300} height={300} />
                            </div>
                        </div>
                        <div className=" border rounded-xl hidden lg:flex flex-grow justify-center items-center bg-[#ffffff]">
                            <Image src="/compass.svg" alt="compass" width={300} height={300} className="flex" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <div className="h-20 w-full flex flex-row">
                            <div className="w-1/12 flex flex-col justify-end items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-[#8C52FF]"></div>
                                <div className="h-10 w-px bg-[#737373]"></div>
                            </div>
                            <div className="w-full flex items-center">
                                <div className=" text-[#8C52FF]">Block 1: Exploring Careers</div>
                            </div>
                        </div>
                        <div className="w-full">
                            {
                                renderData.map((item, index) => (
                                            <div key={index} className="w-full">
                                                <div className="h-32 group relative left-0 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                                                    <div className="w-1/12 flex flex-col items-center">
                                                        <div className="h-16 w-px bg-[#737373] group-hover:h-20"></div>
                                                        <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                                        <div className="h-14 w-px bg-[#737373] group-hover:h-16"></div>
                                                    </div>
                                                    <div className=" w-full bg-[#FFFFFF] rounded-lg mb-5 flex flex-col">
                                                        <div className="flex flex-row mt-4 ml-2.5">
                                                            <div className="ml-1"><Image src="/mlimage.svg" height={75} width={75} alt="mlimage" /></div>
                                                            <div className="ml-11 mt-3" >
                                                                <div>
                                                                    <span className="text-base leading-5 font-semibold">{item[0].name}</span>
                                                                    <div className="flex gap-4">
                                                                        <span>{item[1].time}</span>
                                                                        <span>|</span>
                                                                        <span>{item[2].byte}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="ml-2 mr-3 mt-1.5 child opacity-0 group-hover:opacity-100 transition-opacity"><Link href="explore/bytes"><button className="bg-[#8C52FF] h-9 w-full ml-1 rounded-xl text-[#fff] font-medium ">Start Exploring</button></Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
}