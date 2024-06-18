"use client"
import React, { useRef } from 'react';
import Image from "next/image";
import Exdata from '@/app/data/Excommunity.json'


const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);


  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: 'smooth'
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: 'smooth'
      });
    }
  };




  return (
    <>
      <div className="flex flex-col gap-3 relative">
        <div className="flex flex-row justify-between">
          <span className="text-base font-semibold">Exclusive Assessments</span>
          <div className="flex flex-row gap-4">
            <button onClick={handlePrevClick}><Image src="/practice/lfarw.svg" alt="img" width={10} height={10} /></button>
            <button onClick={handleNextClick}><Image src="/practice/rfarw.svg" alt="img" width={10} height={10} /></button>
          </div>
        </div>
        <div className="carousel-container absolute top-7">
          <div className="carousel flex space-x-4 overflow-x-auto scrollbar-hide w-[400px]" ref={carouselRef}>
              {Exdata.map((slide, index) => (
                <div key={index} >
                  <div className="bg-[#fff] rounded-lg h-full w-60">
                    <div ><Image src={Exdata[index].svg} className="w-full" alt="item" height={100} width={100} /></div>
                    <div className="text-md font-bold h-16 flex flex-row justify-around pt-3">
                      <div className="w-3/5">{Exdata[index].name}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Carousel;
