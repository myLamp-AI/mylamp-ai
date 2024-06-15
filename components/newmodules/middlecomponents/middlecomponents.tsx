"use client"
import React from 'react';
import Image from 'next/image';
import useStore from '../left/zustandleft/storeleft';


const Middle: React.FC = () => {
  const { isOpen, toggleOpen } = useStore();

  const handleToggle = () => {
    toggleOpen();
  };

  return (
    <div className="relative w-full flex  h-screen  ">
      <div className=" absolute top-1 flex border-[0.5px] border-b-[#828282] h-14 w-full ">

        <div className="absolute top-0 right-12 pt-4 pr-3 pb-0 pl-4">
          <Image
            src="/Group.png"
            alt="Verceldcjncn Logo"
            className=""
            width={15}
            height={15}
            priority
          />
        </div>

        <div className="relative grid gap-2 grid-cols-4 -mt-1  ">
          <div className=" my-auto mx-6 w-fit h-fit " >
            <Image
              src="/modules/Group 22.svg"
              alt="Verceldcjncn Logo"
              className=" w-10 h-12"
              width={23}
              height={28}
              priority
            />
          </div>
          <div onClick={handleToggle} className=" font-semibold w-fit text-lg my-4 -mx-6 cursor-pointer">Course</div>
          <div className="text-center w-4 my-5 -mx-6">
            <Image
              src="/Vector (1).svg"
              alt="Verceldcjncn Logo"
              className=""
              width={10}
              height={10}
              priority
            />
          </div>
          <div className="text-left sm:absolute sm:left-56 font-semibold my-4 text-lg ">Tech 01</div>
        </div>

      </div>
      <div className=" absolute bottom-1 flex border-[0.5px] border-t-[#828282] h-14 w-full justify-between ">
        <div className="mx-7 h-7 my-auto  ">
          <Image

            src="/modules/previous.svg"
            alt="Verceldcjncn Logo"
            className="w-full h-full my-auto "
            width={30}
            height={30}
            priority
          />
        </div>
        <div className=" mx-7 h-7 my-auto ">
          <Image
            src="/modules/next.svg"
            alt="Verceldcjncn Logo"
            className="w-full h-full my-auto   "
            width={30}
            height={30}
            priority
          />
        </div>
      </div>

    </div>
  );
};

export default Middle;