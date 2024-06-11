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
  const duration = 0;

  return (
    <>
      <Transition in={showCollapse} timeout={duration}>
        {state => (
          <div className={`overflow-hidden transition-height duration-${duration} ${state === 'entered' ? 'shadow-lg bg-white' : ''}  my-3  md:max-h-max  rounded-lg w-full   md:mx-0 mx-auto  mb-2 bg-[#E8E2F4]  `}>
            <div
              className={`${showCollapse ? 'shadow-lg' : ''
                } flex items-center justify-between  sm:justify-center  grid-flow-row sm:w-30 pl-2 pr-2  lg:py-5 py-2 bg-white rounded-lg  mb-3 md:items-start md:justify-start`}
              onClick={() => setShowCollapse(!showCollapse)}
            >
              <div className="sm:w-full  md:w-[16%] max-w-[160px] flex justify-center md:ml-0 sm:-ml-9   ">
                <Image
                  src="/ai.svg"
                  alt="Verceldcjncn Logo"
                  width={50}
                  height={50}
                  priority
                  className="border lg:ml-4 bg-[#E8E2F4] rounded-full p-3 lg:w-[95px] w-[80px]  md:mt-6 my-3  md:mb-5 border-rad mr-4"
                />
              </div>
              <div className="md:w-3/6 md:grid  sm:ml-0 -ml-9 sm:my-0 my-auto md:grid-flow-row lg:mt-0 md:mt-3  ">
                <h4 className="mb-2 lg:mt-2 text-purple-700 font-semibold text-xl mt-3  ">
                  Module 1
                </h4>
                <h1 className=" sm:text-lg md:text-md mb-4  xl:text-4xl  md:text-2xl lg:text-3xl font-semibold">
                  {" "}
                  Tech 101: Starting in Tech
                </h1>
                <p className="md:flex text-sm  text-gray-500 sm:block hidden">
                  {" "}
                  7 Lessons    7 weeks     7 credits
                </p>
              </div>
              
              <div className="md:flex hidden flex-col  justify-start h-full md:items-center md:mr-7 text-[#737373] md:mt-11 lg:mt-8 w-fit item-left">
                <div className="text-sm sm:text-xs md:text-sm lg:text-lg   font-semibold">Grade</div>
                <div className="text-sm lg:text-sm font-semibold md:text-xs  ">67%</div>
              </div>



              <div onClick={toggleCollapse} className="md:flex hidden ">
                <Image
                  src="/Line 1.svg"
                  alt="Verceldcjncn Logo"
                  className="lg:mt-6 lg:mb-5 border-rad mr-4 md:mt-8  "
                  width={4}
                  height={8}
                  priority
                />
              </div>

              <div className="lg:mt-6 lg:ml-8 md:w-2/6 md:block hidden  md:mt-8 ">
                <div className="">
                  <p className="text-[#737373] lg:mb-4 font-semibold lg:text-lg md:text-sm  mt-2 mb-3 ">
                    Progress
                  </p>
                </div>
                <div className=" rounded-full h-2 flex items-center gap-2   ">
                  <div className="w-fit text-center align-middle font-semibold text-[#737373] lg:text-[12px] md:text-[9px]">66%</div>
                  <div className="lg:w-full md:w-36 max-w-[300px] h-[6px] border-[1px] border-[#8C52FF] rounded-lg overflow-hidden">
                    <div className="bg-[#8C52FF] h-full text-white text-center leading-8 " style={{ width: `${80}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="  md:mr-4 md:ml-0 sm:ml-2 ml-1  grid justify-center w-fit  h-full md:my-14 sm:mt-6 sm:my-0 my-auto">
                <Image
                  src="/arrow.svg"
                  alt="Verceldcjncn Logo"
                  className={`${showCollapse ? 'rotate-90' : '-rotate-90'} w-4 h-4 `}
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
