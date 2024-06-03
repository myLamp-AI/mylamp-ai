import Image from "next/image";

const data = [
    {
        imageUrl: "/home/blogImage.svg",
        title: "Exploring new developements in genAI",
        description: "GenAI is a platform that uses AI to provide insights and recommendations to users."
    },
    {
        imageUrl: "/home/blogImage.svg",
        title: "Exploring new developements in genAI",
        description: "GenAI is a platform that uses AI to provide insights and recommendations to users."
    },
    {
        imageUrl: "/home/blogImage.svg",
        title: "Exploring new developements in genAI",
        description: "GenAI is a platform that uses AI to provide insights and recommendations to users."
    },
    {
        imageUrl: "/home/blogImage.svg",
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
            <div className="flex flex-col justify-between max-w-[300px] p-4 rounded-2xl min-h-[350px] shadow-md bg-white ">
                <Image src={imageUrl} height={100} width={100} alt="blog image" className="w-full"/>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-[#00000090]">{description}</p>
            </div>
        </>
    );
}

export default function RecentAdvances() {
    return (
        <>
            <div className="max-w-[1300px] m-auto">
                <div className="flex justify-between items-center ">
                    <h2 className="text-3xl font-semibold">Recent Advances In GenAI</h2>
                    <button className="border-2 border-black font-semibold  rounded-full px-4 py-2">Read More</button>
                </div>
                <div className="flex flex-wrap justify-evenly gap-4 my-[50px]">
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