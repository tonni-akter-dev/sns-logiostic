import React from 'react';
import logo from '../../../public/logo.png'
import location from '../../../public/location.png'
import phone from '../../../public/phone.png'
import email from '../../../public/email.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" ">
      <div className="flex gap-[72px] px-[60px]">
        {/* Logo and Description */}
        <div className="flex flex-col items-start max-w-[243px] w-full">
          <Image src={logo} alt="Logo" className="size-[84px] mb-2.5" /> {/* Replace with your logo path */}
          <p className="text-base  mb-3.5 leading-[150%] text-justify">
            The Most Eminent Marine parts and service provider in major metros and overseas with reliability since 1994. We are committed to provide reliable client support.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-[#D32F2F] text-white rounded-full p-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="bg-[#D32F2F] text-white rounded-full p-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="bg-[#D32F2F] text-white rounded-full p-2"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='max-w-[243px] w-full'>
          <h3 className="font-medium text-xl  mb-4.5">Quick Links</h3>
          <ul className="space-y-5">
            <li><a href="#" className="hover:text-[#C1032F]">Home</a></li>
            <li><a href="#" className="hover:text-[#C1032F]">Product</a></li>
            <li><a href="#" className="hover:text-[#C1032F]">Blog</a></li>
            <li><a href="#" className="hover:text-[#C1032F]">Brand</a></li>
            <li><a href="#" className="hover:text-[#C1032F]">Categories</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className='max-w-[171px] w-full'>
          <h3 className="font-medium text-xl  mb-4.5">Company</h3>
          <ul className="space-y-5">
            <li><a href="#" className="hover:text-[#C1032F]">About Us</a></li>
            <li><a href="#" className="hover:text-[#C1032F]">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#C1032F]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#C1032F]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#C1032F]">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="bg-[#303030] text-white pt-10 px-12 rounded-md">
          <h3 className="font-bold text-2xl mb-5">Contact Us</h3>
          <div className="space-y-3">
            <p className='flex gap-5 items-start text-base leading-6'><Image className='mt-1 size-5' src={location} alt="" />
              <span> 44/A, 1st Floor, Faisal House, Road No:-01, South Khulshi, Chittagong, Bangladesh. 4202.</span></p>
            <p className='flex gap-5 items-start text-base leading-6 underline'><Image className='mt-1 size-5 ' src={phone} alt="" /> <span>+880 132929 9667</span></p>
            <Link href='info@ssmsbd.com' className='flex gap-5 items-start text-base leading-6 underline'><Image className='mt-1 w-[17px]' src={email} alt="" /> <span>info@ssmsbd.com</span></Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-8 py-[7px] bg-[#C1032F] text-white text-xs leading-[150%]">
        <p>@Copyright 2025/ Safina Marine Group All Right Reserved Design & Development By Creativehubit </p>
      </div>
    </footer>
  );
};

export default Footer;