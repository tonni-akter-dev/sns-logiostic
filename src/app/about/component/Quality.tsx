import React from 'react'
import quality1 from '../../../../public/quality1.png'
import quality2 from '../../../../public/quality2.png'
import quality3 from '../../../../public/quality3.png'
import Image from 'next/image'


const Quality = () => {
    return (
        <div className='py-[60px] px-[60px] mb-[100px]' style={{ boxShadow: '0px 0px 23.1px 0px #30303012' }}>
            <h1 className='text-4xl font-bold  text-center mb-2'>
                Our Commitment to  <span className='text-[#C1032F]'>Quality</span>
            </h1>
            <p className='text-base  mb-[70px] text-[#303030] text-center'>We maintain the highest standards of quality control and compliance with international <br />  regulations across all our product categories.</p>
            <div className='flex justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <Image className='size-[100px] mb-6' src={quality1} alt="" />
                    <h3 className='text-2xl font-medium'>Certified Quality</h3>
                    <p className='mt-2 text-base'>ISO 9001:2015 certified operations</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image className='size-[100px] mb-6' src={quality2} alt="" />
                    <h3 className='text-2xl font-medium'>Global Reach</h3>
                    <p className='mt-2 text-base'>Serving clients in 50+ countries</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image className='size-[100px] mb-6' src={quality3} alt="" />
                    <h3 className='text-2xl font-medium'>Expert Team</h3>
                    <p className='mt-2 text-base'>Experienced professionals</p>
                </div>
            </div>
        </div>
    )
}

export default Quality