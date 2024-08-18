'use client';
import React, { useState } from 'react'
import { Button, InputField } from '@/shared';
import { useValidateLogin } from '@/hooks';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Login.module.css'

const Login = () => {

  const [inputValues, setInputValues] = useState<any>({passwordInput: '', emailInput: ''})
  const { errors, register, handleLogin, handleSubmit } = useValidateLogin()
  const handleChange = (e: any) => {
    setInputValues((prevValues: any) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={styles.sign_in_container}>
      <div className={styles.signIn_text}>
				<Link href='/'>
					<div className={styles.back_to_home}>
						<div className={styles.icon}>
							<Image alt='arrow' src='/svgs/arrow_left.svg' fill />
						</div>
						<h3>Back to Homepage</h3>
					</div>
				</Link>
				<p>
					New to Airbnb? <Link href='/create-account'>Sign Up</Link>
				</p>
			</div>

      <div className={styles.sign_in_body}>
        <div className={`${styles.header}`}>
          <h3 className='xl: text-[3.2rem] font-bold md: text-[2.4rem]'>Welcome back</h3>
          <p className='xl: font-light text-[2rem] text-neutral-500 md: text-[1.8rem]'>
            Login into your account
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
          <div className={styles.input_field}>
            <InputField onChange={handleChange} name='email' label='Email' required 
              placeholder='Enter your email address' register={register('email')} 
              inputClass={`${styles.edit_input} ${errors?.email && styles.error_border}`} 
            />
            <p className={styles.error_styles}>{errors?.email?.message}</p>
          </div>

          <div className={styles.input_field}>
            <InputField onChange={handleChange} name='password' type='password' label='Password' isPassword
              placeholder='Enter password' register={register('password')}
              inputClass={`${styles.edit_input} ${errors?.password && styles.error_border}`} 
            />
            <p className={styles.error_styles}>{errors?.password?.message}</p>
          </div>

          <div className={styles.btns}>
            <Button type='submit' label='Login' className={styles.sign_up_btn} />
            <Button className={styles.google_btn} iconClass='absolute left-[-10rem] top-[-0.25rem]' icon={FcGoogle} 
              label='Continue with Google' onClick={() => {}} outline
            />
            <Button className={styles.github_btn} iconClass='absolute left-[-10rem] top-[-0.25rem]' icon={AiFillGithub} 
              label='Continue with Github' onClick={() => {}} outline
            />
          </div>
        </form>
      </div>

      <div className={styles.signIn_text_mobile}>
				<p>
					New to Airbnb? <Link href='/login'>Create account</Link>
				</p>
			</div>
    </div>
  )
}

export default Login