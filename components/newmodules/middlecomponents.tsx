"use client"
import React from 'react';
import Image from 'next/image';


const Middle: React.FC = () => {
  return (
    <div className="h-fullp-4 w-full ">
      <div className=" flex border border-b-slate-300 h-14 w-full ">

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

    </div>
  );
};

export default Middle;
