import Image from 'next/image';
import ImageGrid from './ImageGrid';

export default function PowerOfWize() {
    return (
        <>
            <div className='flex justify-between w-full max-w-[1300px] m-auto gap-4 sm:flex-row flex-col  '>
                <div className='w-full flex flex-col sm:items-start justify-evenly pl-2 items-center my-10 sm:my-0  '>
                    <p className="w-fit sm:text-sm font-bold text-xl -ml-96">
                        ----- The Power of wiZe
                    </p>
                    <div className='flex flex-col items-start sm:max-w-[500px] w-[60%] gap-8 pr-8 '>
                        <p className="sm:text-4xl text-5xl font-medium my-10 sm:my-0  ">
                            Your Gateway To Limitless Creativity - <span className='text-[#5FE8F1]'>One</span> platform, <span className='text-[#8C52FF]'>Millions</span> of possibilities
                        </p>
                        <button className='flex items-center  gap-2 text-xl border-2 border-black  rounded-full px-4 py-2 font-semibold hover:scale-105 transition-all ease-in-out'>
                            Learn More <Image src={"/home/ArrowLearnMore.svg"} alt='' height={30} width={30} /> 
                        </button>
                    </div>
                    <p className="sm:text-sm font-bold w-fit mt-9 text-lg -ml-48 sm:ml-0">
                        Trusted by leading professionals and visionary partners ----
                    </p>
                </div>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 sm:w-full sm:max-w-[600px] w-[60%]  mx-auto sm:relative">
                    <Image width={100} height={100} src="/home/PowerOfWize.svg" alt="Background Image" className="w-[298px] rounded-tr-[5rem] rounded-bl-[5rem] h-full" />
                    <Image width={100} height={100} src="/home/PowerOfWize.svg" alt="Background Image" className="w-[298px] rounded-br-[5rem] rounded-tl-[5rem]  h-full" />
                    <Image width={100} height={100} src="/home/PowerOfWize.svg" alt="Background Image" className="w-[298px] rounded-tl-[5rem] rounded-br-[5rem]  h-full" />
                    <Image width={100} height={100} src="/home/PowerOfWize.svg" alt="Background Image" className="w-[298px] rounded-bl-[5rem] rounded-tr-[5rem]  h-full" />
                </div>
                {/* <ImageGrid /> */}
            </div>
            <div className='flex items-center justify-between rounded-2xl shadow-md my-[100px] bg-primary-foreground m-auto py-8 px-12  min-h-[100px] sm:mx-auto mx-5 max-w-[1300px]'>
                <p className='text-lg font-semibold text-[#1c1c1c]'>So, what are you waiting for? <br />Start exploring career options now!</p>
                <button className='bg-primary transition-all border-2 border-primary text-white hover:bg-white hover:text-primary font-semibold text-lg rounded-lg py-2 px-8 shadow-md '>Let&apos;s get Started</button>
            </div>
        </>
    )
}