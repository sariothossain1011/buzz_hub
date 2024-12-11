"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Field, Label, Select } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/Store";
import { IStoreItem } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Cookies from "js-cookie";
import { clearCart } from "@/redux/state-slice/CartSlice";
import { SuccessToast } from "@/components/helper/validation";


const CheckoutPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const token = Cookies.get("accessKey");
  const dispatch = useDispatch();
  const [selectedDeliveryLocation, setSelectedDeliveryLocation] = useState<string>("insite-dhaka");

  // const [selectedPayment, setSelectedPayment] = useState({
  //   title: "",
  //   value: "",
  // });



  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems as IStoreItem[]
  )

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDeliveryLocation(event.target.value);
  };
  const submitHandler = async (data: any) => {
    console.log(data);
    dispatch(clearCart());
    SuccessToast("Orders Confirm!")
    router.push("/confirmation")
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );
  const deliveryCost = selectedDeliveryLocation === "insite-dhaka" ? 70 : 130;
  const total = subtotal + deliveryCost;





  return (
    <div className=" py-10">
      <div className="text-center py-10 md:py-40">
        <h1 className="text-2xl md:text-4xl font-semibold ">
          CHECKOUT PAGE
        </h1>
        <p className="text-sm font-normal py-2">
          <Link href="/">Home</Link> &#x2022; <span>Checkout Page</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10  md:border-2 md:rounde-md md:p-10">
        <Form
          submitHandler={submitHandler}
          className="min-w-full flex flex-col gap-4"
        >
          <Field>
            <Label className="text-sm/6 font-medium text-black">Location</Label>
            <p className="mt-4 text-sm">Selected Address: {selectedDeliveryLocation}</p>
            <div className="relative">
              <Select
                value={selectedDeliveryLocation}
                onChange={handleChange}
                className={clsx(
                  "mt-3 block w-full appearance-none rounded-lg border py-3 px-3 text-sm/6 text-black",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                  "*:text-black"
                )}
              >
                <option value="insite-dhaka">Insite Dhaka</option>
                <option value="outsite-dhaka">Outsite Dhaka</option>
              </Select>
              <IoIosArrowDown
                className="group pointer-events-none absolute top-4 right-2.5 size-4 fill-black"
                aria-hidden="true"
              />
            </div>
          </Field>
          <FormInput
            name="name"
            id="name"
            placeholder="FULL NAME"
            type="text"
            required
            className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
          />
          <FormInput
            name="email"
            id="email"
            placeholder="ENTER YOUR EMAIL"
            type="email"
            required
            className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
          />
          <FormInput
            name="phone"
            id="phone"
            placeholder="ENTER YOUR PHONE"
            type="text"
            required
            className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
          />
          <FormInput
            name="address"
            id="address"
            placeholder="FULL ADDRESS"
            type="text"
            required
            className="min-w-full border hover:border-black rounded-md px-4 py-3 text-sm outline-none"
          />

          {/* <div className="flex flex-row gap-4 text-center">
            <button
              type="button"
              onClick={() =>
                setSelectedPayment({
                  title: "Cash On Delivery",
                  value: "COD",
                })
              }
              className={`py-8 w-48 px-2 font-semibold shadow ${selectedPayment.value === "COD"
                ? "bg-blue text-black"
                : "bg-white"
                } `}
            >
              Cash On Delivery
            </button>
            <button
              type="button"
              onClick={() =>
                setSelectedPayment({
                  title: "Bkash",
                  value: "BKASH",
                })
              }
              //disabled
              className={`py-8 w-48 px-2 font-semibold shadow ${selectedPayment.value === "BKASH"
                ? "bg-blue text-white"
                : "bg-white"
                } `}
            >
              Bkash
            </button>
          </div> */}
          {error && <p className="text-red-500 text-[10px]">{error}</p>}
          <button className='w-full bg-blue hover:bg-black text-white text-sm font-semibold shadow-sm py-3 rounded-sm duration-300 ease-in'>
            {loading ? <LoadingSpinner /> : "PAY Now"}
          </button>

        </Form>
        <div className="flex flex-col gap-4">
          {cartItems?.map((item, index) => (
            <div key={index} className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-4">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  {/* <span className="absolute -top-1 -right-1 z-20 bg-light_red text-white rounded-full flex justify-center text-[14px] w-6 h-6">
                    {item.quantity}
                  </span> */}
                </div>
                <div className="text-sm font-normal">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs font-medium">Product Code : {item.productCode}</p>
                  <p className="text-xs font-medium">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-sm font-normal">৳{item?.price * item?.quantity}</div>
            </div>
          ))}
          <div className="flex flex-row justify-between items-center text-sm font-normal">
            <span>Sub-total</span>
            <span>৳{subtotal}</span>
          </div>
          <div className="flex flex-row justify-between items-center text-sm font-normal">
            <span>Shipping</span>
            <span>uttara-11, Dhaka</span>
          </div>
          <div className="flex flex-row justify-between items-center text-sm font-normal">
            <span>Delivery Cost</span>
            <span>৳{deliveryCost}</span>
          </div>
          <div className="flex flex-row justify-between items-center text-2xl font-semibold">
            <span>Total</span>
            <span>৳{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
