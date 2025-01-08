'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Avatar = () => {
  const [currentURL, setCurrentURL] = useState<string>('')
  useEffect(() => {
		setCurrentURL(window.location.href);
	}, []);
  const cartPageLink = typeof window !== 'undefined' ? currentURL : '';

  return (
    <div className='relative rounded-full h-[2.4rem] w-[2.4rem]'>
        <Image alt='avatar' fill src='/svgs/placeholder.jpg' />
    </div>
  )
}

export default Avatar