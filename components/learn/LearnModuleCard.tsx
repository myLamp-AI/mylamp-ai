"use client"
import Image from "next/image";
import LearnCollapseCard from "./LearnCollapseCard";
import { useState } from "react";

export default function LearnModuleCard() {
    const [showCollapse, setShowCollapse] = useState(false);
   



    return (
        <>
            <div  className="bg-white my-3 max-h-max  rounded-lg mb-5">
                <div className=" lg:flex grid grid-flow-row  sm:w-30 shadow rounded-t-md p-2 rouned-b-none mb-3">
                    <div className="w-full lg:w-1/6  ">
                        <img
                            src="/ai.svg"
                            alt="Verceldcjncn Logo"
                            className="border lg:ml-4 bg-purple-100 rounded-full p-2 lg:w-30    mt-6  mb-5 border-rad mr-4"
                          
                            
                        />
                    </div>
                    <div onClick={() => setShowCollapse(!showCollapse)} className="lg:w-3/6 lg:grid lg:grid-flow-row ">
                        <h4   className="mb-2 lg:mt-2 underline text-purple-700 font-bold">
                            Module 1
                        </h4>
                        <h1 className=" sm:text-xs md:text-md mb-4  xl:text-4xl font-bold">
                            {" "}
                            Tech 101: Starting in Tech
                        </h1>
                        <p className="md:flex text-sm font-bold text-gray-500">
                            {" "}
                            7 Lessons 7 weeks 7 credits
                        </p>
                    </div>
                    <div className=" lg:grid lg:justify-center lg:mt-3 lg:w-1/6 lg:mx-auto ">
                        <h1 className="  font-bold text-gray-600 xl:text-md sm:text-xs lg:mt-5">Grade</h1>
                        <span className="text-sm">66%</span>
                    </div>

                    <div className="lg:flex  hidden ">
                        <Image
                            src="/Line 1.svg"
                            alt="Verceldcjncn Logo"
                            className="mt-6 mb-5 border-rad mr-4"
                            width={4}
                            height={8}
                            priority
                        />
                    </div>

                    <div className="mt-4 lg:w-2/6">
                       

                        <div>
                            <p className="text-gray-600 lg:mb-4 font-bold text-sm mt-2 mb-3">Progress: 66%</p>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500  rounded-full h-2"></div>
                        </div>
                    </div>
                    <div  className="lg:mt-10 mt-5 grid justify-center" >
                    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5" // Corrected to camelCase
    stroke="currentColor"
    className="w-6 h-6"
>
    <path
        strokeLinecap="round" // Corrected to camelCase
        strokeLinejoin="round" // Corrected to camelCase
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
</svg>

                    </div>

                    
                </div>
                {
                    showCollapse && (
                        <>
                            <LearnCollapseCard />

                        </>
                    )
                }
            </div>
        </>
    )
}