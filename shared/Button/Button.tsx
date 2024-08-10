import React from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  disabled?: boolean
  outline?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  label?: string
  small?: boolean
  icon?: any
  iconClass?: string
  className?: string
  type?: 'button' | 'submit' | 'reset';
}
const Button = ({ disabled, outline, className, iconClass, onClick, label, small = false, icon: Icon, type = 'button'}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${className} ${styles.button}
      ${outline ? 'bg-white' : 'bg-rose-500'}
      ${outline ? 'border-black' : 'border-rose-500'}
      ${outline ? 'text-black' : 'text-white'}
      ${small ? 'py-1' : 'py-3'}
      ${small ? 'text-sm' : 'text-md'}
      ${small ? 'font-light' : 'font-semibold'}
      ${small ? 'border-[0.1rem]' : 'border-[0.2rem]'}`}
    >
      {Icon && 
        <figure className={styles.icon}>
          <Icon size={18} className={iconClass} />
        </figure>}
      {label}
    </button>
  )
}

export default Button