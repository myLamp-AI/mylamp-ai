import React from 'react';
import Image from 'next/image';

import { useState } from 'react';
const RightSide: React.FC = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const Answer = () => {
    setIsCorrect(!isCorrect);
  };
  return (
    <div className=" w-[48%] h-full bg-[#E8E2F4] border-[0.2px] border-l-[#828282] max-w-[380px] py-3 px-3 relative  ">
      <div className='w-full h-full   bg-white rounded-lg '>
        <div className="  h-24 w-full max-w-[600px] bg-[#8C52FF] relative   rounded-lg flex justify-center items-center text-white font-semibold text-xl "><h1>Test Your Concepts</h1></div>
        <div className=' mt-3 p-4'>
          <Image
            src="/Group 21.svg"
            alt="Verceldcjncn Logo"
            className=""
            width={280}
            height={280}
            priority
          /></div>
        <div className='p-3 font-semibold text-md -my-2 w-full'>Which  machine learning technique is used in the given figure?</div>

        <div className="float text-sm  bg-white h-fit  w-full  rounded-md shadow-sm font-[200]  p-4 ">

          <div className="bg-[#E8E2F4] w-full cursor-pointer max-w-[330px] flex items-center h-[39px] text-md  border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
            <h2 className='mx-4'>K-Means Clustering</h2>
          </div>
          <div onClick={Answer} className="bg-[#E8E2F4] w-full text-md  cursor-pointer max-w-[330px] h-[39px] mt-3 flex items-center border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
            <p className='mx-4'>
              Supervised Learning</p>
          </div>
          <div className="bg-[#E8E2F4] w-full text-md  cursor-pointer max-w-[330px] h-[39px] mt-3 flex items-center border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
            <p className='mx-4'>Unsupervised Learning</p>
          </div>
          <div className="bg-[#E8E2F4] w-full cursor-pointer text-md  max-w-[330px] h-[39px] mt-3 flex items-center border-solid border-[1.49px] border-[#8C52FF] rounded-full ...">
            <p className='mx-4'>None of the above      </p>
          </div>

          { isCorrect && (<div className='w-full  my-10 h-fit rounded-full border-[0.2px] border-[#828282] flex flex-row gap-1 justify-between'>
            <div className=' w-fit h-full'>
              <Image
                src="/modules/smiling face (1).svg"
                alt="Verceldcjncn Logo"
                className="w-full h-full"
                width={90}
                height={90}
                priority
              /></div>
            <div className='w-[70%] min-w-min flex flex-col justify-center mx-auto text-[#54A030]'>
              <div className='font-semibold  flex justify-center items-center text-md'>
                You’re Correct
              </div>
              <div className='flex justify-center items-center text-xs italic w-full '>
                Supervised Learning is used for spam filtering
              </div>
            </div>


          </div>  )

}

        </div>
      </div>
    </div>
  );
};

export default RightSide;