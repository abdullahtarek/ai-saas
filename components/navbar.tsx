import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './mobile-sidebar'
import { checkSubscription } from '@/lib/subscription';

interface NavbarProps {
  apiLimitCount:number;
}

const Navbar = async ({apiLimitCount}:NavbarProps) => {
  const isPro = await checkSubscription();
  return (
    <div className='flex items-center p-4'>
        <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/'/>
        </div>
    </div>
  )
}

export default Navbar
