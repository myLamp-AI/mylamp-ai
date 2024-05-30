"use client";

import React, { useRef, ReactNode } from 'react';
import Image from 'next/image';
import MyCarousel from './MyCarousel'; 
import ExistingContainer from './scroll';
import Carousel2 from './scroll';
import WebDevelpoment from './webdevelpoment';
import MachineLearning from './machinelearning';

import { useState ,useEffect } from "react";
import { useRouter } from 'next/navigation';
import Machinelearning from './machinelearning';

  const ResponsiveDiv: React.FC = () => {
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
          top: 100, 
          behavior: 'smooth'
        });
      }
    };

    const [webdevelpoment01, setShowWebdevelpoment01] = useState(false);

    const toggleComponent01 = () => {
      setShowWebdevelpoment01(!webdevelpoment01);
    };

    const [machine, setShowMachine] = useState(false);

    const toggleComponent02 = () => {
      setShowMachine(!machine);
    };


    const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);
  
  const machinelearningchat = () => {
    if (isMobile) {
      router.push('./mobilechats/machinelearningchats');
    } 
  };
    


  return (
    <div style={{ margin: 0 }} className="flex flex-wrap">
      <div className="w-full md:w-1/2   p-0">
        <div className="w-full flex justify-center items-start font-semibold flex-col ml-2 md:ml-3">
          <div  className="text-[21px] font-semibold text-[#737373]">Hello Raj!</div>
          <div className="text-sm sm:text-sm md:text-sm lg:text-xl text-[#A6A6A6]">Learns with your peers to maximise learning.</div>
        </div>
        <div className="w-full flex justify-start items-center font-semibold mt-2 sm:mt-4 md:mt-6 px-2">
          <div className="flex items-center">
            <div className="bg-white p-2 md:p-3">
              <Image
                src="/search.svg"
                alt="Search Icon"
                width={24}
                height={24}
                priority
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
            <input
              type="text"
              placeholder="Search community"
              className="ml-2 md:ml-4 p-2 rounded bg-white focus:outline-none text-sm sm:text-sm md:text-base md:text-[19px]"
            />
          </div>
        </div>
        <div className="relative container  mt-4 md:mt-6">
          <div className="flex justify-between items-center mb-4 ml-2   md:ml-3 ">
            <h1 className="text-xl md:text-xl   font-bold">Exclusive communities</h1>
          </div>
          <MyCarousel />
        </div>
<div className="carousel-container relative h-fit no-scrollbar pt-4 pr-4 pl-4  w-full ">
       <div className='w-full flex h-fit justify-between mt-2 mb-4 '>
      <div className='flex-grow text-left text-xl md:text-[21px] font-bold' >All Communities</div>
           
      <div className='flex-grow text-right text-[21px] text-[#8C52FF]  font-semibold '>See All</div>
    </div>
        
      <div className="carousel overflow-y-auto md:h-48 h-72" ref={carouselRef}>
        <div className="w-full flex flex-col space-y-4">
          <div className="w-full sm:h-20 h-fit">
          <div onClick={machinelearningchat}  className='w-full  h-full flex justify-between'> 
  
          <div className='w-1/6 sm:w-24 lg:w-1/6 relative rounded-lg'>      
          <Image
           src="/Group 19.svg"
           alt="Verceldcjncn Logo"
           fill
           style={{objectFit:"cover"}}
           className="w-full h-fit rounded-lg"
       />
          </div>
          <div onClick={toggleComponent02}  className=' w-fit flex items-center justify-center text-xl font-semibold '>Machine Learning</div>
          <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3  rounded-full mr-2'>3</div>
          </div>
          </div>
          <div className=" w-full sm:h-20 h-fit ">
          <div className='w-full h-full flex justify-between'> 
  
           <div className='w-1/6 sm:w-24 lg:w-1/6 relative rounded-lg'>      
           <Image
            src="/Group 21 (1).svg"
            alt="Verceldcjncn Logo"
            fill
            sizes="100vw"
            style={{objectFit:"cover"}}
            className="w-full h-full rounded-lg"
            />
              </div>
          <div onClick={toggleComponent01} className=' w-fit flex items-center justify-center text-xl font-semibold '>Web Development</div>
            
          <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3 rounded-full mr-2'>2</div>
          </div>  
          </div>
        
          <div className="w-full  sm:h-20 h-fit">
          <div className='w-full h-full flex justify-between'> 
  
          <div className='w-1/6 sm:w-24 lg:w-1/6 relative rounded-lg'>      
          <Image
       src="/Group 23.svg"
       alt="Verceldcjncn Logo"
       fill
        style={{objectFit:"cover"}}
       className="w-full h-full rounded-lg"
       />
        </div>
        <div  className='w-fit flex items-center justify-center text-xl font-semibold '>Case Study
        </div>
     
         <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3 rounded-full mr-2'>2</div>
          </div>  
          </div>
           
          <div className=" w-full sm:h-20 h-fit ">
          <div className='w-full h-full flex justify-between'> 
  
           <div className='w-1/6 sm:w-24 lg:w-1/6 relative rounded-lg'>      
           <Image
        src="/Group 21 (1).svg"
        alt="Verceldcjncn Logo"
          fill
        style={{objectFit:"cover"}}
       className="w-full h-full rounded-lg"
       />
              </div>
          <div className=' w-fit flex items-center justify-center text-xl font-semibold '>Web Development</div>
         
          <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3 rounded-full mr-2'>3</div>
          </div>  
          </div>

          <div className=" w-full sm:h-20 h-fit ">
          <div className='w-full h-full flex justify-between'> 
  
           <div className='w-1/6 sm:w-24 lg:w-1/6 relative rounded-lg'>      
           <Image
       src="/image copy.svg"
       alt="Verceldcjncn Logo"
       fill
        style={{objectFit:"cover"}}
       className="w-full h-full rounded-lg"
       />
              </div>
          <div className=' w-fit flex items-center justify-center text-xl font-semibold '>Web Development</div>
          <div className='bg-[#8C52FF] w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center lg:mt-3 mt-3 rounded-full mr-2'>3</div>
          </div>  
          </div>
        
        </div>
      </div>
    </div>
      </div>
      <div className="w-full md:w-1/2 hidden md:block relative bg-slate-500 h-100vh mt-7 bottom-7">
      {machine && <MachineLearning />}
    </div>
    </div>
  );
}
export default ResponsiveDiv;
