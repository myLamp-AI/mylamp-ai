// LeftSide.tsx
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
const Box05: React.FC = () => {
    const [progress, setProgress] = useState(90);
    return (
        <div className=" relative mt-3  h-[105px] w-full  max-w-[350px] bg-[#8C52FF] mx-auto  rounded-lg  ">
            <div className=" h-[78px] w-full  max-w-[350px] bg-white mx-auto flex flex-row justify-between items-center  rounded-lg">
                <div className="  mx-4  rounded-full bg-white  h-14 w-14  flex items-center justify-center">
                    <Image src="/modules/security.svg" alt="Verceldcjncn Logo" className="" width={70} height={70} />
                </div>
                <div className='w-full my-2'>
                    <h1 className="text-left   text-decoration-line: underline 2xl:text-[1.5rem]  font-size: 0.75rem ...">chapter 3</h1>
                    <h2 className=" text-left 2xl:text-[1.3rem] font-semibold -mt-1">Cyber Security</h2>
                    <div className=" w-full max-w-[265px] my-2   h-[7px] border-[1px] border-[#8C52FF] rounded-lg overflow-hidden">
                        <div className="bg-[#8C52FF] h-full text-white text-center leading-8" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
            <div className=" absolute right-3 bottom-[5.5px]  bg-white rounded-full h-4 w-4 "><Image  src="/modules/arrow.svg" alt="Verceldcjncn Logo" className=""width={15} height={15}/></div>
        </div>
    );
};

export default Box05;
