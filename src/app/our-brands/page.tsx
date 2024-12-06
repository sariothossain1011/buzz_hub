"use client";
import React, { useEffect, useState } from 'react';
import { IProduct } from '@/types';
import { instance } from '@/axios/axiosInstance';
import Image from 'next/image';

const OurBrandsPage = () => {
  const [uniqueBrandProducts, setUniqueBrandProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get('Product/All');
        if (response?.data?.message) {

          const uniqueBrandsMap = new Map<string, IProduct>();
          response.data.message.forEach((product: IProduct) => {
            if (!uniqueBrandsMap.has(product.brand)) {
              uniqueBrandsMap.set(product.brand, product);
            }
          });
          setUniqueBrandProducts(Array.from(uniqueBrandsMap.values()));
        }
      } catch (error) {
        console.error("Failed to fetch Products", error);

        setUniqueBrandProducts([]);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className='py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {uniqueBrandProducts.map((item) => (
          <div key={item.id} className=' border-2 border-light_white rounded-md '>
            <div className='flex justify-center items-center'>
              <Image src={item.image} alt={item.name} width={180} height={180} />
            </div>

            <div className=' bg-light_white px-6 py-4'>
              <p className=' text-md font-medium'>Brand: {item.brand}</p>
              <p className=' text-md font-medium'>Category: {item.category}</p>


            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default OurBrandsPage;