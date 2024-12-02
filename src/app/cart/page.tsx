'use client'
import { RootState } from '@/redux/store/Store';
import { IStoreItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import { addComment, decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/state-slice/CartSlice';
import Button from '@/components/button/Button';
import Jumbotron from '@/components/common/Jumbotron';
const CartPage = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const [comment, setComment] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false); // Check for client-side mounting

  // Use useEffect to ensure consistent state between SSR and CSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { cartCount, cartItems } = useSelector(
    (state: RootState) => ({
      cartCount: state.cart.cartCount,
      cartItems: state.cart.cartItems,
    })
  ) as {
    cartCount: number;
    cartItems: IStoreItem[];
  };


  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementQuantity(id));
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleCheckout = () => {
    dispatch(addComment(comment));
    router.push("/checkouts");
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  if (!isMounted) {
    return <div>Loading...</div>;
  }

  if (cartItems.length == 0) {
    return <div className=' text-center py-20'>
      <h1>Empty Cart Value</h1>
    </div>
  }

  return (
    <div className=' flex flex-col'>
      <Jumbotron title='Cart Page' />
      <div className="flex flex-col md:flex-row gap-8 py-10">
        <div className="min-w-full md:min-w-[60%]">
          <div className="md:border">
            <div className="min-w-full hidden md:flex flex-col md:flex-row justify-between items-center bg-slate-100 px-4 py-3">
              <div className="w-full">
                <span className="pl-12 text-[12px] font-semibold">
                  PRODUCTS
                </span>
              </div>
              <div className="w-full flex justify-between items-center text-[12px] font-semibold">
                <p>PRICE</p>
                <p>QTY</p>
                <p>TOTAL</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {cartItems &&
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row justify-between items-center border gap-2 md:gap-0  p-3 md:p-6"
                  >
                    <div className="max-w-full md:w-full flex flex-row gap-4 md:gap-2 items-center">
                      <div className="md:px-4">
                        <RiDeleteBin5Line
                          size={18}
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(item.uuid)}
                        />
                      </div>

                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className=" w-20 bg-cover"
                      />
                      <div className="text-[12px]">
                        <p className="font-semibold">{item.name}</p>
                        <p className="font-medium">
                          Size:
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex flex-row gap-2 justify-between items-center text-sm">
                      <p>৳{item.price}</p>
                      <div className="md:mb-4 flex items-center">
                        <button
                          onClick={() => handleDecreaseQuantity(item.uuid)}
                          className="bg-gray-300 px-3 py-1 rounded"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          readOnly
                          className=" w-12 text-center mx-2 border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => handleIncreaseQuantity(item.uuid)}
                          className="bg-gray-300 px-3 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                      <p>৳{(item.price * item.quantity).toFixed(2)}</p>

                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center text-center gap-4 md:gap-8 py-4">
            <Button name='PROCEED TO CHECKOUT' onClick={handleCheckout} />

            <Link
              href="/products"
              className=' w-full'
            >
              <Button name='CONTINUE SHOPPING' />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 min-w-full md:min-w-[40%]">
          <textarea
            name="comment"
            id="comment"
            placeholder="COMMENTS HERE..."
            rows={6}
            value={comment}
            onChange={handleCommentChange}
            className="w-full text-sm outline-none text-black border p-2"
          />



          <div className="border">
            <span className="px-6 py-3 text-[12px] font-semibold uppercase">
              There are {`${cartCount}`} items in your cart
            </span>
            <div className="flex flex-row justify-between items-center bg-slate-100 px-6 py-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">€{total.toFixed(2)}</span>
            </div>
          </div>

          <Button name='PROCEED TO CHECKOUT' onClick={handleCheckout} />
        </div>
      </div>
    </div>
  )
}

export default CartPage