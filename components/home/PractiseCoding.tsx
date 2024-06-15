"use client";
import { useState, useEffect } from "react";

interface ExpandingCardProps {
    title: string;
    description: string;
    image: string;
    bgColor: string;
}

const ExpandingCard: React.FC<ExpandingCardProps> = ({ title, description, image, bgColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    }

    useEffect(() => {
        setIsHovered(false);
    }, [isHovered])

    return (
        <div className={`w-[200px] min-h-[400px] flex p-4 gap-4 items-center bg-white overflow-hidden border-y-2 border-x-1 transition-all hover:w-[400px] ${isHovered? "w-[400px]" : ""}`}>
            <div className="bg-[#2E66D3] w-6 h-6 rounded-full backdrop-blur-sm"></div>
            <div>
                <div className="text-xl font-semibold">{title}</div>
                <div className="text-[#000000BB] font-medium text-sm">{description}</div>
            </div>
        </div>
    )
}

const PracticeCoding = () => {
    return (
        <div id="practice" className="pb-[100px] px-[100px] min-h-screen">
            <h4 className="pt-4 font-semibold text-[#8C52FF]">
                PRACTICE
                <div className="bg-[#8C52FF] w-6 h-6 blur-sm rounded-full absolute left-0 translate-x-[-14px] translate-y-[-100%] " ></div>
            </h4>
            <div className="text-3xl font-medium mt-8 mb-4">
                Practice Coding & Ace Hiring Assessments
            </div>
            <p className="text-[#000000BB] font-medium my-4">
                Level up your coding skills by practicing the hiring assessments
                of your dream companies & ace your placement game!
            </p>
            <div className="bg-white min-h-[400px] w-full my-8 rounded-2xl">

                <div className="flex justify-start items-center rounded-xl overflow-hidden">
                    <ExpandingCard title="Coding Practice" bgColor="#F3C1E7" description="Practice coding problems from top companies" image="/home/practiceCoding.svg" />
                    <ExpandingCard title="Ace Assessments" bgColor="#CBDEF4" description="Practice & ace the hiring assessments of top companies" image="/home/aceAssessments.svg" />
                    <ExpandingCard title="Interview Prep" bgColor="#C8BBFF" description="Prepare for interviews with mock interviews & feedback" image="/home/interviewPrep.svg" />
                </div>
            </div>
        </div>

    );
}

export default PracticeCoding;