"use client"
import { useState } from "react"
import LearnCollapseCard from "./LearnCollapseCard";
import Lessonsdiv from "./Lessonsdiv";
import useBooleanStore from "./store";
import React from "react";
import { useModalStore } from "./store02";


export default function LearnCollapseItem() {
    const setBooleanValue = useBooleanStore((state) => state.setBooleanValue);
    const handleClick = () => {
        const currentValue = useBooleanStore.getState().booleanValue;
        setBooleanValue(!currentValue);
    };
    const booleanValue = useBooleanStore((state) => state.booleanValue);
    const { openModal } = useModalStore();


    return (
        <>
            <div
                 onClick={() => {
                    handleClick();
                    openModal();
                  }}
                className={`w-full h-14 md:w-full lg:h-20 border-[0.5px] flex justify-between mb-7 rounded-md ${booleanValue
                        ? ' border-[#8C52FF]   bg-white'
                        : ' border-gray-400 bg-[#E8E2F4]'

                    }`}
            >
                <div className="flex justify-between w-full   items-center text-black xl:text-md ml-5 sm:text-sm text-left h-full">
                    <div className={`${booleanValue ? 'text-[#8C52FF]' : ''}`}>
                        <h5 className={`text-sm lg:mb-[0.5px] mb-1 ${booleanValue ? '' : 'text-[#737373]'}`}>Chapter 1</h5>
                        <div className="lg:font-[550] sm:font-[60px] ">Getting started with python</div>
                    </div>
                    <div className="my-3 mx-3 text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className={`${booleanValue ? 'rotate-180' : 'rotate-0'} w-5 h-6 cursor-pointer`}
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