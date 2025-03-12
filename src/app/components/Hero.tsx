// 'use client'
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { EffectFade, Pagination } from 'swiper/modules';
// import Image from 'next/image';

// import hero1 from '../../../public/hero1.png'
// import hero2 from '../../../public/hero2.png'
// import hero3 from '../../../public/hero3.png'
// import hero4 from '../../../public/hero4.png'

// const Hero = () => {
//   return (
//     <div>
//       <Swiper
//         spaceBetween={30}
//         effect={'fade'}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div >

//           </div>
//           <Image className='w-full h-[568px] object-cover' src={hero1} alt='' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image className='w-full h-[568px] object-cover' src={hero2} alt='' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image className='w-full h-[568px] object-cover' src={hero3} alt='' />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image className='w-full h-[568px] object-cover' src={hero4} alt='' />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }

// export default Hero
'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

import hero1 from '../../../public/hero1.png'
import hero2 from '../../../public/hero2.png'
import hero3 from '../../../public/hero3.png'
import hero4 from '../../../public/hero4.png'

const slides = [
  { image: hero1, title: 'THE PERFECT PLACE WHERE <br/> THE SNS SHOPS' },
  { image: hero2, title: 'Limited Offer <br/> Up to 50% SNS SHOPS' },
  { image: hero3, title: 'Best Offer - Up to 50% SNS <br/> SHOPS' },
  { image: hero4, title: 'The perfect place where SNS <br/> shops meet convenience' }
];
const Hero = () => {
  return (
    <div className="relative w-full h-[568px]">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[568px] relative flex items-center justify-center text-white">
              <Image
                src={slide.image}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                priority={index === 0} // Ensures the first image loads properly
              />
              <div className="absolute inset-0 "></div>
              <div className="relative z-10 text-center">
                <p className='text-[32px] font-semibold'>Sns logiostic</p>
                <h1 className="text-[70px] font-medium leading-[80px] my-[14px]" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                <p className="text-2xl     mt-2">Discover the best Product apparel, accessories, and equipment here.</p>
                <button className='py-[22px] px-10 bg-[#C1032F] mt-6 text-base font-semibold hover:bg-transparent hover:text-[#C1032F] border border-[#C1032F] transition-all ease-in-out duration-500'>SHOP NOW</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero;
