import React from 'react'

const Story = () => {
    return (
        <div className='my-[100px]'>
            <h1 className='lg:text-[40px] text-3xl font-bold lg:mb-[70px] mb-12 text-center'>
                <span className='text-[#C1032F]'>SNS</span> Story
            </h1>
            <div className=' flex justify-center items-center flex-col ' style={{
                backgroundImage: `url('/banner2.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "516px",
                width: "100%",
                borderRadius: "8px"
            }}>
                <div className='flex flex-col items-center lg:px-0 px-5'>
                    <p className='lg:max-w-[1042px] w-full mx-auto text-center mb-8 leading-[150%] text-white'><span className='lg:text-4xl text-3xl font-medium'>Sufian & Safina Logistics</span>
                        <span className='font-normal  '>has been at the forefront of international trade for over 18 years, specializing in the export and logistics of premium quality products across multiple industries. Our commitment to excellence and customer satisfaction has made us a trusted name in global trade.</span></p>
                    <button className='py-[22px] px-10 text-white bg-[#C1032F] mt-6 text-base font-semibold   border border-[#C1032F] transition-all ease-in-out duration-500'>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Story