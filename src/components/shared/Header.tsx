"use client"
import Cookies from "js-cookie";
import menuData from '../../../public/data/header.json';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaUserLarge } from "react-icons/fa6";
import { MdOutlineShoppingBag, } from "react-icons/md";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/Store';
import { MenuItem } from '@/types';
import SearchForm from '../forms/SearchForm';
import { IoSearch } from "react-icons/io5";
import Image from "next/image";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const token = Cookies.get("accessKey");

  const { cartCount } = useSelector((state: RootState) => ({
    cartCount: state.cart.cartCount,
  })) as {
    cartCount: number;
  };

  useEffect(() => {
    setIsMounted(true);
    setMenu(menuData);
  }, []);

  const toggleSubMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <>
      <header className='bg-blue text-white '>
        {/* <div className=' hidden sm:block'>
          <nav className='flex flex-col items-center py-2'>
            <ul className=' flex flex-row gap-5'>
              <li className='px-2 text-white md:hover:text-black'><Link href='/gread_deal'>Great Deal</Link></li>
              <li className='px-2 text-white md:hover:text-black'><Link href='/our_brands'>Our Brands</Link></li>
              <li className='px-2 text-white md:hover:text-black'><Link href='/help_and_support'>Help & Support</Link></li>
              {token ? (
                <>
                  <li className='px-2 text-white md:hover:text-black'><Link href='/account'>Account</Link></li>
                  <li className='px-2 text-white md:hover:text-black'><Link href='' onClick={() => Cookies.remove("accessKey")}>Logout</Link></li>
                </>

              ) : (
                <>
                  <li className='px-2 text-white md:hover:text-black'><Link href='/login'>Login</Link></li>
                  <li className='px-2 text-white md:hover:text-black'><Link href='/signup'>SignUp</Link></li>
                </>
              )}



            </ul>
          </nav>
        </div> */}
        <div className='relative  container flex flex-row justify-between items-center py-3'>
          <div className='relative flex flex-row items-center gap-3'>
            <FaBars size={24} onClick={() => setIsOpenHeader(!isOpenHeader)} className="cursor-pointer block sm:hidden " />

            <Link href='/' className=' text-black text-xl md:text-3xl font-extrabold italic w-[45px] h-[45px]'>
            <Image
          src="/images/buzz_logo.png"
          alt="Page Not Found"
          layout="responsive"
          width={100}
          height={100}
          className="h-full w-full object-cover"
        />
            </Link>



            {isOpenHeader && (
              <nav className='absolute top-[40px] left-0 z-40 bg-white shadow-lg min-w-64 rounded-sm'>
                <ul className='space-y-3 pt-2'>
                  {menu.map((item) => (
                    <li key={item.title} className='relative border-b-2 border-black pb-2'>
                      <div className='flex justify-between items-center cursor-pointer relative px-4 ' onClick={() => toggleSubMenu(item.title)}>
                        <Link href={item.link} className='text-black md:hover:text-black'>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
          {/* SEARCH BAR */}
          {
            isOpenSearch && (
              <div className=" absolute z-20 top-[55px] md:top-[68px] right-2 md:right-24 lg:right-28">
                <SearchForm/>
              </div>
            )
          }

          <div className=" hidden sm:flex">
            <nav className=' flex flex-col items-center py-2'>
              <ul className=' flex flex-row gap-0 md:gap-3'>

                <li className='px-1 md:px-2 text-sm md:text-md font-medium text-white md:hover:text-black'><Link href='/about-us'>About Us</Link></li>
                <li className='px-1 md:px-2 text-sm md:text-md font-medium text-white md:hover:text-black'><Link href='/products'>Products</Link></li>
                <li className='px-1 md:px-2 text-sm md:text-md font-medium text-white md:hover:text-black'><Link href='/great-deal'>Great Deal</Link></li>
                <li className='px-1 md:px-2 text-sm md:text-md font-medium text-white md:hover:text-black'><Link href='/our-brands'>Our Brands</Link></li>
                <li className='px-1 md:px-2 text-sm md:text-md font-medium text-white md:hover:text-black'><Link href='/help-and-support'>Help & Support</Link></li>
              </ul>
            </nav>
          </div>

          <div className='flex flex-row items-center gap-4 md:gap-6'>

            <IoSearch size={22} className=' text-white' onClick={() => setIsOpenSearch(!isOpenSearch)} />

            <Link href="/cart" className='relative'>
              <MdOutlineShoppingBag size={27} className=' hover:text-light_red' />
              {isMounted && (
                <span className='flex justify-center items-center absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[11px] bg-light_red text-white  '>
                  {cartCount}
                </span>
              )}
            </Link>
            {
              token ? (
                <Link href="/account">
                  <FaUserLarge size={22} className=' text-white' />
                </Link>
              ) : (
                <Link href="/login">
                  <FaUserLarge size={22} className=' text-white' />
                </Link>
              )
            }


          </div>
        
        </div>

        {isOpenHeader && (
          <div className='fixed inset-0 bg-black/40 z-10' onClick={() => setIsOpenHeader(false)} />
        )}
                {isOpenSearch && (
          <div className='fixed inset-0  z-10' onClick={() => setIsOpenSearch(false)} />
        )}
      </header>

    </>
  );
};

export default Header;
