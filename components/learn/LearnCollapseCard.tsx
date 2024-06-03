"use client"
import LearnCollapseItem from "./LearnCollapseItem";

import { useState } from "react";
import Lessonsdiv from "./Lessonsdiv";
import Image from "next/image";

export default function LearnCollapseCard() {

    const [showdiv01, setdiv01] = useState(true);  

    
    return (
        
        <>
            <div className="p-4 text-white flex flex-col  ">
            <div className="w-full h-full flex flex-row">
                <div className=" h-full  w-2/5">
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                   
                </div>
                {
                    showdiv01 && (
                        <div className="  ml-7 w-3/5">
        
                        <div className="bg-white border-2 border-gray-300 rounded-lg flex px-6 pt-4 pb-6 mb-4">
                      
                          <div>
                            
                            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl ">
                              <div className="w-1/6">
                                <Image
                                  src="/play button.svg"
                                  alt="Verceldcjncn Logo"
                                  className="mt-1 ml-2 border-rad "
                                  width={25}
                                  height={25}
                                  priority
                                />
                              </div>
                              <div>
                                <h4 className="text-black text-sm mt-1">
                                  {" "}
                                  <b> Language of ML</b> : python
                                </h4>
                              </div>
                            </div>
                            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl ">
                              <div className="w-1/6">
                                <Image
                                  src="/play button.svg"
                                  alt="Verceldcjncn Logo"
                                  className=" ml-2 mt-1 border-rad "
                                  width={25}
                                  height={15}
                                  priority
                                />
                              </div>
                              <div>
                                <h4 className="text-black text-sm mt-1">
                                  {" "}
                                  <b> Language of ML</b> : python
                                </h4>
                              </div>
                            </div>
                            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl ">
                              <div className="w-1/6">
                                <Image
                                  src="/play button.svg"
                                  alt="Verceldcjncn Logo"
                                  className="mt-1 ml-2 border-rad "
                                  width={25}
                                  height={15}
                                  priority
                                />
                              </div>
                              <div>
                                <h4 className="text-black text-sm mt-1">
                                  {" "}
                                  <b> Language of ML</b> : python
                                </h4>
                              </div>
                            </div>
                            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl ">
                              <div className="w-1/6">
                                <Image
                                  src="/play button.svg"
                                  alt="Verceldcjncn Logo"
                                  className="mt-1 ml-2 border-rad "
                                  width={25}
                                  height={15}
                                  priority
                                />
                              </div>
                              <div>
                                <h4 className="text-black text-sm mt-1">
                                  {" "}
                                  <b> Language of ML</b> : python
                                </h4>
                              </div>
                            </div>
                            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl">
                              <div className="w-1/6">
                                <Image
                                  src="/play button.svg"
                                  alt="Verceldcjncn Logo"
                                  className="mt-1 ml-2 border-rad "
                                  width={25}
                                  height={15}
                                  priority
                                />
                              </div>
                              <div>
                                <h4 className="text-black text-sm mt-1">
                                  {" "}
                                  <b> Language of ML</b> : python
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/2 ">
                           <div className="mb-5">
                           <Image
                                  src="/revise.svg"
                                  alt="Verceldcjncn Logo"
                                  className=" ml-2 border-rad "
                                  width={110}
                                  height={60}
                                  priority
                                />
                           </div>
                           <div className="mb-4"> 
                           <Image
                                  src="/completed.svg"
                                  alt="Verceldcjncn Logo"
                                  className="mt-1 ml-2 border-rad "
                                  width={110}
                                  height={60}
                                  priority
                                />
                           </div>
                           <div className="mb-6">
                           <Image
                                  src="/not started.svg"
                                  alt="Verceldcjncn Logo"
                                  className="mt-1 ml-2 border-rad "
                                  width={110}
                                  height={60}
                                  priority
                                />
                           </div>
                           <div className="mb-4">
                           <Image
                                  src="/try again.svg"
                                  alt="Verceldcjncn Logo"
                                  className="mt-1 ml-2 border-rad "
                                  width={110}
                                  height={60}
                                  priority
                                />
                           </div>
                           <div className="mt-4">
                           <Image
                                  src="/not started.svg"
                                  alt="Verceldcjncn Logo"
                                  className="mt-1 ml-2 border-rad "
                                  width={110}
                                  height={60}
                                  priority
                                />
                           </div>
                          </div>
                        </div>
                      </div>
                    
                    )
                }
                </div>
                <div className=" w-full h-36 rounded-lg bg-[#E8E2F4] mb-5 max-w-[1300px] flex flex-row  ">
                    
                <div className="bg-[#8C52FF] w-40 max-w-44 h-full rounded-lg flex justify-center items-center">
    <Image
        src="/project.svg"
        alt="Verceldcjncn Logo"
        width={90}
        height={90}
        priority={true}
        className="h-fit w-fit"
    />

</div>

<div className="bg-[#E8E2F4]  w-full justify-around flex-col rounded-lg">
    <div className=" w-full h-[46%] flex justify-between  border-b-[0.5px] border-[#737373]">
        <div  className=" w-fit h-fit mt-3 ml-4 "><span className="text-centre text-black font-semibold text-[24px] ... ">Capstone Project</span></div>
        <div  className=" w-fit h-fit mt-5 mr-7 "><span className="text-centre text-[#8C52FF] font-semibold text-[15px] ... ">View Guidelines</span></div>
    </div>
    <div className="w-full h-[55%]">
    <div  className=" w-fit h-fit rounded-lg"><span className="text-centre text-black font-semibold text-[24px] ... "></span></div>
    </div>
</div>





                </div>
            </div>
        </>
    )
}