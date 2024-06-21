// LeftSide.tsx
import React from 'react';
import Box01 from './smallercomponents/box01';
import Box02 from './smallercomponents/box02';
import Box03 from './smallercomponents/box03';
import Box04 from './smallercomponents/box04';
import Box05 from './smallercomponents/box05';
import Box06 from './smallercomponents/box06';
import Box022 from './smallercomponents/box022';
const LeftSide: React.FC= () => {
  return (
    <div className=" w-[48%] h-full bg-[#E8E2F4] border-[0.2px] border-r-[#828282] max-w-[380px] py-3 relative  ">
    <div className='w-full h-full  px-3'>
    <Box01/>
    <Box02/>
    <Box022/>
    <Box03/>
    <Box04/>
    <Box05/>
    <Box06/>
    </div>
  </div>
  );
};

export default LeftSide;
