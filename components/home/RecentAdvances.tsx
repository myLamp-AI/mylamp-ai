import Image from "next/image";

const data = [
    {
        imageUrl: "/home/profile.jpg",
        title: "Exploring new developements in genAI",
        description: "GenAI is a platform that uses AI to provide insights and recommendations to users."
    },
    {
        imageUrl: "/home/profile.jpg",
        title: "Exploring new developements in genAI",
        description: "GenAI is a platform that uses AI to provide insights and recommendations to users."
    },
    {
        imageUrl: "/home/profile.jpg",
        title: "Exploring new developements in genAI",
        description: "GenAI is a platform that uses AI to provide insights and recommendations to users."
    },
    {
        imageUrl: "/home/profile.jpg",
        title: "Exploring new developements in genAI",
        description: "GenAI is a platform that uses AI to provide insights and recommendations to users."
    }
]

function RecentAdvancesCard({
    imageUrl, title, description
}: {
    imageUrl: string;
    title: string;
    description: string;
}) {
    return (
        <>
            <div className="relative flex flex-col justify-between max-w-[300px] pb-4 rounded-2xl overflow-hidden min-h-[350px] shadow-md hover:scale-105 transition-all">
                <Image src={imageUrl} height={100} width={100} alt="blog image" className="w-full"/>
                <h3 className="font-semibold text-lg  px-4 pt-4">{title}</h3>
                <p className="text-sm text-[#00000090] px-4 pb-4">{description}</p>
                <Image src={"/home/arrowdown.svg"} width={200} height={200} alt="arrow" className=" absolute w-8 bottom-2 right-2 shadow-lg rounded-full"></Image>
            </div>
        </>
    );
}

export default function RecentAdvances() {
    return (
        <>
            <div className="max-w-[1300px] m-auto">
                <div className="flex justify-between items-center sm:mx-2 mx-9 ">
                    <h2 className="text-3xl font-semibold">Recent Advances In GenAI</h2>
                    <button className="flex items-center gap-2  border-2 border-black font-semibold  rounded-full px-4 py-2">Read More
                        <Image src={"/home/ArrowLearnMore.svg"} alt="" height={25} width={25} />
                    </button>
                </div>
                <div className="flex flex-wrap justify-between gap-4 my-[50px] sm:mx-auto mx-9 ">
                    {
                        data.map((item, index) => (
                            <RecentAdvancesCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}