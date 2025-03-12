import React from 'react'
import cat1 from '../../../../public/cat1.png'
import cat2 from '../../../../public/cat2.png'
import cat3 from '../../../../public/cat3.png'
import cat4 from '../../../../public/cat4.png'
import Image from 'next/image'

const category = [
    { id: 1, name: 'Readymade Garments', desc: "Premium quality apparel and fashion items", image: cat1 },
    { id: 2, name: 'Ship Spare Parts', desc: "Essential marine equipment and components", image: cat2 },
    { id: 3, name: 'Leather items ', desc: "Fine leather goods and accessories", image: cat3 },
    { id: 4, name: 'Jute items', desc: "Sustainable jute materials and products", image: cat4 },
];

const ProductCategory = () => {
    return (
        <div className='mb-[100px]'>
            <div className='px-[60px]'>
                <h1 className='text-[40px] font-bold mb-[70px] text-center'>
                    Our Product  <span className='text-[#C1032F]'>Categories</span>
                </h1>
                <div className={`flex gap-6 justify-center mx-auto
                        ${category.length % 4 !== 0 ? "lg:grid-cols-3" : ""} `}>
                    {category.slice(0, 4).map((cat) => (
                        <div key={cat.id} className='flex flex-col justify-center items-center rounded-lg ' style={{ boxShadow: ' 0px 0px 0px 0.6px #00000040' }}>
                            <Image className='w-full h-[214px]' src={cat.image} alt="" />
                            <div className='px-8 pt-[18px] pb-[22px]'>
                                <h2 className='text-sm font-semibold text-center'>{cat.name}</h2>
                                <p className='text-center text-sm'>{cat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCategory