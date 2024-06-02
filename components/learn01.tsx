"use client"
import Image from "next/image";
import LearnModuleCard from "./learn/LearnModuleCard";
import NewSidebar from "./Sidebar";

export default function Learn () {
  return (
    <>
      <div className="flex w-full max-w-[1300px] m-auto relative">
        <div className="z-10  "><NewSidebar /></div>
        <div className=" inset-y-0 flex flex-col w-full p-3 mt-5">
          <div className="w-full justify-between pr-3 pl-3" >
            <div className="flex flex-col lg:h-96 md:h-64  w-full mb-5 sm:flex-row justify-center  lg:justify-between">
              <div className="w-full  md:w-8/12  mr-0 sm:mb-0 bg-white sm:w-1/2 rounded-lg">
                <div className="h-full w-full justify-between p-4   md:flex">
                  <div className="md:h-full  md:w-[30%]  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                    <Image
                      src="/robot002.svg"
                      alt="Verceldcjncn Logo"
                      className="md:object-cover w-[300px] md:h-full h-40 rounded-lg"
                      width={200}
                      height={96}
                    />
                  </div>


                  <div className=" md:w-full max-w-[900px] h-full bg-white rounded-b lg:rounded-b-none  lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8 relative h-full">
                      <p className="text-sm text-gray-600 flex items-center"></p>
                      <div className="text-gray-900 font-bold xl:text-2xl mt-2 sm:text-[19px] lg:text-2xl ">
                        Introduction to Machine Learning
                      </div>
                      <div className="flex absolute md:top-10 w-full lg:mt-3 md:mt-6  items-center text-[#0166C8] justify-start flex-row gap-4">
                        <div className="w-full lg:w-32 sm:w-20 bg-[#E8E2F4] p-[1px] text-center rounded-sm md:mr-4 text-sm lg:text-xl">3 weeks</div>
                        <div className="w-full lg:w-32 sm:w-20 bg-[#E8E2F4] p-[1px] rounded-sm text-center text-sm lg:text-xl">6 months</div>
                      </div>

                      <div className="flex absolute md:top-28 w-full  items-center justify-start flex-row text-[#737373] font-semibold gap-4">
                        <div className="w-fit">
                          <Image
                            src="/learn/module.svg"
                            alt="Search Icon"
                            width={20}
                            height={20}
                            priority
                            className="w-6 h-6 md:w-6 md:h-6"
                          />
                        </div>
                        <div className="w-fit    text-center rounded-sm text-sm lg:text-xl">Module:</div>
                        <div className="w-fit  rounded-sm text-center text-sm lg:text-xl">Data science</div>
                      </div>
                      <div className="flex absolute md:top-40   w-full items-center justify-start flex-row gap-3 text-[#737373] font-semibold">
                        <div className="w-fit">
                          <Image
                            src="/learn/chapter.svg"
                            alt="Search Icon"
                            width={20}
                            height={20}
                            priority
                            className="w-6 h-6 md:w-6 md:h-6"
                          />
                        </div>
                        <div className="w-fit  text-center rounded-sm text-sm lg:text-xl">Chapter:</div>
                        <div className="w-fit rounded-sm text-center text-sm lg:text-xl">Supervise learning and applications</div>
                      </div>

                      <div className="flex absolute lg:top-56 md:top-32  items-center w-full justify-center">
                        <div className="flex items-center justify-end">
                          <Image
                            src="/percentage bar.svg"
                            alt="Verceldcjncn Logo"
                            className="mt-6" // Removed mx-auto, as the parent container is already centered
                            width={400}
                            height={1}
                            priority
                          />
                        </div>
                      </div>

                      <div className="flex absolute top-72 w-full h-fit text-[15px] font-semibold gap-10 text-center">
                        <div className="w-fit px-6 py-2 h-fit hover:bg-[#8C52FF] hover:text-white  border-2 border-[#8C52FF] rounded-sm ">View Insights</div>
                        <div className="w-fit p-2 px-6 h-fit border-2 border-[#8C52FF] hover:bg-[#8C52FF]  hover:text-white rounded-sm">Resume Learning</div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div className=" ml-6   full sm:w-1/3 hidden md:block   md:w-4/12 lg:h-96 md:h-full bg-white  rounded-lg"></div>
            </div>
            

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