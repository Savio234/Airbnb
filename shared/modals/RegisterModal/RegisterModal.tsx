'use client';
import React, { useState } from 'react'
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { toast } from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { RegisterModalData, RegisterModalProps } from '@/interface/modals';
import { Button, InputField, ModalElement } from '@/shared';
import styles from './RegisterModal.module.css'
import { LoginModal }from '..';

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [inputValues, setInputValues] = useState<any>({nameInput: '', passwordInput: '', emailInput: ''})
  const signupSchema = yup.object().shape({
    name: yup.string().required('Full name is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Must be at least 8 characters')
  })
  const { register, reset, resetField, watch, handleSubmit, formState: { errors } } = useForm({
    // defaultValues: {
    //   name: '',
    //   email: '',
    //   password: ''
    // },
    resolver: yupResolver(signupSchema)
  })

  const handleChange = (e: any) => {
    setInputValues((prevValues: {}) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }))
  }

  const handleRegister = async (data: RegisterModalData) => {
    setLoading(true)
    console.log(data);
    
    try {
      const response = await axios.post('api/register', data)
      setInputValues({...inputValues, email: '', name: '', password: ''})
    } catch (error: (string | any)) {
      toast.error(`An error occured: ${error?.message}`)
    }
    reset();
  }

  const LoginModal = () => {
    onClose()
    setOpenModal(true)
  }

  

  return (
    <ModalElement resetFields={reset} isOpen={isOpen} title='Register' onClose={onClose}
      actionLabel='Continue' onSubmit={handleSubmit(handleRegister)}
      footer={
        <FooterContent onClose={LoginModal}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      }
    >
      <div className={styles.modal_content}>
        <div className={`${styles.modal_header}`}>
          <h3 className='xl: text-[3.2rem] font-bold md: text-[2.4rem]'>Welcome to Airbnb</h3>
          <p className='xl: font-light text-[2rem] text-neutral-500 md: text-[1.8rem]'>Create an account</p>
        </div>

        <div>
          <InputField onChange={handleChange} name='email' label='Email' required 
            placeholder='Enter your email address' register={register('email')} 
            inputClass={`${styles.edit_input} ${errors?.email && styles.error_border}`} 
          />
          <p className={styles.error_styles}>{errors?.email?.message}</p>
        </div>
        
        <div>
          <InputField onChange={handleChange} name='name' label='Full name' required 
            placeholder='Enter your name' register={register('name')} 
            inputClass={`${styles.edit_input} ${errors?.name && styles.error_border}`} 
          />
          <p className={styles.error_styles}>{errors?.name?.message}</p>
        </div>

        <div>
          <InputField onChange={handleChange} name='password' type='password' label='Password' isPassword 
            placeholder='Enter password' register={register('password')} 
            inputClass={`${styles.edit_input} ${errors?.password && styles.error_border}`} 
          />
          <p className={styles.error_styles}>{errors?.password?.message}</p>
        </div>
      </div>
    </ModalElement>
  )
}

export default RegisterModal

export const FooterContent = ({onClose, openModal, setOpenModal}: any) => {
  return (
    <div className={`mt-[3rem] mb-[4rem] flex flex-col gap-4 w-full`}>
      <Button iconClass='absolute left-[-10rem] top-[-0.25rem]' icon={FcGoogle} 
        label='Continue with Google' onClick={() => {}} outline 
      />
      <Button iconClass='absolute left-[-10rem] top-[-0.25rem]' icon={AiFillGithub} 
        label='Continue with Github' onClick={() => {}} outline 
      />
      <div className={`text-neutral-500 text-center mt-[2rem] font-light`}>
        <div className='flex items-center justify-center gap-[2rem]'>
          <div>Already have an account?</div>
          <div onClick={onClose} className='text-neutral-800 cursor-pointer hover:underline'>
            Log in
          </div>
        </div>
      </div>
      {/* <LoginModal isOpen={openModal} onClose={() => setOpenModal(false)} /> */}
    </div>
  )
}