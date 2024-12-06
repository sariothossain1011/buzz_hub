// "use client"
// import Form from '@/components/forms/Form'
// import FormInput from '@/components/forms/FormInput'
// import { fetchProducts } from '@/redux/state-slice/ProductSlice';
// import { AppDispatch } from '@/redux/store/Store';
// import React, { useEffect } from 'react'

// import { IoSearchOutline } from "react-icons/io5";
// import { useDispatch } from 'react-redux';
// const SearchForm = () => {
// const dispatch = useDispatch<AppDispatch>();
//   const handleSubmit = (data:any) => {
//     useEffect(() => {
//       dispatch(fetchProducts({ category: '',brand:'', keyword: `$${data.search}` }));
//     }, [dispatch]);
//   }
//   return (
//     <div className='hidden sm:flex'>
//      <Form submitHandler={handleSubmit} className='-w-full flex flex-row justify-center   '>
//         <FormInput name='search' placeholder='Search Products...' className='w-full bg-white text-black outline-none px-4' />
//         <button className='   text-black bg-white mt-1 px-3 border-l-2 border-black'><IoSearchOutline size={22} /></button>
//       </Form>
//     </div>
//   )
// }

// export default SearchForm;





"use client";
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import { fetchProducts } from '@/redux/state-slice/ProductSlice';
import { AppDispatch } from '@/redux/store/Store';
import { useRouter } from 'next/navigation';
import React from 'react';

import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';

const SearchForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (data: { search: string }) => {
    // Dispatch the fetchProducts action with search data
    dispatch(fetchProducts({ category: '', brand: '', keyword: data?.search || '' }));
    router.push("/products")
  };

  return (

      <Form
        submitHandler={handleSubmit}
        className="w-full flex flex-row justify-center "
      >
        <FormInput
          name="search"
          placeholder="Search Products..."
          className="w-full bg-white text-black outline-none px-4 border-l-2 border-t-2 border-b-2 border-light_white rounded-sm"
        />
        <button
          type="submit"
          className="text-white bg-blue mt-1 px-4 border-r-2 border-t-2 border-b-2 border-blue rounded-sm"
        >
          <IoSearchOutline size={22} />
        </button>
      </Form>
  );
};

export default SearchForm;
