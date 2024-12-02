import LoginForm from '@/components/forms/LoginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div className=' flex  justify-center py-20 md:py-40'>
    <div className=' min-w-full md:min-w-[50%]'>
        <div className='flex flex-col gap-2 py-4'>
            <h1 className=' text-2xl font-bold uppercase text-blue'>Sign In</h1>
            
            <p className=' text-sm font-normal'>Insert your account information:</p>
        </div>
        <LoginForm/>
    </div>
</div>
  )
}

export default LoginPage