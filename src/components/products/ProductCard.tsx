import { setCart } from '@/redux/state-slice/CartSlice'
import { IAddToCart, IProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CardButton from '../button/CardButton'
interface ProductsProps {
    product: IProduct,
}

const ProductCard: React.FC<ProductsProps> = ({ product }) => {
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
        model: product.model,
        processor: product.processor,
        ram: product.ram,
        resolution: product.resolution,
        display: product.display,
        camera: product.camera,
        battery: product.battery,
        ports: product.ports,
        features: product.features,
        reference: product.reference,
        isFeatured: product.isFeatured,
        
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
        <>
            <div  className=' flex flex-col justify-center items-center text-center gap-2 p-3 border rounded-sm group'>
                <div className=' relative'>
                    <div className=" relative w-full min-h-[250px] md:min-h-[220px]  overflow-hidden">
                        <Image src={product.image} alt={product.name} className='w-full h-full relative group-hover:scale-105 duration-500 rounded-md ' width={200} height={200} />

                    </div>
               </div>
                <h2 className='text-sm font-semibold'>{product.name}</h2>
                <p className=' text-blue-500'>   <span>৳{product.price}</span> </p>
                <div className=' min-w-full flex flex-row gap-4  justify-between items-center text-md font-semibold '>
                    <CardButton name='Add to Cart' onClick={handleAddToCart} />
                    <Link href={`/products/${product.id}`} className=' w-full' ><CardButton name='Details' /></Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard