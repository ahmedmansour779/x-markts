import Link from "next/link";
import React from "react";

export default function FilterOffcanvas() {
	return (
		<>
			<div
				className="offcanvas offcanvas-start canvas-filter "
				id="filterShop"
				aria-modal="true"
				role="dialog"
			>
				<div className="canvas-wrapper">
					<header className="canvas-header">
						<div className="filter-icon">
							<span className="icon icon-filter" />
							<span>Filter</span>
						</div>
						<span
							className="icon-close icon-close-popup"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</header>
					<div className="canvas-body">
						<div className="widget-facet wd-categories">
							<div
								className="facet-title"
								data-bs-target="#categories"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="categories"
							>
								<span>Product categories</span>
								<span className="icon icon-arrow-up" />
							</div>
							<div id="categories" className="collapse show">
								<ul className="list-categoris current-scrollbar mb_36">
									<li className="cate-item">
										<Link href="/all-products">
											<span>Baby Products</span>
										</Link>
									</li>
									<li className="cate-item">
										<Link href="/shop-men">
											<span>Beverages</span>
										</Link>
									</li>
									<li className="cate-item">
										<Link href="/shop-women">
											<span>Household Items</span>
										</Link>
									</li>
									<li className="cate-item">
										<Link href="/all-products">
											<span>Health and Wellness</span>
										</Link>
									</li>
									<li className="cate-item">
										<Link href="/all-products">
											<span>Frozen Foods</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<form
							action="#"
							id="facet-filter-form"
							className="facet-filter-form"
						>
							<div className="widget-facet">
								<div
									className="facet-title"
									data-bs-target="#availability"
									data-bs-toggle="collapse"
									aria-expanded="true"
									aria-controls="availability"
								>
									<span>Availability</span>
									<span className="icon icon-arrow-up" />
								</div>
								<div id="availability" className="collapse show">
									<ul className="tf-filter-group current-scrollbar mb_36">
										<li className="list-item d-flex gap-12 align-items-center">
											<input className="tf-check" readOnly type="radio" />
											<label className="label">
												<span>Available</span>&nbsp;<span>(9)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input className="tf-check" readOnly type="radio" />
											<label className="label">
												<span>Out of Stock</span>&nbsp;<span>(3)</span>
											</label>
										</li>
									</ul>
								</div>
							</div>
							<div className="widget-facet wrap-price">
								<div
									className="facet-title"
									data-bs-target="#price"
									data-bs-toggle="collapse"
									aria-expanded="true"
									aria-controls="price"
								>
									<span>Price</span>
									<span className="icon icon-arrow-up" />
								</div>
								<div id="price" className="collapse show">
									<div className="widget-price filter-price">
										
										<div className="box-title-price">
											<span className="title-price">Price :</span>
											<div className="caption-price">
												<div>
													<span>$</span>
													<span className="min-price">10</span>
												</div>
												<span>-</span>
												<div>
													<span>$</span>
													<span className="max-price">20</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="widget-facet">
								<div
									className="facet-title"
									data-bs-target="#brand"
									data-bs-toggle="collapse"
									aria-expanded="true"
									aria-controls="brand"
								>
									<span>Brand</span>
									<span className="icon icon-arrow-up" />
								</div>
								<div id="brand" className="collapse show">
									<ul className="tf-filter-group current-scrollbar mb_36">
										<li className="list-item d-flex gap-12 align-items-center">
											<input className="tf-check" readOnly type="radio" />
											<label className="label">
												<span>brand</span>&nbsp;<span>(9)</span>
											</label>
										</li>
										<li className="list-item d-flex gap-12 align-items-center">
											<input className="tf-check" readOnly type="radio" />
											<label className="label">
												<span>brand</span>&nbsp;<span>(3)</span>
											</label>
										</li>
									</ul>
								</div>
							</div>
					
				
						</form>
						<div className="mt-5" />
						<span className="tf-btn style-2 btn-fill rounded animate-hover-btn">
							Clear Filter
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
