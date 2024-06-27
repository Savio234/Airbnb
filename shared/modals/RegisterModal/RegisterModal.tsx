'use client';
import React, { useState, useCallback } from 'react'
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { toast } from "react-toastify";
import { FcGoogle } from 'react-icons/fc';
import { RegisterModalData, RegisterModalProps } from '@/interface/modals';
import { InputField, ModalElement } from '@/shared';
import styles from './RegisterModal.module.css'

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const signupSchema = yup.object().shape({
    name: yup.string().required('Full name is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Must be at least 8 characters')
  })
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    // resolver: yupResolver(signupSchema)
  })

  const handleRegister: SubmitHandler<FieldValues> = async (data: RegisterModalData) => {
    setLoading(true)
    console.log(data);
    try {
      const response = await axios.post('api/register', data)
    } catch (error: (string | any)) {
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
      <div className={styles.modal_content}>
        <div className={`${styles.modal_header}`}>
          <h3 className='text-[3.2rem] font-bold'>Welcome to Airbnb</h3>
          <p className='font-light text-[2rem] text-neutral-500'>Create an account</p>
        </div>

        <InputField name='email' label='Email' errors={errors} required 
          placeholder='Enter your email address' register={register} 
          inputClass={`${styles.edit_input} ${errors?.name && styles.error_border}`} 
        />

        <InputField name='name' label='Full name' errors={errors} required 
          placeholder='Enter your name' register={register} 
          inputClass={`${styles.edit_input} ${errors?.name && styles.error_border}`} 
        />

        <InputField name='password' type='password' label='Password' errors={errors} required 
          placeholder='Enter password' register={register} 
          inputClass={`${styles.edit_input} ${errors?.name && styles.error_border}`} 
        />
      </div>
    </ModalElement>
  )
}

export default RegisterModal