


"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from '../products/ProductCard';
import { IProduct } from '@/types';
import { getAllProducts } from '@/lib/api/getAllProducts';



const FeaturesProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const ProductsData = await getAllProducts();
                // Map the products data to correct the field names
                if (ProductsData) {
                    const correctedProducts = ProductsData.map((product: any) => ({
                        ...product,
                        productType: product.prodcutType, // Correct the misspelled field
                        productOrigin: product.prodcutOrigin // Correct the misspelled field
                    }));
                    setProducts(correctedProducts ?? []);
                }


            } catch (error) {
                console.error("Failed to fetch Products", error);
                setProducts([]);
            }
        };
        fetchProducts();
    }, []);



    return (
        <div className=' pb-5'>
            <h1 className=' text-2xl font-extrabold italic pb-5'>Flash Sale</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border p-4'>
                {
                    products.map((item, ) => (
                        <ProductCard product={item} key={item.id} />
                    ))
                }
            </div>

        </div>
    );
};

export default FeaturesProducts;