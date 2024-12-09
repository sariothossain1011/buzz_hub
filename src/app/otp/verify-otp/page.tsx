import VerifyOTPForm from '@/components/forms/VerifyOTPForm'
import React from 'react'

const VerifyOTPPage = () => {
  return (
    <div className=' flex  justify-center py-20 md:py-40'>
    <div className=' min-w-full md:min-w-[50%]'>
        <div className='flex flex-col gap-2 py-4'>
            <h1 className=' text-2xl font-bold uppercase text-blue'>verify otp</h1>
            
        </div>
        <VerifyOTPForm/>
    </div>
</div>
  )
}

export default VerifyOTPPage