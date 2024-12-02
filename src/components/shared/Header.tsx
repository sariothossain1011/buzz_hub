"use client"
import menuData from '../../../public/data/header.json';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from "react-icons/fa6";
import { MdOutlineShoppingBag, } from "react-icons/md";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/Store';
import { MenuItem } from '@/types';
import SearchForm from '../forms/SearchForm';


const Header = () => {
  const [isMounted, setIsMounted] = useState(false); 
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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
      <header className='bg-blue text-white'>
        <div className=' hidden sm:block'>
          <nav className='flex flex-col items-center py-2'>
            <ul className=' flex flex-row gap-5'>
              {menu.map((item) => (
                <li key={item.title} className=''>
                  <div className='flex justify-between items-center cursor-pointer relative px-2 text-white md:hover:text-black' >
                    <Link href={item.link}>{item.title}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='container flex flex-row justify-between items-center py-3'>
          <div className='relative flex flex-row items-center gap-3'>
            <FaBars size={24} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer block sm:hidden " />

            <Link href='/' className=' text-black text-xl md:text-3xl font-extrabold italic'>BUZZ HUB</Link>
            
          

            {isOpen && (
              <nav className='absolute top-[56px] left-0 z-40 bg-white text-black shadow-lg min-w-64 rounded-sm'>
                <ul className='space-y-3 pt-2'>
                  {menu.map((item) => (
                    <li key={item.title} className='relative border-b pb-2'>
                      <div className='flex justify-between items-center cursor-pointer relative px-2 ' onClick={() => toggleSubMenu(item.title)}>
                        <Link href={item.link} className='text-white md:hover:text-black'>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
          <SearchForm/>

          <div className='flex flex-row items-center gap-4 md:gap-6'>
          
            <Link href="/cart" className='relative'>
              <MdOutlineShoppingBag size={27} className=' hover:text-light_red' />
              {isMounted && (
                <span className='flex justify-center items-center absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[11px] bg-light_red text-white  '>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className='fixed inset-0 bg-black/40 z-10' onClick={() => setIsOpen(false)} />
        )}
      </header>

    </>
  );
};

export default Header;
