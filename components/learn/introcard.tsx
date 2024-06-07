
import React from "react";
import Image from "next/image";
export default function IntroCard() {
  return (
    <>
      <div className="bg-white w-full h-full block sm:hidden  ">
        <h1 className="text-2xl font-bold text-center mt-4">Introduction to Machine Learning</h1>
        <div className="flex w-full bg-red-300   items-center text-[#0166C8]  flex-row font-semibold space-x-4">
          <div className="w-full md:w-32 max-w-36  bg-[#E8E2F4] px-7 py-2 text-center rounded-md  text-md ">3 weeks</div>
          <div className="w-full md:w-32 max-w-36  bg-[#E8E2F4] py-2 px-5 rounded-md text-center text-md ">6 months</div>
        </div>
        <div className="text-center mt-4">
          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">3 Weeks</button>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">6 Weeks</button>
          </div>
        </div>
      </div>


    </>
  )
}