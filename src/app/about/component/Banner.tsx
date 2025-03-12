import React from 'react'

const Banner = () => {
    return (
        <div className='ps-[70px]' style={{
            backgroundImage: `url('/aboutbanner.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "436px",
            width: "100%",
        }}>
            <div className='pt-[95px]'>
                <h1 className='text-[50px]  font-semibold mb-1.5'>ABOUT US </h1>
                <p className='text-xl font-medium'>Your trusted partner in global trade and logistics <br /> solutions since 2005</p>
                <button className='py-[22px] px-10 bg-[#C1032F] mt-6 text-base font-semibold hover:bg-transparent text-white hover:text-[#C1032F] border border-[#C1032F] transition-all ease-in-out duration-500'>Discover more</button>

            </div>

        </div>
    )
}

export default Banner