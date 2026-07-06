import Hero from "../components/Hero";
import Features from "../components/Features";
import FloatingSampul from "../components/FloatingSampul";
import Brands from "../components/Brands";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Hero />
        <Features />
      <Brands />
      <Products />
      <FloatingSampul />
      </div>
      <WhyChooseUs />
      <Partners />
    </>
  );
}
