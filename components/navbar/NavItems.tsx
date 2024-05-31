
import Link from 'next/link';
export default function NavItems(props:any){
    return (
        <div className="flex flex-row transition w-full h-7 mt-2 gap-2 text-xl font-medium text-[#737373] grayscale hover:grayscale-0 hover:text-[#8C52FF] hover:duration-300">
            <div className='w-6 h-6'><img src={props.icon} /></div>
            <Link href={props.Link}>{props.name}</Link>
        </div>
    );
}