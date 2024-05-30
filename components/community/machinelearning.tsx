
import Image from 'next/image';

const MachineLearning: React.FC = () => {
  return (
    <>
    <div className='  w-full h-full flex  flex-col rounded-lg relative '>
      
    <div className='w-full bg-[#8C52FF] absolute top-0 h-1/10 rounded-lg flex items-center justify-between'>
     <div className='translate-x-8 bg-[#FFFF] w-14 h-14 rounded-full flex justify-center items-center'>
           <Image
           src="/web developement.svg"
           alt="Verceldcjncn Logo"
           className=""
           width={30}
           height={30}
            />
      </div>   
     <div className='translate-x-10 text-2xl lg:translate-x-10 text-white font-semibold flex justify-center md:translate-x-4'><h1>Machine Learning</h1></div>  
     <div className=' lg:translate-x-10 md:translate-x-3 '>
     <Image
           src="/Group 15.svg"
           alt="Verceldcjncn Logo"
           className=""
           width={30}
           height={29}
            />
      </div>  
     <div className='-translate-x-3 '>
      
     <Image
           src="/Clip path group-3.svg"
           alt="Verceldcjncn Logo"
           className=""
           width={20}
           height={20}
            />
      </div>  
    </div>
      <div className='w-11/12 flex absolute justify-between transform -translate-x-1/2 -translate-y-1/2 h-10 md:h-10 xl:h-14 border bottom-0 left-1/2 border-[#D9D9D9] rounded-lg'>
       <div className='ml-2 w-fit flex items-center justify-center'>
           <Image
           src="/Clip path group.svg"
           alt="Verceldcjncn Logo"
           className=""
           width={35}
           height={30}
            />
       </div>
       <div className='mr-2 w-fit flex items-center justify-center'>
           <Image
           src="/Clip path group-2.svg"
           alt="Verceldcjncn Logo"
           className=""
           width={30}
           height={29}
            />
       </div>
     
      </div>
    </div>
    </>
  )
}

export default MachineLearning;