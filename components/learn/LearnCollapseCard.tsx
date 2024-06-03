"use client"
import LearnCollapseItem from "./LearnCollapseItem";

import { useState } from "react";
import Lessonsdiv from "./Lessonsdiv";


export default function LearnCollapseCard() {

    const [showdiv, setdiv] = useState(true);  
    return (
        
        <>
            <div className="p-4 text-white flex flex-row ">
                <div className=" h-full  w-2/5 ">
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                </div>

                {
                    showdiv && (
                        <>
                            <Lessonsdiv />


                        </>
                    )
                }
            </div>
        </>
    )
}