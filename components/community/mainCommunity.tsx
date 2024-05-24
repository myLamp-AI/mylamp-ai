import Image from 'next/image';
import MyCarousel from './MyCarousel'; 
import ExistingContainer from './scroll';
import Carousel2 from './scroll';

export default function ResponsiveDiv() {
  return (
    <div style={{ margin: 0 }} className="flex flex-wrap">
      <div className="w-full md:w-2/5 p-0">
        <div className="w-full flex justify-center items-start font-semibold flex-col ml-2 md:ml-3">
          <div className="text-xl sm:text-xl md:text-xl lg:text-2xl font-semibold text-[#737373]">Hello Raj!</div>
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
              className="ml-2 md:ml-4 p-2 rounded bg-white focus:outline-none text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl"
            />
          </div>
        </div>
        <div className="relative container mx-auto mt-4 md:mt-6">
          <div className="flex justify-between items-center mb-4 ml-2 md:ml-3 ">
            <h1 className="text-xl md:text-xl lg:text-2xl font-bold">Exclusive communities</h1>
          </div>
          <MyCarousel />
        </div>

      
      <Carousel2 />
     
        
      </div>
      
      <div className="w-full md:w-3/5 bg-green-200 hidden md:block">
        {/* Content for the right div */}
        Right Div (60%)
      </div>
    </div>
  );
}
