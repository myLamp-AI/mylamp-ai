import { CarouselItem } from "@/components/ui/carousel";

interface SliderCardProps {
  index: number;
}

const SliderCard: React.FC<SliderCardProps> = ({index}) => {
  return (
    <>
      <CarouselItem
        key={index}
        className="basis-[100%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center items-center"
      >
        <div
          className={`min-h-[335px] max-w-[350px] w-full rounded-br-3xl bg-[url('/home/Slider1.svg')] bg-no-repeat bg-cover relative`}
        >
          <div
            className={`absolute ${
              index % 2 === 0 ? "top" : "bottom"
            }-4 left-4 text-xs bg-[#00000040] rounded-full px-2 py-1 backdrop-blur-sm text-white`}
          >
            Smart Tip
          </div>
          <div className="absolute top-4 right-4 text-xs bg-[#00000040] rounded-full h-8 w-8 backdrop-blur-sm text-white flex items-center justify-center gap-1">
            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-4 text-xs bg-[#00000040] rounded-full h-8 w-8 backdrop-blur-sm text-white flex justify-center rotate-45 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>
      </CarouselItem>
    </>
  );
};

export default SliderCard;
