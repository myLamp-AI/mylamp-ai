import React from 'react';
import Image from 'next/image';
import ComponentB from '../oldmodules/Assessment';
const RightSide: React.FC = () => {
  return (
    <div className=" w-[45%] h-screen bg-[#E8E2F4] border-[0.2px] border-l-[#828282] max-w-[380px] py-3 px-3 relative  ">
      <div className='w-full h-full   bg-white rounded-lg'>
        <div className="  h-24 w-full max-w-[600px] bg-[#8C52FF] relative   rounded-lg  "></div>
        <div className=' mt-3 p-4'>
          <Image
            src="/Group 21.svg"
            alt="Verceldcjncn Logo"
            className=""
            width={280}
            height={280}
            priority
          /></div>
        <div className='p-2 font-semibold my-2 w-full'>Which  machine learning technique is used
          in the given figure?</div>
      </div>
    </div>
  );
};

export default RightSide;