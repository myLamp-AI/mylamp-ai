import MainNavbar from "./MainNavbar";
import Practice from "./Practice-1";
export default function MainPractice(){
    return (
        <div className="flex flex-row w-full h-full">
            <div className="w-2/12 hidden lg:block"><MainNavbar/></div>
            <div className="w-full lg:w-10/12"><Practice/></div>
        </div>
    );
}