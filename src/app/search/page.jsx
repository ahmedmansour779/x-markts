import React from "react";
import Banner from "../_Components/Banner/Banner";
import SearchBar from "../_Components/SearchBar/SearchBar";
import ProductCard from "../_Components/ProductCard/ProductCard";
import bg from "../../assets/images/order.jpg";

export default function Page() {
	return (
		<>
			<Banner text={"Search"} bg={bg.src} />
			<SearchBar />
			<section>
				<div className="container">
					<ProductCard />
				</div>
			</section>
		</>
	);
}
