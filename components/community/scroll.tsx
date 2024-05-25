"use client";

import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Carousel2: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleUpClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: -100, // Adjust the scroll distance as needed
        behavior: 'smooth'
      });
    }
  };

  const handleDownClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 100, // Adjust the scroll distance as needed
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-container relative h-fit  pt-4 pr-4 pl-4 mt-2 w-full ">
       <div className='w-full flex h-fit justify-between mt-2 mb-4 '>
      <div className='flex-grow text-left text-xl md:text-xl lg:text-2xl font-bold'>All Communities</div>
      <div className='flex-grow text-right text-[17px] text-[#8C52FF]  md:text-xl lg:text-xl font-semibold '>See All</div>
    </div>
        
      <div className="carousel overflow-y-auto md:h-48 h-72" ref={carouselRef}>
        <div className="w-full flex flex-col space-y-4">
          <div className="w-full sm:h-20 h-fit">
          <div className='w-full h-full flex justify-between'> 
  
          <div className='w-1/6 md:w-3/12 lg:w-1/6 relative rounded-lg'>      
          <Image
          src="/Group 19.svg"
          alt="Placeholder"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className='rounded-lg w-full h-full'
        />
          </div>
          <div className=' w-fit flex items-center justify-center text-xl font-semibold '>Machine Learning</div>
          <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3  rounded-full mr-2'>3</div>
          </div>
          </div>


          <div className=" w-full sm:h-20 h-fit ">
          <div className='w-full h-full flex justify-between'> 
  
           <div className='w-1/6 md:w-3/12 lg:w-1/6 relative rounded-lg'>      
          <Image
               src="/Group 21 (1).svg"
               alt="Placeholder"
               layout="fill"
               objectFit="cover"
               objectPosition="center"
               className='rounded-lg w-full h-full'
                />
              </div>
          <div className=' w-fit flex items-center justify-center text-xl font-semibold '>Web Development</div>
          <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3 rounded-full mr-2'>3</div>
          </div>  
          </div>
        
          <div className="w-full  sm:h-20 h-fit">
          <div className='w-full h-full flex justify-between'> 
  
          <div className='w-1/6 md:w-3/12 lg:w-1/6 relative rounded-lg'>      
           <Image
          src="/Group 23.svg"
          alt="Placeholder"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className='rounded-lg w-full h-full'
       />
        </div>
        <div className=' w-fit flex items-center justify-center text-xl font-semibold '>Case Study</div>
         <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3 rounded-full mr-2'>2</div>
          </div>  
          </div>
           
          <div className=" w-full sm:h-20 h-fit ">
          <div className='w-full h-full flex justify-between'> 
  
           <div className='w-1/6 md:w-3/12 lg:w-1/6 relative rounded-lg'>      
          <Image
               src="/Group 21 (1).svg"
               alt="Placeholder"
               layout="fill"
               objectFit="cover"
               objectPosition="center"
               className='rounded-lg w-full h-full'
                />
              </div>
          <div className=' w-fit flex items-center justify-center text-xl font-semibold '>Web Development</div>
          <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3 rounded-full mr-2'>3</div>
          </div>  
          </div>

          <div className=" w-full sm:h-20 h-fit ">
          <div className='w-full h-full flex justify-between'> 
  
           <div className='w-1/6 md:w-3/12 lg:w-1/6 relative rounded-lg'>      
          <Image
               src="/Group 21 (1).svg"
               alt="Placeholder"
               layout="fill"
               objectFit="cover"
               objectPosition="center"
               className='rounded-lg w-full h-full'
                />
              </div>
          <div className=' w-fit flex items-center justify-center text-xl font-semibold '>Web Development</div>
          <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3 rounded-full mr-2'>3</div>
          </div>  
          </div>
        
        







        </div>
      </div>
    </div>
  );
};

export default Carousel2;
