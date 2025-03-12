import React from 'react'

const Subscribe = () => {
    return (
        <div className="mb-20 lg:px-0 px-4">
            <h2 className="lg:text-4xl text-3xl  font-bold mb-10  pt-20 border-t text-center border-[#303030]/20">Subscribe for More Updates</h2>
            <div className="flex lg:flex-row flex-col gap-4 justify-center items-center">
                <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="max-w-[800px] w-full border h-[64px] border-[#303030]/50  py-[22px] px-8 focus:outline-none focus:ring-1 focus:ring-[#C1032F]"
                />
                <button className="bg-[#C1032F] text-white h-[64px] text-base py-5 px-12 font-semibold hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-[#C1032F] border border-[#C1032F] hover:text-[#C1032F] transition-all ease-in-out duration-500">
                    SUBSCRIBE
                </button>
            </div>
        </div>
    )
}

export default Subscribe