"use client"
import { useState } from "react";
import Sidebar from '@/components/Sidebar'
export default function Flexsidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className={`${isSidebarOpen ? 'lg:w-48 ' : 'lg:w-0'} transition-all duration-300 flex flex-row `}>
            <div className="fixed flex flex-row items-center">
                {
                    isSidebarOpen &&
                    <Sidebar />
                }
                <div className='h-[100vh] rounded-lg w-6 flex items-center' onClick={toggleSidebar}><img src="/sidebar/pparw.svg" className={`w-6 h-6 ${isSidebarOpen ? 'rotate-180' : ''}`} /></div>
            </div>
        </div>
    );
}