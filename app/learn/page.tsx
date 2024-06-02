"use client"
import Image from "next/image";
import LearnModuleCard from "@/components/learn/LearnModuleCard";
import Sidebar from "@/components/Sidebar";

export default function Learn () {
  return (
    <div className="bg-[#E8E2F4]">
      <div className="flex w-full max-w-[1300px] m-auto relative bg-[#E8E2F4]">
        <div className="z-10  "><Sidebar /></div>
        <div className=" inset-y-0 flex flex-col w-full p-3 mt-5 ">
          <div className="w-full justify-between pr-3 pl-3">
            <div className="flex flex-col md:h-96 h-1/3  w-full mb-5 sm:flex-row justify-center  md:justify-between">
              <div className="w-full  lg:w-8/12  mr-0 sm:mb-0 bg-white :w-12 rounded-lg">
                <div className="h-full w-full justify-between p-4   md:flex">
                  <div className="md:h-full  lg:w-[30%] md:w-[40%]  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                    <Image
                      src="/robot002.svg"
                      alt="Verceldcjncn Logo"
                      className="md:object-cover w-[400px] md:h-full h-40 rounded-lg"
                      width={200}
                      height={96}
                    />
                  </div>


                  <div className=" md:w-full max-w-[900px]  h-96 md:h-full bg-white rounded-b lg:rounded-b-none  lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8 relative h-fit">
                      <div className="text-gray-900 font-semibold xl:text-2xl relative w-full  sm:text-[21px] md:text-2xl flex ">
                        Introduction to Machine Learning
                      </div>
                      <div className="flex absolute sm:top-8 w-full md:mt-3  items-center text-[#0166C8] justify-start flex-row lg:gap-4 font-semibold ">
                        <div className="w-full md:w-32 max-w-36  bg-[#E8E2F4] px-7 py-2 text-center rounded-md md:mr-4 text-md ">3 weeks</div>
                        <div className="w-full md:w-32 max-w-36  bg-[#E8E2F4] py-2 px-5 rounded-md text-center text-md ">6 months</div>
                      </div>

                      <div className="flex absolute sm:top-32 w-full items-center justify-start flex-row text-[#737373] font-semibold gap-4">
                        <div className="w-fit">
                          <Image
                            src="/learn/module.svg"
                            alt="Search Icon"
                            width={20}
                            height={20}
                            priority
                            className="w-6 h-6 md:w-6  md:h-6 "
                          />
                        </div>
                        <div className="w-fit  text-center rounded-sm text-sm md:text-[18px]">Module:</div>
                        <div className="w-fit  text-center text-sm md:text-[18px]">Data science</div>
                      </div>
                      <div className="flex absolute sm:top-44   w-full items-center justify-start flex-row gap-4 text-[#737373] font-semibold ">
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
                        <div className="w-fit  text-center rounded-sm text-sm md:text-[18px] ">Chapter:</div>
                        <div className="w-fit text-left text-sm md:text-[18px]  ">Supervise learning and applications</div>
                      </div>

                      <div className="absolute top-60 w-full left-10 max-w-[350px] flex items-center gap-2">
                      <div className="w-fit text-center align-middle mr-auto font-semibold text-[#737373]">66%</div>
                      <div className="w-full max-w-[350px] h-[9px] border-[1px] border-[#8C52FF] rounded-lg overflow-hidden">
                      <div className="bg-[#8C52FF] h-full text-white text-center leading-8" style={{ width: `${80}%` }}></div>
                      </div>
                        </div>


                     

                      <div className="flex absolute sm:top-72  w-full md:h-fit text-[15px] font-semibold gap-10 text-center text-[#8C52FF]">
                        <div className="w-fit px-6 py-2 h-fit hover:bg-[#8C52FF] hover:text-white  border-2 border-[#8C52FF] rounded-md ">View Insights</div>
                        <div className="w-fit p-2 px-6 h-fit border-2 border-[#8C52FF] hover:bg-[#8C52FF]  hover:text-white rounded-md">Resume Learning</div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div className=" ml-6   full sm:w-1/3 hidden lg:block   md:w-4/12 lg:h-96 md:h-full bg-white  rounded-lg"></div>
            </div>
            

            <LearnModuleCard />
            <LearnModuleCard />
            <LearnModuleCard />
            <LearnModuleCard />

          </div>
        </div>
      </div>
      </div>
  );
};