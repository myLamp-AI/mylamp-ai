"use client"
import React, { useState } from 'react';
import LeftSide from './left/leftside';
import RightSide from './rightside';
import Middle from './middlecomponents/middlecomponents';
import useStore from './left/zustandleft/storeleft';

export default function ParentMid() {
  const { isOpen } = useStore();
  return (
    <div className="flex h-screen">
      {
       isOpen && <LeftSide />
      }
      <Middle />
      {/* <RightSide/> */}
     

    </div>
  )
};


