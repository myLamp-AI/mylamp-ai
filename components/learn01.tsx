"use client"
import Link from "next/link";
import Image from "next/image";

import LearnModuleCard from "./learn/LearnModuleCard";
import NewSidebar from "./Sidebar";

const Sidebar02 = () => {
  return (
    <>
      <div className="flex  bg-[#E8E2F4] justify-around ">

      <div className="z-10"><NewSidebar /></div>
        <div className=" bg-purple-100 container mr-6 relative flex flex-col justify-between w-full h-full  px-5  xl:px-0 mt-5">
          <div className="w-full justify-between bg-[#E8E2F4]" >
            <div className="flex flex-col lg:h-96  w-full mb-5 sm:flex-row justify-center  lg:justify-between">
              <div className="w-full  lg:w-8/12 md:w-full mr-0 sm:mb-0 bg-white sm:w-1/2 rounded-lg">
                <div className="h-full w-full justify-between p-4   md:flex">
                <div className="lg:h-full md:w-2/5 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                <Image
         src="/robot002.svg"
        alt="Verceldcjncn Logo"
        className="object-cover w-full h-full rounded-lg"
        width={200}
        height={96}
    />
</div>


                  <div className=" md:w-3/5  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center"></p>
                      <div className="text-gray-900 font-bold text-xl mb-2 ">
                        Introduction to Machine Learning
                      </div>
                      <div className="flex ">
                        <p className="text-gray-700 text-sm bg-purple-100 mr-4 inline-block rounded-sm p-1">
                          3 Weeks
                        </p>
                        <p className="text-gray-700 text-sm bg-purple-100 inline-block rounded-sm p-1">
                          {" "}
                          6 Months
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="mt-2 text-gray-700 text-sm">
                          Module : Data Science
                        </p>
                        <p className="text-gray-700 text-sm">
                          Chapter : supervise Learning
                        </p>
                      </div>
                      <div className="flex">
                       
                        <Image
                          src="/percentage bar.svg"
                          alt="Verceldcjncn Logo"
                          className="mt-6  mr-4"
                          width={500}
                          height={24}
                          priority
                        />
                      </div>
                    </div>
                    <div className="flex items-center md:w-full md:justify-around mr-4">
                      <div className=" flex text-sm md:justify-around md:w-full ">
                        <button className="mr-4 bg-purple-700 p-2 rounded-sm font-bold-md text-white">
                          view insights
                        </button>
                        <Link  href ="/learn/chapters" className=" bg-purple-700 p-2 md:w-36 md:h-fit rounded-md font-bold-md text-white">
                          <h2 className="ml-2">Resume learning</h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ml-6 bg-white full sm:w-1/3 hidden lg:block  md:w-4/12 md:h-96 rounded-lg"></div>
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