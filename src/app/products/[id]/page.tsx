
import Button from '@/components/button/Button';
import getSingleProduct from '@/lib/api/getSingleProduct';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface SingleProductProps {
  params: { id: string }
}
const SingleProductPage: React.FC<SingleProductProps> = async ({ params }) => {
  const { id } = params;
  const product = await getSingleProduct(id);

  return (
    <div className='py-20'>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className=' flex justify-center'>
          <Image src={`${product?.image}`} alt={`${product?.name}`} width={400} height={300} />
        </div>
        <div className=' flex flex-col gap-6'>
          <h1 className='text-xl md:text-2xl font-bold'>{product?.name}</h1>
          {/* <p className=' text-lg md:text-xl font-medium text-blue-500'>  <span>৳{product?.price}</span> </p> */}
          <div className='flex flex-wrap gap-2'>
            <p className=' inline-block px-4 py-2 rounded-full bg-light_white text-sm md:text-md font-medium'><span className=' text-gray'>Price :</span> {product?.name}</p>
            <p className=' inline-block px-4 py-2 rounded-full bg-light_white text-sm md:text-md font-medium'><span className=' text-gray'>Status :</span> {product?.quantity && product?.quantity > 0 ? "In Stock" : "Stock Out"}</p>
            <p className=' inline-block px-4 py-2 rounded-full bg-light_white text-sm md:text-md font-medium'><span className=' text-gray'>Prodcut Code :</span> {product?.productCode}</p>
            <p className=' inline-block px-4 py-2 rounded-full bg-light_white text-sm md:text-md font-medium'><span className=' text-gray'>Brand :</span> {product?.brand}</p>
          </div>
          <h1 className='text-xl md:text-2xl font-bold'>Key Features</h1>

          <div className='text-md font-medium'>
            <p >Model: {product?.model}</p>
            <p >Processor: {product?.processor}</p>
            <p >Ram: {product?.ram}</p>
            <p >Display: {product?.display}</p>
            <p >Features: {product?.features}</p>
          </div>

          <div className=' min-w-full flex flex-row gap-4  items-center'>
            <Button name='ADD TO CART' />
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