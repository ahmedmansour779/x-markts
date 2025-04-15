import React from "react";
import ProductPagination from "../_Components/ProductPagination/ProductPagination";
import ProductCard from "../_Components/ProductCard/ProductCard";
import Banner from "../_Components/Banner/Banner";
import YouMightLike from "../_Components/YouMightLike/YouMightLike";
import bg from "@images/whislist.jpg";
import SectionTitle from "../_Components/SectionTitle/SectionTitle";

export default function page() {
	return (
		<>
			<Banner text={"Wish List"} bg={bg.src} />
			<section className="flat-spacing-25">
				<div className="container">
				<SectionTitle text="Last Likes" />
				<ProductCard />
				<ProductCard />
				</div>
			</section>
			<YouMightLike />
			<section className="flat-spacing-25">
			<div className="container">
				<SectionTitle text="Last Likes" />
				<ProductCard />
				<ProductCard />
			</div>
			</section>
			<ProductPagination />
		</>
	);
}
