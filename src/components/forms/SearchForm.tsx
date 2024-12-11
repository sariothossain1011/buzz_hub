"use client";
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';
import { fetchProducts } from '@/redux/state-slice/ProductSlice';
import { AppDispatch } from '@/redux/store/Store';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';

const SearchForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (data: { search: string }) => {
    const keyword = searchValue.trim();
    dispatch(fetchProducts({ category: '', brand: '', keyword }));
    const searchParams = new URLSearchParams();
    if (keyword) {
      searchParams.set("search", keyword);
    }
    router.push(`/products?${searchParams.toString()}`);
  };
  return (
    <Form
      submitHandler={handleSubmit}
      className="w-full flex flex-row justify-center"
    >
      <FormInput
        name="search"
        placeholder="Search Products..."
        value={searchValue}
        onChange={handleInputChange}
        className="w-full bg-white text-black outline-none px-4 border-l-2 border-t-2 border-b-2 border-light_white rounded-sm"
      />
      <button
        type="submit"
        className="text-white bg-blue px-4 border-r-2 border-t-2 border-b-2 border-blue rounded-sm"
      >
        <IoSearchOutline size={22} />
      </button>
    </Form>
  );
};

export default SearchForm;
