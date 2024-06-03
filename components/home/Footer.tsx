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
                    <div>
                        <div>
                            <h3>Stay Connected</h3>
                            
                        </div>
                    </div>
                    <div>

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