import Link from 'next/link';
import { usePathname } from "next/navigation";
export default function NavItems(props:any){
    const pathname = usePathname();
   
    return (
        <div className={`flex flex-row transition w-full h-7 mt-2 gap-2 text-xl font-medium text-[${props.textcolor}] hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300`}>
            <div className='w-6 h-6'><img src={props.icon} /></div>
            <Link href={props.Link}>{props.name}</Link>
        </div>
    );
}