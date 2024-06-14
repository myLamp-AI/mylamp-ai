// LeftSide.tsx
import React from 'react';
import Image from 'next/image';
const Box02: React.FC = () => {
    return (
        <div className=" relative h-[100px] w-full my-2 max-w-[350px] bg-white mx-auto  rounded-lg  ">
             <div className=" rounded-full bg-white absolute top-4 left-2 h-16 w-16 flex items-center justify-center">
              <Image
              src="/modules/robot (1).svg"
              alt="Verceldcjncn Logo"
              className=""
              width={90}
              height={90}
            />
            </div>
            <div className=" rounded-full bg-white absolute top-4 right-2 h-16 w-16 flex items-center justify-center">
              <Image
              src="/modules/calendar.svg"
              alt="Verceldcjncn Logo"
              className=""
              width={60}
              height={60}
            />
            </div>
        </div>
    );
};

export default Box02;
