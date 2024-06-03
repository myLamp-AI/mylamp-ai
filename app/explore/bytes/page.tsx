"use client"
import React,{useEffect, useState} from "react";
import Image from 'next/image'
import Slider from "react-slick";
import bytedata from '@/app/data/bytesCarousel.json'
export default function VideoPage(){
    const [page,setPage] = useState(1);
    const setDiv = Array(4).fill(null);
    const renderSlideDiv = Array(4).fill(null);
    const renderQnDiv = Array(2).fill(null);
 
    const prevSlide = () => {
       
        if (page > 1){
            setPage(page-1);
        }
    };
    const nextSlide = () => {
    
        if (page < 24){
            setPage(page+1)
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className=" w-full flex justify-center">
            <div className=" w-full max-w-[1300px] max-h-[750px] bg-[#E8E2F4] shadow-lg shadow-[#737373] rounded-lg">
                <div className="h-32  flex flex-row justify-center items-center ">
                    <div className="hidden lg:flex justify-center items-center gap-9 ">
                        {
                            setDiv.map((items,index) =>(
                                <div className="flex gap-9" key={index}>
                                    <div className="flex flex-row gap-3">
                                    {
                                        renderSlideDiv.map((slideitem,slideindex) =>(
                                        <div key={slideindex} className={`w-6 h-1 rounded-md ${index*6 + slideindex + 1 <= page ? 'bg-[#000]' : 'bg-[#fff]'}`}></div>
                                        ))
                                    }
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        {
                                        renderQnDiv.map((qnitems,qnindex)=>(
                                            <div key={qnindex} className="w-6 h-1 bg-[#8C52FF] rounded-md"></div>
                                        ))
                                        }
                                    </div>
                                </div>
                            ))
                        }   
                    </div>
                </div>
                <div className="h-96 flex justify-between items-center">
                    <div className="hidden md:flex items-center ml-8"><Image src="/lfarw.svg" alt="arrow" height={20} width={20} onClick={prevSlide}/></div>
                    
                    <div className="hidden md:flex items-center mr-8"><Image src="/rfarw.svg" alt="invarrow"  height={20} width={20} onClick={nextSlide}/></div>
                </div>
                <div className="h-52 flex justify-between items-center ml-8">
                        <div className="flex flex-row gap-6">
                            <div><Image src="/play.svg" alt="play" height={70} width={70}/></div>
                            <div className="flex flex-col justify-center">
                                <span className="text-md md:text-xl font-medium">Data Analytics</span>
                                <span className="text-md md:text-md font-medium text-[#737373]">BYTE {page}/24</span>
                            </div>
                        </div>
                        <div className="w-20 h-20 bg-[#ffffff] rounded-full mr-8 flex justify-center items-center"><Image src="/robot icon.svg" alt="bot" height={40} width={40}/></div>
                </div>
            </div>
        </div>
    );
}