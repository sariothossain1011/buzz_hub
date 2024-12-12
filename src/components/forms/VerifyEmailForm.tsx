"use client"
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import FormInput from './FormInput';
import Form from './Form';
import { instance } from '@/axios/axiosInstance';
import LoadingSpinner from "../common/LoadingSpinner";

const VerifyEmailForm = () => {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleVerifyEmail = async ({
        email,
    }: {
        email: string;
    }) => {

        setLoading(true);
        setError(null);
        try {
            const response = await instance.get(`RecoverVerifyEmail/${email}`);
            if (response?.data?.status == "success") {
                Cookies.set("email",email);
                router.push("/otp/verify-otp");
            }
        } catch (error) {
            setError(`Something went wrong: ${error}`);
        } finally {
            setLoading(false);
        }
    };

  return (
    <Form submitHandler={handleVerifyEmail} className=' min-w-full flex flex-col gap-4'>
    <FormInput name='email' id='email' placeholder='ENTER YOUR EMAIL' type='email' className='min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm' />
    {error && <p className="text-red-500 text-[10px]">{error}</p>}
    <button className='w-full bg-blue hover:bg-black text-white text-sm font-semibold shadow-sm py-3 rounded-sm duration-300 ease-in'>
        {loading ? <LoadingSpinner /> : "VERIFY EMAIL"}
    </button>
</Form>
  )
}

export default VerifyEmailForm