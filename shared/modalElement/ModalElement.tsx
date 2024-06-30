'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { ModalProps } from '@/interface';
import { IoMdClose } from 'react-icons/io';
import { Button } from '@/shared';
import styles from './ModalElement.module.css';

const ModalElement = (props: ModalProps) => {
	const [showModal, setShowModal] = useState(props.isOpen)
	const handleClose = () => {
		props.onClose();
		{props.resetFields && props.resetFields();}
	};
	const handleCloseBtn = useCallback(() => {
		if (props.disabled) {
			return ;
		}
		setShowModal(false)
		setTimeout(() => {
			props.onClose
		}, 500)
	}, [props.disabled, props.onClose])

	const handleSubmit = () => {
		if (props.disabled) {
			return ;
		}
		props.onSubmit();
	}
	const handleSecondaryAction = useCallback(() => {
		if (props.disabled || !props.secondaryAction) {
			return ;
		}
		props.secondaryAction()
	}, [props])

	useEffect(() => {
		setShowModal(props.isOpen)
		document.body.style.overflow = props.isOpen ? 'hidden' : 'auto';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [props.isOpen]);

	if(!props.isOpen) {
		return null
	}
	return (
		<div>
			{props.isOpen && (
				<div className={`${styles.overlay}`} onClick={handleClose}>
					<div className={`${styles.modalbody}`} onClick={(e) => e.stopPropagation()}>
						<div className='xl: flex items-center pt-6 pl-6 pr-6 mb-6 rounded-t 
							justify-center w-full relative border-b-[0.1rem] 
							md: justify-between mt-[-2rem] mb-[2.5rem]'>
							<h3 className='xl:text-[3rem] font-semibold md: text-[2.4rem]'>{props.title}</h3>
							<div onClick={handleClose} className={styles.close_btn}>
								<IoMdClose size={36} />
							</div>
						</div>
						{props.children}
						<div className='flex flex-row items-center gap-[8rem] w-full'>
							{(props.secondaryAction && props.secondaryLabel) && 
								<Button type='submit' disabled={props.disabled} label={props.secondaryLabel} 
									outline onClick={handleSecondaryAction}  
								/>
							}
							<Button type='submit' disabled={props.disabled} label={props.actionLabel}
								onClick={handleSubmit}
							/>
						</div>
						{props.footer && props.footer}
					</div>
				</div>
			)}
		</div>
	);
};

export default ModalElement;
