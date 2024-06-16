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

    <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] flex items-center h-[39px]  border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
      <div className="w-fit h-fit flex justify-center  items-center   ">
        <Image
          src="/learn/play button.svg"
          alt="Lesson Icon"
          className="  mx-2 my-[5px]"
          width={29}
          height={29}
          priority
        />
      </div>
      <div className="flex w-full flex-row mx-1 ">
        <h4 className="text-black text-sm font-semibold ">Language of ML</h4>
        <p className="text-gray-500 text-sm my-auto">: Python</p>
      </div>
    </div>
    <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3 flex items-center border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
      <div className="w-fit h-fit flex justify-center  items-center   ">
        <Image
          src="/learn/icon 1.svg"
          alt="Lesson Icon"
          className="  mx-2 my-[5px]"
          width={29}
          height={29}
          priority
        />
      </div>
      <div className="flex w-full flex-row mx-1 ">
        <h4 className="text-black text-sm font-semibold ">LSupervised Learning </h4>
        <p className="text-gray-500 text-sm my-auto">: Classification</p>
      </div>
    </div>
    <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3 flex items-center border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
      <div className="w-fit h-fit flex justify-center  items-center   ">
        <Image
          src="/learn/icon2.svg"
          alt="Lesson Icon"
          className="  mx-2 my-[5px]"
          width={29}
          height={29}
          priority
        />
      </div>
      <div className="flex w-full flex-row mx-1 ">
        <h4 className="text-black text-sm font-semibold ">AssessmentL</h4>
        <p className="text-gray-500 text-sm my-auto">: Python</p>
      </div>
    </div>
    <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3 flex items-center border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
      <div className="w-fit h-fit flex justify-center  items-center   ">
        <Image
          src="/learn/icon 3.svg"
          alt="Lesson Icon"
          className="  mx-2 my-[5px]"
          width={29}
          height={29}
          priority
        />
      </div>
      <div className="flex w-full flex-row mx-1 ">
        <h4 className="text-black text-sm font-semibold ">Hands on</h4>
        <p className="text-gray-500 text-sm my-auto">: ML</p>
      </div>
    </div>
    <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] h-[39px] mt-3 flex items-center border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
      <div className="w-fit h-fit flex justify-center  items-center   ">
        <Image
          src="/learn/icon 4 copy.svg"
          alt="Lesson Icon"
          className="  mx-2 my-[5px]"
          width={29}
          height={29}
          priority
        />
      </div>
      <div className="flex w-full flex-row mx-1 ">
        <h4 className="text-black text-sm font-semibold "> ML</h4>
        <p className="text-gray-500 text-sm my-auto">: Interact with data</p>
      </div>
    </div>


  </div>


);

export default LessonsModule;