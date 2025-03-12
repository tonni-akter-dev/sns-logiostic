import React from 'react'

const Story = () => {
    return (
        <div className='my-[100px] flex justify-center items-center flex-col ' style={{
            backgroundImage: `url('/banner2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "516px", // Adjust height as needed
            width: "100%",
            borderRadius:"8px"
        }}>
            <div className='max-w-[1042px] w-full mx-auto text-justify '>
                <p className='leading-[150%] text-white'><span className='text-4xl font-medium'>Sufian & Safina Logistics</span>
                    <span className='font-normal'>has been at the forefront of international trade for over 18 years, specializing in the export and logistics of premium quality products across multiple industries. Our commitment to excellence and customer satisfaction has made us a trusted name in global trade.</span></p>
            </div>

        </div>
    )
}

export default Story