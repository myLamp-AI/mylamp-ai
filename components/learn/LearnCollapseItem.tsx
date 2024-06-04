"use client"
import { useState } from "react"
import LearnCollapseCard from "./LearnCollapseCard";
import Lessonsdiv from "./Lessonsdiv";
import useBooleanStore from "./store";
import React from "react";


export default function LearnCollapseItem() {
    const setBooleanValue = useBooleanStore((state) => state.setBooleanValue);

  const handleClick = () => {
    // Fetch the current boolean value
    const currentValue = useBooleanStore.getState().booleanValue;
    // Toggle the boolean value
    setBooleanValue(!currentValue);
  };


    return (
        <>
            <div className="w-full h-14 md:w-full lg:h-20 border-[0.5px] border-[rgb(130,130,130)] flex text-black hover:text-[#8C52FF] justify-between mb-7 rounded-md bg-[#E8E2F4] hover:bg-white ">
                <div className="flex justify-between w-full  items-center text-black xl:text-md ml-5 sm:text-sm text-left h-full">
                    <div className="">
                        <h5 className="text-gray-500    text-sm lg:mb-[0.5px]">Chapter 1</h5>
                        <h3 className="font-[550]">Getting started with python</h3>
                    </div>
                    <div className="my-3 mx-3 text-black">
                        <svg
                            onClick={handleClick}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-6 cursor-pointer"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>

            </div>
        </>
    )
}