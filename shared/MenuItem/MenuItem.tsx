'use client';
import { MenuItemProps } from '@/interface';
import React from 'react'

const MenuItem = ({onclick, label}: MenuItemProps) => {
  return (
    <div onClick={onclick} className='px-4 py-3 hover: bg-neutral-100 transition semi-bold'>
        {label}
    </div>
  )
}

export default MenuItem