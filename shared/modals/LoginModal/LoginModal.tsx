'use client';
import React from 'react'
import { ModalElement } from '@/shared';

const LoginModal = ({isOpen, onClose, onSubmit}: any) => {
  return (
    <ModalElement isOpen={isOpen} title='Login' onClose={onClose} onSubmit={onSubmit}>

    </ModalElement>
  )
}

export default LoginModal