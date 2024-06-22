// LeftSide.tsx
import React from 'react';
import Box01 from './smallercomponents/box01';
import Box02 from './smallercomponents/box02';
import Box03 from './smallercomponents/box03';
import Box04 from './smallercomponents/box04';
import Box05 from './smallercomponents/box05';
import Box06 from './smallercomponents/box06';
import Box022 from './smallercomponents/box022';
import useStore from '../left/zustandleft/storeleft';

const LeftSide: React.FC = () => {

  const {isOpen} = useStore();

  return (
    <div className={`w-full h-screen ${isOpen ? "max-w-[380px]" : "max-w-[0]"} py-3 relative transition-width `}>
      <div className='w-full h-full  px-3'>
        <Box01 />
        <Box02 />
        <Box022 />
        <Box03 />
        <Box04 />
        <Box05 />
        <Box06 />
      </div>
    </div>
  );
};

export default LeftSide;
