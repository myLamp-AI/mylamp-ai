import Image from 'next/image'

export default function BackedByBest() {
    return (
        <>
            <div className="bg-white flex flex-col justify-center items-center my-4 pb-4 min-h-[600px]">
                <div className="text-4xl font-medium h-[150px] flex items-center">
                    Backed by Best
                </div>
                <div className='flex flex-wrap w-full items-center justify-evenly gap-4'>
                    <div className='w-full max-w-[200px] min-h-[300px] flex flex-col justify-evenly drop-shadow-md font-semibold text-xl items-center '>
                        <Image src="/home/IITKGP.svg" alt="IIT Kharagpur" className='w-full ' width={200} height={200} />
                        <div>IIT Kharagpur</div>
                    </div>
                    <div className='w-full max-w-[350px] min-h-[300px] flex flex-col justify-evenly drop-shadow-md font-semibold text-xl items-center '>
                        <Image src="/home/IIMBanglore.svg" alt="IIT Kharagpur" className='w-full ' width={200} height={200} />
                        <div>IIM Bangalore</div>
                    </div>
                    <div className='w-full max-w-[450px] min-h-[300px] flex flex-col justify-evenly font-semibold text-xl items-center '>
                        <Image src="/home/microsoft1.svg" alt="IIT Kharagpur" className='w-full' width={200} height={200} />
                        <div className='drop-shadow-md'>Microsoft</div>
                    </div>
                </div>
            </div>
        </>
    )
}