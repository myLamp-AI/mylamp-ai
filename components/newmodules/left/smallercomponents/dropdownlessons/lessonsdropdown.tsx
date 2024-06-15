"use client";

import React from "react";
import Image from "next/image";

const lessonsData = [
  { id: 1, name: "Language of ML", language: "python", image1: "/learn/play button.svg", image2: "/learn/revise.svg" },
  { id: 2, name: "Supervised Learning: Classification", language: "javascript", image1: "/learn/icon 1.svg", image2: "/learn/completed.svg" },
  { id: 3, name: "Assessment: Python", language: "java", image1: "/learn/icon2.svg", image2: "/learn/not started.svg" },
  { id: 4, name: "Hands on: ML", language: "ruby", image1: "/learn/icon 3.svg", image2: "/learn/try again.svg" },
  { id: 5, name: "ML: Interact with data", language: "typescript", image1: "/learn/icon 4 copy.svg", image2: "/learn/not started.svg" }
];

const LessonsModule: React.FC = () => (
       
        <div className="float absolute  bg-white h-fit  w-full  rounded-md shadow-sm z-10 p-4 ">

                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] flex items-center h-[39px]  border-solid border-[1.5px] border-[#8C52FF] rounded-full ...">
                <div className="w-fit h-fit flex justify-center  items-center   ">
              <Image
                src="/learn/play button.svg"
                alt="Lesson Icon"
                className="  mx-1 my-[5px]"
                width={25}
                height={25}
                priority
              />
             </div>
             <div className="flex-1 w-full">
              <h4 className="text-black text-sm font-semibold">Language of ML</h4>
              <p className="text-gray-500 text-xs">: Python</p>
            </div>
                </div>
                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                

              </div>
       
        
);

export default LessonsModule;