import Category from "./components/Category";
import Deal from "./components/Deal";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <Category />
      <Deal />
    </>
  );
}
