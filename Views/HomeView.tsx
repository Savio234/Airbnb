'use client';
import React, { useState } from 'react'
import styles from './HomeView.module.css'
import { RegisterModal } from '@/shared/modals';

const HomeView = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
  const handleSubmit = () => {
    console.log('Clicked');
    
  }
  return (
    <div className={styles.container}>
      <h1 onClick={openModal} className="text-rose-500 text-center text-3xl">Hello Airbnb</h1>
      <RegisterModal isOpen={isOpen} onSubmit={handleSubmit} onClose={closeModal} />
    </div>
  )
}

export default HomeView