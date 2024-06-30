'use client';
import { Logo, Search, UserMenu } from '..'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={`${styles.header} fixed w-full bg-white md-4 py-[2rem] px-[4.8rem] border-b-[0.2rem] shadow-sm z-5 top-0`}>
      <div className='mx-auto xl: px-20 md: px-10 sm: px-[0] py-0'>
        <div className='flex flex-row items-center gap-4 justify-between md: gap-0'>
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

export default Header