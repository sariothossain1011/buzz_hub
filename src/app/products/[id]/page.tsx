'use client'
import { instance } from '@/axios/axiosInstance';
import Button from '@/components/button/Button';
import { IAddToCart, IProduct } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import { useDispatch } from 'react-redux';
import { setCart } from '@/redux/state-slice/CartSlice';
interface SingleProductProps {
  params: { id: string }
}
const SingleProductPage =  () => {
  const { id } = useParams();
  const [product, setProducts] = useState<IProduct>({
    id: '',
    image: '',
    name: '',
    brand: '',
    category: '',
    price: 0,
    productCode: '',
    quantity: 0,
    model: '',
    processor: '',
    ram: '',
    resolution: '',
    display: '',
    camera: '',
    battery: '',
    ports: '',
    features: '',
    reference: '',
    isFeatured: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    if (!id) return; 
  
    const fetchProducts = async () => {
      setIsLoading(true); 
      try {
        const response = await instance.get(`Product/${id}`);
        
        if (response?.data?.message) {
          setProducts(response.data.message);
        }
      } catch (error) {
        console.error("Failed to fetch Products", error);
        setProducts({
          id: '',
          image: '',
          name: '',
          brand: '',
          category: '',
          price: 0,
          productCode: '',
          quantity: 0,
          model: '',
          processor: '',
          ram: '',
          resolution: '',
          display: '',
          camera: '',
          battery: '',
          ports: '',
          features: '',
          reference: '',
          isFeatured: false,
        });
      } finally {
        setIsLoading(false); // End loading state.
      }
    };
  
    fetchProducts();
  }, [id]);

// ADD TO CART 

const dispatch = useDispatch();
const [productItem, setProductItem] = useState<IAddToCart>({
    id: product.id,
    image: product.image,
    name: product.name,
    brand: product.brand,
    category: product.category,
    price: product.price,
    productCode: product.productCode,
    quantity: product.quantity,
    
})
useEffect(() => {
    setProductItem((prevProductItem) => ({
        ...prevProductItem,
        id: product.id,
        name: product.name,
        price: product.price,
        quantity:1,
    }));
}, [
    product.id,
    product.name,
    product.price,
    product.quantity
]);
const handleAddToCart = () => {
    dispatch(setCart(productItem));
};






  

  return (
    <div className='py-20'>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className=' flex justify-center'>
          <Image src={product.image} alt={product?.name} width={400} height={300} />
        </div>
        <div className=' flex flex-col gap-6'>
          <h1 className='text-xl md:text-2xl font-bold'>{product?.name}</h1>
          <div className='flex flex-wrap gap-2'>
            <p className=' inline-block px-4 py-2 rounded-full bg-light_white text-sm md:text-md font-medium'><span className=' text-gray'>Price :</span> {product?.price}</p>
            <p className=' inline-block px-4 py-2 rounded-full bg-light_white text-sm md:text-md font-medium'><span className=' text-gray'>Status :</span> {product?.quantity && product?.quantity > 0 ? "In Stock" : "Stock Out"}</p>
            <p className=' inline-block px-4 py-2 rounded-full bg-light_white text-sm md:text-md font-medium'><span className=' text-gray'>Prodcut Code :</span> {product?.productCode}</p>
            <p className=' inline-block px-4 py-2 rounded-full bg-light_white text-sm md:text-md font-medium'><span className=' text-gray'>Brand :</span> {product?.brand}</p>
          </div>
          <h1 className='text-xl md:text-2xl font-bold'>Key Features</h1>

          <div className='text-md font-medium'>
            <p >Model: {product?.model}</p>
            <p >Processor: {product?.processor}</p>
            <p >Ram: {product?.ram}</p>
            <p >Resolution: {product?.resolution}</p>
            <p >Camera: {product?.camera}</p>
            <p >Battery: {product?.battery}</p>
            <p >Ports: {product?.ports}</p>
            <p >Display: {product?.display}</p>
            <p >Features: {product?.features}</p>
          </div>
          <p className='text-sm font-normal'>Reference: {product?.reference}</p>

          <div className=' min-w-full flex flex-row gap-4  items-center'>
          <Button name='Add to Cart' onClick={handleAddToCart} />
            {/* <Button name='ADD TO CART' /> */}
            <Link href="/checkouts" className=' w-full'>
              <Button name='BUY NOW' />
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default SingleProductPage