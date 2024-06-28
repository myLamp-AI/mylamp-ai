import React, { useState, useEffect } from 'react';
import RightSide from './right/rightside';
import Middle from './middlecomponents/middlecomponents';
import useStoreright from './right/zustandright/storeright';
import useStore from './left/zustandleft/storeleft';
import Sidebar from '../Sidebar';
import LeftSide from './left/leftside';

export default function ParentMid() {
  const { isOpen } = useStore();
  const { isOpenright } = useStoreright();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1279); // Adjust the breakpoint (1024 is for lg)
  };

  // Add event listener to check screen size on resize
  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className="flex h-[91vh] relative ">
      {isOpen && <LeftSide />}
      <Middle />
      {isSmallScreen ? (
        <div className='bg-red-500 h-full right-0 w-fit absolute xl:hidden'>
          {isOpenright && <RightSide />}
        </div>
      ) : (
        isOpenright && <RightSide />
      )}
    </div>
  );
}
