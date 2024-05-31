
import MainCommunity from '@/components/community/mainCommunity'
import NewSidebar from '@/components/NewSidebar';
import MainNavbar from '@/components/MainNavbar';
import NewSidebar02 from '@/components/NewSidebar copy';



const page = () => {
  return (
    <div className=' flex w-full h-screen fixed'>
      <div className='h-full w-full hidden xl:block'><NewSidebar02/></div>
      <div className='fixed right-0 xl:w-10/12 h-100vh w-full border-[0.5px] border-[rgb(130,130,130)] '> <MainCommunity/></div>
    </div>
  )
}

export default page;