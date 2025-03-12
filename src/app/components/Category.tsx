import React from 'react'
import cat1 from '../../../public/cat1.png'
import cat2 from '../../../public/cat2.png'
import cat3 from '../../../public/cat3.png'
import cat4 from '../../../public/cat4.png'
import cat5 from '../../../public/cat5.png'
import cat6 from '../../../public/cat6.png'
import cat7 from '../../../public/cat7.png'
import Image from 'next/image'

const category = [
    { id: 1, name: 'Readymade garments', image: cat1 },
    { id: 2, name: 'Ship Spare Parts', image: cat2 },
    { id: 3, name: 'Leather items ', image: cat3 },
    { id: 4, name: 'Jute items', image: cat4 },
    { id: 5, name: 'Hair items', image: cat5 },
    { id: 6, name: 'Sea food', image: cat6 },
    { id: 7, name: 'Fish (desi)', image: cat7 },
];

const Category = () => {
    return (
        <div className='lg:px-[60px] px-4 '>
            <h1 className='lg:text-[40px] text-3xl font-bold lg:mb-20 mb-8 text-center'>
                Our Best <span className='text-[#C1032F]'>Category</span>
            </h1>

            <div className={`flex lg:flex-row flex-col gap-6 justify-center mx-auto
 
                ${category.length % 4 !== 0 ? "lg:grid-cols-3" : ""} `}
            >
                {category.slice(0, 4).map((cat) => (
                    <div key={cat.id} className='flex flex-col justify-center items-center lg:mb-[70px] mb-12'>
                        <Image src={cat.image} alt="" />
                        <h2 className='text-[22px] font-semibold mb-4 mt-6 text-center'>{cat.name}</h2>
                        <button className='p-[14px] text-white bg-[#C1032F] mt-6 text-base font-semibold hover:bg-transparent hover:text-[#C1032F] border border-[#C1032F] transition-all ease-in-out duration-500'>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
            <div className={`flex  lg:flex-row flex-col gap-6 justify-center mx-auto
                ${category.length % 4 !== 0 ? "lg:grid-cols-3" : ""} `}>
                {category.slice(4, 7).map((cat) => (
                    <div key={cat.id} className='flex flex-col justify-center items-center lg:mb-[70px] mb-12'>
                        <Image src={cat.image} alt="" />
                        <h2 className='text-[22px] font-semibold mb-4 mt-6 text-center'>{cat.name}</h2>
                        <button className='p-[14px] text-white bg-[#C1032F] mt-6 text-base font-semibold hover:bg-transparent hover:text-[#C1032F] border border-[#C1032F] transition-all ease-in-out duration-500'>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;
