import Image from "next/image";



export default function Footer() {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-8 bg-gradient-to-tr shadow-br from-[#8C52FF] to-[#b7cdfb] p-[40px] mt-[100px]">
                <div className="bg-white w-full rounded-2xl py-4 px-8 shadow-br">
                    <div className="flex items-center justify-between sm:px-4 text-2xl font-bold text-[#00000090] border-dashed border-b-[3px] pb-4">
                        <Image className="w-[100px] sm:w-[180px]" src="/home/logo.svg" height={100} width={180} alt="logo" /> by
                        <Image className="w-[100px] sm:w-[300px]" src="/home/myLampAI.svg" height={100} width={300} alt="myLampAI" />
                    </div>
                    <div className="flex w-full gap-4 items-start justify-between ">
                        <div className="w-full flex flex-col items-start justify-between p-4 gap-6">
                            <h3 className="text-[#8C52FF] font-semibold text-xl">Stay Connected</h3>
                            <div className="flex gap-4 items-center text-[#00000090] text-[0.9rem] ">
                                <Image className="max-w-[25px]" src={"/home/mail.svg"} height={30} width={30} alt="mail" />
                                <div>
                                    info@wize.co.in <br />admin@mylampai.in
                                </div>
                            </div>
                            <div className="flex gap-4 items-center text-[#00000090] text-[0.9rem] ">
                                <Image className="max-w-[25px]" src={"/home/phone.svg"} height={30} width={30} alt="phone" />
                                <div>
                                    +91-92441 60441 <br />+91-90279 32821
                                </div>
                            </div>
                            <div className="flex gap-4 items-center text-[#00000090] text-[0.9rem] ">
                                <Image className="max-w-[25px]" src={"/home/location.svg"} height={30} width={30} alt="location" />
                                <div>
                                    IIT Kharagpur <br />Kharagpur (West Bengal), 721302
                                </div>
                            </div>
                        </div>
                        <div className="w-full hidden sm:flex flex-col items-start justify-between py-4 gap-4 text-[0.9rem] text-[#00000090]">
                            <h3 className="text-[#8C52FF] font-semibold text-xl">Stay Updated</h3>
                            <div className="flex items-center justify-start w-full overflow-hidden rounded-lg ">
                                <input placeholder="Sign Up for our Newsletter" type="email" className="bg-primary-foreground w-full h-[35px] outline-none border-none py-2 px-4 font-semibold " />
                                <button>
                                    <Image className="bg-[#8C52FF] h-[35px] w-[40px] p-2" src={"/home/arrowInput.svg"} height={30} width={30} alt="arrowInput" />
                                </button>
                            </div>
                            <div className="w-full flex flex-col items-center gap-4 bg-primary-foreground rounded-lg p-4">
                                <div className="font-semibold text-left w-full text-[#00000070]">
                                    Know everything about Wize in just one call
                                </div>
                                <div className="flex gap-4 w-full">
                                    <div className="flex gap-2 bg-white rounded-lg p-2 text-center ">
                                        <Image src={"/home/desktop.svg"} height={50} width={50} alt="desktop" />
                                        Connect Now
                                    </div>
                                    <div className="flex gap-2 bg-white rounded-lg p-2 text-center ">
                                        <Image src={"/home/schedule.svg"} height={50} width={50} alt="schedule" />
                                        Connect Later
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-6 pt-4 border-dashed border-t-[3px]">
                        <Image src={"/social/whatsapp.svg"} width={27} height={27} alt="whatsapp" />
                        <Image src={"/social/instagram.svg"} width={27} height={27} alt="instagram" />
                        <Image src={"/social/linkedin.svg"} width={27} height={27} alt="linkedin" />
                        <Image src={"/social/facebook.svg"} width={27} height={27} alt="facebook" />
                        <Image src={"/social/youtube.svg"} width={27} height={27} alt="youtube" />
                        <Image src={"/social/telegram.svg"} width={27} height={27} alt="telegram" />
                        <Image src={"/social/discord.svg"} width={27} height={27} alt="discord" />
                        <Image src={"/social/twitter-x.svg"} width={27} height={27} alt="twitter" />
                    </div>
                </div>
                <div className="w-full max-w-[642px] flex flex-col justify-center items-start text-white font-medium">
                    <div className="w-full mb-4">
                        <h3 className="text-2xl">Quick Links</h3>
                        <div className="px-4 mt-4 word-spacing-wide">
                            <p>wiZe Camp: June | July | August</p>
                            <p>Featured: Era of GenAI | Product Teardown Amazon</p>
                            <p>Blogs: Exploring data science | Cold Mailing</p>
                            <p>Projects: AI Chatbot | Financial Forecasting Model</p>
                            <p>Resources: Internship Handbook | wiZe Camp Playbook</p>
                            <p>Community: Machine Learning | Product Management | SDE</p>
                        </div>
                    </div>
                    <div className="w-full my-4">
                        <h3 className="text-2xl">Company</h3>
                        <div className="flex gap-4 px-4 mt-4 flex-wrap ">
                            <p className="">About Us</p>
                            <p className="">Careers</p>
                            <p className="">Contact Us</p>
                            <p className="">Terms & Conditions</p>
                            <p className="">Privacy Policy</p>
                        </div>
                    </div>
                    <div className="mt-4 text-2xl text-center mx-auto translate-y-3">
                        Copyright &copy; 2023 myLamp AI - All rights reserved
                        <div className="h-[1px] w-full bg-white"></div>
                    </div>
                </div>
            </div>
        </>
    )
}