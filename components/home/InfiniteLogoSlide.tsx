import Image from "next/image";
import "./HeroSection.css";


const InfiniteLogoSlide: React.FC = () => {
  return (
    <>
      <div className="home-infinite-logos overflow-hidden pt-2 pb-6 max-w-screen whitespace-nowrap relative">
        <div className="infinite-logo-slide inline-block ">
          <Image
            src={"/home/herosection/image2.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image3.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image4.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image5.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image6.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image7.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
        </div>
        <div className="infinite-logo-slide inline-block ">
          <Image
            src={"/home/herosection/image2.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image3.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image4.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image5.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image6.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
          <Image
            src={"/home/herosection/image7.svg"}
            alt=""
            height={100}
            width={40}
            className="inline-block mx-[40px] w-auto h-[100px]"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default InfiniteLogoSlide;