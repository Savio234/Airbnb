'use client';
import React from 'react'
import { MenuItemProps } from '@/interface';

const MenuItem = ({onclick, label}: MenuItemProps) => {
  return (
    <div onClick={onclick} className='px-4 py-[1rem] text-[1.2rem] hover: bg-neutral-100 transition semi-bold'>
      {label}
    </div>
  )
}

export default MenuItem