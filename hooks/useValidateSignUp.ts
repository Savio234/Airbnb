'use client';
import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { SignUpData } from '@/interface/auth';

const useValidateSignUp = () => {
  const signupSchema = yup.object().shape({
    name: yup.string().required('Full name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Must be at least 8 characters')
  })

  const { register, reset, watch, resetField, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema),
  })

  const [data, setData] = useState<any>()

  const handleRegister = async (data: SignUpData) => {
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

export default useValidateSignUp