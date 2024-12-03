"use client"
import Cookies from "js-cookie";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import FormInput from './FormInput';
import Form from './Form';
import { instance } from '@/axios/axiosInstance';
import LoadingSpinner from "../common/LoadingSpinner";

const LoginForm = () => {

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {

        setLoading(true);
        setError(null);
        try {
            const response = await instance.post("Login", { email, password, });
            if (response?.data?.token) {
                typeof window !== "undefined" &&
                    Cookies.set(
                        "accessKey",
                        response?.data?.token
                    );
                router.push("/account");
            }
        } catch (error) {
            setError(`Something went wrong: ${error}`);
        } finally {
            setLoading(false);
        }
    };



    return (

        <Form submitHandler={handleLogin} className=' min-w-full flex flex-col gap-4'>
            <FormInput name='email' id='email' placeholder='ENTER YOUR EMAIL' type='email' className='min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm' />
            <FormInput name='password' id='password' placeholder='PASSWORD' type='password' className='  min-w-full border hover:border-black rounded-sm px-4 py-3 text-sm' />
            {error && <p className="text-red-500 text-[10px]">{error}</p>}
            <div className='flex items-center gap-1 text-sm'> <MdEmail size={16} /> <Link href={'/forgot-password'} className=' text-[10px] font-semibold'>Forgot your Password?</Link></div>
            <p className=' text-sm font-normal'>If you don&apos;t have an account, please<Link href="/signup" className=' font-normal text-blue underline'> Register Here</Link></p>
            <button className='w-full bg-blue hover:bg-light_red text-white hover:text-[#33101C] text-sm font-semibold shadow-sm py-3 rounded-sm duration-300 ease-in'>
                {loading ? <LoadingSpinner /> : "Login"}
            </button>
        </Form>
    )
}

export default LoginForm