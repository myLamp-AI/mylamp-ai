import { BiSearchAlt } from "react-icons/bi";
import AllAssessments from "../components/AllAssessments";
import ExclusiveAssessements from "../components/ExclusiveAssessements";
import ProgressSection from "../components/ProgressSection";
import StreakSection from "../components/StreakSection";
import allAssessements from "../data/allAssessments";
import exclusiveAssements from "../data/exclusiveAssessments";

const MyPractice = () => {
	return (
		<div className="bg-[#F1EAFF] p-5 flex justify-between z-0">
			<div className="w-[60%]">
				<div>
					<p className="text-[#737373] font-bold text-xl">Let's Rock!</p>
					<p className="text-[#A6A6A6] text-sm">Practice regularly to achieve perfection</p>
				</div>
				<div className="flex items-center gap-5 mt-5 bg-white rounded-lg px-5 py-2 shadow-md shadow-slate-200">
					<label htmlFor="search-problems">
						<BiSearchAlt className="text-[#8C52FF] text-4xl" />
					</label>
					<input
						type="text"
						name="search-problems"
						id="search-problems"
						placeholder="Search Problems"
						className="w-full outline-none"
					/>
				</div>
				<div className="mt-5">
					<ExclusiveAssessements exclusiveAssements={exclusiveAssements} />
				</div>
				<div className="mt-5">
					<AllAssessments allAssessements={allAssessements} />
				</div>
			</div>
			<div className="w-[37%]">
				<div className="sticky top-[4.25rem]">
					<div>
						<ProgressSection />
					</div>
					<div>
						<StreakSection />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPractice;
