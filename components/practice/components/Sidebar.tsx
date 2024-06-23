import React from "react";
import { BsFillBoxFill } from "react-icons/bs";
import { FaInstagramSquare, FaLaptopCode, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaGraduationCap, FaPersonDotsFromLine, FaSquareWhatsapp } from "react-icons/fa6";
import { GiGrowth, GiTeacher } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoLogoDiscord } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { RiCommunityLine } from "react-icons/ri";
import { SlCompass } from "react-icons/sl";

const Sidebar = () => {
	return (
		<div className="sidebar flex flex-col justify-between border-r border-gray-300 full w-[15%] sticky top-12 shadow-md">
			<ul className="flex flex-col justify-between mt-2">
				<li className="flex h-10 items-center gap-5 font-semibold text-gray-500 relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<BsFillBoxFill className="text-2xl ml-8" />
					<span>Home</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold text-gray-500 relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<SlCompass className="text-2xl ml-8" />
					<span>Explore</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold text-gray-500 relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<FaLaptopCode className="text-2xl ml-8" />
					<span>Learn</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold text-gray-500 relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<FaGraduationCap className="text-2xl ml-8" />
					<span>Achieve</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold relative cursor-pointer hover:text-[#8B52FF] group text-[#8B52FF]">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF] bg-[#8B52FF]"></span>
					<FaPersonDotsFromLine className="text-2xl ml-8" />
					<span>Practice</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<GrProjects className="text-2xl ml-8" />
					<span>Projects</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold text-gray-500 relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<GiGrowth className="text-2xl ml-8" />
					<span>Career</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold text-gray-500 relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<GiTeacher className="text-2xl ml-8" />
					<span>Mentorship</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold text-gray-500 relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<LiaBlogSolid className="text-2xl ml-8" />
					<span>Blogs</span>
				</li>
				<li className="flex h-10 items-center gap-5 font-semibold text-gray-500 relative cursor-pointer hover:text-[#8B52FF] group">
					<span className="w-2 h-10 absolute rounded-e-xl group-hover:bg-[#8B52FF]"></span>
					<RiCommunityLine className="text-2xl ml-8" />
					<span>Community</span>
				</li>
			</ul>
			<div className="bg-[#8B52FF] h-24 w-[80%] mx-auto rounded-lg mt-9 flex justify-center relative">
				<div className="h-14 w-14 rounded-full border-4 border-white bg-[#8B52FF] absolute top-[-30px]"></div>
			</div>
			<div className="mt-3 w-[80%] mx-auto py-4 bg-[#F1EAFF] rounded-lg flex flex-col gap-3 justify-center items-center">
				<div className="font-bold">Connect with us</div>
				<div className="flex justify-center gap-1 text-3xl">
					<FaSquareWhatsapp className="text-[#51E963] cursor-pointer" />
					<FaLinkedin className="text-[#0065C7] cursor-pointer" />
					<FaInstagramSquare className="text-[#F43540] cursor-pointer" />
					<IoLogoDiscord className="text-[#4960FB] cursor-pointer" />
					<FaYoutube className="text-[#FE0E1B] cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
