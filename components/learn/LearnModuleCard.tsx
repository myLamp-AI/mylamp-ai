"use client";
import Image from "next/image";
import LearnCollapseCard from "./LearnCollapseCard";
import { useState } from "react";
import { Transition } from 'react-transition-group';

export default function LearnModuleCard() {
  const [showCollapse, setShowCollapse] = useState(false);
  const toggleCollapse = () => {
    setShowCollapse((prev) => !prev); // Toggle the collapse state
    if (!showCollapse) {
      setTimeout(() => {
        setShowCollapse(false); // Close the collapse after the transition duration
      }, 900);
    }
  };
  const duration = 100;


  return (
    <>
      <Transition in={showCollapse} timeout={duration}>
        {state => (
          <div className={`overflow-hidden transition-height duration-${duration} ${state === 'entered' ? 'shadow-lg' : 'none'} bg-white my-3 max-h-max rounded-lg mb-5`}>
            <div
              className={`${showCollapse ? 'shadow-lg' : 'none'} lg:flex grid grid-flow-row  sm:w-30 shadow rounded-t-md pl-2 pr-2 rounded-lg   lg:py-5 py-2 bg-white rouned-b-none mb-3`}
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
              <div className="flex flex-col justify-start h-full lg:items-center lg:mr-7 text-[#737373] lg:mt-8 w-fit item-left">
                <span className="text-sm sm:text-xs md:text-base lg:text-md xl:text-md font-semibold">Grade</span>
                <span className="text-sm lg:text-sm font-semibold lg:mr-4">67%</span>
              </div>



              <div onClick={toggleCollapse} className="lg:flex  hidden ">
                <Image
                  src="/Line 1.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-6 mb-5 border-rad mr-4"
                  width={4}
                  height={8}
                  priority
                />
              </div>

              <div className="lg:mt-6 lg:ml-8 lg:w-2/6 ">
                <div>
                  <p className="text-[#737373] lg:mb-4 font-semibold text-md mt-2 mb-3">
                    Progress
                  </p>
                </div>
                <div className=" rounded-full h-2 flex items-center gap-2">
                  <div className="w-fit text-center align-middle font-semibold text-[#737373] text-[12px]">66%</div>
                  <div className="w-full max-w-[300px] h-[6px] border-[1px] border-[#8C52FF] rounded-lg overflow-hidden">
                    <div className="bg-[#8C52FF] h-full text-white text-center leading-8 " style={{ width: `${80}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="  lg:mr-4 lg:ml-0 ml-2 grid justify-center w-fit  h-full lg:my-14 mt-6  ">
                <Image
                  src="/arrow.svg"
                  alt="Verceldcjncn Logo h-fit w-fit"
                  className={`${showCollapse ? 'rotate-90' : '-rotate-90'}`}
                  width={10}
                  height={10}
                  priority
                />
              </div>
            </div>
            <Transition in={showCollapse} timeout={200}>
              {(state) => (
                <div className={`transition-transform  origin-top duration-200 transform ${state === 'entered' ? 'scale-y-100' : 'scale-y-0'}`}>
                  {showCollapse && (
                    <div>
                      <LearnCollapseCard />
                    </div>
                  )}
                </div>
              )}
            </Transition>
          </div>
        )}
      </Transition>
    </>
  );
}
