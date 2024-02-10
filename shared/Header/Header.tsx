'use client';
import { Logo } from '..'

const Header = () => {
  return (
    <div className='fixed w-full bg-white md-4 py-12 px-12 border-b-[1px] shadow-sm z-5 top-0'>
      <div className='max-w-[252rem] mx-auto xl: px-20 md: px-10 sm: px-2 px-4'>
        <div className='flex flex-row items-center gap-3 md: gap-0'>
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Header