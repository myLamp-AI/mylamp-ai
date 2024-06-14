"use client"
import SliderCard from "./SliderCard";
import sliderData from "@/data/home/SliderData.json";

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
            <div className=" py-[60px] flex items-center justify-center ">

                <Carousel plugins={[AutoPlay({ delay: 2000 })]} className="w-full max-w-[1220px]">
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
                    
                    <CarouselPrevious className="relative translate-y-1/2 left-0 mx-4 bg-[#e7e7e7d0] " />
                    <CarouselNext className="relative translate-y-1/2 right-0 mx-4 bg-[#e7e7e7d0] " />
                </Carousel>
            </div>
        </>
    );
};

export default HomeSlider;
