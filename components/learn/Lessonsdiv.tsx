import React from "react";
import Image from "next/image";

const Lessonsdiv = () => {
  // Define your lessons data
  const lessonsData = [
    { id: 1, name: "Language of ML", language: "python" ,image: "/learn/play button.svg" },
    { id: 2, name: "Second Lesson", language: "javascript",image: "/learn/icon 1.svg" },
    { id: 3, name: "Third Lesson", language: "java" ,image: "/learn/icon2.svg" },
    { id: 4, name: "Fourth Lesson", language: "ruby" ,image: "/learn/icon 3.svg" },
    { id: 5, name: "Fifth Lesson", language: "typescript" ,image: "/learn/icon 1.svg" }
  ];

  return (
    <>
      <div className="mx-6 w-full md:w-[60%] flex justify-center pr-2 ">
        <div className="bg-white border-[0.5px] border-[#737373]  rounded-lg flex md:flex-col w-full h-fit px-8 pb-8">
          <div className=" w-fit w-max-[96px] text-black mx-2 my-4 font-[500]  text-xl">Lessons</div>
          <div className="  h-fit w-full mx-5 ">
            {lessonsData.map((lesson) => (
              <div
                key={lesson.id}
                className="w-full md:w-full  h-9 flex mb-4 shadow-xl bg-white rounded-3xl mt-2"
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
                </div><div className="flex justify-center  items-center">
                  <h4 className="text-black text-sm mx-2">
                    <span className="font-[660]">{lesson.name}</span>: {lesson.language}
                  </h4>
                </div>



              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Lessonsdiv;
