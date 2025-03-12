import loca1 from '../../../public/loca1.png'
import phone1 from '../../../public/phone1.png'
import email1 from '../../../public/loca1.png'
import time from '../../../public/time.png'
import Image from "next/image";

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-[107px]   lg:px-[60px] px-4 mb-[100px]">
            {/* Left Section - Contact Info */}
            <div className="flex-shrink-0">
                <h2 className="lg:text-4xl text-3xl font-semibold text-[#303030] mb-1">Contact Us</h2>
                <p className="text-[#303030] mb-4">
                    Get in touch with our team for inquiries about our <br /> products and
                    services.
                </p>
                <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-6 mb-[34px]">
                        <Image className='size-6' src={loca1} alt="" />

                        <div>
                            <strong className='text-xl font-semibold mb-1 text-[#2E2E2E]'>Store Address:</strong>
                            <p className="text-[#727272] text-sm leading-[150%]">
                                44/A1, 1st Floor, Faisal House,
                                South <br /> Khulshi, Chittagong, Bangladesh, 4202.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 mb-[34px]">
                        <Image className='size-6' src={phone1} alt="" />

                        <div>
                            <strong className='text-xl font-semibold mb-1 text-[#2E2E2E]'>Hotline</strong>
                            <p className="text-[#727272] text-sm leading-[150%]">
                                +880 132929 9667
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 mb-[34px]">
                        <Image className='size-6' src={email1} alt="" />

                        <div>
                            <strong className='text-xl font-semibold mb-1 text-[#2E2E2E]'>Email Us</strong>
                            <p className="text-[#727272] text-sm leading-[150%]">
                                chairman@ssmsbd.com
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 mb-[34px]">
                        <Image className='size-6' src={time} alt="" />

                        <div>
                            <strong className='text-xl font-semibold mb-1 text-[#2E2E2E]'>Service Time</strong>
                            <p className="text-[#727272] text-sm leading-[150%]">
                                24-hour (All day)
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            {/* Right Section - Contact Form */}
            <div style={{ boxShadow: '0px 0px 12.9px 0px #0000000F' }} className="w-full rounded-lg p-[50px] bg-[#303030] tex-lg  mt-8 md:mt-0 md:ml-8">
                <h2 className="text-xl font-medium text-white" >
                    We are always here to help you
                </h2>

                <form className="mt-8 space-y-4">
                    <div className="flex space-x-[30px]">
                        <input
                            type="text"
                            placeholder="Name*"
                            className="w-1/2 p-3 bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C1032F]"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number*"
                            className="w-1/2 p-3 bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C1032F]"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email*"
                        className="w-full p-3 bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C1032F]"
                    />

                    <textarea
                        placeholder="Message*"
                        className="w-full h-[94px] p-3 mb-8 bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C1032F]"
                    ></textarea>

                    <div className='flex lg:flex-row flex-col lg:gap-0 gap-8  justify-between '>
                        <div className="flex items-center space-x-4">
                            <input type="checkbox" className="h-4 w-4 bg-transparent border rounded" />
                            <p className="text-white  text-base ">I have read and agree to the terms</p>
                        </div>

                        <button
                            type="submit"
                            className=" py-4 lg:px-[138px] bg-[#C1032F] hover:bg-transparent hover:text-white border border-[#C1032F] text-white  transition-all ease-in-out duration-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
