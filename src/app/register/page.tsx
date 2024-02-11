'use client'

import Link from "next/link";
import PrimaryButton from "../_components/PrimaryButton";
import { APIurl } from "../api/backendAPI";
import { FormEvent } from "react";
import { useRouter } from 'next/navigation'

export default function() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

        fetch(`${APIurl}/register-form`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: email,
            password: password,
          }),
          credentials: 'include',
        })
          .then(response => response.json())
          .then(data => {
            if (data.success)
              router.push('/')
            else {
              alert('Сталася помилка')
              console.log(data)
            }
          })
          .catch(error => console.error('Помилка', error));
  };


  return (
    <div className='grid place-items-center h-full bg-[color-mix(in_hsl,theme(colors.background),black_2%)]'>
      <form className='grid place-items-center gap-11 w-[29rem] p-12 bg-background shadow-form rounded-2xl *:grid *:items-center *:w-full *:text-center' onSubmit={handleSubmit}>
        <h2 className='font-semibold pb-4'>Register</h2>
        <div className='grid gap-4'>
          <input name='email' placeholder='email'/>
          <input name='password' type='password' placeholder='password'/>
        </div>
        <div className='grid gap-2'>
          <PrimaryButton className='bg-primary'>Register</PrimaryButton>
          <p className='text-gray-500'>
            already have acount? {' '}
            <Link className='text-gray-800' href='/login'>Login</Link>
          </p>
        </div>
      </form>
    </div>
  )
}