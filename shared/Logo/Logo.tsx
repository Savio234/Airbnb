'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/')} className='block cursor-pointer w-[12rem] h-[4rem] relative'>
      <Image alt='Logo' fill src='/svgs/logo.png' />
    </div>
  )
}

export default Logo