import Image from 'next/image';

export default function HeroSection() {
    return (
        <>

            <div className="flex flex-col bg-gradient-to-b from-[#8C52FF] to-[#f5f5f5]   ">
                <div className="flex justify-evenly min-h-screen p-4 max-w-[1200px] w-full m-auto">
                    <div className="flex flex-col justify-between items-center bg-[#f5f5f5] h-[600px] w-full max-w-[600px] mx-2 rounded-2xl py-2 px-5">
                        <div className='flex justify-between w-full'>
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
                        </div>
                    </div>

                    <div className="flex flex-col justify-between h-[600px] w-full mx-2 relative">
                        <div className='flex justify-between items-start'>
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
                        </div>
                        <div className='flex flex-wrap gap-2 w-full bg-[#f5f5f580] rounded-2xl p-[1.5rem] text-sm font-medium'>
                            <div className='flex w-full gap-x-2'>
                                <div className='bg-[#f5f5f5] rounded-2xl p-3 h-16 w-full'>
                                    Rendering
                                </div>
                                <div className='bg-[#f5f5f5] rounded-2xl p-3 h-16 w-full'>
                                    Botanical Library
                                </div>
                            </div>
                            <div className='bg-[#f5f5f5] rounded-2xl p-3 h-16 w-full'>
                                Realistic flower Modelling
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}