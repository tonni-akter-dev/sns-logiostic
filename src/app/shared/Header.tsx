'use client'
import { List, MagnifyingGlass, Phone, User, X } from '@phosphor-icons/react'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/logo.png'
import cart from '../../../public/cart.png'
import Dropdown from './Dropdown'
import Link from 'next/link'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div>
      <header className="w-full relative">
        {/* Top Bar */}
        <div className="bg-[#303030] text-white text-sm py-5">
          <div className="flex justify-end items-center px-4">
            <p className='lg:block hidden text-sm border-r border-r-white pe-3 '>Track Your Order</p>
            <div className="flex items-center space-x-4">
              {/* Currency Selector */}
              <div className='border-r border-r-white px-3 text-sm '>
                <select className="bg-transparent border-none text-white focus:outline-none">
                  <option className='text-black'>USD</option>
                  <option className='text-black'>EUR</option>
                </select>
              </div>
              {/* Language Selector */}
              <div className=' border-r border-r-white pe-3'>
                <select className="bg-transparent text-white focus:outline-none">
                  <option className='text-black'>EN</option>
                  <option className='text-black'>BN</option>
                </select>
              </div>
              {/* Contact */}
              <div className="flex  items-center space-x-2">
                <Phone size={20} weight="bold" />
                <span className="text-white text-base">+880 132929 9667</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="">
          <div className=" flex justify-between items-center py-[38px] pe-[60px]">
            {/* Logo */}
            <div className="absolute lg:flex hidden top-0 left-0 bg-white max-w-[280px] w-full h-[164px]  justify-center items-center">
              <Link href="/"> <Image
                src={logo}
                alt="Logo"
                className=""
              /></Link>
            </div>

            {/* Navigation Links */}
            <ul className="lg:flex hidden items-center space-x-8 text-[#303030] font-semibold lg:ps-[300px]">
              <li className=" cursor-pointer flex items-center gap-2 font-semibold text-base leading-6">
                <Dropdown
                  title="BROWSE CATEGORIES"
                  items={["Electronics", "Fashion", "Home & Kitchen"]}
                />
              </li>
              <li className="cursor-pointer hover:text-[#C1032F] text-[#303030] font-semibold text-base leading-6">
                <Link href='/about'>ABOUT US</Link>
              </li>
              <li className="cursor-pointer hover:text-[#C1032F] text-[#303030] font-semibold text-base leading-6">BLOG
              </li>
              <li className=" cursor-pointer flex items-center gap-2 font-semibold text-base leading-6">
                <Dropdown
                  title="PAGE"
                  items={["Electronics", "Fashion", "Home & Kitchen"]}
                />
              </li>              <li className="cursor-pointer hover:text-[#C1032F] text-[#303030] font-semibold text-base leading-6">BRAND</li>
              <li className="cursor-pointer hover:text-[#C1032F] text-[#303030] font-semibold text-base leading-6">CONTACT US</li>
            </ul>
            <button
              className="lg:hidden text-[#303030] focus:outline-none px-4"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <List size={28} />}
            </button>
            {menuOpen && <ul className="lg:hidden absolute bg-white top-40 z-50 flex flex-col items-center space-y-8  p-10  font-semibold lg:ps-[300px]">
              <li className=" cursor-pointer flex items-center gap-2 font-semibold text-base leading-6">
                <Dropdown
                  title="BROWSE CATEGORIES"
                  items={["Electronics", "Fashion", "Home & Kitchen"]}
                />
              </li>
              <li className="cursor-pointer hover:text-[#C1032F] text-[#303030] font-semibold text-base leading-6">
                <Link href='/about'>ABOUT US</Link>
              </li>
              <li className="cursor-pointer hover:text-[#C1032F] text-[#303030] font-semibold text-base leading-6">BLOG
              </li>
              <li className=" cursor-pointer flex items-center gap-2 font-semibold text-base leading-6">
                <Dropdown
                  title="PAGE"
                  items={["Electronics", "Fashion", "Home & Kitchen"]}
                />
              </li>
              <li className="cursor-pointer hover:text-[#C1032F] text-[#303030] font-semibold text-base leading-6">BRAND</li>
              <li className="cursor-pointer hover:text-[#C1032F] text-[#303030] font-semibold text-base leading-6">CONTACT US</li>
            </ul>}
            {/* Icons */}
            <div className="flex items-center space-x-6 text-[#303030]">
              <div className='flex gap-4 pe-6 border-r  border-[#303030]/25 opacity-[75%]'>
                <User
                  size={24}
                  weight="light"
                  className="cursor-pointer text-[#303030] hover:text-[#C1032F]"
                />
                SIGN IN
              </div>
              <div className="relative pe-6 border-r  border-[#303030]/25">
                {/* <ShoppingCart
                  size={28}
                  weight="light"
                  className="cursor-pointer text-[#303030] hover:text-[#C1032F]"
                />
                <span className="absolute -top-2 -right-2 bg-[#C1032F] text-white text-xs px-1 rounded-full">
                  1
                </span> */}
                <Image src={cart} alt="" />
              </div>
              <MagnifyingGlass
                size={24}
                weight="light"
                className="cursor-pointer hover:text-[#C1032F]"
              />
            </div>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Header