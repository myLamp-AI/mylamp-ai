"use client"
import React from 'react';
import Image from 'next/image';


const Middle: React.FC = () => {
 

  return (
    <div className="relative w-full flex h-full">
      <div className="absolute flex  h-14 w-full shadow-md ">
        <div className="absolute top-0 right-12 pt-4 pr-3 pb-0 pl-4">
          <Image
            src="/Group.png"
            alt="Logo"
            width={15}
            height={15}
            priority
          />
        </div>
        <div className="relative grid gap-2 grid-cols-4 -mt-1">
          <div className="my-auto mx-6 w-fit h-fit">
            <Image
              src="/modules/Group 22.svg"
              alt="Logo"
              className="w-10 h-12"
              width={23}
              height={28}
              priority
            />
          </div>
          <div className="font-semibold w-fit text-lg my-4 -mx-6 cursor-pointer">
            Course
          </div>
          <div className="text-center w-4 my-5 -mx-6">
            <Image
              src="/Vector (1).svg"
              alt="Logo"
              width={10}
              height={10}
              priority
            />
          </div>
          <div className="text-left sm:absolute sm:left-56 font-semibold my-4 text-lg">
            Tech 01
          </div>
        </div>
      </div>

      {/* <div className="flex-grow flex justify-center items-center h-[70%] my-auto mx-9">
        <div className="w-full max-w-screen-xl h-full mx-auto ">
          <div className="aspect-w-16 h-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div> */}


      <div className="absolute bottom-1 flex border-[0.5px] border-t-[#828282] h-14 w-full justify-between ">
        <div className="mx-7 h-7 my-auto">
          <Image
            src="/modules/previous.svg"
            alt="Previous"
            className="w-full h-full my-auto"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="mx-7 h-7 my-auto">
          <Image
            src="/modules/next.svg"
            alt="Next"
            className="w-full h-full my-auto"
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
