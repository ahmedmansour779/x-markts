import React from "react";
import FilterOffcanvas from "../FilterOffcanvas/FilterOffcanvas";
import SectionTitle from "../SectionTitle/SectionTitle";
import product1 from "@images/products/product1.jpg";
import product2 from "@images/products/product2.jpg";
import product3 from "@images/products/product3.jpg";
import product4 from "@images/products/product4.jpg";
import Image from "next/image";
import Link from "next/link";
import QuickView from "../QuickView/QuickView";
import ProductCard from "../ProductCard/ProductCard";
import ProductPagination from "../ProductPagination/ProductPagination";

export default function GetProducts() {
	return (
		<>


<section className="flat-spacing-2 pb-1">
				<div className="container">
					<SectionTitle text="Our All Products" />
					<div className="tf-shop-control grid-2 align-items-center justify-content-between ">
						<div className="tf-control-filter">
							<Link
								href="#filterShop"
								data-bs-toggle="offcanvas"
								aria-controls="offcanvasLeft"
								className="tf-btn-filter"
							>
								<span className="icon icon-filter" />
								<span className="text">Filter</span>
							</Link>
						</div>

						<div className="tf-control-sorting d-flex justify-content-end">
							<div className="tf-dropdown-sort" data-bs-toggle="dropdown">
								<div className="btn-select">
									<span className="text-sort-value">Default</span>
									<span className="icon icon-arrow-down" />
								</div>
								<div className="dropdown-menu">
									<div className="select-item active">
										<span className="text-value-item">Default</span>
									</div>
									<div className="select-item ">
										<span className="text-value-item">Alphabetically, A-Z</span>
									</div>
									<div className="select-item ">
										<span className="text-value-item">Alphabetically, Z-A</span>
									</div>
									<div className="select-item ">
										<span className="text-value-item">Price, low to high</span>
									</div>
									<div className="select-item ">
										<span className="text-value-item">Price, high to low</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				    <ProductCard/>
				    <ProductCard/>
				    <ProductCard/>
					<ProductPagination/>
				</div>
			</section>
			<FilterOffcanvas /> 
			<QuickView/>
		</>
	);
}
