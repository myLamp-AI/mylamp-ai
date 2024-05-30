import MainNavbar from "./MainNavbar";
import NewSidebar from "./NewSidebar";
import Practice from "./Practice-1";
import Explore from "./Explore";
export default function MainPractice(){
    return (
        <div className="flex flex-row min-w-full h-full">
            <div className="w-60 hidden"><NewSidebar/></div>
            <div className="w-full"><Explore/></div>
        </div>
    );
}