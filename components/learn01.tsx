"use client"
import Link from "next/link";
import Image from "next/image";

import LearnModuleCard from "./learn/LearnModuleCard";
import NewSidebar from "./Sidebar";

const Sidebar02 = () => {
  return (
    <>
      <div className="flex  bg-[#E8E2F4] w-full relative">

      <div className="z-10  "><NewSidebar /></div>
        <div className=" bg-[#E8E2F4] absolute inset-y-0  right-0 flex flex-col w-full p-3 mt-5">
          <div className="w-full justify-between bg-[#E8E2F4] pr-3 pl-3" >
            <div className="flex flex-col lg:h-96 md:h-64  w-full mb-5 sm:flex-row justify-center  lg:justify-between">
              <div className="w-full  md:w-8/12  mr-0 sm:mb-0 bg-white sm:w-1/2 rounded-lg">
                <div className="h-full w-full justify-between p-4   md:flex">
                <div className="md:h-full  md:w-[30%]  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                <Image
         src="/robot002.svg"
        alt="Verceldcjncn Logo"
        className="md:object-cover w-full md:h-full h-40 rounded-lg"
        width={200}
        height={96}
    />
                   </div>


                  <div className=" md:w-[70%] md:h-full bg-white rounded-b lg:rounded-b-none relative lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8 h-full">
                      <p className="text-sm text-gray-600 flex items-center"></p>
                      <div className="text-gray-900 font-bold text-xl mb-2 ">
                        Introduction to Machine Learning
                      </div>
                      <div className="flex absolute md:bottom-20 sm:bottom-10 items-center justify-center bg-red-300">dvfvf
                        </div>
                     
                      <div className="flex absolute md:bottom-14 items-center justify-center">
                      <div className="flex items-center justify-center">
                      <Image
                      src="/percentage bar.svg"
                       alt="Verceldcjncn Logo"
                       className="mt-6" // Removed mx-auto, as the parent container is already centered
                       width={500}
                        height={1}
                       priority
                       />
                          </div>
                        </div>

                    </div>
                    
                  </div>
                </div>
              </div>
              <div className=" ml-6   full sm:w-1/3 hidden md:block   md:w-4/12 lg:h-96 md:h-full bg-white  rounded-lg"></div>
            </div>
            {/* ---------------------------long-card-------------------------------------- */}

            <LearnModuleCard />

            <LearnModuleCard />
            <LearnModuleCard />
            <LearnModuleCard />

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar02;