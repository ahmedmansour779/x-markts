import React from "react";
import ProductDetails from "../_Components/ProductDetails/ProductDetails";
import ProductCard from "../_Components/ProductCard/ProductCard";
import ProductDetailsTabs from "../_Components/ProductDetailsTabs/ProductDetailsTabs";
import SectionTitle from "../_Components/SectionTitle/SectionTitle";

export default function page() {
	return (
		<>
			<ProductDetails />
			<ProductDetailsTabs />

			<section className="py-4">
				<div className="container">
					<SectionTitle text="Related product" />
					<ProductCard />
				</div>
			</section>

			<section className="py-4">
				<div className="container">
					<SectionTitle text="Recently Viewed" />
					<ProductCard />
				</div>
			</section>
			
		</>
	);
}
