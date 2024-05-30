import Image from 'next/image';

const MachineLearning: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-lg relative">
      {/* Header Section */}
      <div className="w-full bg-[#8C52FF] absolute top-0 h-16 md:h-20 rounded-lg flex items-center justify-between p-4">
        <div className="bg-white w-14 h-14 rounded-full flex justify-center items-center">
          <Image
            src="/web developement.svg"
            alt="Web Development Logo"
            width={30}
            height={30}
          />
        </div>
        <div className="text-2xl text-white font-semibold flex justify-center">
          <h1>Machine Learning</h1>
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
      </div>
      
      {/* Bottom Section */}
      <div className="w-11/12 flex absolute bottom-4 left-1/2 transform -translate-x-1/2 h-10 md:h-14 border border-[#D9D9D9] rounded-lg">
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
  );
}

export default MachineLearning;
