import Image from "next/image";

export default function WizeCamp() {
  return (
    <>
      <div className="xl:max-w-[1220px] max-w-[650px] m-3 sm:m-auto bg-primary-foreground flex flex-col xl:flex-row justify-around items-center rounded-2xl p-4 sm:p-8 gap-4 my-4">
        <div className="bg-[#8C52FF] w-full h-full max-w-[600px] min-h-[500px] flex flex-col items-center justify-evenly rounded-2xl p-4">
          <Image
            src="/home/logoCombined.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[150px] mt-6 mb-2"
          ></Image>
          <p className="text-sm font-bold">PRESENTS</p>
          <Image
            src="/home/wizeCamp.svg"
            alt="wizeCamp"
            width={200}
            height={500}
            className="max-w-[450px] w-full"
          ></Image>
          <p className="text-white text-right w-full max-w-[500px] font-bold tracking-widest">
            A CAREER BOOTCAMP
          </p>
          <div className="flex sm:flex-row flex-col justify-evenly items-center px-2 py-2 my-4 rounded-full text-white text-xs w-full max-w-[420px] bg-[#eeeeee40]">
            <div className="w-full text-center flex flex-col">
              <div>Camp Schedule </div>
              <div className="flex justify-center gap-2">
                {" "}
                <Image
                  src={"/home/calendar-event.svg"}
                  alt="calendar"
                  width={16}
                  height={16}
                />{" "}
                28th Aug - 24th Sep
              </div>
            </div>
            <div className="w-full text-center flex flex-col">
              <div>Duration </div>
              <div className="flex justify-center gap-2">
                {" "}
                <Image
                  src={"/home/hourglass.svg"}
                  alt="calendar"
                  width={16}
                  height={16}
                />{" "}
                1 Month (on rolling basis)
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between  text-white max-w-[400px] mx-auto gap-8">
            <button className="bg-[#ffffff72] rounded-lg py-2 px-4 w-full text-lg font-semibold">
              More Info.
            </button>
            <button className="border-2 rounded-lg py-3 px-4 w-full text-lg font-semibold">
              Register Now
            </button>
          </div>
        </div>
        <div className="hidden sm:flex w-full flex-wrap items-center justify-center gap-4 min-h-[500px] max-w-[516px] ">
          <div className="w-full max-w-[250px] min-h-[242px] rounded-lg bg-white"></div>
          <div className="w-full max-w-[250px] min-h-[242px] rounded-lg bg-white"></div>
          <div className="w-full max-w-[250px] min-h-[242px] rounded-lg bg-white"></div>
          <div className="w-full max-w-[250px] min-h-[242px] rounded-lg bg-white"></div>
        </div>
      </div>
    </>
  );
}
