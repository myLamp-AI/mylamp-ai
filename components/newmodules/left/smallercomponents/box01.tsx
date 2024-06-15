// LeftSide.tsx
import React from 'react';
import Image from 'next/image';
const Box01: React.FC = () => {
    return (
        <div className="  h-24 w-full max-w-[350px] bg-[#8C52FF] relative mx-auto  rounded-lg  ">
             <div className="rounded-full bg-white absolute top-4 left-2 h-16 w-16 flex items-center justify-center">
              <Image
              src="/modules/ai.svg"
              alt="Verceldcjncn Logo"
              className=""
              width={42}
              height={42}
            />
            </div>
             <div className='w-fit h-fit'>
            <div className=' absolute top-3 left-[83px]'><h1 className="text-left text-white font-bold text-decoration-line: underline font-size: 0.75rem ...">Module 03</h1></div>  
            <div className=' absolute top-9 left-[83px]'><h1 className=" text-left text-white text-md font-bold">Tech 101: Starting in Tech</h1></div>
            <div className=' absolute top-14 left-[83px]'><span className=" text-left font-semibold text-white text-[10px]"> 7 lesson   7 lesson    7 lesson </span></div>
            </div>
            <div className=" bg-white rounded-full h-4 w-4 absolute right-3  top-10"><Image  src="/modules/arrow.svg" alt="Verceldcjncn Logo" className=""width={15} height={15}/></div>
          
        </div>
    );
};

export default Box01;