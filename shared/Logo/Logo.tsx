'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './Logo.module.css'

const Logo = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/')} className={`${styles.logo} block cursor-pointer w-[12rem] h-[4rem] relative`}>
      <Image alt='Logo' priority sizes='100vw' fill src='/svgs/logo.png' />
    </div>
  )
}

export default Logo