import LearnCollapseItem from "./LearnCollapseItem";


export default function LearnCollapseCard() {
    return (
        <>
            {/* <div className="bg-white flex space-between rounded-md overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-full ">
         
                
            </div> */}
            <div className="p-4 text-white flex flex-row ">
                <div className="w-80 h-full ">
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                    <LearnCollapseItem />
                    <LearnCollapseItem />

                </div>
                <div className=" ml-7 w-1/2">
                    <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">Lessons</h1>
                            <span className="bg-blue-500 text-black px-2 py-1 rounded">Not started!</span>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Language of ML: Python</h2>
                            <p>Supervised Learning: classNameification</p>
                            <p>Assessment: Python</p>
                            <p>Hands on: ML</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">Revise</h2>
                            <p>Completed</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">ML: Interact with data</h2>
                            <p>Not started!</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}