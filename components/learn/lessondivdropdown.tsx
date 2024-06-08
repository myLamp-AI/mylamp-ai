"use client";

import React from "react";
import Image from "next/image";

interface Lesson {
  id: number;
  name: string;
  language: string;
  image1: string;
  image2: string;
}

const lessonsData: Lesson[] = [
  { id: 1, name: "Language of ML", language: "python", image1: "/learn/play button.svg", image2: "/learn/revise.svg" },
  { id: 2, name: "Supervised Learning: Classification", language: "javascript", image1: "/learn/icon 1.svg", image2: "/learn/completed.svg" },
  { id: 3, name: "Assessment: Python", language: "java", image1: "/learn/icon2.svg", image2: "/learn/not started.svg" },
  { id: 4, name: "Hands on: ML", language: "ruby", image1: "/learn/icon 3.svg", image2: "/learn/try again.svg" },
  { id: 5, name: "ML: Interact with data", language: "typescript", image1: "/learn/icon 4 copy.svg", image2: "/learn/not started.svg" }
];

const Lessonsdiv01: React.FC = () => (
  <div className="mx-6 w-full md:w-[60%] flex justify-center pr-3 xl:hidden ">
    <div className="bg-white border-[0.5px] border-[#737373] rounded-xl flex md:flex-col w-full h-fit px-8 pb-8">
      <div className="w-fit text-black mx-2 my-4 font-[500] text-xl">Lessons</div>
      <div className="h-fit w-full mx-5 mt-2">
        {lessonsData.map((lesson) => (
          <div key={lesson.id} className="w-full h-fit overflow-hidden flex flex-row">
            <div className="w-fit h-14 flex">
              <div className="w-fit md:w-[470px] h-10 flex border-[1px] border-gray-50 bg-white hover:bg-[#E8E2F4] hover:border-[#E8E2F4] rounded-3xl">
                <div className="w-fit flex justify-center my-auto items-center mx-[3px]">
                  <Image
                    src={lesson.image1}
                    alt="Lesson Icon"
                    className="border-rad"
                    width={30}
                    height={30}
                    priority
                  />
                </div>
                <div className="flex justify-center items-center">
                  <h4 className="text-black text-sm mx-2">
                    <span className="font-[660]">{lesson.name}</span>: {lesson.language}
                  </h4>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Lessonsdiv01;
