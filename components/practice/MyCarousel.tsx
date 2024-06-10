"use client"
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { useState } from "react";
import Exdata from '@/app/data/Assessment.json'

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
      {/* <div className="flex flex-col gap-3 ">
        <div className="flex flex-row justify-between">
          <span className="text-base font-semibold">Exclusive Assessments</span>
          <div className="flex flex-row gap-4">
            <button onClick={handlePrevClick}><Image src="/practice/lfarw.svg" alt="arr" width={7.89} height={13.99} /></button>
            <button onClick={handleNextClick}><Image src="/practice/rfarw.svg" alt="arr" width={7.89} height={13.99} /></button>
          </div>
        </div>
        <div className="flex transition-transform duration-300 ease-in-out">
          {Exdata.map((slide, index) => (
            <div key={index} className="min-w-[200px] px-3 h-56 ">
              <div className="bg-[#fff] rounded-lg h-full">
                <div><Image src={Exdata[index].svg} alt="img" height={100} width={230} className="w-full" /></div>
                <div className="text-md font-bold h-16 flex flex-row justify-around pt-3">
                  <div className="w-3/5">{Exdata[index].name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="carousel-container relative p-4 pl-0">
        <div className="flex flex-row justify-between">
          <span className="text-base font-semibold">Exclusive Assessments</span>
          <div className="flex flex-row gap-4">
            <button onClick={handlePrevClick}><Image src="/practice/lfarw.svg" alt="arr" width={7.89} height={13.99} /></button>
            <button onClick={handleNextClick}><Image src="/practice/rfarw.svg" alt="arr" width={7.89} height={13.99} /></button>
          </div>
        </div>
        <div className="carousel flex overflow-x-auto scrollbar-hide gap-3" ref={carouselRef}>
          {Exdata.map((slide, index) => (
            <div key={index} className="min-w-[200px]  h-56 ">
              <div className="bg-[#fff] rounded-lg h-full">
                <div><Image src={Exdata[index].svg} alt="img" height={100} width={230} className="w-full" /></div>
                <div className="text-md font-bold h-16 flex flex-row justify-around pt-3">
                  <div className="w-3/5">{Exdata[index].name}</div>
                </div>
              </div>
            </div>
          ))}
          {/* Add more carousel items */}
        </div>
      </div>
    </>
  );
};

export default Carousel;