'use client';
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { toast } from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { RegisterModalData } from '@/interface/modals';

const useRegisterModal = () => {
  const signupSchema = yup.object().shape({
    name: yup.string().required('Full name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Must be at least 8 characters')
  })

  const { register, reset, resetField, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema),
  })

  const [data, setData] = useState<any>()

  const handleRegister = async (data: RegisterModalData) => {
    console.log(data);
    
    try {
      const response = await axios.post('api/register', data)
      setData(response?.data)
    } catch (error: (string | any)) {
      toast.error(`An error occured: ${error?.message}`)
    }
    reset();
  }


  return {
    errors,
    handleRegister,
    handleSubmit,
    data,
    register
  }
}

export default useRegisterModal