'use client';
import React, { useState, useCallback } from 'react'
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { toast } from "react-toastify";
import { FcGoogle } from 'react-icons/fc';
import { RegisterModalProps } from '@/interface/modals';
import { ModalElement } from '@/shared';

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
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

  const handleRegister: SubmitHandler<FieldValues> = async (data: any) => {
    setLoading(true)
    console.log(data);
    try {
      const response = await axios.post('api/register', data)
    } catch (error: any) {
      console.log('API Error', error);
      toast.error('An error occured:', error.response.data.error)
    }
    // axios.post('api/register', data)
    //   then(() => {
    //     onClose()
    //   })
    //   .catch((error: any) => {
    //     console.log('API Error', error);
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }

  return (
    <ModalElement actionLabel='Continue' isOpen={isOpen} title='Register' onClose={onClose} onSubmit={handleSubmit(handleRegister)}>

    </ModalElement>
  )
}

export default RegisterModal