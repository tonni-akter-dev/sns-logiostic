import Image from "next/image";
import icon1 from "/public/icon1.png"; // Replace with actual icon paths
import icon2 from "/public/icon2.png";
import icon3 from "/public/icon3.png";
import icon4 from "/public/icon4.png";
import icon5 from "/public/icon5.png";

const features = [
    {
        id: 1,
        icon: icon1,
        title: "Initial Consultation",
        description:
            "Our team offers expert consultation for your marine-related needs, ensuring you receive the best advice tailored to your requirements.",
    },
    {
        id: 2,
        icon: icon2,
        title: "Early Delivery",
        description:
            "We prioritize fast and efficient processing, ensuring that your marine products and documents are delivered promptly, saving you time.",
    },
    {
        id: 3,
        icon: icon3,
        title: "Product Guaranty",
        description:
            "We stand behind the quality of our marine products. All items come with a reliable warranty to ensure your complete satisfaction.",
    },
    {
        id: 4,
        icon: icon4,
        title: "24/7 Service",
        description:
            "Our dedicated team is available around the clock, providing support and assistance whenever you need it, ensuring your peace of mind.",
    },
    {
        id: 5,
        icon: icon5,
        title: "Alternative Products",
        description:
            "If your desired product is unavailable, we offer a range of carefully selected alternatives that meet your needs without compromising on quality.",
    },
];

export default function WhyChoosseUs() {
    return (
        <div className="px-[60px] mb-[100px]">
            <h2 className="text-4xl font-bold text-center  w-full mb-[80px]">
                Why Choose Us   <span className="text-[#C1032F]">Sns logiostic</span>
            </h2>
            <div className="flex gap-x-[86px] gap-y-[70px]">
                {features.slice(0,3).map((feature) => (
                    <div key={feature.id} className="flex gap-5  items-center">
                        <Image src={feature.icon} alt={feature.title} className=" mb-4 size-20 object-cover" />
                        <div>
                            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-[150%]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex max-w-[813px] mx-auto mt-[70px] items-center gap-x-[86px] gap-y-[70px]">
                {features.slice(3,5).map((feature) => (
                    <div key={feature.id} className="flex gap-5  items-center">
                        <Image src={feature.icon} alt={feature.title} className=" mb-4 size-20 object-cover" />
                        <div>
                            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-[150%]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
