// LeftSide.tsx
import React from 'react';
import Image from 'next/image';
const Box01: React.FC = () => {
    return (
        <div className="  h-24 w-full max-w-[350px] bg-[#8C52FF] relative mx-auto  rounded-lg  ">
             <div className="rounded-full bg-white absolute top-4 left-2 h-16 w-16 flex items-center justify-center">
              <Image
              src="/modules/ai.svg"
              alt="Verceldcjncn Logo"
              className=""
              width={42}
              height={42}
            />
            </div>
            <h1 className="text-left absolute left-28  text-white font-bold text-decoration-line: underline font-size: 0.75rem ...">module 03</h1>
        </div>
    );
};

export default Box01;
