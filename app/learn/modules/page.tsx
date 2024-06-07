"use client"
import Sidebar02 from '@/components/sideBar02'
import OpenModalButton from '@/components/learn/test';
import LessonsModal from '@/components/learn/lessondivdropdown';

const page = () => {
  return (
    <>
      <div>
      <OpenModalButton />
      <LessonsModal />
    </div>
    </>
  )
}

export default page;