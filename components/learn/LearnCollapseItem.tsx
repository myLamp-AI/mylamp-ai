"use client"
import { useState } from "react"
import LearnCollapseCard from "./LearnCollapseCard";
import Lessonsdiv from "./Lessonsdiv";

export default function LearnCollapseItem() {

    const [showdiv, setdiv] = useState(false);
    const [showminidiv, setminidiv]= useState(false);
    const handleClick = () => {
        setminidiv((showminidiv) => !showminidiv);
      };
   
    
    return (
        <>
            <div className="w-full h-14 md:w-full md:h-16 border-[0.5px] border-[rgb(130,130,130)] flex text-black hover:text-[#8C52FF] justify-between mb-7 rounded-md bg-[#E8E2F4] hover:bg-white ">
                <div className="text-black xl:text-md ml-5  sm:text-sm ">
                    <h5 className="text-gray-500 mt-1 text-sm "> Chapter 1</h5>
                    <h3> Getting started with python</h3>
                </div>
                <div onClick={() => setdiv(!showdiv)} className="float:right mt-3 text-black mr-3">
               
                    
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-8"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}