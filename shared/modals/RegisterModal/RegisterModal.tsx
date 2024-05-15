'use client';
import React, { useState, useCallback } from 'react'
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { RegisterModalProps } from '@/interface/modals';
import { ModalElement } from '@/shared';

const RegisterModal = ({isOpen, onClose, onSubmit}: RegisterModalProps) => {
  return (
    <ModalElement isOpen={isOpen} title='Sign Up' onClose={onClose} onSubmit={onSubmit}>

    </ModalElement>
  )
}

export default RegisterModal