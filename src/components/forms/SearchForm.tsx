"use client"
import Form from '@/components/forms/Form'
import FormInput from '@/components/forms/FormInput'
import React from 'react'

import { IoSearchOutline } from "react-icons/io5";
const SearchForm = () => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (data:any) => {
    console.log(data)
  }
  return (
    <div className='hidden sm:flex'>
     <Form submitHandler={handleSubmit} className='-w-full flex flex-row justify-center   '>
        <FormInput name='search' placeholder='Search Products...' className='w-full bg-white text-black outline-none px-4' />
        <button className='   text-black bg-white mt-1 px-2 border-l-2 border-black'><IoSearchOutline size={22} /></button>
      </Form>
    </div>
  )
}

export default SearchForm;