import React from "react";
import bg from "@images/best deal discount.png";
import Image from "next/image";
import Link from 'next/link';

export default function BestDealsSection() {
	return (
		<section className="flat-spacing-8 ">
			<div className="container">
				<div className="tf-banner-collection">
					<Image
						data-src={bg}
						alt="img-banner"
						loading="lazy"
						width={1400}
						height={532}



						style={{ color: "transparent" }}
						src={bg}
					/>
					<div className="box-content">
						<div
							className="container wow fadeInUp"
							data-wow-delay="0s"
							style={{ visibility: "visible", animationDelay: "0s" }}
						>
							<h2 className="heading fw-6 text_white">Best Deals Discounts</h2>
							<div className="sub fw-7 text_white mt-4">
								SALE UP TO 30% OFF TODAY
							</div>
							<Link
								className=" tf-btn btn-color-1 style-3 border-0 fw-6 btn-light-icon animate-hover-btn mt-5"
								href="/all-products"
							>
								<span>Shop Now</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
