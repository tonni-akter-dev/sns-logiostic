import React from 'react'
import client1 from '../../../public/client1.png'
import client2 from '../../../public/client2.png'
import client3 from '../../../public/client3.png'
import client4 from '../../../public/client4.png'
import client5 from '../../../public/client5.png'
import client6 from '../../../public/client6.png'
import client7 from '../../../public/client7.png'
import client8 from '../../../public/client8.png'

import Marquee from "react-fast-marquee";
import Image from 'next/image'


const CorporateClient = () => {
    return (
        <div className='px-[60px] mb-[100px]'>
            <h2 className="text-4xl font-bold text-center  w-full mb-[80px]">
                Our Corporate  <span className="text-[#C1032F]">Client</span>
            </h2>
            <Marquee loop={0}>
                <div className='flex items-center gap-[70px] mb-[60px]'>
                    <Image className='h-full' src={client1} alt="" />
                    <Image className='h-full' src={client2} alt="" />
                    <Image className='h-full' src={client3} alt="" />
                    <Image className='h-full' src={client4} alt="" />
                    <Image className='h-full' src={client5} alt="" />
                </div>
            </Marquee>
            <div className='max-w-[550px] mx-auto'>
                <Marquee loop={0} direction='right'>
                    <div className='flex items-center gap-[70px]'>
                        <Image className='h-full' src={client6} alt="" />
                        <Image className='h-full' src={client7} alt="" />
                        <Image className='h-full mr-[70px]' src={client8} alt="" />
                    </div>
                </Marquee>
            </div>

        </div>
    )
}

export default CorporateClient