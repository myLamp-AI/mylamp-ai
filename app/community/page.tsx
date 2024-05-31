
import MainCommunity from '@/components/community/mainCommunity'
import Sidebar from '@/components/Sidebar';




const page = () => {
  return (
    <div className=' flex w-full h-screen fixed'>
      <div className='h-fit w-2/12 hidden lg:block'><Sidebar/></div>
      <div className='fixed right-0 lg:w-4/5 w-full'> <MainCommunity/></div>
    </div>
  )
}

export default page;