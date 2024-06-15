import React from 'react'
import styles from './Button.module.css'
import Image from 'next/image'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode
  disabled?: boolean
  outline?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  label?: string
  small?: boolean
  icon?: string | any
}
const Button = ({children, disabled, outline, onClick, label, small = false, icon}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`${styles.button}
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[0.1rem]' : 'border-[0.2rem]'}
      `}>
        {icon && 
          <figure className={styles.icon}>
            <Image alt='icon' fill src={icon} className='absolute left-4 top-3' />
          </figure>}
      {label}
    </button>
  )
}

export default Button