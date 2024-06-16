// LeftSide.tsx
import React from 'react';
import Image from 'next/image';
const Box02: React.FC = () => {
    return (
        <div className="absolute mb-2 flex bottom-0 h-[100px] w-[95%] max-w-[352px] left-3 bg-white rounded-lg">
        <div className='bg-[#8C52FF] w-36 max-w-36 rounded-lg flex items-center justify-center p-4 '>
          <Image
            src="/project.svg"
            alt="Project Logo"
            width={40}
            height={40}
            className='rounded-lg w-16 h-fit'
          />
        </div>
        <div className='w-full p-4 flex items-center  h-1/2 border-[0.5px] border-b-[#828282]  '>
          <h1 className="text-lg text-black font-semibold">Capstone Project</h1>
        </div>
      </div>
    );
};

export default Box02;
