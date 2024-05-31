
import MainCommunity from '@/components/community/mainCommunity'
import Sidebar from '@/components/Sidebar'



const page = () => {
  return (
    <div className=' flex w-full h-screen fixed'>
      <div className='z-10'><Sidebar/></div>
      <div className='fixed right-0  2 h-100vh w-full border-[0.5px] border-[rgb(130,130,130)] '> <MainCommunity/></div>
    </div>
  )
}

export default page;