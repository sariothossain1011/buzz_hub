import React from 'react'
import data from '../../../public/data/footer.json'
import Link from 'next/link'
import SusbscribeForm from '@/components/forms/SusbscribeForm';
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaYoutube
} from "react-icons/fa6";
interface IconItem {
  icon: JSX.Element;
  link: string;
}

// SOCIAL MEDIA ICONS & LINK
const Icons: IconItem[] = [
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
  {
    icon: <FaYoutube size={18} />,
    link: "",
  },
];

const Footer = () => {
  return (
    <div className=' pt-10 bg-blue text-[#C0C0C0] '>
      <div className='container '>
        <div className=' grid grid-cols-1 md:flex md:flex-row  gap-8  pb-4'>
          <div className=' flex flex-col gap-4 min-w-[30%]'>
            <Link href='/' className=' text-black text-3xl font-extrabold italic'>BUZZ HUB</Link>
            <p className=' text-[14px] text-black'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
            <SusbscribeForm />
            <ul>
              <li className="flex flex-row gap-2 ">
                {Icons.map((item, index) => (
                  <Link
                    href={item.link}
                    target="_blank"
                    key={index}
                    className="hover:bg-white text-black rounded-full px-2 py-2 duration-300 ease-out"
                  >
                    {item.icon}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          {/* <div> */}
          <div className=' min-w-[65%] grid grid-cols-1 md:flex md:flex-row justify-between'>
            {
              data && data.map((item, index) => (
                <div key={index}>
                  <h1 className=' text-lg font-bold text-black italic'>{item.mainTitle}</h1>
                  {
                    item?.items.map((subItems, index) => (
                      <ul key={index}>
                        <li className=' text-sm font-medium py-2 text-black hover:text-white'><Link href={subItems.path}>{subItems.title}</Link></li>

                      </ul>
                    ))
                  }
                </div>
              ))
            }

            <div className=' flex flex-col gap-3 text-[14px] font-normal'>
              <h1 className=' text-xl font-semibold italic  text-black'>STORE INFORMATION</h1>
              <p className=' flex flex-row items-center gap-1 text-black hover:text-white'><MdLocationOn size={20} /> <span>Road:03, Block:B, Niketon, Gulshan-1, Dhaka</span></p>
              <p className=' flex flex-row items-center gap-1 text-black hover:text-white'> <MdCall size={20} /> <Link href="tel:+01881286293">+01881-234533</Link></p>
              <p className=' flex flex-row items-center gap-1 text-black hover:text-white'><MdEmail size={20} /> <Link href="mailto:buzzhub1000@gmail.com">buzzhub1000@gmail.com</Link></p>
            </div>
          </div>

        </div>
        <hr className='text-black' />
        <div className=' flex flex-col sm:flex-row justify-between items-center   text-black py-5 text-sm font-normal '>
          <p>&copy;2024 Buzz Hub. All Rights Reserved</p>
          <p>Design & Developed by Buzz Hub</p>
        </div>
      </div>
    </div>
  )
}

export default Footer