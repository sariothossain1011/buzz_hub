"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from '../products/ProductCard';
import { IProduct } from '@/types';
import { instance } from '@/axios/axiosInstance';
import Loader from '../common/Loader';



const FeaturesProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await instance.get('Product/All');
                if (response?.data?.message) {
                    setProducts(response?.data?.message);
                }
            } catch (error) {
                console.error("Failed to fetch Products", error);
                setProducts([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (!products || isLoading) {
        return <Loader />
    }

    return (
        <div className=' pb-5'>
            <h1 className=' text-2xl font-extrabold italic pb-5'>Flash Sale</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                {
                    products.map((item,) => (
                        <ProductCard product={item} key={item.id} />
                    ))
                }
            </div>

        </div>
    );
};

export default FeaturesProducts;