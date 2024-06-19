import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ExclusiveAssementsType  {
    text: string;
    imgURL: string;
    bgColor: string;
}

const ExclusiveAssessements = (props : {exclusiveAssements : ExclusiveAssementsType [] }) => {
	const exclusiveAssements = props.exclusiveAssements;

	const CardComponent = ( {data} : { data : ExclusiveAssementsType} ) => {
		const { text, imgURL, bgColor } = data;

		return (
			<div className="w-[30%] h-full bg-white rounded-2xl shadow-slate-300 shadow-md">
				<div
					style={{ backgroundColor: bgColor }}
					className="rounded-lg h-[60%] relative">
					<img
						src={imgURL}
						className="h-[70%] max-w-[70%] absolute right-5 bottom-0"
					/>
				</div>
				<p className="font-bold text-xl h-[30%] w-[50%] mt-3 ml-5 flex items-center">{text}</p>
			</div>
		);
	};

	return (
		<div>
			<div className="flex justify-between">
				<div className="font-bold text-lg">Exclusive Assessements</div>
				<div className="flex gap-4">
					<button>
						<FaChevronLeft />
					</button>
					<button>
						<FaChevronRight />
					</button>
				</div>
			</div>
			<div className="flex justify-between mt-4 w-[100%] h-[300px]">
				{exclusiveAssements.map((value, index) => (
					<CardComponent
						key={index}
						data={value}
					/>
				))}
			</div>
		</div>
	);
};

export default ExclusiveAssessements;
