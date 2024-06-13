// LeftSide.tsx
import React from 'react';
import Box01 from './smallercomponents/box01';
import Box02 from './smallercomponents/box02';
import Box03 from './smallercomponents/box03';
import Box04 from './smallercomponents/box04';
import Box05 from './smallercomponents/box05';
import Box06 from './smallercomponents/box06';
const LeftSide: React.FC= () => {
  return (
    <div className=" w-[40%] h-screen bg-[#E8E2F4] border-[0.2px] border-r-[#828282] max-w-[380px] py-3 px-1 relative ">
    <Box01/>
    <Box02/>
    <Box03/>
    <Box04/>
    <Box05/>
    <Box06/>
  </div>
  );
};

export default LeftSide;
