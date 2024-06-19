import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TfiBell } from "react-icons/tfi";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center h-12 border-b border-b-gray-300 bg-white sticky top-0 z-40 shadow-md">
			<div className="h-9 ml-5">
				<img
					src={"/assets/logo.JPG"}
					className="h-full"
				/>
			</div>
			<div className="flex items-center gap-5 mr-5">
				<div className="flex items-center justify-center w-8 h-8 border border-purple-500 text-[#8B52FF] rounded-full hover:bg-[#8B52FF] hover:text-white cursor-pointer transition-all duration-300">
					<TfiBell className="text-lg" />
				</div>
				<div className="h-8 pl-5 flex items-center justify-between gap-3 rounded-full border border-gray-400 cursor-pointer">
					<span className="font-semibold text-gray-500">Account</span>
					<IoPersonCircleOutline className="text-3xl text-[#8B52FF]" />
				</div>
				<div className="h-8 px-5 flex items-center justify-between gap-3 rounded-full border border-gray-400 cursor-pointer">
					<span className="font-semibold text-gray-500">Menu</span>
					<img
						src={"/assets/menuLogo.JPG"}
						className="h-[70%]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
