"use client";
import Image from "next/image";
import LearnCollapseCard from "./LearnCollapseCard";
import { useState } from "react";

export default function LearnModuleCard() {
  const [showCollapse, setShowCollapse] = useState(false);

  return (
    <>                 
      <div className= {`${showCollapse ? 'border-[0.5px] border-[rgb(130,130,130)]' : 'none'}  bg-white my-3 max-h-max  rounded-lg mb-5`}>
        <div
          className={`${showCollapse ? 'border-[0.5px] border-[rgb(130,130,130)]' : 'none'} lg:flex grid grid-flow-row  sm:w-30 shadow rounded-t-md pl-2 pr-2 rounded-lg   lg:py-5 py-2 bg-white rouned-b-none mb-3`}
          onClick={() => setShowCollapse(!showCollapse)}
        >
          <div className="w-full lg:w-[16%] max-w-[160px] flex justify-center ">
         <Image
        src="/ai.svg"
        alt="Verceldcjncn Logo"
        width={50}
        height={50}
        priority
        className="border lg:ml-4 bg-[#E8E2F4] rounded-full p-3 lg:w-[95px] w-[80px]  mt-6  mb-5 border-rad mr-4"
      />
          </div>
          <div className="lg:w-3/6 lg:grid lg:grid-flow-row ">
            <h4 className="mb-2 lg:mt-2 text-purple-700 font-semibold text-xl  ">
              Module 1
            </h4>
            <h1 className=" sm:text-xs md:text-md mb-4  xl:text-4xl lg:text-3xl md:text-xl font-semibold">
              {" "}
              Tech 101: Starting in Tech
            </h1>
            <p className="md:flex text-sm  text-gray-500">
              {" "}
              7 Lessons    7 weeks     7 credits
            </p>
          </div>
          <div className=" lg:grid lg:justify-center lg:mt-3 lg:w-1/6 lg:mx-auto ">
            <h1 className="  font-bold text-gray-600 xl:text-md sm:text-xs lg:mt-5">
              Grade
            </h1>
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

          <div className="lg:mt-6 ml-8 lg:w-2/6">
            <div>
              <p className="text-gray-600 lg:mb-4 font-bold text-sm mt-2 mb-3">
                Progress
              </p>
            </div>
            <div className="bg-gray-200 rounded-full h-2 flex items-center gap-2">
            <div className="w-fit text-center align-middle font-semibold text-[#737373] text-[12px]">66%</div>
                      <div className="w-full max-w-[200px] h-[6px] border-[1px] border-[#8C52FF] rounded-lg overflow-hidden">
                      <div className="bg-[#8C52FF] h-full text-white text-center leading-8 " style={{ width: `${80}%` }}></div>
                      </div>
            </div>
          </div>
          <div className="lg:mt-10 mt-5 grid justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        {showCollapse && (
          <>
            <LearnCollapseCard />
          </>
        )}
      </div>
    </>
  );
}
