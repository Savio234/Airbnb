'use client';
import React, { InputHTMLAttributes, useState, ReactNode } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';
import { EyeCloseIcon, EyeOpenIcon } from '../svgs';
import styles from './InputField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	isPassword?: boolean;
	className?: string;
	inputClass?: string;
	formatPrice?: boolean;
	inputRef?: any;
	register: FieldValues
	value?: any
	// errors: FieldErrors
	// required?: boolean
	disabled?: boolean
	type?: string
}

const InputField = ({ name, type = 'text', disabled, label, formatPrice, className, value, inputClass, isPassword, register, inputRef, ...options }: Props) => {
	const [inputType, setInputType] = useState<string>(type);
	const handleShowPassword = () => {
		if (inputType === 'password') {
			setInputType('text');
		}
		if (inputType === 'text') {
			setInputType('password');
		}
	};
	return (
		<div className={`${styles.input} ${className}`}>
			{!!label && (
				<label htmlFor={name}
					className={`${styles.input_label} ${formatPrice ? 'left-9' : 'left-4'}`}
				>
					{label}
				</label>
			)}
			{formatPrice && (
				<BiDollar size={24} className='text-neutral-700 absolute top-5 left-2' />
			)}

			<div className={`${styles.input_wrapper}`}>
				<input value={value} disabled={disabled} type={inputType} ref={inputRef} 
					{...register} {...options}
					className={`${inputClass} ${styles.input_field}
						transition 
						disabled:opacity-60
						disabled:cursor-not-allowed
						${formatPrice ? 'pl-9' : 'pl-4'}
					`}
				/>

				{isPassword && (
					<div className={styles.icon} onClick={handleShowPassword}>
						{inputType === 'password' ? <EyeCloseIcon /> : <EyeOpenIcon />}
					</div>
				)}
			</div>
		</div>
	);
};

export default InputField;
