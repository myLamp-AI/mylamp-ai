"use client"
import React, { useState, useEffect, useRef } from "react";
import Exdata from '@/app/data/Assessment.json'
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const carouselRef = useRef(null);

  const updateItemsToShow = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      const newItemsToShow = Math.floor(width / 150); // Assuming each item is approximately 200px wide
      setItemsToShow(newItemsToShow);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);
  const totalItems = Exdata.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - itemsToShow + totalItems) % totalItems
    );
  };

  const canGoNext = currentIndex + itemsToShow < totalItems;
  const canGoPrev = currentIndex > 0;

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <span className="text-base font-semibold">Exclusive Assessments</span>
          <div className="flex flex-row gap-4">
            <button onClick={handlePrev} disabled={!canGoPrev}><img src="/practice/lfarw.svg"  /></button>
            <button onClick={handleNext} disabled={!canGoNext}><img src="/practice/rfarw.svg"  /></button>
          </div>
        </div>
        <div ref={carouselRef} className="flex overflow-hidden scrollbar-hide gap-3">
          {Exdata.map((slide, index) => (
            <div key={index} className={`h-56 ${index >= currentIndex && index < currentIndex + itemsToShow
              ? "block"
              : "hidden"
            }`}>
              <div className="bg-[#fff] rounded-lg h-full ">
                <div ><img src={Exdata[index].svg} className="w-full"/></div>
                <div className="text-md font-bold h-16 flex flex-row justify-around pt-3">
                  <div className="w-3/5">{Exdata[index].name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
