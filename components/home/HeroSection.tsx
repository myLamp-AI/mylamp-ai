import Image from "next/image";
import Typing from "./Typing";

export default function HeroSection() {
    return (
        <>
            <div className="flex flex-col bg-[#E9DEFF] ">
                <div className="flex justify-evenly items-center min-h-[calc(100vh-65px)] py-4 px-8 gap-8 w-full m-auto">
                    <div className="flex flex-col justify-end h-[600px] w-full relative">
                        {/* <div className='flex justify-between items-start'>
                            <div className='bg-[#f5f5f580] p-4 rounded-2xl max-w-[300px]' >
                                <div className='flex justify-between'>
                                    <div className='flex gap-2'>
                                        <Image src="/home/circle.svg" width={100} height={100} alt="box" className='w-[1.5rem]' />
                                        <Image src="/home/circle.svg" width={100} height={100} alt="box" className='w-[1.5rem]' />
                                        <Image src="/home/circle.svg" width={100} height={100} alt="box" className='w-[1.5rem]' />
                                    </div>
                                    <Image src="/home/arrowdown.svg" width={100} height={100} alt="box" className='w-[1.5rem] mx-2' />
                                </div>
                                <div className='w-full h-[2px] bg-white my-3'></div>
                                <div>
                                    <div className='my-2 font-medium'>
                                        Join to our Community
                                    </div>
                                    <div className='text-xs'>
                                        Collaborate with artists and stay driven with moana cutting edge ai tools
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/home/bellalarm.svg" width={100} height={100} alt="bell" className='w-[2rem]' />

                                <div className='flex items-center bg-[#f5f5f580] gap-2 rounded-full px-2 border-4'>
                                    Account
                                    <Image src="/home/user.svg" width={100} height={100} alt="user" className='w-[1.5rem] bg-white rounded-full p-1' />
                                </div>
                            </div>
                        </div> */}
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
                                        <div className="text-[#00000090] text-xs">
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
                                        <div className="text-[#00000090] text-xs">
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
                            <div className="flex flex-col bg-[#f5f5f580] p-4 rounded-2xl max-w-[300px]">
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <Image
                                            src="/home/circle.svg"
                                            width={100}
                                            height={100}
                                            alt="box"
                                            className="w-[1.5rem]"
                                        />
                                        <Image
                                            src="/home/circle.svg"
                                            width={100}
                                            height={100}
                                            alt="box"
                                            className="w-[1.5rem]"
                                        />
                                        <Image
                                            src="/home/circle.svg"
                                            width={100}
                                            height={100}
                                            alt="box"
                                            className="w-[1.5rem]"
                                        />
                                    </div>
                                    <Image
                                        src="/home/arrowdown.svg"
                                        width={100}
                                        height={100}
                                        alt="box"
                                        className="w-[1.5rem] mx-2"
                                    />
                                </div>
                                <div className="w-full h-[2px] bg-white my-3"></div>
                                <div>
                                    <div className="my-2 text-xl font-medium">
                                        Join to our Community
                                    </div>
                                    <div className="text-xs">
                                        Collaborate with artists and stay driven with moana cutting
                                        edge ai tools
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 w-full max-w-[600px] bg-[#ffffff50] rounded-2xl">
                        <div className="flex flex-col justify-center items-center bg-[#f5f5f5] min-h-[552px] rounded-2xl py-2 px-5">
                            {/* <div className='flex justify-between w-full'>
                                <Image src={"/home/logo.svg"} width={100} height={100} alt="logo" className='w-[120px]' />
                                <div className='flex items-center justify-between px-2 gap-2 rounded-full text-base border-black border-2'>
                                    MENU
                                    <Image src={"/home/menu.svg"} width={100} height={100} alt="menu" className='w-[1.5rem]' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image src={"/home/wize9box.svg"} width={100} height={100} className='w-[40px]' alt='wize logo' />
                                <div className='text-4xl my-4 text-center font-medium'>
                                    Experience the future with <span className='text-[#8C52FF]'>wiZ</span>e
                                </div>
                                <div className='flex items-center justify-between p-2 gap-2 text-lg bg-black text-white rounded-full'>
                                    Try Now
                                    <Image src="/home/arrow.svg" width={100} height={100} alt="arrow" className='w-[1.5rem]' />
                                </div>
                            </div>
                            <div className='text-xl'>
                                &quot;We <span className='text-[#C2B4D8]'>envision</span> a <span className='text-[#67ADFF]'>world</span> with <span className='text-[#8C52FF]'>no limits.</span>&quot;
                            </div> */}
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
            </div>
        </>
    );
}
