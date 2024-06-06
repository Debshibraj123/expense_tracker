import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm '>
        <Image src={'./logo.svg'} alt='Logo' width={60} height={60} />

        <Button>Get Started</Button>
    </div>
  )
}

export default Header
