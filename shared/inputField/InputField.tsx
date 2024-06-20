'use client';
import React, { InputHTMLAttributes, useState, ReactNode } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import EyeCloseIcon from '@/svgs/EyeClose.svg';
import EyeOpenIcon from '@/svgs/EyeOpen.svg';
import styles from './InputField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name?: string;
	label?: string;
	isPassword?: boolean;
	className?: string;
	inputClass?: string;
	formatPrice?: boolean;
	customPrefix?: any;
	inputRef?: any;
	register?: UseFormRegister<FieldValues>;
	value?: any
	errors?: FieldErrors
}

const InputField = ({ name, type = 'text', label, className, value, inputClass, customPrefix, isPassword, register, inputRef, ...options }: Props) => {
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
				<label className={styles.input_label} htmlFor={name}>
					{label}
				</label>
			)}
			{}

			<div className={`${styles.input_wrapper} ${inputClass}`}>
				{customPrefix && <>{customPrefix}</>}

				<input value={value} className={`${inputClass} ${styles.input_field}`} 
					type={inputType} ref={inputRef} {...register} {...options} 
				/>

				{isPassword && (
					<div className={styles.icon} onClick={handleShowPassword}>
						{/* {inputType !== 'password' ? <EyeCloseIcon /> : <EyeOpenIcon />} */}
						{inputType !== 'password' ? '/svgs/EyeClose.svg' : '/svgs/EyeOpen.svg'}
					</div>
				)}
			</div>
		</div>
	);
};

export default InputField;
