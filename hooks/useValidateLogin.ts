'use client';
import { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { LoginData } from '@/interface/auth';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const useValidateLogin = () => {

  const router = useRouter()
  const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Must be at least 8 characters')
  })

  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const [data, setData] = useState<any>()
  const [loading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (data: LoginData) => {
    console.log(data);
    try {
      const response = await axios.post('api/login', {
        email: data.email,
        password: data.password,
      });
      console.log(response?.data);
      setData(response?.data)
      toast.success('Login successful...');
      router.refresh();
      router.push('/');
    } catch (error: any) {
      console.log("API Error:", error);
      toast.error('An error occured')
    }
    reset();
  }

  const handleSignIn = (data: LoginData) => {
    console.log(data);
    setIsLoading(true)
    signIn('credentials', {
      ...data,
      redirect: false
    }).then((callback: any) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success('Login successful!');
        router.refresh();
        router.push('/');
      }
      if (callback?.error) {
        toast.error(callback?.error);
      }
    })
  }


  return {
    errors,
    handleLogin,
    handleSubmit,
    data,
    register,
    handleSignIn
  }
}

export default useValidateLogin