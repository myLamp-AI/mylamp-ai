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

                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px]  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3  border-solid border-[1.5px] border-[#8C52FF] rounded-full ..."></div>
                

              </div>
       
        
);

export default LessonsModule;