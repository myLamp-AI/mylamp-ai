import Image from "next/image";



export default function Footer () {
    return (
        <>
            <div className="flex gap-8 bg-blue-400 p-[40px] mt-[100px]">
                <div className="bg-white w-full rounded-2xl py-4 px-8">
                    <div className="flex items-center justify-evenly text-2xl font-bold text-[#00000090] border-dashed border-b-[3px] pb-4">
                        <Image src="/home/logo.svg" height={100} width={130} alt="logo"  /> by
                        <Image src="/home/myLampAI.svg" height={100} width={250} alt="myLampAI" />
                    </div>
                    <div className="flex w-full gap-4 items-start justify-between ">
                        <div>
                            <h3>Stay Connected</h3>
                            <div>
                                <Image src={"/home/mail.svg"} height={30} width={30} alt="mail" />
                                <div>
                                    info@wize.co.in <br />admin@mylampai.in
                                </div>
                            </div>
                            <div>
                                <Image src={"/home/phone.svg"} height={30} width={30} alt="phone" />
                                <div>
                                    +91-92441 60441 <br />+91-90279 32821
                                </div>
                            </div>
                            <div>
                                <Image src={"/home/location.svg"} height={30} width={30} alt="location" />
                                <div>
                                    IIT Kharagpur <br />Kharagpur (West Bengal), 721302
                                </div>
                            </div>
                        </div>  
                        <div>
                            <h3>Stay Updated</h3>
                            <input type="email" />
                            <div>
                                <div>
                                    Know everything about Wize in just one call
                                </div>
                                <div>
                                    <div>
                                        <Image src={"/home/desktop.svg"} height={50} width={50} alt="desktop" />
                                        Connect Now
                                    </div>
                                    <div>
                                        <Image src={"/home/schedule.svg"} height={50} width={50} alt="schedule" />
                                        Connect Later
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={"/home/whatsapp.svg"} width={30} height={30} alt="whatsapp" />
                        <Image src={"/home/instagram.svg"} width={30} height={30} alt="instagram" />
                        <Image src={"/home/linkedin.svg"} width={30} height={30} alt="linkedin" />
                        <Image src={"/home/facebook.svg"} width={30} height={30} alt="facebook" />
                        <Image src={"/home/youtube.svg"} width={30} height={30} alt="youtube" />
                        <Image src={"/home/telegram.svg"} width={30} height={30} alt="telegram" />
                        <Image src={"/home/discord.svg"} width={30} height={30} alt="discord" />
                        <Image src={"/home/twitter.svg"} width={30} height={30} alt="twitter" />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between items-start">
                    <div>
                        <h3>Quick Links</h3>
                        <div>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Community</p>
                            <p>Blog</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <div>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Community</p>
                            <p>Blog</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}