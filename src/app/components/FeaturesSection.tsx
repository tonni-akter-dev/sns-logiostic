'use client'
import worldwide from '../../../public/worldwide.png'
import car from '../../../public/car.png'
import lock from '../../../public/lock.png'
import Image from "next/image";

const FeaturesSection = () => {
    return (
        <div className="px-[60px] py-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-0 gap-8 text-center md:text-left">

                {/* Worldwide Shipping */}
                <div className="group flex text-[#303030] lg:border-r  border-[#303030]/25 gap-8 items-center md:items-start lg:pe-[75px]">
                    <Image className="size-8 transition-transform duration-700 group-hover:rotate-360" src={worldwide} alt="" />
                    <div>
                        <h3 className="text-2xl font-bold mb-1.5">Worldwide Shipping</h3>
                        <p className="text-base opacity-[75%]">Doesn’t matter wherever you are, you will always get your order.</p>
                    </div>
                </div>

                {/* Fast Delivery */}
                <div className="group flex text-[#303030] lg:border-r  border-[#303030]/25 gap-8 items-center md:items-start lg:px-[75px]">
                    <Image className="w-[56px] h-[28px] transition-transform duration-700 group-hover:rotate-360" src={car} alt="" />
                    <div>
                        <h3 className="text-2xl font-bold mb-1.5">Fast Delivery</h3>
                        <p className="text-base opacity-[75%]">Get your orders delivered quickly and efficiently with our fast delivery service</p>
                    </div>
                </div>


                {/* Secure Transaction */}
                <div className="group flex text-[#303030]  gap-8 items-center md:items-start lg:ps-[75px]">
                    <Image className="w-[22px] h-[30px]  transition-transform duration-700 group-hover:rotate-360" src={lock} alt="" />
                    <div>
                        <h3 className="text-2xl font-bold mb-1.5">Secure Transaction    </h3>
                        <p className="text-base opacity-[75%]">We are a verified marketplace
                        since 2018. Safety guarantee.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FeaturesSection;
