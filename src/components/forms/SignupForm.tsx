"use client"
import { instance } from '@/axios/axiosInstance';
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import LoadingSpinner from '../common/LoadingSpinner';

const SignupForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async ({
        fName,
        lName,
        phone,
        email,
        password,
    }: {
        fName: string,
        lName: string;
        phone: string;
        email: string;
        password: string;
    }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.post("Signup", { fName, lName, phone, email, password });
            if (response?.data?.token) {
                typeof window !== "undefined" &&
                    Cookies.set(
                        "accessKey",
                        response?.data?.token
                    );
                router.push("/");
            }
        } catch (error) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Form submitHandler={handleRegister} className=' min-w-full flex flex-col gap-4'>
            <FormInput name='fName' id='fName' placeholder='FIRST NAME' type='text' className='min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm' />
            <FormInput name='lName' id='lName' placeholder='LAST NAME' type='text' className='min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm' />
            <FormInput name='phone' id='phone' placeholder='ENTER YOUR PHONE' type='text' className='min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm' />
            <FormInput name='email' id='email' placeholder='ENTER YOUR EMAIL' type='email' className='min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm' />
            <FormInput name='password' id='password' placeholder='PASSWORD' type="password" className='  min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm' />
            {error && <p className="text-red-500 text-[10px]">{error}</p>}
            <p className=' text-sm font-normal'>If you don&apos;t have an account, please<Link href="/login" className='text-sm font-semibold text-blue underline'> Login Here</Link></p>
            {/* <Button name="SIGNUP" className=' rounded-sm'/> */}
            <button className='w-full bg-blue hover:bg-black text-white text-sm font-semibold shadow-sm py-3 rounded-sm duration-300 ease-in'>
                {loading ? <LoadingSpinner /> : "SIGNUP"}
            </button>
        </Form>
    )
}

export default SignupForm