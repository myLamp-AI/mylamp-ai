"use client"
import SliderCard from "./SliderCard";
import sliderData from "@/data/home/SliderData.json";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import AutoPlay from "embla-carousel-autoplay"

const HomeSlider: React.FC = () => {

    return (
        <>
            <div className=" py-[100px] flex items-center justify-center">

                {/* <div>
                    { 
                        sliderData.map((item, index) => {
                            return (
                                <SliderCard imageUrl={item.imageUrl} key={index} />
                            )
                        })
                    }
                </div> */}
                <Carousel plugins={[AutoPlay({ delay: 1000 })]} className="w-full max-w-[1200px]">
                    <CarouselContent>
                        {sliderData.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className={`p-1 min-h-[300px] bg-[url('/home/Slider1.svg')]`}>
                                        {/* <Card>
                                            <CardContent className={`flex aspect-square items-center justify-center p-6 `}>
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card> */}
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
};

export default HomeSlider;