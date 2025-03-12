import React from 'react'

const ContactBanner = () => {
    return (
        <div className='ps-[70px]' style={{
            backgroundImage: `url('/contactBanner.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "436px",
            width: "100%",
        }}>
            <div className='pt-[95px]'>
                <h1 className='text-[50px]  font-semibold mb-1.5'>CONTACT US  </h1>
                <p className='text-xl font-medium'>Have questions about our products or services? {`We're`} <br /> here to help.</p>
                <button className='py-[22px] px-10 bg-[#C1032F] mt-6 text-base font-semibold hover:bg-transparent text-white hover:text-[#C1032F] border border-[#C1032F] transition-all ease-in-out duration-500'>Learn more</button>
            </div>
        </div>
    )
}

export default ContactBanner