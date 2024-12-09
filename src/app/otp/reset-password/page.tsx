import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import React from 'react'

const ResetPasswordPage = () => {
  return (
    <div className=' flex  justify-center py-20 md:py-40'>
    <div className=' min-w-full md:min-w-[50%]'>
        <div className='flex flex-col gap-2 py-4'>
            <h1 className=' text-2xl font-bold uppercase text-blue'>reset password</h1>
        </div>
        <ResetPasswordForm/>
    </div>
</div>
  )
}

export default ResetPasswordPage