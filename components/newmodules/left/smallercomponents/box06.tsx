// LeftSide.tsx
import React from 'react';
import Image from 'next/image';
const Box02: React.FC = () => {
    return (
        <div className=" absolute mb-2 flex  bottom-0 h-[100px] w-full  max-w-[350px] bg-white mx-2  rounded-lg  ">
            <div className=' bg-[#8C52FF] w-[30%] max-w-32 rounded-lg'>
                <Image
                    src="/project.svg"
                    alt="Verceldcjncn Logo"
                    width={70}
                    height={70}
                    className='mx-auto  my-4'
                />
                </div>

            <div className=' w-[70%]  h-1/2  border-[0.2px] border-b-[#828282]  '>
            <h1 className="mx-10 my-3 text-lg  text-black font-semibold ">Capstone Project</h1>
            </div>
            



        </div>
    );
};

export default Box02;
