
"use client"

import React from 'react'
import Form from './Form'
import FormInput from './FormInput'

const SusbscribeForm = () => {
  const submitHandler = async (data: any) => {
    console.log(data);
  }
  return (
    <>
        <Form submitHandler={ submitHandler} className="relative">
    <FormInput
      name="email"
      id="email"
      placeholder="Enter your email"
      type="email"
      className="rounded-md px-4  text-sm outline-none text-black bg-white/95 "
    />
    <div className="absolute top-0 right-0 bottom-0 bg-black  text-white text-sm font-normal rounded-r-md py-2 w-28 flex justify-center items-center">
      SUBSCRIBE
    </div>
  </Form>
    </>

  )
}

export default SusbscribeForm


