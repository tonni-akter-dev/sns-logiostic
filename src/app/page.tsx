import Blog from "./components/Blog";
import Category from "./components/Category";
import CorporateClient from "./components/CorporateClient";
import Deal from "./components/Deal";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import WhyChoosseUs from "./components/WhyChoosseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <Category />
      <Deal />
      <CorporateClient />
      <WhyChoosseUs />
      <Blog />
      <Subscribe />
    </>
  );
}
