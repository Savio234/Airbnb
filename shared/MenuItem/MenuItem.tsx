'use client';
import React from 'react'
import { MenuItemProps } from '@/interface';
import styles from './MenuItem.module.css'

const MenuItem = ({onclick, label}: MenuItemProps) => {
  return (
    <div onClick={onclick} className={`${styles.menu_item} p-[1.6rem] text-[2rem] hover: bg-neutral-100 transition`}>
      {label}
    </div>
  )
}

export default MenuItem