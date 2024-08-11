'use client';
import React, { useState } from 'react'
import styles from './SignUp.module.css'
import { Button, InputField } from '@/shared';
import { useRegisterModal } from '@/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';


const SignUp = () => {

  const [inputValues, setInputValues] = useState<any>({nameInput: '', 
    passwordInput: '', emailInput: ''}
  )
  const { errors, register, handleRegister, handleSubmit, data } = useRegisterModal()

  const handleChange = (e: any) => {
    setInputValues((prevValues: {}) => ({
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
					Have account? <Link href='/login'>Sign in</Link>
				</p>
			</div>

      <div className={styles.sign_in_body}>
        <div className={`${styles.header}`}>
          <h3 className='xl: text-[3.2rem] font-bold md: text-[2.4rem]'>Welcome to Airbnb</h3>
          <p className='xl: font-light text-[2rem] text-neutral-500 md: text-[1.8rem]'>Create an account</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
          <div className={styles.input_field}>
            <InputField onChange={handleChange} name='email' label='Email' required 
              placeholder='Enter your email address' register={register('email')} 
              inputClass={`${styles.edit_input} ${errors?.email && styles.error_border}`} 
            />
            <p className={styles.error_styles}>{errors?.email?.message}</p>
          </div>
          
          <div className={styles.input_field}>
            <InputField onChange={handleChange} name='name' label='Full name' required
              placeholder='Enter your name' register={register('name')}
              inputClass={`${styles.edit_input} ${errors?.name && styles.error_border}`}
            />
            <p className={styles.error_styles}>{errors?.name?.message}</p>
          </div>

          <div className={styles.input_field}>
            <InputField onChange={handleChange} name='password' type='password' label='Password' isPassword
              placeholder='Enter password' register={register('password')}
              inputClass={`${styles.edit_input} ${errors?.password && styles.error_border}`} 
            />
            <p className={styles.error_styles}>{errors?.password?.message}</p>
          </div>

          <div className={styles.btns}>
            <Button type='submit' label='Sign Up' className={styles.sign_up_btn} />
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
					Already have an account? <Link href='/login'>Login</Link>
				</p>
			</div>
    </div>
  )
}

export default SignUp