import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';


const Lessonsdiv = () => {
  // Define your lessons data
  const xDot = -400; 
  const yDot = -250;
  const lessonsData = [
    { id: 1, name: "Language of ML", language: "python", image: "/learn/play button.svg" },
    { id: 2, name: "Supervised Learning: Classification", language: "javascript", image: "/learn/icon 1.svg" },
    { id: 3, name: "Assessment: Python", language: "java", image: "/learn/icon2.svg" },
    { id: 4, name: "Hands on: ML", language: "ruby", image: "/learn/icon 3.svg" },
    { id: 5, name: "ML: Interact with data", language: "typescript", image: "/learn/icon 4 copy.svg" }
  ];

  return (
    <>
      <motion.div
         initial={{ opacity: 0, scale: 0, x: xDot, y: yDot }} // Start from the dot point with zero opacity and scale
         animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} // Animate to full opacity, scale, and original position
         transition={{ duration: 0.5, ease: 'easeInOut' }}
       className="mx-6 w-full md:w-[60%] flex justify-center pr-3">
        <div className="bg-white border-[0.5px] border-[#737373]  rounded-xl flex md:flex-col w-full h-fit px-8 pb-8">
          <div className=" w-fit w-max-[96px] text-black mx-2 my-4 font-[500]  text-xl">Lessons</div>
          <div className="  h-fit w-full mx-5 ">
            {lessonsData.map((lesson) => (
              <div
                key={lesson.id}
               
                className="w-full h-full overflow-hidden"
              >
                <div key={lesson.id} className="w-full h-full ">
                  <div
                    className="w-full md:w-[470px]  h-9 flex mb-4 border-[1px] border-gray-50 bg-white rounded-3xl mt-2"
                  >
                    <div className="w-fit h-fit flex  justify-center my-auto items-center mx-[3px]">
                      <Image
                        src={lesson.image}
                        alt="Verceldcjncn Logo"
                        className="border-rad"
                        width={30}
                        height={30}
                        priority
                      />
                    </div>
                    <div className="flex justify-center  items-center">
                      <h4 className="text-black text-sm mx-2">
                        <span className="font-[660]">{lesson.name}</span>: {lesson.language}
                      </h4>
                    </div>
                  </div>
                </div>
                </div>
            ))}
            
          </div>
       
        </div>
      
      </motion.div>
    </>
  );
};

export default Lessonsdiv;
