"use client"

import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

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
    <div className="carousel-container relative p-4">
    <button 
      onClick={handlePrevClick}
      className="absolute -top-7 right-5"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <div className="carousel flex space-x-4 overflow-x-auto " ref={carouselRef}>
      <div className=" w-64 h-64 flex-shrink-0 rounded-lg mb-6 md:mb-8  ">
       
      <div className='w-full h-3/4  relative rounded-lg'>
      <Image
       src="/group 16.svg"
       alt="Verceldcjncn Logo"
       layout="fill"
       objectFit="cover"
       className="w-full h-full rounded-lg"
       />
       </div>
        <div className='w-full h-1/4 flex relative'>
          <div  className=' absolute w-fit left-7 font-semibold md:left-10 top-6   text-xl md:text-xl'>WiZ AI</div>
          <div className='bg-[#8C52FF] w-11 h-11 md:w-12 top-2 md:h-12 lg:w-14 lg:h-14 absolute right-0 rounded-full'></div>
        </div>
      </div>

      <div className=" w-64 h-64 flex-shrink-0 rounded-lg">
      <div className='w-full h-3/4  relative rounded-lg'>
      <Image
       src="/image copy.svg"
       alt="Verceldcjncn Logo"
       layout="fill"
       objectFit="cover"
       className="w-full h-full rounded-lg"
       />
       </div>
       <div className='w-full h-1/4 flex relative'>
          <div  className=' absolute w-12 left-7 font-semibold md:left-10 top-6  text-xl md:text-xl'>Computer programming</div>
          <div className='bg-[#8C52FF] w-11 h-11 md:w-12 top-2 md:h-12 lg:w-14 lg:h-14 absolute right-0 rounded-full'></div>
        </div>
      </div>


      <div className="bg-gray-200 w-64 h-32 flex-shrink-0">Item 3</div>
      {/* Add more carousel items */}
    </div>
    <button 
      onClick={handleNextClick}
      className="absolute -top-7 right-2"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
  );
};

export default Carousel;
