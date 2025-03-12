import Category from "./components/Category";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div className="text-primary">
        <Hero />
        <FeaturesSection />
        <Category/>
      </div>
    </>
  );
}
