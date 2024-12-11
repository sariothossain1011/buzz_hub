"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextarea from "@/components/forms/FormTextarea";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Jumbotron from "@/components/common/Jumbotron";
import { ErrorToast, SuccessToast } from "@/components/helper/validation";

const ContactUsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [success, setSuccess] = useState<string | null>(null);

  const submitHandler = async (data: any) => {
    setLoading(true);
    setError(null);
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then((res) => {
        if (res.status === 200) SuccessToast("Message send successfully!");
      })
      .catch((error) => {
        ErrorToast("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const Icons = [
    {
      icon: <FaFacebookF size={18} />,
      link: "",
    },
    {
      icon: <FaInstagram size={18} />,
      link: "",
    },
    {
      icon: <FaXTwitter size={18} />,
      link: "",
    },
    {
      icon: <FaTiktok size={18} />,
      link: "",
    },
  ];
  return (
    <>
      <Jumbotron title="Contact Us" />
      <div className=" py-10">
        <div className="py-4">
          <h2 className="text-xl font-semibold py-2 text-blue">GET IN TOUCH</h2>
          <p className="text-sm font-normal">
            Please enter the detals of your request. A member of our support staff
            will respond as soon as possible
          </p>
        </div>
        <div className=" flex flex-col-reverse md:flex-row  gap-8">
          <Form
            className="min-w-full md:min-w-[60%] flex flex-col gap-2"
            submitHandler={submitHandler}
          >
            <div className="grid md:grid-cols-2 gap-2">
              <FormInput
                name="name"
                required
                placeholder="YOUR NAME"
                className="border p-2 text-sm rounded outline-none"
              />
              <FormInput
                name="email"
                required
                placeholder="YOUR EMAIL"
                className="border p-2 text-sm rounded outline-none"
              />
            </div>
            <FormInput
              name="phone"
              required
              placeholder="PHONE NUMBER"
              className="border p-2 text-sm rounded outline-none"
            />
            <FormTextarea
              name="message"
              required
              placeholder="YOUR MESSAGE"
              rows={8}
              className="border p-2 text-sm rounded outline-none"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button className='w-full bg-blue hover:bg-black text-white  text-sm font-semibold shadow-sm py-3 rounded-sm duration-300 ease-in'>
              {loading ? <LoadingSpinner /> : "SUBMIT NOW"}
            </button>
          </Form>
          <div className=" flex flex-col gap-4 min-w-full  md:min-w-[40%]  px-4">
            <p className="text-sm font-normal">
              <span className=" font-semibold">Address:</span> Road:03, Block:B, Niketon, Gulshan-1, Dhaka
            </p>
            <p className="text-sm font-normal">
              <span className=" font-semibold">Email:</span> <Link href="mailto:buzzhub1000@gmail.com" > buzzhub1000@gmail.com</Link>
            </p>
            <p className="text-sm font-normal">
              <span className=" font-semibold">Call Us:</span> <Link href="tel:+01881-234533"> +01881-234533</Link>
            </p>
            <p className="text-sm font-normal">
              <span className=" font-semibold">Opening time:</span> Our store has
              re-opened for shopping exchanges every day{" "}
              <span className=" font-semibold">11am to 7pm</span>
            </p>
            <li className=" flex flex-row gap-2">
              {Icons.map((item, index) => (
                <Link
                  href={item.link}
                  target="_blank"
                  key={index}
                  className=" bg-black hover:bg-blue rounded-md text-white px-2 py-2 duration-300 ease-out"
                >
                  {item.icon}{" "}
                </Link>
              ))}
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
