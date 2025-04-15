import Link from "next/link";
import React from "react";
import Image from "next/image";
import call from "@images/call1.jpg";
import product2 from "@images/products/product2.jpg";
import product3 from "@images/products/product3.jpg";
export default function CallToAction_1() {
	return (
		<>
			<section className="flat-spacing-24">
				<div className="container">
					<div className="tf-grid-layout md-col-2 tf-img-with-text img-text-3">
						<div
							className="tf-image wow fadeInUp"
							data-wow-delay="0s"
							style={{ visibility: "visible", animationDelay: "0s" }}
						>
							<div className="grid-img-group">
								<div className="box-img item-1 hover-img tf-image-wrap">
									<div className="img-style">
										<Image
											alt="img-slider"
											loading="lazy"
											width={272}
											height={325}
											style={{ color: "transparent" }}
											src={product2}
										/>
									</div>
								</div>
								<div className="box-img item-2 hover-img tf-image-wrap">
									<div className="img-style">
										<Image
										
											alt="img-slider"
											loading="lazy"
											width={400}
											height={539}
											style={{ color: "transparent" }}
											src={call}
										/>
									</div>
								</div>
								<div className="box-img item-3 hover-img tf-image-wrap">
									<div className="img-style">
										<Image
											alt="img-slider"
											loading="lazy"
											width={217}
											height={219}
											style={{ color: "transparent" }}
											src={product3}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							className="tf-content-wrap wow fadeInUp"
							data-wow-delay="0s"
							style={{ visibility: "visible", animationDelay: "0s" }}
						>
							<h3 className="heading fade-item fade-item-1">
								Shop everything you need from the comfort of your home!
							</h3>
							<p className="desc fade-item fade-item-2">
								With our online supermarket, we offer you the best quality products at great prices with fast delivery to your doorstep
							</p>
							<Link className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3" href="/all-products"><span>Shop Now </span><i className="icon icon-arrow-right"></i></Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
