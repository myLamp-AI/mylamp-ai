"use client"
import React from 'react';
import Image from 'next/image';


const Middle: React.FC = () => {
  return (
    <div className="relative w-full flex bg-green-300 ">
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

        <div className="relative grid gap-4 grid-cols-4">
          <div className="pt-4 pr-0 pb-0 pl-14">
            <Image
              src="/menu bar-2.png"
              alt="Verceldcjncn Logo"
              className=""
              width={23}
              height={20}
              priority
            />
          </div>
          <div className="pt-3">Course</div>
          <div className="pt-4 text-center w-4">
            <Image
              src="/Vector (1).svg"
              alt="Verceldcjncn Logo"
              className=""
              width={10}
              height={15}
              priority
            />
          </div>
          <div className="pt-3 text-left sm:absolute sm:left-56">Tech 01</div>
        </div>

      </div>
      <div className=" absolute bottom-1 flex border-[0.5px] border-t-[#828282] h-14 w-full justify-between ">
        <div className="mx-7 h-7 my-auto  ">
          <Image
            src="/modules/next.svg"
            alt="Verceldcjncn Logo"
            className="w-full h-full my-auto "
            width={30}
            height={30}
            priority
          />
        </div>
        <div className=" mx-7 h-7 my-auto ">
        <Image
            src="/modules/previous.svg"
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
