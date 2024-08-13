'use client';
import { signIn } from '@/auth';
import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { LoginData } from '@/interface/auth';
import { useRouter } from 'next/navigation';

const useValidateLogin = () => {

  const router = useRouter()
  const signupSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Must be at least 8 characters')
  })

  const { register, reset, watch, resetField, handleSubmit, setValue, clearErrors, 
    formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema),
  })

  const [data, setData] = useState<any>()

  const handleLogin = async (data: LoginData) => {
    console.log(data);
    signIn('credentials', {
      ...data,
      redirect: false,
    })
    .then((response: any) => {
      console.log(data);
      if (response?.ok) {
        toast.success('Login successful...');
        router.refresh();
        router.push('/');
      }

      if (response?.error) {
        toast.error(response?.error)
      }
    })
    // I'm currently experiencing an error in my next js project that says: "Module parse failed: You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file". This error occurs when I try to use the signIn from NextAuth (which is in my auth.ts file) in a handleLogin function in my useValidateLogin hook. What's the cause of this error and how can it be resolved
    reset();
  }


  return {
    errors,
    handleLogin,
    handleSubmit,
    data,
    register
  }
}

export default useValidateLogin