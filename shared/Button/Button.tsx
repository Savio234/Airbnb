import React from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode
  disabled?: boolean
  buttonType: 'primary' | 'secondary'
  outline?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  label?: string
  small?: boolean
  icon?: string
}
const Button = ({children, disabled, buttonType, outline, onClick, label, small, icon}: ButtonProps) => {
  return (
    <button className={`${styles[buttonType]} ${styles.button}`}>
      
    </button>
  )
}

export default Button