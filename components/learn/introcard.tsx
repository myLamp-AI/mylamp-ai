
import React from "react";
import Image from "next/image";
import { useState } from "react";
export default function IntroCard() {
  const [progress, setProgress] = useState(90);
  return (

    <>

      <div className="bg-white w-full h-fit block sm:hidden p-4 ">
        <h1 className="text-[20px] font-bold text-center mt-4">Introduction to Machine Learning</h1>
        <div className="text-center mt-4 text-sm">
          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-[#E8E2F4] text-[#0166C8] py-2 px-4 text-xs rounded">3 Weeks</button>
            <button className="bg-[#E8E2F4] text-[#0166C8] py-2 text-xs px-4 rounded">6 Weeks</button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 text-[#737373] font-semibold gap-4">
          <div className="flex items-center gap-2 w-full max-w-[350px]">
            <Image
              src="/learn/module.svg"
              alt="Module Icon"
              width={20}
              height={20}
              priority
              className="w-5 h-5"
            />
            <div className="text-sm ">Module:</div>
            <div className="text-sm md:text-lg">Data science</div>
          </div>
          <div className="flex items-center gap-2 w-full max-w-[350px]">
            <Image
              src="/learn/chapter.svg"
              alt="Chapter Icon"
              width={20}
              height={20}
              priority
              className="w-5 h-5"
            />
            <div className="text-sm md:text-lg">Chapter:</div>
            <div className="text-sm md:text-lg">Supervised learning and applications</div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 w-full">
          <div className="w-full max-w-[350px] flex items-center gap-2">
            <div className="w-fit text-center align-middle font-semibold text-sm text-[#737373]">{progress}%</div>
            <div className="w-full max-w-80 h-[7px] border-[1px] border-[#8C52FF] rounded-lg overflow-hidden">
              <div className="bg-[#8C52FF] h-full text-white text-center leading-8" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-[#E8E2F4] text-[#0166C8] py-2 px-4 rounded">3 Weeks</button>
            <button className="bg-[#E8E2F4] text-[#0166C8] py-2 px-4 rounded">6 Weeks</button>
          </div>
      </div>


    </>
  )
}