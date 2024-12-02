
import SignupForm from '@/components/forms/SignupForm';
import React from 'react'

const SignupPage = () => {
  return (
    <div className=' flex  justify-center py-20 md:py-40'>
    <div className=' min-w-full md:min-w-[50%]'>
        <div className='flex flex-col gap-2 py-4'>
            <h1 className=' text-2xl font-bold text-blue'>SIGN UP</h1>
            <p className=' text-sm font-normal'>Insert your account information:</p>
        </div>
        <SignupForm/>
    </div>
</div>
  )
}

export default SignupPage;