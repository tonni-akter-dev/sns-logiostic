import React from 'react'

const SubscribeForUpdates = () => {
    return (
        <div className='pb-[100px] border-b border-[#303030]/20 mb-[100px]'>
            <div className='flex justify-center items-center ' style={{
                backgroundImage: `url('/contactbg.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "538px",
                width: "100%",
            }}>
                <div className="lg:mb-20 mb-8 ">
                    <h2 className="lg:text-4xl text-3xl  font-bold mb-10  border-t text-center border-[#303030]/20">Subscribe for More Updates</h2>
                    <div className="flex gap-4 justify-center items-center w-full">
                        <input
                            type="email"
                            placeholder="Enter your email address..."
                            className="w-[800px] border h-[64px] bg-white/50 border-[#303030]/50  py-[22px] px-8 focus:outline-none focus:ring-1 focus:ring-[#C1032F]"
                        />
                        <button className="bg-[#C1032F] text-white h-[64px] text-base py-5 px-12 font-semibold hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-[#C1032F] border border-[#C1032F] hover:text-[#C1032F] transition-all ease-in-out duration-500">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeForUpdates