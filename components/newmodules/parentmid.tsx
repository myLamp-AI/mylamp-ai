"use client"
import React, { useState } from 'react';
import LeftSide from './left/leftside';
import RightSide from './right/rightside';
import Middle from './middlecomponents/middlecomponents';
import useStoreright from './right/zustandright/storeright';
import useStore from './left/zustandleft/storeleft';

export default function ParentMid() {
  const { isOpen } = useStore();
  const { isOpenright } = useStoreright();
  return (
    <div className="flex h-screen">
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


