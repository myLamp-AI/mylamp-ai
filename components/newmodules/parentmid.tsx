"use client"
import React, { useState } from 'react';
import LeftSide from './leftside';
import RightSide from './rightside';
import Middle from './middlecomponents/middlecomponents';

export default function ParentMid (){


  return (
    <div className="flex w-full h-screen">
    <LeftSide />
    <Middle />
   <RightSide/>
  </div>
  )
};


