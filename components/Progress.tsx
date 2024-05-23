"use client"
import React from 'react';
import Image from "next/image";

interface CircleProgressProps {
  percentage: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (percentage / 100);
  const offset = circumference - progress;

  return (
    <div className="flex absolute -left-[130px]  flex-col top-[-20px] items-center h-28 w-28">
      <div className='z-20'>
      <svg width={radius * 2} height={radius * 2}>
        {/* Track */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - 5} // Adjusted radius for better appearance
          fill="none"
          stroke="#FFFF"
          strokeWidth="10"
        />
        {/* Progress */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - 4} // Adjusted radius for better appearance
          fill="none"
          stroke="#8C52FF"
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>
      </div>
           <div className='z=0 relative -top-[68px] left-[1.5px]'>
      <Image
             src="/robot icon (1).svg"
             alt="Verceldcjncn Logo"
             className=""
             width={45}
             height={45}
            />
            </div>
    </div>
  );
};

export default CircleProgress;
