import Image from "next/image";
import CallToAction_1 from "./_Components/CallToAction_1/CallToAction_1";
import Marquee from "./_Components/Marquee/Marquee";
import Hero from "./_Components/Hero/Hero";
import Features from "./_Components/Features/Features";
import DiscountSlider from "./_Components/DiscountSlider/DiscountSlider";
import BestDealsSection from "./_Components/BestDealsSection/BestDealsSection";
import GetProducts from "./_Components/GetProducts/GetProducts";
import SubscribeSection from "./_Components/SubscribeSection/SubscribeSection";
import CategoriesSection from "./_Components/CategoriesSection/CategoriesSection";
import SectionTitle from "./_Components/SectionTitle/SectionTitle";
import ProductCard from "./_Components/ProductCard/ProductCard";

export default function Home() {
	return (
		<>
			<Hero />
			<CategoriesSection />
			<CallToAction_1 />
			<section className="flat-spacing-25">
				<div className="container">
					<SectionTitle text="Popular products" />
					<ProductCard />
				</div>
			</section>
			<Marquee />
			<DiscountSlider />
			<BestDealsSection />
			<SubscribeSection />
			<Features />
		</>
	);
}
