import React from 'react';
import Box01 from './smallercomponents/box01';
import Box02 from './smallercomponents/box02';
import Box03 from './smallercomponents/box03';
import Box04 from './smallercomponents/box04';
import Box05 from './smallercomponents/box05';
import Box06 from './smallercomponents/box06';
import Box022 from './smallercomponents/box022';
import useStore from './zustandleft/storeleft';
import { motion } from 'framer-motion';

const LeftSide: React.FC = () => {
  const { isOpen } = useStore(); // Get the isOpen state from your Zustand store

  return (
    <motion.div
      className="w-[48%] h-full bg-[#E8E2F4] shadow-lg max-w-[380px] py-3 relative flex flex-col transition-transform ease-out"
      initial={{ translateX: -300 }} // Initial position off-screen to the left
      animate={{ translateX: isOpen ? 0 : -300 }} // Animated to on-screen (0) or off-screen (-300)
      transition={{ duration: 0.1, ease: 'easeOut' }} // Reduced duration for faster transition
    >
      <div className="px-2">
        <Box01 />
        <Box02 />
        <Box022 />
      </div>
      <div className="flex-grow overflow-y-auto scrollbar-hide px-2">
        <Box03 />
        <Box04 />
        <Box05 />
        <Box05 /> {/* Ensure this duplication is intentional */}
        <Box05 /> {/* Ensure this duplication is intentional */}
      </div>
      <div className="px-2">
        <Box06 />
      </div>
    </motion.div>
  );
};

export default LeftSide;
