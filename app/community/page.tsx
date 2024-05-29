
import MainCommunity from '@/components/community/mainCommunity'
import MainNavbar from '@/components/MainNavbar';



const page = () => {
  return (
    <div className=' flex relative w-full h-fit'>
      <div className='h-96 w-2/12 hidden lg:block'><MainNavbar/></div>
      <div className='fixed right-0 lg:w-10/12 w-full'> <MainCommunity/></div>
    </div>
  )
}

export default page;