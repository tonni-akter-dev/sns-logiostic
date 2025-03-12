import Image from 'next/image'
import React from 'react'
import productImage from '../../../public/productimage.png'
import promoimage from '../../../public/promoimage.png'
import detailsbtnicon from '../../../public/detailsbtnicon.png'
import arrow from '../../../public/arrow.png'
import Link from 'next/link'

const Deal = () => {
    return (
        <div className='px-[60px] mb-[100px]'>
            <div>
                {/* Title */}
                <h2 className="text-[40px] font-bold  border-b border-[#303030]/20 pb-[28px] max-w-[1007px] w-full mb-[64px]">
                    Deal of The <span className="text-[#C1032F]">Day</span>
                </h2>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[54px] items-start">
                    {/* Product Section */}
                    <div className="relative  rounded-lg overflow-hidden flex justify-center items-center">
                        <Image src={productImage} alt="Product" className="w-full h-[464px] object-contain" />
                        {/* Discount Badge */}
                        <div className="absolute top-3 right-[55px] bg-[#C1032F] text-white px-4 py-3 font-semibold text-base">
                            -15%
                        </div>
                        {/* Limited Stock Badge - Centered */}
                        <div className="absolute bottom-[46px] rounded-[50px] w-[301px] left-1/2 transform -translate-x-1/2 text-white  text-sm font-semibold bg-white">
                            <p className='bg-[#C1032F] rounded-[50px] w-[284px] py-1 text-center'>Limited Stock</p>
                        </div>
                    </div>


                    {/* Deal Info */}
                    <div className=" flex flex-col  text-[#303030]">
                        <p className="text-[22px] font-semibold  mb-2" >garments</p>
                        <h3 className="text-4xl font-bold mb-[80px]">wear <span className="font-extrabold">Max90</span></h3>

                        {/* Countdown Timer */}
                        <p className="text-base mb-4">Sale ends in:</p>
                        <div className="flex space-x-4 mb-[64px]">
                            {["02", "15", "46", "17"].map((time, index) => (
                                <div key={index} className="text-center">
                                    <span className="block text-[36px] text-[#C1032F] mb-4 font-bold border border-[#303030]/25  p-6 ">{time}</span>
                                    <span className="text-base text-[#303030] opacity-50">{["DAYS", "HOURS", "MINS", "SECS"][index]}</span>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <div className='flex gap-4 items-center'>
                            <button className="bg-[#303030] text-white px-6 py-3 text-base  font-semibold w-full hover:bg-gray-800">
                                View Details                            </button>
                            <Link href="#">
                                <Image src={detailsbtnicon} alt="" />
                            </Link>
                        </div>
                    </div>

                    {/* Promo Section */}
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                        <Image src={promoimage} alt="Promo" className="w-full h-auto" />
                        <div className='absolute top-7 left-8'>
                            <div className=" text-base text-[#C1032F] font-semibold mb-4">PROMO</div>
                            <div className=" flex flex-col justify-end   text-white">
                                <h3 className="text-4xl text-[#303030] mb-5 font-bold">BLACK FRIDAY DISCOUNT!</h3>
                                <p className="text-base text-[#303030] mb-12">Get 15% Off on Running <span className='font-bold'> Leather items</span></p>
                                <a href="#" className="text-[#303030] mt-2 text-2xl flex gap-4 items-center font-bold">Shop Now 
                                    <Image src={arrow} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Deal