"use client"
import React, { useState } from 'react';
import LeftSide from './leftside';
import RightSide from './rightside';
import Middle from './middlecomponents';

export default function ParentMid (){


  return (
    <div className="flex h-screen  ">
         <LeftSide/>
         <Middle />
       
    </div>
  )
};


