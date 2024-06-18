'use client';
import React from 'react'
import { ModalElement } from '@/shared';
import { RegisterModalProps } from '@/interface/modals';

const LoginModal = ({isOpen, onClose, onSubmit}: any) => {
  return (
    <ModalElement isOpen={isOpen} title='Login' actionLabel='Login' onClose={onClose} onSubmit={onSubmit}>

    </ModalElement>
  )
}

export default LoginModal