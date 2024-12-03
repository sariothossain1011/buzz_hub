'use client'
import { instance } from '@/axios/axiosInstance';
import ProductCard from '@/components/products/ProductCard';
import { IProduct } from '@/types';
import React, { useEffect, useState } from 'react'

const ProdcutsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await instance.get('Product/All');
              if (response?.data?.message) {
                  setProducts(response?.data?.message);
              }
          } catch (error) {
              console.error("Failed to fetch Products", error);
              setProducts([]);
          }
      };
      fetchProducts();
  }, []);
  return (
    <div className='flex flex-row gap-5 py-10'>
      <div className='w-[15%]'>
      <div className='text-center bg-light_white py-1'>
          <h1 className='text-md font-medium'>Category</h1>
        </div>
        <div className=" flex flex-col gap-1 p-5">
          <div className='flex flex-row gap-2 items-center'><input type="checkbox" /> <span className='text-xs font-normal'>Laptop</span></div>
          <div className='flex flex-row gap-2 items-center'><input type="checkbox" /> <span className='text-xs font-normal'>Monitor</span></div>
          <div className='flex flex-row gap-2 items-center'><input type="checkbox" /> <span className='text-xs font-normal'>Mobile</span></div>
          <div className='flex flex-row gap-2 items-center'><input type="checkbox" /> <span className='text-xs font-normal'>Desktop</span></div>
        </div>
        <div className='text-center bg-light_white py-1'>
          <h1 className='text-md font-medium'>Brand</h1>
        </div>
        <div className=" flex flex-col gap-1 p-5">
          <div className='flex flex-row gap-2 items-center'><input type="checkbox" /> <span className='text-xs font-normal'>Asus</span></div>
          <div className='flex flex-row gap-2 items-center'><input type="checkbox" /> <span className='text-xs font-normal'>Dell</span></div>
          <div className='flex flex-row gap-2 items-center'><input type="checkbox" /> <span className='text-xs font-normal'>Hp</span></div>
          <div className='flex flex-row gap-2 items-center'><input type="checkbox" /> <span className='text-xs font-normal'>Lenovo</span></div>
        </div>
      </div>
      <div className='w-[80%]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.map((item,) => (
                        <ProductCard product={item} key={item.id} />
                    ))
                }
            </div>

      </div>
    </div>
  )
}

export default ProdcutsPage