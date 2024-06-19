"use client";
import React, { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import AllAssessments from "./AllAssessments";
import ExclusiveAssessements from "./ExclusiveAssessements";
import exclusiveAssements from "./data/exclusiveAssessments";
import allAssessements from "./data/allAssessments";
import ProgressSection from "./ProgressSection";
import StreakSection from "./StreakSection";

export default function Practice() {
    return (
        <div className="bg-[#F1EAFF] p-5 flex flex-col lg:flex-row justify-between z-0">
            <div className="w-full lg:w-[60%] mb-5 lg:mb-0 ">
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
            <div className="w-full lg:w-[37%]">
                <div className="lg:sticky lg:top-[4.25rem]">
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
}