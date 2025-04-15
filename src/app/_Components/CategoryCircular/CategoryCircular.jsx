import React from "react";
import Link from "next/link";
import catg1 from"@images/category/catg1.jpg"
import catg2 from"@images/category/catg2.jpg"
import catg3 from"@images/category/catg3.jpg"
import catg4 from"@images/category/catg4.jpg"
import catg5 from"@images/category/catg5.jpg"
import Image from "next/image";

export default function CategoryCircular() {
	return (
		<>
			<section className="flat-spacing-20">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="tf-categories-wrap">
								<div className="tf-categories-container">
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
												alt="collection-img"
												loading="lazy"
												width={160}
												height={160}
												src={catg1}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Baby Products
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
											
												alt="collection-img"
												loading="lazy"
												width={160}
												height={160}
												src={catg2}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Beverages
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
										
												alt="collection-img"
												loading="lazy"
												width={160}
												height={162}
												src={catg3}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
											Household Items
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
												alt="collection-img"
												loading="lazy"
												width={160}
												height={162}
												src={catg4}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Health and Wellness
											</Link>
										</div>
									</div>
									<div className="collection-item-circle hover-img position-relative">
										<Link
											className="collection-image img-style"
											href="/shop-collection-sub"
										>
											<Image
												alt="collection-img"
												loading="lazy"
												width={160}
												height={160}
												src={catg5}
												style={{ color: "transparent" }}
											/>
										</Link>
										<div
											className="has-saleoff-wrap "
											style={{ position: "absolute", top: 0 }}
										>
											<div className="sale-off fw-5">30% off</div>
										</div>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/shop-collection-sub"
											>
												Frozen Foods
											</Link>
										</div>
									</div>
								</div>
								<div className="tf-shopall-wrap">
									<div className="collection-item-circle tf-shopall">
										<Link
											className="collection-image img-style tf-shopall-icon"
											href="/shop-collection-sub"
										>
											<i className="icon icon-arrow1-top-left" />
										</Link>
										<div className="collection-content text-center">
											<Link
												className="link title fw-6"
												href="/all-products"
											>
												Shop all
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
