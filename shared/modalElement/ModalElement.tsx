'use client';
import React, { useEffect } from 'react';
import { ModalProps } from '@/interface';
import Image from 'next/image';
import styles from './ModalElement.module.scss';

const ModalElement = (props: ModalProps) => {
	const handleClose = () => {
		props.onClose();
	};
	useEffect(() => {
		document.body.style.overflow = props.isOpen ? 'hidden' : 'auto';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [props.isOpen]);
	return (
		<div>
			{props.isOpen && (
				<div className={`${styles.overlay} ${props.className}`} onClick={handleClose}>
					<div className={`${styles.modalbody}`} onClick={(e) => e.stopPropagation()}>
						{props.children}
					</div>
				</div>
			)}
		</div>
	);
};

export default ModalElement;
