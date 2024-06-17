import Image from "next/image";
import Typing from "./Typing";
import "./HeroSection.css"

export default function HeroSection() {
    return (
        <>
            <div className="flex flex-col bg-primary-foreground ">
                <div className="flex justify-evenly items-center min-h-[calc(100vh-65px)] py-4 px-8 gap-8 w-full m-auto">
                    <div className="flex flex-col justify-end h-[600px] w-full relative">
                        <div className="text-6xl font-bold ml-14 mb-6">
                            <Typing /> <br />{" "}
                            <span className="font-semibold">Your Dream Career</span>
                        </div>
                        <div className="text-2xl font-medium ml-16 mb-9 ">
                            Get AI- Powered personalised career guidance <br /> based on your
                            interests, aptitude, and goals
                        </div>
                        <button className="flex items-center justify-between bg-[#8C52FF] rounded-full text-white text-2xl font-semibold py-3 pl-8 px-3 w-[300px] mb-12 ml-14">
                            Let&apos;s Get Started
                            <Image
                                src={"/home/heroSectionArrow.svg"}
                                height={45}
                                width={45}
                                alt=""
                            ></Image>
                        </button>
                        <div className="flex gap-4 ">
                            <div className="flex flex-wrap gap-2 w-full bg-[#f5f5f580] rounded-2xl p-4">
                                <div className="flex w-full gap-x-2">
                                    <div className="bg-[#f5f5f5] rounded-2xl p-3 min-h-16 w-full">
                                        <h1 className="flex items-center gap-2 font-semibold">
                                            <Image
                                                className=""
                                                src={"/home/HSecMentorship.svg"}
                                                alt=""
                                                height={30}
                                                width={30}
                                            />{" "}
                                            Mentorship
                                        </h1>
                                        <div className="text-[#00000090] text-xs ml-2">
                                            Get assistance from experts from IITs and IIMs and get
                                            ahead in your career.
                                        </div>
                                    </div>
                                    <div className="bg-[#f5f5f5] rounded-2xl p-3 min-h-16 w-full">
                                        <h1 className="flex items-center gap-2 font-semibold">
                                            <Image
                                                className=""
                                                src={"/home/HSecResources.svg"}
                                                alt=""
                                                height={30}
                                                width={30}
                                            />{" "}
                                            Resources
                                        </h1>
                                        <div className="text-[#00000090] text-xs ml-2">
                                            Get free access to resources helpful for your college and
                                            career journey
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  bg-[#f5f5f5] rounded-2xl p-3 min-h-16 w-full">
                                    <Image
                                        src={"/home/HSecCareer.svg"}
                                        alt=""
                                        height={20}
                                        width={20}
                                        className="w-[100px] mr-4"
                                    />
                                    <div>
                                        <h1 className="flex items-center gap-2 font-semibold">
                                            Career Blogs
                                        </h1>
                                        <div className="text-[#00000090] text-xs">
                                            Explore personalized career blogs crafted to enhance your
                                            domain knowledge.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col bg-[#f5f5f580] p-4 rounded-2xl max-w-[260px]">
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <Image
                                            src="/home/circle.svg"
                                            width={100}
                                            height={100}
                                            alt="box"
                                            className="w-8"
                                        />
                                        <Image
                                            src="/home/circle.svg"
                                            width={100}
                                            height={100}
                                            alt="box"
                                            className="w-8"
                                        />
                                        <Image
                                            src="/home/circle.svg"
                                            width={100}
                                            height={100}
                                            alt="box"
                                            className="w-8"
                                        />
                                    </div>
                                    <Image
                                        src="/home/arrowdown.svg"
                                        width={100}
                                        height={100}
                                        alt="box"
                                        className="w-8 mx-2"
                                    />
                                </div>
                                <div className="w-full h-[2px] bg-white my-4"></div>
                                <div>
                                    <div className="my-2 text-xl font-medium">
                                        Join to our Community
                                    </div>
                                    <div className="text-xs text-[#00000090] mt-4">
                                        Join a community of serious and passionate tech folks, students, mentors and coaches to accelerate your career.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 w-full max-w-[600px] bg-[#ffffff50] rounded-2xl">
                        <div className="flex flex-col justify-center items-center bg-[#f5f5f5] min-h-[552px] rounded-2xl py-2 px-5">
                            <Image
                                src={"/home/HeroSection.svg"}
                                alt="HeroSection"
                                width={100}
                                height={100}
                                className="w-full "
                            ></Image>
                        </div>
                    </div>
                </div>
                <div className="home-infinite-logos overflow-hidden pt-2 pb-6 whitespace-nowrap relative ">
                    <div className="infinite-logo-slide inline-block ">
                        <Image src={"/home/herosection/image2.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image3.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image4.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image5.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image6.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image7.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                    </div>
                    <div className="infinite-logo-slide inline-block ">
                        <Image src={"/home/herosection/image2.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image3.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image4.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image5.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image6.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                        <Image src={"/home/herosection/image7.svg"} alt="" height={100} width={40} className="inline-block mx-[40px] w-auto h-[100px]"></Image>
                    </div>
                </div>
                {/* <div className="text-center text-2xl text-[#1C4980] font-semibold pt-1 pb-3">
                    Data from Top Institutes
                </div> */}
            </div>
        </>
    );
}
