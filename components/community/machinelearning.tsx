import Image from 'next/image';

const MachineLearning: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-lg relative ">
      <div className="w-full bg-[#8C52FF] h-16 md:h-20 rounded-none md:rounded-lg flex items-center mt-3 justify-between p-4">
        <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center">
          <Image
            src="/web developement.svg"
            alt="Web Development Logo"
            width={30}
            height={30}
          />
        </div>
        <div className=" sm:text-3xl text-2xl  xl:text-2xl md:text-2xl   text-white font-semibold flex justify-center">
        Machine Learning
        </div>
        <div className="flex space-x-4">
          <Image
            src="/Group 15.svg"
            alt="Group Logo"
            width={30}
            height={29}
          />
          <Image
            src="/Clip path group-3.svg"
            alt="Clip Path Group"
            width={20}
            height={20}
          />
        </div>
   
      <div className="w-11/12 flex justify-between mt-auto mb-4 mx-auto absolute bottom-20 h-10 md:h-12 border border-[#D9D9D9] rounded-lg">
        <div className="ml-2 w-fit flex items-center justify-center">
          <Image
            src="/Clip path group.svg"
            alt="Clip Path Group"
            width={35}
            height={30}
          />
        </div>
        <div className="mr-2 w-fit flex items-center justify-center">
          <Image
            src="/Clip path group-2.svg"
            alt="Clip Path Group 2"
            width={30}
            height={29}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default MachineLearning;
