import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='relative rounded-full h-[2.4rem] w-[2.4rem]'>
        <Image alt='avatar' fill src='/svgs/placeholder.jpg' />
    </div>
  )
}

export default Avatar