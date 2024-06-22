import React, { useRef } from 'react';
import Box01 from './smallercomponents/box01';
import Box02 from './smallercomponents/box02';
import Box03 from './smallercomponents/box03';
import Box04 from './smallercomponents/box04';
import Box05 from './smallercomponents/box05';
import Box06 from './smallercomponents/box06';
import Box022 from './smallercomponents/box022';
import useStore from './zustandleft/storeleft';

const LeftSide: React.FC = () => {
  const { isOpen } = useStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleBoxClick04 = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 125,
        behavior: 'smooth',
      });
    }
  };
  const handleBoxClick03 = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 10,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-[48%] h-full bg-[#E8E2F4] shadow-lg max-w-[380px] py-3 relative flex flex-col">
      <div className="px-2">
        <Box01 />
        <Box02 />
        <Box022 />
      </div>
      <div ref={scrollContainerRef} className="flex-grow overflow-y-auto scrollbar-hide px-2">
        <Box03 onClick={handleBoxClick03}  />
        <Box04 onClick={handleBoxClick04} />
        <Box05/>
        <Box05  />
        
      </div>
      <div className="px-2">
        <Box06 />
      </div>
    </div>
  );
};

export default LeftSide;
