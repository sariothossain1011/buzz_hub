"use client"
import React, { useEffect, useState } from 'react';
import { IProduct } from '@/types';
import { instance } from '@/axios/axiosInstance';
import GreatDealCard from '@/components/products/GreatDealCard';
import Loader from '@/components/common/Loader';



const GreatDealpage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            try {
             
                const response = await instance.get('Product/All');
                if (response?.data?.message) {
                    const discountedProducts = response.data.message.filter((product: IProduct) => product.discountPrice);
                    setProducts(discountedProducts);
                    
                }
            } catch (error) {
                console.error("Failed to fetch Products", error);
                setProducts([]);

            }finally{
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if(isLoading){
        return <Loader/>
    }

    return (
        <div className=' py-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                {
                    products.map((item,) => (
                        <GreatDealCard product={item} key={item.id} />
                    ))
                }
            </div>

        </div>
    );
};

export default GreatDealpage;