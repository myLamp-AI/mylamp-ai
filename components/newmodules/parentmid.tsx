"use client"
import React, { useState, useEffect } from 'react';
import LeftSide from './left/leftside';
import RightSide from './right/rightside';
import Middle from './middlecomponents/middlecomponents';
import useStoreright from './right/zustandright/storeright';
import useStore from './left/zustandleft/storeleft';
import Sidebar from '../Sidebar';

export default function ParentMid() {
  const { isOpen } = useStore();
  const { isOpenright } = useStoreright();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind's sm breakpoint is 640px
  };

  useEffect(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);

      return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <div className="flex h-[91vh] ">
      
      {
       isOpen && <LeftSide />
      }
      <Middle />
      {
       isOpenright && <RightSide/>
      }
      

    </div>
  )
};


