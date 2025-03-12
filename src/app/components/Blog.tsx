'use client';
import Image from 'next/image';
import React from 'react';
import blog1 from '../../../public/blog1.png';
import blog2 from '../../../public/blog2.png';
import profile from '../../../public/profile.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules

const blogData = [
    {
        id: 1,
        title: 'Readymade Garments – A Global Export Powerhouse',
        category: 'Garment Export',
        readTime: '5 min read',
        description:
            'Bangladesh is one of the world’s largest exporters of ready-made garments (RMG). At Sufian & Safina Logistics, we ensure efficient and timely shipping of high-quality clothing, including knitwear, woven garments, and denim.',
        author: 'Sarah Johnson',
        date: 'March 15, 2024',
        image: blog1,
    },
    {
        id: 2,
        title: 'The Future of Sustainable Fashion in Global Trade',
        category: 'Garment Export',
        readTime: '6 min read',
        description:
            'Sustainable fashion is becoming a crucial part of the global garment industry. With eco-friendly practices and ethical production, businesses are ensuring a greener future for textile exports worldwide.',
        author: 'Michael Adams',
        date: 'April 2, 2024',
        image: blog2,
    },
    {
        id: 3,
        title: 'How Technology is Transforming the Garment Industry',
        category: 'Technology',
        readTime: '4 min read',
        description:
            'Innovative technology such as AI-driven designs and automated stitching machines are revolutionizing the garment industry. Learn how these advancements are improving efficiency and reducing waste.',
        author: 'Emily Watson',
        date: 'March 28, 2024',
        image: blog1,
    },
    {
        id: 4,
        title: 'How Technology is Transforming the Garment Industry',
        category: 'Technology',
        readTime: '4 min read',
        description:
            'Innovative technology such as AI-driven designs and automated stitching machines are revolutionizing the garment industry. Learn how these advancements are improving efficiency and reducing waste.',
        author: 'Emily Watson',
        date: 'March 28, 2024',
        image: blog2,
    },
    {
        id: 5,
        title: 'How Technology is Transforming the Garment Industry',
        category: 'Technology',
        readTime: '4 min read',
        description:
            'Innovative technology such as AI-driven designs and automated stitching machines are revolutionizing the garment industry. Learn how these advancements are improving efficiency and reducing waste.',
        author: 'Emily Watson',
        date: 'March 28, 2024',
        image: blog1,
    },
    {
        id: 6,
        title: 'How Technology is Transforming the Garment Industry',
        category: 'Technology',
        readTime: '4 min read',
        description:
            'Innovative technology such as AI-driven designs and automated stitching machines are revolutionizing the garment industry. Learn how these advancements are improving efficiency and reducing waste.',
        author: 'Emily Watson',
        date: 'March 28, 2024',
        image: blog2,
    },
    {
        id: 7,
        title: 'How Technology is Transforming the Garment Industry',
        category: 'Technology',
        readTime: '4 min read',
        description:
            'Innovative technology such as AI-driven designs and automated stitching machines are revolutionizing the garment industry. Learn how these advancements are improving efficiency and reducing waste.',
        author: 'Emily Watson',
        date: 'March 28, 2024',
        image: blog1,
    },
    {
        id: 8,
        title: 'How Technology is Transforming the Garment Industry',
        category: 'Technology',
        readTime: '4 min read',
        description:
            'Innovative technology such as AI-driven designs and automated stitching machines are revolutionizing the garment industry. Learn how these advancements are improving efficiency and reducing waste.',
        author: 'Emily Watson',
        date: 'March 28, 2024',
        image: blog2,
    },
];

const Blog = () => {
    return (
        <div className="lg:ps-[60px] lg:px-0 px-4 mb-[60px]">
            <h1 className='lg:text-[40px] text-3xl font-bold lg:mb-20 mb-8 text-center'>
                Sns logiostic  <span className='text-[#C1032F]'>Blog</span>
            </h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={24}
                className="mySwiper"
                centeredSlides={true}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile screens
                    640: { slidesPerView: 1, spaceBetween: 16 }, // Small devices (phones)
                    768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
                    1024: { slidesPerView: 3, spaceBetween: 24 }, // Laptops & desktops
                  }}
            >
                {blogData.map((blog) => (
                    <SwiperSlide key={blog.id} className='pb-10'>
                        <div
                            className="bg-white rounded-lg overflow-hidden shadow-md box relative border-effect"
                            style={{ boxShadow: '0px 0px 4px 0.5px #00000040' }}
                        >
                            <Image src={blog.image} alt={blog.title} className="w-full h-auto" />
                            <div className="pt-6 px-5 pb-5">
                                <div className="flex items-center gap-5 text-sm mb-3">
                                    <span className="bg-[#C1032F] text-white px-3 py-1 rounded-full text-xs">
                                        {blog.category}
                                    </span>
                                    <span className="text-[#303030] text-xs">{blog.readTime}</span>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3">{blog.title}</h3>
                                <p className="leading-[150%] text-sm">{blog.description}</p>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center gap-4">
                                        <Image src={profile} alt="Author" className="w-12 h-12 rounded-full" />
                                        <div>
                                            <p className="text-base">{blog.author}</p>
                                            <p className="text-base">{blog.date}</p>
                                        </div>
                                    </div>
                                    <button className="bg-[#C1032F] text-white text-xs px-5 py-2 rounded-[30px] transition-all ease-in-out hover:bg-transparent border border-[#C1032F] hover:text-[#C1032F]">
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Blog;
