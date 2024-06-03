import Link from 'next/link';
import navData from '@/components/navbar/navLinks.json'
import { usePathname } from "next/navigation";
export default function NavItems(props:any){
    const pathname = usePathname();
    return (
        <div className={`flex flex-row transition w-full h-7 mt-2 gap-4 text-xl font-semibold grayscale text-[#737373] hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300 ${pathname == navData[props.index].Link ?'grayscale-0 text-[#8C52FF]': ''}`}>
            <div className='w-7 h-7 flex items-center'><img src={props.icon} /></div>
            <Link href={props.Link}>{props.name}</Link>
        </div>
    );
}