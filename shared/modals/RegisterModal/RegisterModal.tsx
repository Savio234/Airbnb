'use client';
import React, { useState, useCallback } from 'react'
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { RegisterModalProps } from '@/interface/modals';
import { ModalElement } from '@/shared';

interface FormDataProps {
  name: string
  email: string
  password: string
}
const RegisterModal = ({isOpen, onClose, onSubmit}: RegisterModalProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const signupSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().min(8, 'Must be at least 8 characters').required('Password is required')
  })
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    // resolver: yupResolver(signupSchema)
  })

  const handleRegister: SubmitHandler<FieldValues> = (data: any) => {
    setLoading(true)
  }

  return (
    <ModalElement actionLabel='Register' isOpen={isOpen} title='Sign Up' onClose={onClose} onSubmit={onSubmit}>

    </ModalElement>
  )
}

export default RegisterModal