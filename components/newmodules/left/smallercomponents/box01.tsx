// LeftSide.tsx
import React from 'react';
import Image from 'next/image';
import { FaArrowAltCircleRight } from "react-icons/fa";
const Box01: React.FC = () => {
    return (
        <div className="h-[100px] w-full max-w-[350px] bg-[#8C52FF] mx-auto rounded-lg flex flex-row items-center gap-4">
            <div className='flex items-center justify-center lg:mt-4  lg:mb-4 '>
                <div className="rounded-full bg-white h-16 w-16  mx-2 flex items-center justify-center">
                    <Image
                        src="/modules/ai.svg"
                        alt="Verceldcjncn Logo"
                        className=""
                        width={42}
                        height={42}
                    />
                </div>
            </div>
            <div className='w-fit h-fit flex flex-col lg:mt-4  lg:mb-4'>
                <div className=''><h1 className="text-left text-white font-bold text-md">Module 03</h1></div>
                <div className=''><h1 className=" text-left text-white text-md font-bold">Tech 101: Starting in Tech</h1></div>
                <div className=''><span className="text-left font-medium text-white text-xs"> 7 lesson 7 lesson 7 lesson </span></div>
            </div>
            <div className="rounded-full h-3 w-3 top-10 lg:mt-4 lg:mb-4 mr-5 bg-slate-400 lg:mr-0">
                <FaArrowAltCircleRight size={20} color="white" />
            </div>

        </div>
    );
};

export default Box01;
